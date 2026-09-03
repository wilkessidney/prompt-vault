#!/usr/bin/env node
/**
 * 提示词库构建脚本（零依赖）
 *
 * 读取 prompts/<分类>/<子分类>/<slug>.md，解析 frontmatter 与 Markdown，
 * 生成 data/prompts.json 供前端消费。
 *
 * 用法: npm run build
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TAXONOMY } from '../taxonomy.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'prompts');
const OUT = join(ROOT, 'data', 'prompts.json');

/* ------------------------------ Markdown 渲染 ------------------------------ */

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * 判断一个占位符是「填空型」还是「选项型」
 *   填空型 {{主题}} {{字段与类型}}        -> 用户自由输入
 *   选项型 {{趋势 / 对比 / 构成}}         -> 从若干选项里选一个
 *
 * 启发式（避免把 `CPU/内存/网络` 这类并列填空误判成选项）：
 *   1. 不含 /            -> 填空
 *   2. 有「标签：选项A/选项B」结构且 ≥3 项 -> 选项
 *   3. 无标签、无空格、≥3 项且每项 ≤4 字  -> 填空（并列枚举）
 *   4. 含「 / 」或 ≥3 项  -> 选项
 *   5. 其余              -> 填空
 */
function classifyVar(raw) {
  if (!raw.includes('/')) return { type: 'input', name: raw };

  const m = /^([^：:]{1,12})[：:]\s*([\s\S]+)$/.exec(raw);
  const label = m ? m[1].trim() : null;
  const rest = m ? m[2].trim() : raw;
  const parts = rest.split('/').map((s) => s.trim()).filter(Boolean);
  const spaced = / \/ |\//.test(raw) && raw.includes(' / ');
  const shortAll = parts.every((p) => [...p].length <= 4);

  let isChoice;
  if (parts.length < 2) isChoice = false;
  else if (label && parts.length >= 3) isChoice = true;
  else if (!label && !spaced && parts.length >= 3 && shortAll) isChoice = false;
  else isChoice = spaced || parts.length >= 3;

  if (!isChoice) return { type: 'input', name: raw };
  return { type: 'choice', name: raw, label, options: parts };
}

/** 把 {{占位}} 包成可高亮、可填充的 span（入参必须是已转义的 HTML 文本） */
function markVars(escaped) {
  return escaped.replace(/\{\{([^{}]+)\}\}/g, (m, v) => {
    const raw = v.trim();
    if (!raw) return m;
    const attr = escapeHtml(raw);
    const info = classifyVar(raw);
    if (info.type === 'choice') {
      const opts = info.options.map(escapeHtml);
      const tip = (info.label ? info.label + '：' : '') + info.options.join(' / ');
      return `<span class="pv-var pv-choice" data-var="${attr}" data-idx="0" ` +
        `data-options="${escapeHtml(info.options.join('\u0001'))}" ` +
        `data-label="${info.label ? escapeHtml(info.label) : ''}" ` +
        `title="点击切换：${escapeHtml(tip)}">${opts[0]}</span>`;
    }
    return `<span class="pv-var" data-var="${attr}">{{${attr}}}</span>`;
  });
}

function inline(text) {
  const codes = [];
  // 1) 行内代码先抽出来保护
  let s = escapeHtml(text).replace(/`([^`]+)`/g, (_, c) => {
    codes.push(c);
    return `\u0000C${codes.length - 1}\u0000`;
  });
  // 2) 变量占位符 {{xxx}}
  s = markVars(s);
  // 3) 强调
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  // 4) 链接
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  // 5) 还原行内代码
  s = s.replace(/\u0000C(\d+)\u0000/g, (_, i) => `<code>${codes[+i]}</code>`);
  return s;
}

function renderList(items) {
  const out = [];
  const stack = [];
  for (const it of items) {
    const ordered = /^\d+\./.test(it.text);
    while (stack.length && it.indent < stack[stack.length - 1].indent) {
      out.push(`</li></${stack.pop().ordered ? 'ol' : 'ul'}>`);
    }
    if (stack.length && it.indent === stack[stack.length - 1].indent) out.push('</li>');
    if (!stack.length || it.indent > stack[stack.length - 1].indent) {
      stack.push({ indent: it.indent, ordered });
      out.push(`<${ordered ? 'ol' : 'ul'}>`);
    }
    out.push(`<li>${inline(it.text.replace(/^(?:[-*]|\d+\.)\s+/, ''))}`);
  }
  while (stack.length) out.push(`</li></${stack.pop().ordered ? 'ol' : 'ul'}>`);
  return out.join('');
}

function renderTable(rows) {
  const split = (r) => r.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
  const head = split(rows[0]);
  const body = rows.slice(2).map(split);
  let h = '<div class="md-table"><table><thead><tr>';
  for (const c of head) h += `<th>${inline(c)}</th>`;
  h += '</tr></thead><tbody>';
  for (const r of body) {
    h += '<tr>';
    for (let i = 0; i < head.length; i++) h += `<td>${inline(r[i] ?? '')}</td>`;
    h += '</tr>';
  }
  return h + '</tbody></table></div>';
}

function markdown(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // 代码围栏
    if (/^\s*```/.test(line)) {
      const lang = line.trim().slice(3).trim();
      const showLang = /^[a-zA-Z0-9+#._-]+$/.test(lang) ? lang : '';
      const buf = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(
        `<pre class="md-code"${showLang ? ` data-lang="${escapeHtml(showLang)}"` : ''}><code>${markVars(
          escapeHtml(buf.join('\n'))
        )}</code></pre>`
      );
      continue;
    }

    // 分隔线
    if (/^\s*(---|\*\*\*|___)\s*$/.test(line) && !/^\s*\|/.test(line)) {
      out.push('<hr>');
      i++;
      continue;
    }

    // 标题
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const lv = h[1].length;
      out.push(`<h${lv}>${inline(h[2])}</h${lv}>`);
      i++;
      continue;
    }

    // 表格
    if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(lines[i++].trim());
      out.push(renderTable(rows));
      continue;
    }

    // 引用
    if (/^\s*>/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ''));
      out.push(`<blockquote>${inline(buf.join(' '))}</blockquote>`);
      continue;
    }

    // 列表
    if (/^\s*(?:[-*]|\d+\.)\s+/.test(line)) {
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(/^(\s*)(?:[-*]|\d+\.)\s+(.*)$/);
        if (!m) {
          // 列表项的续行（缩进的非列表行）
          if (items.length && /^\s{2,}\S/.test(lines[i]) && lines[i].trim()) {
            items[items.length - 1].text += ' ' + lines[i].trim();
            i++;
            continue;
          }
          break;
        }
        items.push({ indent: m[1].length, text: m[2] });
        i++;
      }
      out.push(renderList(items));
      continue;
    }

    // 空行
    if (!line.trim()) {
      i++;
      continue;
    }

    // 段落
    const buf = [];
    while (i < lines.length) {
      const l = lines[i];
      if (!l.trim()) break;
      if (buf.length && /^\s*(?:```|#{1,6}\s|>|\||(?:[-*]|\d+\.)\s)/.test(l)) break;
      buf.push(l);
      i++;
    }
    out.push(`<p>${inline(buf.join('\n')).replace(/\n/g, '<br>')}</p>`);
  }

  return out.join('\n');
}

/* ------------------------------ Frontmatter ------------------------------ */

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else if (val === 'true') val = true;
    else if (val === 'false') val = false;
    else val = val.replace(/^["']|["']$/g, '');
    data[key] = val;
  }
  return { data, body: raw.slice(m[0].length) };
}

/* -------------------------------- 主流程 -------------------------------- */

function walk(dir) {
  const res = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) res.push(...walk(p));
    else if (name.endsWith('.md')) res.push(p);
  }
  return res;
}

if (!existsSync(SRC)) {
  console.error('✗ 未找到 prompts/ 目录');
  process.exit(1);
}

const files = walk(SRC).sort();
const items = [];
const problems = [];

for (const file of files) {
  const raw = readFileSync(file, 'utf8');
  const { data, body } = parseFrontmatter(raw);
  const rel = relative(SRC, file);
  const parts = rel.split('/');

  if (parts.length !== 3) {
    problems.push(`${rel}: 路径应为 prompts/<分类>/<子分类>/<slug>.md`);
    continue;
  }
  const [cat, sub] = parts;
  const slug = parts[2].replace(/\.md$/, '');

  const catDef = TAXONOMY.find((c) => c.id === cat);
  if (!catDef) {
    problems.push(`${rel}: 未知分类 "${cat}"（请检查 taxonomy.js）`);
    continue;
  }
  if (!catDef.subs.some((s) => s.id === sub)) {
    problems.push(`${rel}: 未知子分类 "${cat}/${sub}"（请检查 taxonomy.js）`);
    continue;
  }

  const content = body.replace(/^\n+|\s+$/g, '');
  // 占位符分两类：inputs = 用户自由填写；choices = 从给定选项里选一个（带默认值）
  const phs = [...new Set([...content.matchAll(/\{\{([^{}]+)\}\}/g)].map((m) => m[1].trim()))];
  const inputs = [],
    choices = [];
  for (const p of phs) {
    const info = classifyVar(p);
    if (info.type === 'choice') choices.push({ name: p, label: info.label, options: info.options });
    else inputs.push(p);
  }
  // variables 保留全部占位名，供「变量 N 个」等展示使用
  const variables = phs;

  items.push({
    id: `${cat}/${sub}/${slug}`,
    slug,
    title: data.title || slug,
    summary: data.summary || '',
    category: cat,
    subcategory: sub,
    tags: Array.isArray(data.tags) ? data.tags : [],
    model: data.model || '通用',
    level: data.level || '通用',
    featured: data.featured === true,
    updated: data.updated || '',
    chars: content.length,
    variables,
    inputs,
    choices,
    content,
    html: markdown(content),
  });
}

// 分类树（只保留有内容的子分类）
const counts = new Map();
for (const it of items) {
  const k = `${it.category}/${it.subcategory}`;
  counts.set(k, (counts.get(k) || 0) + 1);
}

const taxonomy = TAXONOMY.map((c) => {
  const subs = c.subs
    .map((s) => ({ id: s.id, name: s.name, count: counts.get(`${c.id}/${s.id}`) || 0 }))
    .filter((s) => s.count > 0);
  return {
    id: c.id,
    name: c.name,
    icon: c.icon,
    color: c.color,
    desc: c.desc,
    count: subs.reduce((a, s) => a + s.count, 0),
    subs,
  };
}).filter((c) => c.count > 0);

items.sort((a, b) => (b.updated || '').localeCompare(a.updated || '') || a.title.localeCompare(b.title, 'zh'));

mkdirSync(dirname(OUT), { recursive: true });
const payload = {
      meta: {
        generated: new Date().toISOString(),
        count: items.length,
        categories: taxonomy.length,
        subcategories: taxonomy.reduce((a, c) => a + c.subs.length, 0),
      },
  taxonomy,
  items,
};

// 主产物：JSON
writeFileSync(OUT, JSON.stringify(payload), 'utf8');
// 附加产物：JS 全局变量，让本地直接双击 index.html 也能看（file:// 下 fetch 会被拦）
writeFileSync(
  join(dirname(OUT), 'prompts.js'),
  `/* 自动生成，请勿手改。由 scripts/build.mjs 产出。 */\nwindow.__PROMPTS__=${JSON.stringify(payload)};\n`,
  'utf8'
);

console.log(`✓ 构建完成：${items.length} 条提示词 → data/prompts.json`);
console.log(`  分类 ${taxonomy.length} 个 / 子分类 ${taxonomy.reduce((a, c) => a + c.subs.length, 0)} 个`);
for (const c of taxonomy) console.log(`  ${c.name.padEnd(8, '　')} ${String(c.count).padStart(3)}`);
if (problems.length) {
  console.warn(`\n⚠ ${problems.length} 个问题：`);
  for (const p of problems) console.warn(`  - ${p}`);
}
