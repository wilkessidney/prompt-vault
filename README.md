# PromptVault · 个人提示词库

一个**零依赖、纯静态**的个人提示词库：Markdown 写提示词 → 一条命令构建 → GitHub Pages 自动上线。

- 🗂 **13 大分类 / 102 个子分类**（359 条提示词，子分类 100% 有内容），树状导航 + 顶部快速切换
- 🎨 **UI 组件 268 条**：首屏 / 导航 / 表单 / 面板 / 定价 / 图表等前端组件生成提示词，见下方「UI 组件分类」
- 🔍 **全文检索**（标题 / 摘要 / 标签 / 正文），支持关键词高亮
- 📋 **一键复制**，卡片上直接复制，详情页可复制原文 / 填充版 / 链接 / 下载 .md
- 🧩 **变量填充**：`{{变量}}` 填空 + `{{A / B / C}}` 选项下拉，填一遍正文实时替换，复制即得成品
- ⭐ 收藏、深色模式、移动端适配、键盘快捷键（`/` 聚焦搜索，`Esc` 返回）
- 🚀 推送到 GitHub 自动部署，无需任何第三方服务

## 本地使用

```bash
git clone https://github.com/wilkessidney/prompt-vault.git
cd prompt-vault
npm run dev        # http://localhost:4173
```

> 构建产物 `data/prompts.js` 已随仓库提交，直接双击 `index.html` 也能打开。

## 如何新增一条提示词

三条途径，按场景选。**本质都一样：往 `prompts/<一级分类>/<二级分类>/` 加一个 `.md` 文件。**

### 途径 A · 命令行脚手架（推荐，本地）

```bash
npm run new
```

交互式：列 12 大分类 → 选子分类 → 填标题 / slug / 摘要 / 标签 / 难度 / 模型，脚本自动建目录、生成带 frontmatter 的骨架文件，并校验分类合法、slug 不重复。

也支持全参数非交互（适合脚本批量导入）：

```bash
npm run new -- --cat coding --sub refactor --title "安全重构" \
  --summary "在不改变行为的前提下重构" --slug safe-refactor \
  --tags "重构,代码质量" --level 进阶 --model 通用
```

| 参数 | 说明 | 必填 |
|---|---|---|
| `--cat` | 一级分类 id（见 `taxonomy.js`） | ✅ |
| `--sub` | 二级分类 id | ✅ |
| `--title` | 中文标题 | ✅ |
| `--summary` | 一句话摘要，显示在卡片上 | ✅ |
| `--slug` | 英文文件名，也是 URL 片段，全库唯一 | 默认 `<子分类>-<序号>` |
| `--tags` | 逗号分隔 | 默认子分类名 |
| `--level` | 通用 / 进阶 / 专家 | 默认 进阶 |
| `--model` | 适用模型 | 默认 通用 |

生成后：编辑正文 → `npm run build` → `npm run dev` 预览 → 提交。

### 途径 B · 手工新建 Markdown 文件

在 `prompts/<一级分类>/<二级分类>/` 下新建 `<slug>.md`，格式 = YAML frontmatter + 正文（正文即提示词本身）：

```markdown
---
title: 提示词标题
summary: 一句话摘要（会显示在卡片上）
category: coding          # 一级分类 id
subcategory: refactor     # 二级分类 id
tags: [重构, 代码质量]
model: 通用
level: 进阶
featured: false
updated: 2026-09-04
---

这里写提示词正文，支持 Markdown。
需要 {{用户填写}} 的地方用双花括号占位，前端会自动生成填写框。
```

> 正文里 `{{变量名}}` 会被识别为变量，详情页自动生成输入框，填完可一键复制成品。
> **别写空的 `{{}}`** —— 那种不会被识别，复制出来也是噪音。

### 占位符两种写法

| 写法 | 详情页交互 | 适合 |
|---|---|---|
| `{{变量名}}` | 文本输入框，留空则复制时保留占位 | 需要用户填的内容：主题、代码、数据样例 |
| `{{选项A / 选项B / 选项C}}` | 下拉框（默认第一项）+ 正文中可点击切换 | 二选一的参数：平台、语气、模型、时长 |

选项型的判定：各选项用 ` / `（带空格）分隔，或「标签：」前缀 + ≥3 个选项。
写成 `CPU/内存/网络条件`（无空格短枚举）会被当作一个要填的变量。

**正文中被识别为选项的会渲染成可点击的 chip**（带 ⇄ 标记），点一下就切到下一个选项，
和顶部下拉实时联动。「复制填充版」会把选项替换为当前选中的值——所以一条提示词
哪怕什么都不填，复制出来也是完整可用的。

写完 `npm run build` 提交即可。

### 途径 C · GitHub 网页端（手机 / 临时电脑上也能加）

1. 打开仓库 `prompts/` 对应目录 → **Add file → Create new file**
2. 文件名填 `my-new-prompt.md`，内容按途径 B 的格式贴进去
3. 底部 **Commit changes**

GitHub Actions 会自动跑 `npm run build` 并部署，约 1 分钟上线——**线上看到的就是最新的。**

> `data/` 是 `prompts/*.md` 的构建产物，Actions 不会把它回写仓库（双向写入必然和本地 build 冲突）。
> 所以网页端加完提示词后，本地 `git pull` 再跑一次 `npm run build` 即可同步。

---

构建与提交（途径 A/B）：

```bash
npm run build   # 重新生成 data/prompts.json / prompts.js
git add -A && git commit -m "feat: 新增 xxx 提示词" && git push
```

推送后约 1 分钟上线。

## 新增分类

编辑根目录的 `taxonomy.js`（一级 + 二级分类的唯一真源），然后在 `prompts/` 下按对应 id 建目录即可。构建脚本会校验每条提示词的分类是否合法，不合法会在输出里给出警告。加完子分类再跑 `npm run new` 就能选到它。

## UI 组件分类（268 条）

`prompts/ui/` 下的 268 条来自 [vibeprompts.dev](https://vibeprompts.dev/)（公开免费的前端组件提示词站），经内化改造后入库：

| 内化项 | 做法 | 理由 |
|---|---|---|
| 元数据 | 标题、摘要、标签全部中文化 | 保证中文能直接检索（搜「瀑布流」「验证码」都能命中） |
| 正文 | **保留英文原文** | 提示词是给 AI 的指令；Tailwind class 名、CSS 属性、交互细节翻译会掉精度 |
| 技术栈 | 正文里的 `Tailwind CSS` → 选项变量，可切 原生 CSS / UnoCSS / styled-components | 不绑定单一技术栈 |
| 输出格式 | 末尾追加约束：单文件 HTML / React .tsx / Vue .vue / Astro .astro | 适配不同项目形态 |
| 参考实现 | 不入库，详情页保留「原站与参考实现 ↗」链接 | 原站代码是压缩单行，可读性差 |

**开箱即用**：两个选项变量默认都是第一项，不填任何东西直接复制，输出与原站原文等价。

14 个子分类：首屏 Hero / 导航与菜单 / 登录与权限 / 新手引导 / 定价与结算 / 功能展示 / 数据面板 / 指标与图表 / 行动召唤 / 客户证言 / 帮助与 FAQ / 联系与支持 / 页脚 / 实用小组件

### 重新抓取 / 重新生成

```bash
node tools/import-vibeprompts/crawl.mjs               # 从 sitemap 抓全站 -> raw.json
node tools/import-vibeprompts/build-prompt-files.mjs  # raw.json + 中文元数据 -> prompts/ui/
npm run build
```

中文元数据在 `tools/import-vibeprompts/meta/*.mjs`（按 slug 索引）。新增抓取条目时补上对应的中文标题 / 摘要 / 标签即可；`raw.json` 已剥离参考实现代码（0.26 MB），需要时重跑 `crawl.mjs`。

## 目录结构

```
prompt-vault/
├── index.html              # 页面骨架
├── assets/
│   ├── style.css           # 全部样式（含深色模式）
│   └── app.js              # 前端逻辑（原生 JS，无依赖）
├── prompts/                # ★ 提示词真源，按 分类/子分类/ 组织
├── tools/
│   ├── new-prompt.mjs      # 新增提示词脚手架（npm run new）
│   └── seed/               # 种子数据（一次性，可删）
│   └── coding/refactor/*.md
├── data/
│   ├── prompts.json        # 构建产物（API 形态）
│   └── prompts.js          # 构建产物（file:// 直开用）
├── scripts/
│   ├── build.mjs           # 零依赖构建：md → json
│   └── dev-server.mjs      # 本地预览服务器
├── taxonomy.js             # ★ 分类体系真源
├── tools/seed.mjs          # 初始化种子数据（可选，日常不用）
└── .github/workflows/deploy.yml
```

## 技术说明

- **无任何 npm 依赖**：构建器是约 300 行的原生 Node 脚本，内置了一个覆盖常用语法（标题/列表/表格/代码块/引用/行内标记/`{{变量}}`）的 Markdown 渲染器。
- **部署**：GitHub Pages，`.github/workflows/deploy.yml` 在每次 push 到 `main` 时自动构建发布。
- **数据契约**：`data/prompts.json` 的结构见 `scripts/build.mjs` 末尾，第三方可直接拿这份 JSON 做二次开发。

## License

MIT
