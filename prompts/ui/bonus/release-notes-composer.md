---
title: "发布说明生成器"
summary: "把 conventional commits 转成版本号与分组更新日志"
category: ui
subcategory: bonus
tags: ["发布说明", "Git", "自动化"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-release-notes-composer/"
---

Create a release notes composer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that turns conventional commits into a version bump. Use a max-w-4xl card with a two-column layout: on the left a monospace textarea seeded with a handful of commits and a caption explaining the accepted format, on the right a summary panel showing the current version arrowing into the computed next one, a bump pill reading major, minor or patch, three counters for features, fixes and breaking changes, and a rendered changelog grouped under those headings. Put a copy button above the changelog. Then add JavaScript that parses each line into type, optional scope, breaking marker and subject, ignores anything malformed, promotes the bump to major on an exclamation mark or a breaking-change footer and to minor on any feat, rebuilds the summary on every keystroke behind a short debounce, and copies the changelog as markdown with a clipboard fallback and a two-second confirmation on the button.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
