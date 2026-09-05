import fs from 'node:fs';
import { posix as path } from 'node:path';
const root = process.argv[2] || 'prompts';
const files = [];
(function walk(d){ for(const e of fs.readdirSync(d,{withFileTypes:true})){ const p=path.join(d,e.name); if(e.isDirectory()) walk(p); else if(e.name.endsWith('.md')) files.push(p);} })(root);
const rows=[];
for(const f of files){
  if(f.includes('/ui/')) continue; // 既有 UI 组件库，单独处理
  const txt=fs.readFileSync(f,'utf8');
  const m=txt.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if(!m){ rows.push({f,err:'NO_FM'}); continue; }
  const fm=m[1], body=m[2];
  const get=k=>(fm.match(new RegExp('^'+k+':\\s*(.*)$','m'))||[])[1]?.trim();
  const title=get('title'), tags=get('tags'), model=get('model'), level=get('level');
  const bodyLines=body.split('\n').map(s=>s.trim()).filter(Boolean).length;
  const issues=[];
  if(!title) issues.push('no-title');
  if(!tags||!/^\[/.test(tags)) issues.push('bad-tags');
  if(!model) issues.push('no-model');
  if(!level) issues.push('no-level');
  if(bodyLines<8) issues.push('thin('+bodyLines+')');
  rows.push({f,cat:f.split('/')[1],sub:f.split('/')[2],title,tags:tags||'',model,level,bodyLines,issues});
}
const flagged=rows.filter(r=>r.issues.length);
console.log('总内容提示词(非ui):',rows.length);
console.log('有问题:',flagged.length);
const byIssue={};
for(const r of flagged) for(const i of r.issues) byIssue[i]=(byIssue[i]||0)+1;
console.log('按问题分类:',JSON.stringify(byIssue,null,0));
console.log('\n--- 正文偏短(<8行) TOP 30 ---');
for(const r of flagged.filter(r=>r.issues.some(i=>i.startsWith('thin'))).sort((a,b)=>a.bodyLines-b.bodyLines).slice(0,30))
  console.log(`  ${r.bodyLines}行 | ${r.cat}/${r.sub}/${r.title}`);
console.log('\n--- 缺字段 ---');
for(const r of flagged.filter(r=>r.issues.some(i=>/no-|bad-/.test(i))))
  console.log(`  ${r.issues.join(',')} | ${r.f} | ${r.title}`);
// 检查标题重复
const seen={}; const dups=[];
for(const r of rows){ if(!r.title)continue; const k=r.title.toLowerCase(); if(seen[k]) dups.push(r.title); seen[k]=1; }
console.log('\n标题重复数:',dups.length);
