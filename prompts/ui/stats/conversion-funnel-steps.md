---
title: "转化漏斗"
summary: "逐级收窄的条形，标注每一步流失"
category: ui
subcategory: stats
tags: ["指标", "漏斗", "转化"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-conversion-funnel-steps/"
---

Design a conversion funnel block with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Inside a bordered rounded-2xl card, put a header row with a title, a muted date range and a small select for the segment. Below, five funnel rows stacked vertically: each row has a label and a count on the left in a fixed-width column, then a bar whose width is set inline as a percentage on a neutral-100 track, with the fill in neutral-900 and the conversion percentage printed inside the fill when it is wide enough or beside it when it is not. Between consecutive rows, a small indented note in muted red-ish text showing how many people dropped and the percentage lost. Under the rows, a summary strip with three figures — entered, completed and overall conversion — separated by vertical rules. Keep every number monospaced so the columns line up.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
