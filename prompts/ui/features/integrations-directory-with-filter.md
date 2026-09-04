---
title: "集成目录（可筛选）"
summary: "按用途分组、可搜索的集成 Logo 网格"
category: ui
subcategory: features
tags: ["集成", "目录", "筛选"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/features/features-integrations-directory-with-filter/"
---

Build an integrations directory with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Start with a heading, a muted subline giving the count of available integrations, and a controls row holding a search input with a magnifier glyph on the left and a set of filter chips — All, Data, Comms, Deploy, Billing — where the active chip is dark. Below, a responsive grid of integration cards, three or four across: each card is a rounded-xl bordered tile with a square logo placeholder holding a monogram, the product name, a one-line description, and a footer row with a small category label and either a muted "Connected" state with a green dot or a neutral "Connect" text button. Include ten cards across the categories. Under the grid, a centred bordered strip inviting people to request an integration with a small link. Then add JavaScript that filters the cards by chip category and by a case-insensitive match on the name and description, shows a "no matches" line when the grid empties, and keeps the count in the subline accurate.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
