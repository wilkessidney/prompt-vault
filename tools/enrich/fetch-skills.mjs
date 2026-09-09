// tools/enrich/fetch-skills.mjs
// 从 skills.sh sitemap 抓取 Top N 热门 skill，从 GitHub 拉取 SKILL.md 本地存储。
//
// 用法：
//   node tools/enrich/fetch-skills.mjs              # 默认前 500 条
//   node tools/enrich/fetch-skills.mjs --limit 1000 # 取前 1000 条
//   node tools/enrich/fetch-skills.mjs --force      # 强制重写已存在的文件
//
// 产物：prompts/skills/top/<owner>_<repo>_<slug>.md

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { setTimeout } from 'node:timers/promises';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..');
const OUT_DIR = join(ROOT, 'prompts', 'skills', 'top');
const SITEMAP1 = 'https://www.skills.sh/sitemap-skills-1.xml';
const SITEMAP2 = 'https://www.skills.sh/sitemap-skills-2.xml';
const DEFAULT_LIMIT = 500;
const RATE_LIMIT_MS = 200; // GitHub API 限速保护

function parseArgs() {
  const args = process.argv.slice(2);
  let limit = DEFAULT_LIMIT;
  let force = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--limit' && args[i + 1]) { limit = parseInt(args[i + 1], 10); i++; }
    if (args[i] === '--force') force = true;
  }
  return { limit, force };
}

/** 从 XML sitemap 提取 <loc> 列表 */
async function fetchSitemapUrls(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status} ${url}`);
  const text = await res.text();
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const loc = m[1].trim();
    // URL 格式: https://www.skills.sh/owner/repo/skill-name</url>
    const idx = loc.indexOf('</url>');
    const cleanUrl = idx >= 0 ? loc.slice(0, idx) : loc;
    // 解析 owner/repo/skill 路径
    const cleaned = cleanUrl.replace(/^https:\/\/www\.skills\.sh\//, '').replace(/\/$/, '');
    const parts = cleaned.split('/');
    if (parts.length >= 3) {
      const owner = parts[0];
      const repo = parts[1];
      const skill = parts.slice(2).join('/');
      locs.push({ owner, repo, skill, url: cleanUrl });
    }
  }
  return locs;
}

/** 从 GitHub API 获取仓库信息（stars、description） */
async function fetchRepoInfo(owner, repo) {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      stars: data.stargazers_count || 0,
      description: data.description || '',
      updated_at: data.pushed_at || '',
      html_url: data.html_url || '',
    };
  } catch {
    return null;
  }
}

/** 从 GitHub raw 获取 SKILL.md 内容 */
async function fetchSkillMd(owner, repo, skill) {
  const safeSkill = skill.replace(/[^a-zA-Z0-9._-]/g, '-');
  const paths = [
    `https://raw.githubusercontent.com/${owner}/${repo}/main/skills/${safeSkill}/SKILL.md`,
    `https://raw.githubusercontent.com/${owner}/${repo}/master/skills/${safeSkill}/SKILL.md`,
  ];
  for (const url of paths) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (res.ok) return await res.text();
    } catch {}
  }
  // 尝试不带 skills/ 前缀的路径（有些 repo 结构不同）
  const altPaths = [
    `https://raw.githubusercontent.com/${owner}/${repo}/main/${safeSkill}/SKILL.md`,
    `https://raw.githubusercontent.com/${owner}/${repo}/master/${safeSkill}/SKILL.md`,
  ];
  for (const url of altPaths) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (res.ok) return await res.text();
    } catch {}
  }
  return null;
}

/** 解析 SKILL.md frontmatter，返回 { meta, body } */
function parseSkillMd(content) {
  if (!content) return null;
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return { meta: {}, body: content };
  const metaStr = fmMatch[1];
  const body = fmMatch[2].replace(/^\n+/, '').replace(/\s+$/, '');
  const meta = {};
  for (const line of metaStr.split('\n')) {
    const eqIdx = line.indexOf(':');
    if (eqIdx < 0) continue;
    const key = line.slice(0, eqIdx).trim();
    let val = line.slice(eqIdx + 1).trim();
    // 去掉引号
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    meta[key] = val;
  }
  return { meta, body };
}

/** 生成唯一文件名 slug */
function slugFor(owner, repo, skill) {
  const safe = `${owner}_${repo}_${skill}`.replace(/[^a-zA-Z0-9._-]/g, '_').toLowerCase();
  return safe.replace(/_+/g, '_').replace(/^_|_$/g, '');
}

async function main() {
  const { limit, force } = parseArgs();
  console.log(`Fetching top ${limit} skills from skills.sh...`);

  // 确保输出目录存在
  mkdirSync(OUT_DIR, { recursive: true });

  // 收集 sitemap URL
  const allUrls = [];
  for (const url of [SITEMAP1, SITEMAP2]) {
    try {
      const locs = await fetchSitemapUrls(url);
      console.log(`  ${url}: ${locs.length} skills`);
      allUrls.push(...locs);
    } catch (e) {
      console.warn(`  Warning: failed to fetch ${url}: ${e.message}`);
    }
  }

  // 去重（同一 skill 可能出现在两个 sitemap）
  const seen = new Set();
  const uniqueUrls = [];
  for (const u of allUrls) {
    const key = `${u.owner}/${u.repo}/${u.skill}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueUrls.push(u);
    }
  }
  console.log(`Total unique skills: ${uniqueUrls.length}`);

  // 只取前 limit 条
  const targets = uniqueUrls.slice(0, limit);
  console.log(`Processing ${targets.length} skills...`);

  let fetched = 0, skipped = 0, failed = 0;
  const stats = [];

  for (const { owner, repo, skill, url } of targets) {
    const fileSlug = slugFor(owner, repo, skill);
    const outPath = join(OUT_DIR, `${fileSlug}.md`);

    // 检查是否已存在
    if (existsSync(outPath) && !force) {
      skipped++;
      continue;
    }

    try {
      // 并行 fetch SKILL.md 和 repo info（有限速）
      const [skillMd, repoInfo] = await Promise.all([
        fetchSkillMd(owner, repo, skill),
        fetchRepoInfo(owner, repo),
      ]);

      if (!skillMd) {
        failed++;
        stats.push({ owner, repo, skill, status: 'no_skill_md' });
        await setTimeout(RATE_LIMIT_MS);
        continue;
      }

      const parsed = parseSkillMd(skillMd);
      if (!parsed) {
        failed++;
        stats.push({ owner, repo, skill, status: 'parse_failed' });
        await setTimeout(RATE_LIMIT_MS);
        continue;
      }

      const { meta, body } = parsed;
      const tags = [meta.name || skill];
      if (meta.keywords) {
        meta.keywords.split(',').forEach(k => {
          const t = k.trim();
          if (t && !tags.includes(t)) tags.push(t);
        });
      }
      // 去重并限制数量
      const uniqueTags = [...new Set(tags)].slice(0, 10);

      const frontmatter = {
        title: meta.name || skill,
        summary: meta.description || '',
        category: 'skills',
        subcategory: 'top',
        tags: '[' + uniqueTags.map(t => `"${t}"`).join(', ') + ']',
        model: '通用',
        level: meta.level || '通用',
        featured: false,
        updated: repoInfo?.updated_at?.slice(0, 10) || new Date().toISOString().slice(0, 10),
        source: url,
        github: `https://github.com/${owner}/${repo}`,
        stars: repoInfo?.stars || 0,
        author: owner,
      };

      // 特殊处理 tags 字段：直接输出 YAML 数组格式
      const fmLines = Object.entries(frontmatter).map(([k, v]) => {
        if (k === 'tags') return `tags: ${v}`; // v 已经是 "[\"tag1\", \"tag2\"]" 格式
        return `${k}: ${typeof v === 'string' ? `"${v.replace(/"/g, '\\"')}"` : v}`;
      });
      const content = `---\n${fmLines.join('\n')}\n---\n${body}`;

      writeFileSync(outPath, content, 'utf8');
      fetched++;
      stats.push({ owner, repo, skill, status: 'ok', stars: frontmatter.stars });

    } catch (e) {
      failed++;
      stats.push({ owner, repo, skill, status: 'error', message: e.message });
    }

    // 限速
    await setTimeout(RATE_LIMIT_MS);

    // 进度报告
    if (fetched + skipped + failed % 50 === 0 || fetched + skipped + failed === targets.length) {
      console.log(`  Progress: fetched=${fetched}, skipped=${skipped}, failed=${failed}`);
    }
  }

  console.log(`\nDone: fetched=${fetched}, skipped=${skipped}, failed=${failed}`);

  // 输出统计到 JSON（供后续 build 脚本使用）
  const statsPath = join(ROOT, 'data', 'skills-stats.json');
  mkdirSync(join(ROOT, 'data'), { recursive: true });
  writeFileSync(statsPath, JSON.stringify({ total: targets.length, fetched, skipped, failed, stats }, null, 2), 'utf8');
  console.log(`Stats saved to ${statsPath}`);
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
