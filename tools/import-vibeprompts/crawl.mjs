#!/usr/bin/env node
/**
 * 抓取 vibeprompts.dev 全站提示词 -> tools/import-vibeprompts/raw.json
 *
 * 站点为纯静态站，sitemap.xml 给出全部 URL。
 * 详情页结构：
 *   <title>           标题 — 站点后缀
 *   meta description  一句话描述
 *   <pre data-lang="prompt">  提示词正文（英文）
 *   <pre data-lang="html">    参考实现 HTML
 *   <pre data-lang="js">      参考实现 JS
 *
 * 用法: node tools/import-vibeprompts/crawl.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://vibeprompts.dev';
const OUT = join(HERE, 'raw.json');
const CONCURRENCY = 8;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function decode(s) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
}

function pick(html, re) {
  const m = html.match(re);
  return m ? decode(m[1]).replace(/\s+/g, ' ').trim() : '';
}

function pickBlock(html, lang) {
  const m = html.match(new RegExp(`<pre data-lang="${lang}"[^>]*>([\\s\\S]*?)</pre>`));
  if (!m) return '';
  return decode(m[1].replace(/^<code>|<\/code>$/g, '')).trim();
}

async function fetchText(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.text();
    } catch (e) {
      if (i === tries - 1) throw e;
      await sleep(600 * (i + 1));
    }
  }
}

async function main() {
  const sitemap = await fetchText(`${BASE}/sitemap.xml`);
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter((u) => u.startsWith(BASE));

  // 详情页 = 两级路径 /cat/slug/；一级路径是分类页，/blog/* 是文章，均排除
  const detail = urls.filter((u) => {
    const p = new URL(u).pathname.replace(/^\/|\/$/g, '');
    const seg = p.split('/');
    return seg.length === 2 && seg[0] !== 'blog' && seg[1] !== '';
  });

  console.log(`sitemap 共 ${urls.length} 个 URL，其中详情页 ${detail.length} 条`);

  const items = [];
  let done = 0;
  let failed = 0;

  async function worker(queue) {
    for (;;) {
      const i = queue.shift();
      if (i === undefined) return;
      const url = detail[i];
      try {
        const html = await fetchText(url);
        const pathname = new URL(url).pathname.replace(/^\/|\/$/g, '');
        const [category, slug] = pathname.split('/');
        const title = pick(html, /class="detail-title"[^>]*>([\s\S]*?)<\/h1>/) ||
          pick(html, /<title>([\s\S]*?)<\/title>/).split('—')[0].trim();
        const prompt = pickBlock(html, 'prompt');
        if (!prompt) throw new Error('无 prompt 正文');
        items.push({
          slug,
          category,
          url,
          title,
          description: pick(html, /<meta name="description" content="([^"]*)"/)
            .replace(/ — a free .*$/, '')
            .trim(),
          prompt,
          html: pickBlock(html, 'html'),
          js: pickBlock(html, 'js'),
        });
      } catch (e) {
        failed++;
        console.error(`  ✗ ${url} — ${e.message}`);
      }
      done++;
      if (done % 25 === 0) console.log(`  进度 ${done}/${detail.length}`);
    }
  }

  const queue = detail.map((_, i) => i);
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker(queue)));

  items.sort((a, b) => a.category.localeCompare(b.category) || a.slug.localeCompare(b.slug));
  writeFileSync(OUT, JSON.stringify({ source: BASE, crawledAt: new Date().toISOString(), items }, null, 2), 'utf8');

  const byCat = {};
  for (const it of items) (byCat[it.category] ||= []).push(it.slug);
  console.log(`\n✓ 成功 ${items.length} 条，失败 ${failed} 条 -> ${OUT}`);
  console.log('\n分类分布:');
  for (const [c, v] of Object.entries(byCat).sort()) console.log(`  ${c.padEnd(14)} ${String(v.length).padStart(3)}`);
}

main().catch((e) => {
  console.error('抓取失败:', e.message);
  process.exit(1);
});
