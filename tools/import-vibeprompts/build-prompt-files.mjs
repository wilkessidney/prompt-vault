#!/usr/bin/env node
/**
 * 把抓取的 vibeprompts.dev 提示词内化成本库格式的 md 文件。
 *
 * 输入: tools/import-vibeprompts/raw.json + tools/import-vibeprompts/meta/*.mjs
 * 输出: prompts/ui/<子分类>/<slug>.md
 *
 * 内化规则:
 *  1. 元数据中文化：标题、摘要、标签全部中文（保证中文可检索）
 *  2. 正文保留英文原文（提示词是给 AI 的指令，翻译会损失技术精度）
 *  3. 技术栈参数化：正文中的 "Tailwind CSS" 替换为选项型占位 {{技术栈}}
 *  4. 输出格式参数化：正文末尾追加 {{输出格式}} 约束
 *  5. 参考实现不入库（压缩后的单行代码可读性差），保留 source 链接供跳转
 *
 * 用法: node tools/import-vibeprompts/build-prompt-files.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..', '..');

const raw = JSON.parse(await import('node:fs').then((fs) => fs.readFileSync(join(HERE, 'raw.json'), 'utf8')));

const META = {};
for (const [file, key] of [
  ['a-auth-bonus.mjs', 'A'],
  ['b-contact-cta-dashboards.mjs', 'B'],
  ['c-faq-features-footer.mjs', 'C'],
  ['d-hero-nav-onboarding.mjs', 'D'],
  ['e-pricing-stats-testimonials.mjs', 'E'],
]) {
  const mod = await import(`./meta/${file}`);
  Object.assign(META, mod[key]);
}

// 选项型占位：标签只影响 UI 显示，复制时替换为选中值，默认第一项即等价于原站原文
const STACK = '技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components';
const OUTPUT = '输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）';

const yamlStr = (s) => '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';

let ok = 0;
const problems = [];

for (const it of raw.items) {
  const meta = META[it.slug];
  if (!meta) {
    problems.push(`${it.slug}: 缺中文元数据`);
    continue;
  }
  const [title, summary, tags] = meta;

  // 去掉分类前缀得到纯 slug（目录已经带了分类信息）
  const prefix = it.category + '-';
  if (!it.slug.startsWith(prefix)) {
    problems.push(`${it.slug}: slug 前缀与分类 ${it.category} 不匹配`);
    continue;
  }
  const slug = it.slug.slice(prefix.length);
  if (!slug) {
    problems.push(`${it.slug}: 去掉前缀后 slug 为空`);
    continue;
  }

  // 1) 技术栈参数化
  let body = it.prompt.replace(/Tailwind CSS/g, `{{${STACK}}}`);

  // 2) 追加输出格式约束（默认第一项 = 单文件 HTML，与原站行为一致）
  body = body.replace(/\s+$/, '') + `\n\nDeliver the result as {{${OUTPUT}}}.`;

  const fm = [
    '---',
    `title: ${yamlStr(title)}`,
    `summary: ${yamlStr(summary)}`,
    'category: ui',
    `subcategory: ${it.category}`,
    `tags: [${tags.map(yamlStr).join(', ')}]`,
    'model: 通用代码模型（Claude / Cursor / v0 / Copilot）',
    'level: 进阶',
    'featured: false',
    'updated: 2026-09-04',
    `source: ${yamlStr(it.url)}`,
    '---',
    '',
    body,
    '',
  ].join('\n');

  const dir = join(ROOT, 'prompts', 'ui', it.category);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${slug}.md`), fm, 'utf8');
  ok++;
}

console.log(`✓ 生成 ${ok} 个 md 文件 -> prompts/ui/<子分类>/`);
if (problems.length) {
  console.log(`\n✗ ${problems.length} 个问题:`);
  problems.forEach((p) => console.log('  - ' + p));
}
