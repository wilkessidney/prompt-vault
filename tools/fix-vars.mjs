/**
 * 一次性修复脚本：把 {{}} 空占位符补全为 {{变量名}}
 * 变量名从同一行的标签推导（如 `- 一句话定位：{{}}` -> `{{一句话定位}}`）
 *
 * 用法：node tools/fix-vars.mjs [--dry]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { globSync } from 'node:fs';
import { execSync } from 'node:child_process';

const DRY = process.argv.includes('--dry');

/** 从 `{{}}` 所在行的前缀推导变量名 */
function deriveName(linePrefix, fallback) {
  let s = linePrefix;
  // 去掉行首列表标记：- / * / 1. / 1)
  s = s.replace(/^\s*(?:[-*+]|\d+[.)])\s+/, '').trim();
  // 去掉行尾冒号（中英文、可带空格），可反复（如 `标签：：` 不会出现，但保险）
  s = s.replace(/[：:]\s*$/, '').trim();
  // 去掉括号及其内容（中英文），可带嵌套一层
  s = s.replace(/[（(][^（()）]*[）)]\s*/g, '').trim();
  // 再去掉一次可能因去括号露出的尾部冒号
  s = s.replace(/[：:]\s*$/, '').trim();
  // 去掉首尾残留标点
  s = s.replace(/^[\s、,，.。;；]+|[\s、,，]+$/g, '');
  // 太长就截断（保持可读）
  if (s.length > 20) s = s.slice(0, 20);
  return s || fallback;
}

function processFile(file) {
  const src = readFileSync(file, 'utf8');
  if (!src.includes('{{}}')) return { changed: 0, names: [] };
  const lines = src.split('\n');
  let counter = 0;
  const names = [];
  const out = lines.map((line) => {
    if (!line.includes('{{}}')) return line;
    return line.replace(/\{\{\}\}/g, (m, offset) => {
      counter += 1;
      const name = deriveName(line.slice(0, offset), `变量${counter}`);
      names.push(name);
      return `{{${name}}}`;
    });
  });
  if (!DRY) writeFileSync(file, out.join('\n'), 'utf8');
  return { changed: counter, names };
}

const files = execSync('find prompts tools/seed -name "*.md" -o -name "*.mjs"', { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean);

let total = 0;
let touched = 0;
const allNames = new Map();
for (const f of files) {
  const r = processFile(f);
  if (r.changed) {
    touched += 1;
    total += r.changed;
    for (const n of r.names) allNames.set(n, (allNames.get(n) || 0) + 1);
    if (DRY && touched <= 5) console.log(`  ${f}: ${r.names.slice(0, 6).join(' | ')}`);
  }
}

console.log(`\n${DRY ? '[DRY] ' : ''}处理文件 ${touched} 个，补全占位符 ${total} 处`);
const short = [...allNames.entries()].filter(([n]) => !/^变量\d+$/.test(n));
console.log(`推导出的变量名 ${short.length} 种，示例：${short.slice(0, 12).map(([n]) => n).join(' / ')}`);
const fallback = [...allNames.entries()].filter(([n]) => /^变量\d+$/.test(n));
if (fallback.length) console.log(`兜底命名 ${fallback.reduce((a, [, c]) => a + c, 0)} 处（未能推导，需人工检查）`);
