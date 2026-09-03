/**
 * 种子数据 → markdown 文件生成器
 * 用法: node tools/seed.mjs
 * 只在初始化项目时使用；之后请直接编辑 prompts/ 下的 .md 文件。
 */
import { writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TAXONOMY } from '../taxonomy.js';
import part1 from './seed/part1.mjs';
import part2 from './seed/part2.mjs';
import part3 from './seed/part3.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PROMPT_DIR = join(ROOT, 'prompts');
const TODAY = '2026-09-04';

const items = [...part1, ...part2, ...part3];

// 校验分类
const validSubs = new Map();
for (const c of TAXONOMY) validSubs.set(c.id, new Set(c.subs.map((s) => s.id)));

let errors = 0;
const seen = new Set();
for (const it of items) {
  if (!validSubs.has(it.cat)) {
    console.error(`✗ 未知一级分类: ${it.cat} (${it.title})`);
    errors++;
  } else if (!validSubs.get(it.cat).has(it.sub)) {
    console.error(`✗ 未知二级分类: ${it.cat}/${it.sub} (${it.title})`);
    errors++;
  }
  const key = `${it.cat}/${it.sub}/${it.slug}`;
  if (seen.has(key)) {
    console.error(`✗ 重复 slug: ${key}`);
    errors++;
  }
  seen.add(key);
}
if (errors) {
  console.error(`\n发现 ${errors} 个错误，已中止。`);
  process.exit(1);
}

if (existsSync(PROMPT_DIR)) rmSync(PROMPT_DIR, { recursive: true, force: true });

let count = 0;
for (const it of items) {
  const dir = join(PROMPT_DIR, it.cat, it.sub);
  mkdirSync(dir, { recursive: true });

  const fm = [
    '---',
    `title: ${it.title}`,
    `summary: ${it.summary}`,
    `category: ${it.cat}`,
    `subcategory: ${it.sub}`,
    `tags: [${it.tags.join(', ')}]`,
    `model: ${it.model}`,
    `level: ${it.level}`,
    `featured: ${it.featured ? 'true' : 'false'}`,
    `updated: ${TODAY}`,
    '---',
    '',
    it.content.trim(),
    '',
  ].join('\n');

  writeFileSync(join(dir, `${it.slug}.md`), fm, 'utf8');
  count++;
}

console.log(`✓ 已生成 ${count} 个提示词文件到 prompts/`);
const byCat = new Map();
for (const it of items) byCat.set(it.cat, (byCat.get(it.cat) || 0) + 1);
for (const [k, v] of [...byCat].sort()) console.log(`  ${k.padEnd(12)} ${v}`);
