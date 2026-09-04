---
title: "带时间筛选的分析概览"
summary: "切换时间范围 chip，整页数据联动刷新"
category: ui
subcategory: dashboards
tags: ["分析", "时间筛选", "概览"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-analytics-overview-with-range-chips/"
---

Build an analytics overview panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The header row holds a page title, a muted line naming the active range, and on the right a chip group for 24h, 7d, 30d and 90d where the active chip is dark, plus a bordered "Export" button. Below, a four-card metric row: each bordered rounded-xl card has a small label, a large figure, a signed change pill in green or red, and a twelve-bar mini chart drawn with flex items of varying heights. Under that, a wider chart card with a title, a legend of two dotted series labels, and a placeholder area chart drawn as an SVG polyline over a faint grid. Then add JavaScript that holds a dataset per range, redraws the four figures, the change pills and the mini bars when a chip is clicked, and updates the subline to name the compared period.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
