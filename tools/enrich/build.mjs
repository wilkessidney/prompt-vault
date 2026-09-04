#!/usr/bin/env node
/**
 * 批量提示词补全构建器
 * 用法：node tools/enrich/build.mjs [meta文件名...]（默认全部）
 * meta/<cat>.mjs 导出 { sub, slug, title, summary, tags, model, level, featured?, body }[]
 * 生成 prompts/<cat>/<sub>/<slug>.md；已存在同名文件则跳过（幂等）。
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const META_DIR = join(ROOT, 'tools', 'enrich', 'meta');

const args = process.argv.slice(2);
const files = args.length
  ? args.map((f) => join(META_DIR, f.endsWith('.mjs') ? f : f + '.mjs'))
  : readdirSync(META_DIR).filter((f) => f.endsWith('.mjs')).map((f) => join(META_DIR, f));

let written = 0, skipped = 0, failed = 0;

for (const file of files) {
  if (!existsSync(file)) { console.error('meta 不存在: ' + file); failed++; continue; }
  const cat = file.split('/').pop().replace(/\.mjs$/, '');
  const items = (await import(file)).default;
  if (!Array.isArray(items)) { console.error(cat + ': 未导出数组'); failed++; continue; }

  for (const it of items) {
    const missing = ['sub', 'slug', 'title', 'summary', 'body'].filter((k) => !it[k]);
    if (missing.length) { console.error(`✗ ${cat}/${it.slug || '?'} 缺字段: ${missing.join(',')}`); failed++; continue; }

    const out = join(ROOT, 'prompts', cat, it.sub, it.slug + '.md');
    if (existsSync(out)) { skipped++; continue; }

    const tags = (it.tags || []).map((t) => String(t).replace(/[,[\]]/g, ' ').trim()).filter(Boolean);
    const fm = [
      '---',
      `title: ${it.title.replace(/\n/g, ' ')}`,
      `summary: ${it.summary.replace(/\n/g, ' ')}`,
      `category: ${cat}`,
      `subcategory: ${it.sub}`,
      `tags: [${tags.join(', ')}]`,
      `model: ${it.model || '通用'}`,
      `level: ${it.level || '通用'}`,
      `featured: ${it.featured === true ? 'true' : 'false'}`,
      `updated: ${it.updated || '2026-09-05'}`,
      '---',
      '',
    ].join('\n');

    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, fm + it.body.trim() + '\n', 'utf8');
    written++;
  }
}

console.log(`\n完成：写入 ${written}，跳过（已存在）${skipped}，失败 ${failed}`);
