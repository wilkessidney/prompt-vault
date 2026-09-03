#!/usr/bin/env node
/**
 * 新增提示词脚手架
 *
 * 交互式：  npm run new
 * 参数式：  npm run new -- --cat coding --sub refactor --title "安全重构" [--slug safe-refactor]
 *
 * 行为：
 *   1. 校验 category / subcategory 是否存在于 taxonomy.js
 *   2. 校验 slug 是否重复（全库唯一）
 *   3. 创建 prompts/<cat>/<sub>/<slug>.md，写入 frontmatter + 正文骨架
 *   4. 提示下一步：编辑正文 -> npm run build -> 提交
 *
 * 如果分类不够用：先改 taxonomy.js 加子分类，再跑本脚本。
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createInterface } from 'node:readline';
import { execSync } from 'node:child_process';
import { TAXONOMY } from '../taxonomy.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

/* ---------- 参数解析 ---------- */
function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const m = /^--([a-z-]+)(?:=(.*))?$/.exec(argv[i]);
    if (!m) continue;
    out[m[1]] = m[2] ?? (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : 'true');
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));

const rl = createInterface({ input: process.stdin, output: process.stdout });

// 输入流被关闭时（非交互环境 / Ctrl-D）让挂起的提问立刻失败，而不是静默退出
let pendingReject = null;
let closed = false;
rl.on('close', () => {
  closed = true;
  if (pendingReject) {
    const r = pendingReject;
    pendingReject = null;
    r(new Error('输入中断：stdin 已关闭'));
  }
});

function ask(q, def) {
  if (closed) return Promise.reject(new Error('输入中断：stdin 已关闭'));
  return new Promise((res, rej) => {
    pendingReject = rej;
    rl.question(def ? `${q} (${def}): ` : `${q}: `, (a) => {
      pendingReject = null;
      res(a.trim() || def || '');
    });
  });
}

/** 非 TTY 环境无法交互，改为全参数模式 */
function requireTTY() {
  if (process.stdin.isTTY) return;
  console.error('✗ 当前不是交互式终端，请用全参数模式：');
  console.error(
    '  npm run new -- --cat <分类> --sub <子分类> --title "<标题>" --summary "<摘要>" \\\n' +
      '                [--slug <英文id>] [--tags <标签>] [--level <难度>] [--model <模型>]'
  );
  rl.close();
  process.exit(1);
}

/* ---------- 已有 slug ---------- */
function existingSlugs() {
  try {
    return new Set(
      execSync('find prompts -name "*.md"', { cwd: ROOT, encoding: 'utf8' })
        .split('\n')
        .filter(Boolean)
        .map((f) => f.split('/').pop().replace(/\.md$/, ''))
    );
  } catch {
    return new Set();
  }
}

function countInSub(cat, sub) {
  const dir = join(ROOT, 'prompts', cat, sub);
  if (!existsSync(dir)) return 0;
  return readdirSync(dir).filter((f) => f.endsWith('.md')).length;
}

const pad = (s, n) => s + ' '.repeat(Math.max(0, n - [...s].reduce((a, c) => a + (c.charCodeAt(0) > 255 ? 2 : 1), 0)));

/* ---------- 选择分类 ---------- */
async function pickCategory() {
  console.log('\n一级分类：');
  TAXONOMY.forEach((c, i) => {
    console.log(`  ${String(i + 1).padStart(2)}. ${pad(c.name, 14)} ${c.id.padEnd(12)} ${c.desc}`);
  });
  let cat;
  while (!cat) {
    const raw = await ask('\n选择分类（序号或 id）');
    const byIdx = Number(raw);
    const hit =
      (Number.isInteger(byIdx) && TAXONOMY[byIdx - 1]) || TAXONOMY.find((c) => c.id === raw);
    if (hit) cat = hit;
    else console.log(`  ✗ 无效：${raw}`);
  }
  return cat;
}

async function pickSub(cat) {
  console.log(`\n「${cat.name}」的二级分类：`);
  cat.subs.forEach((s, i) => {
    console.log(`  ${String(i + 1).padStart(2)}. ${pad(s.name, 16)} ${s.id}`);
  });
  let sub;
  while (!sub) {
    const raw = await ask('\n选择子分类（序号或 id）');
    const byIdx = Number(raw);
    const hit =
      (Number.isInteger(byIdx) && cat.subs[byIdx - 1]) || cat.subs.find((s) => s.id === raw);
    if (hit) sub = hit;
    else console.log(`  ✗ 无效：${raw}`);
  }
  return sub;
}

/* ---------- 生成内容 ---------- */
function buildFile({ cat, sub, title, slug, summary, tags, level, model }) {
  const d = new Date();
  const today = [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
  return `---
title: ${title}
summary: ${summary}
category: ${cat}
subcategory: ${sub}
tags: [${tags}]
model: ${model}
level: ${level}
featured: false
updated: ${today}
---

## 角色
你是{{角色}}。

## 任务
{{要做什么}}

## 输入
- {{关键输入一}}
- {{关键输入二}}

## 要求
1. {{要求一}}
2. {{要求二}}

## 输出格式
{{描述输出结构，例如表格 / 分节标题 / JSON}}

## 硬规则
- {{禁止事项一}}
- {{禁止事项二}}
`;
}

/* ---------- 主流程 ---------- */
async function main() {
  console.log('══ 新增提示词 ══');

  let catId = args.cat;
  let subId = args.sub;
  let cat = catId ? TAXONOMY.find((c) => c.id === catId) : null;
  if (catId && !cat) {
    console.error(`✗ 未知分类 "${catId}"，可选：${TAXONOMY.map((c) => c.id).join(', ')}`);
    process.exit(1);
  }
  if (!cat) {
    requireTTY();
    cat = await pickCategory();
  }
  catId = cat.id;

  let sub = subId ? cat.subs.find((s) => s.id === subId) : null;
  if (subId && !sub) {
    console.error(`✗ 未知子分类 "${catId}/${subId}"，可选：${cat.subs.map((s) => s.id).join(', ')}`);
    process.exit(1);
  }
  if (!sub) {
    requireTTY();
    sub = await pickSub(cat);
  }
  subId = sub.id;

  if (!args.title) requireTTY();
  const title = args.title || (await ask('标题（中文）'));
  if (!title) {
    console.error('✗ 标题不能为空');
    process.exit(1);
  }

  const used = existingSlugs();
  const suggest = `${subId}-${String(countInSub(catId, subId) + 1).padStart(2, '0')}`;
  let slug = args.slug || (await ask('slug（英文文件名，用于 URL）', suggest));
  slug = slug.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '');
  if (!slug) {
    console.error('✗ slug 只能是英文字母、数字、连字符');
    process.exit(1);
  }
  if (used.has(slug)) {
    console.error(`✗ slug "${slug}" 已存在，换一个`);
    process.exit(1);
  }

  const summary = args.summary || (await ask('一句话摘要'));
  const tags = args.tags || (await ask('标签（逗号分隔）', sub.name));
  const level = args.level || (await ask('难度', '进阶'));
  const model = args.model || (await ask('适用模型', '通用'));

  const dir = join(ROOT, 'prompts', catId, subId);
  mkdirSync(dir, { recursive: true });
  const file = join(dir, `${slug}.md`);
  writeFileSync(
    file,
    buildFile({ cat: catId, sub: subId, title, slug, summary, tags, level, model }),
    'utf8'
  );

  console.log(`\n✓ 已创建：prompts/${catId}/${subId}/${slug}.md`);
  console.log('\n下一步：');
  console.log('  1. 编辑正文：{{变量名}} 会在详情页自动生成填写框，可自由增删改');
  console.log('  2. npm run build           # 生成 data/prompts.json');
  console.log('  3. npm run dev             # 本地预览 http://localhost:4173');
  console.log('  4. git add -A && git commit -m "feat: 新增提示词 <标题>" && git push');
  console.log('\n提示：分类不够用时，改 taxonomy.js 加子分类，再重新跑本脚本。');

  rl.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
