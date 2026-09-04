---
title: "骨架屏加载态"
summary: "内容加载时的脉冲占位块，加载完成后平滑替换"
category: ui
subcategory: bonus
tags: ["骨架屏", "加载态", "占位"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-skeleton-loading-state/"
---

Create a skeleton loading pattern with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for a list of projects. Build the same card twice inside one bordered panel: a visible skeleton version and a hidden loaded version. The panel header has a title, a muted "Refresh" button, and a small status line. The skeleton holds four rows, each an avatar circle plus two grey bars of differing widths and a short bar on the right, all sharing animate-pulse and rounded-full bars in neutral-200 — vary the widths row to row so it does not read as a table. The loaded version holds the real rows: an initials avatar, a project name with a repository path underneath, a status chip (Passing, Running, Failed) and a relative timestamp. Then add JavaScript that swaps the skeleton for the content after a short delay to mimic a fetch, writes the loaded row count into the status line, and lets the Refresh button put the panel back into its skeleton state and reload so the transition can be seen again.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
