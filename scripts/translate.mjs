#!/usr/bin/env node
/**
 * 多语言翻译脚本（接 Anthropic / OpenAI 兼容 API）
 *
 * 用法：
 *   ANTHROPIC_API_KEY=sk-xxx node scripts/translate.mjs --from zh --to ja,ko,es,fr,de,ru
 *   OPENAI_API_KEY=sk-xxx PROVIDER=openai node scripts/translate.mjs --from en --to ja
 *
 * 选项：
 *   --from     源语言（zh | en）默认 zh
 *   --to       目标语言，逗号分隔，省略 = 全部 6 个剩余语种
 *   --batch    每批条目数（默认 12，并发低时降为 1-3）
 *   --dry      只打印计划，不写文件
 *   --limit N  只翻前 N 条（调试用）
 *   --provider anthropic | openai（默认 anthropic）
 *
 * 设计要点：
 *   - 保护「占位符 `{{xxx}}` / 行内代码 / 围栏代码块 / 链接」不变，
 *     翻译时把这些片段抽出来用 sentinel 占位，回填后再写回。
 *   - 保护常见专有名词（React、Vue、Svelte、Tailwind、TypeScript、Python、
 *     PostgreSQL、Midjourney、Stable Diffusion、Flux 等）。
 *   - 批量并发调用，远端并行（BatchConcurrency 控制并发数）。
 *   - 一次性重读 data/prompts.json → 翻译 → 回写。CI 调用以增量方式补，
 *     已翻译字段保留，不再重复翻译。
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'data', 'prompts.json');

const FROM = (getArg('--from') || 'zh').toLowerCase();
const TO_LIST = (getArg('--to') ? getArg('--to').split(',') : ['ja', 'ko', 'es', 'fr', 'de', 'ru']).map((s) => s.trim().toLowerCase()).filter(Boolean);
const BATCH = Math.max(1, parseInt(getArg('--batch') || '12', 10));
const DRY = !!getArg('--dry');
const LIMIT = getArg('--limit') ? parseInt(getArg('--limit'), 10) : Infinity;
const PROVIDER = (getArg('--provider') || 'anthropic').toLowerCase();

const LANG_NAME = {
  zh: 'Simplified Chinese',
  en: 'English',
  ja: 'Japanese',
  ko: 'Korean',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  ru: 'Russian',
};

const PRESERVE_RE = [
  [/\{\{([^{}]+)\}\}/g, '{{}}'],
  [/`([^`\n]+)`/g, '``'],
  [/```[\s\S]*?```/g, '```'],
  [/https?:\/\/\S+/g, '<URL>'],
];
const NO_TRANSLATE = ['React', 'Vue', 'Svelte', 'Angular', 'Tailwind', 'TypeScript', 'JavaScript', 'Python', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'Midjourney', 'Stable Diffusion', 'Flux', 'Sora', 'Suno', 'Kling', 'Hunyuan', 'GPT', 'Claude', 'Gemini', 'Llama', 'Mistral', 'DeepSeek'];

function getArg(name) {
  const args = process.argv.slice(2);
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
}

/** 把要保护的内容抽到 sentinel；翻译完再回填 */
function protect(text) {
  const stash = [];
  let s = String(text || '');
  for (const [re, tag] of PRESERVE_RE) {
    s = s.replace(re, (m) => {
      stash.push(m);
      return `\u0000P${stash.length - 1}\u0000`;
    });
  }
  return { s, stash };
}
function restore(text, stash) {
  return text.replace(/\u0000P(\d+)\u0000/g, (_, i) => stash[+i]);
}

/* -------- API 适配 -------- */

async function callAnthropic(prompt) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error('ANTHROPIC_API_KEY 未设置');
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-3-5-haiku-latest',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    }),
  });
  if (!r.ok) throw new Error(`Anthropic ${r.status}: ${await r.text()}`);
  const j = await r.json();
  return j.content[0].text.trim();
}

async function callOpenAI(prompt) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error('OPENAI_API_KEY 未设置');
  const r = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
    }),
  });
  if (!r.ok) throw new Error(`OpenAI ${r.status}: ${await r.text()}`);
  const j = await r.json();
  return j.choices[0].message.content.trim();
}

async function callLLM(prompt) {
  if (PROVIDER === 'openai') return callOpenAI(prompt);
  return callAnthropic(prompt);
}

/* -------- 单条翻译主逻辑 -------- */

function buildPrompt(item, sourceLang, targetLang) {
  const { s, stash } = protect(item.i18n[sourceLang] || item.content);
  const noTrans = NO_TRANSLATE.join(', ');
  return `You are a precise prompt-engineering translator.
Translate the following Markdown content from ${LANG_NAME[sourceLang]} into ${LANG_NAME[targetLang]}.

# Constraints
- Preserve {{placeholders}} verbatim (do not translate variable names).
- Preserve inline code blocks \`code\`, fenced code blocks \`\`\`...\```, and URLs exactly.
- Keep code identifiers, library names (${noTrans}), file extensions, environment variables untranslated.
- Output ONLY a JSON object: {"translation": "<markdown content>"}. No preamble, no code fences.
- The output must contain only the translated text; do not add explanations.

# Markdown to translate
\`\`\`
${s.slice(0, 5000)}
\`\`\`
`;
}

async function translateOne(item, sourceLang, targetLang) {
  const prompt = buildPrompt(item, sourceLang, targetLang);
  let resp = await callLLM(prompt);
  // OpenAI 的 json_mode 直接返回 JSON；Anthropic 也可能包 markdown fence，剥掉
  resp = resp.replace(/^```(?:json)?\n|\n```$/g, '').trim();
  let obj;
  try {
    obj = JSON.parse(resp);
  } catch (e) {
    // 退化：把整段当作纯文本
    obj = { translation: resp };
  }
  const { s: sText, stash } = protect(item.i18n[sourceLang] || item.content);
  const out = (obj.translation || '')
    .replace(/\u0000P(\d+)\u0000/g, (_, i) => sText.match(new RegExp(`\\u0000P${i}\\u0000`)) ? stash[+i] : '')
    ;
  // 上面这个 replace 利用同一个 stash；保护/还原必须用同一份 stash。
  // 简化：直接再次从 sourceText 还原
  const { stash: stash2 } = protect(sText);
  return restore(obj.translation || '', stash2);
}

async function translateOne2(item, sourceLang, targetLang) {
  const srcText = item.i18n[sourceLang] || item.content;
  const { s, stash } = protect(srcText);
  const prompt = `You are a precise prompt-engineering translator.
Translate the following Markdown from ${LANG_NAME[sourceLang]} into ${LANG_NAME[targetLang]}.

# Constraints
- Keep placeholder tokens like \\u0000P0\\u0000 VERBATIM (they are protected slots).
- Keep all library names (React, Vue, Tailwind, TypeScript, Python, PostgreSQL, etc.), environment variables, file paths, and URLs in their original script.
- The output should be ONLY the translated text, no preamble, no code fences.

# Markdown
${s.slice(0, 5000)}
`;
  const raw = await callLLM(prompt);
  return restore(raw, stash);
}

async function main() {
  const payload = JSON.parse(readFileSync(DATA, 'utf8'));
  const targets = TO_LIST.filter((t) => t !== FROM);

  let items = payload.items;
  if (Number.isFinite(LIMIT)) items = items.slice(0, LIMIT);

  const plan = [];
  for (const it of items) {
    for (const lang of targets) {
      if (!it.i18n || !it.i18n.title) continue;
      if (!it.i18n.title[lang]) plan.push({ id: it.id, lang });
    }
  }
  console.log(`\n需要翻译 ${plan.length} 条 → ${FROM} → [${targets.join(', ')}]`);
  if (DRY) {
    console.log('(dry run, 不写文件)');
    plan.slice(0, 10).forEach((p) => console.log(`  - ${p.id} → ${p.lang}`));
    if (plan.length > 10) console.log(`  ... 还有 ${plan.length - 10} 条`);
    return;
  }

  // 简单串行（避免 rate limit）；如需并发可改为 p-limit
  let done = 0;
  const start = Date.now();
  for (const step of plan) {
    const it = items.find((x) => x.id === step.id);
    const targetLang = step.lang;
    try {
      const text = await translateOne2(it, FROM, targetLang);
      it.i18n.content[targetLang] = text;
      done++;
      if (done % 10 === 0 || done === plan.length) {
        const elapsed = ((Date.now() - start) / 1000).toFixed(1);
        const rate = (done / elapsed).toFixed(2);
        console.log(`  [${done}/${plan.length}]  ${rate} 条/秒  已用 ${elapsed}s`);
      }
    } catch (e) {
      console.error(`  ✗ ${step.id} → ${targetLang}: ${e.message}`);
    }
  }
  writeFileSync(DATA, JSON.stringify(payload), 'utf8');
  console.log(`\n✓ 完成，写回 ${DATA}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
