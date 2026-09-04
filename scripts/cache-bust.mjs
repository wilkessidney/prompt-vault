#!/usr/bin/env node
/**
 * 缓存破局脚本（零依赖，仅 CI 部署时运行）
 *
 * 作用：给 index.html 中的静态资源引用（style.css / app.js / prompts.js）
 * 追加当前 commit 短 hash 作为版本参数（?v=<sha>）。
 *
 * 背景：GitHub Pages 对静态资源返回 `cache-control: max-age=600`（10 分钟）。
 * 开发者改了 CSS/JS 并部署后，访问者浏览器仍会使用旧缓存，看到的是旧版渲染，
 * 造成"明明部署成功了但页面没变"的困惑。给资源 URL 追加版本参数后，
 * 每次部署 URL 都变化，浏览器视作新资源，必然强制重新拉取。
 *
 * 用法: GH_SHA=abc123 node scripts/cache-bust.mjs
 *   GH_SHA 缺省时使用实际 git 短 hash。
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const INDEX = join(ROOT, 'index.html');

let sha = process.env.GH_SHA || '';
if (!sha) {
  try {
    sha = execSync('git rev-parse --short=8 HEAD', { cwd: ROOT }).toString().trim();
  } catch {
    sha = 'dev';
  }
}

let html = readFileSync(INDEX, 'utf8');
const before = html;

// 只处理没有已带 ?v= 的资源引用，避免重复追加
const resources = [
  'assets/style.css',
  'assets/app.js',
  'data/prompts.js',
];
for (const res of resources) {
  const re = new RegExp('("|\')' + res + '((?:\\?[^"\']*)?)("|\')', 'g');
  html = html.replace(re, (m, q1, existingQuery, q2) => {
    if (existingQuery.includes('v=')) return m; // 已带版本号，跳过
    return q1 + res + '?v=' + sha + q2;
  });
}

if (html === before) {
  console.log('[cache-bust] 无资源引用需要更新（或已带版本号）');
} else {
  writeFileSync(INDEX, html, 'utf8');
  console.log('[cache-bust] 已为 ' + resources.length + ' 个资源追加 ?v=' + sha);
}
