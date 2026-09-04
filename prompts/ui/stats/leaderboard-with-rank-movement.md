---
title: "排行榜（含涨跌）"
summary: "名次、分数与升降方向指示"
category: ui
subcategory: stats
tags: ["指标", "排行榜", "涨跌"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-leaderboard-with-rank-movement/"
---

Build a leaderboard with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The card header holds a title, a muted line naming the period, and a small segmented control for This week and All time. The list has ten rows divided by hairlines: each row shows the rank as a fixed-width monospaced number, a movement indicator with an up or down arrow in green or red and the number of places moved or a muted dash for no change, an avatar circle with initials, the name in medium weight with a muted team line under it, and the score right-aligned in monospace with a tiny delta beneath. Give the top three rows a subtle tint and a small medal-like coloured dot before the rank. Highlight one row as the current user with a neutral-900 left border and a "You" pill. Under the list, a footer strip showing the current user rank out of the total and a link to the full table.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
