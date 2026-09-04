---
title: "可持续影响面板"
summary: "排放、能耗与材料用量，各配对照说明"
category: ui
subcategory: stats
tags: ["指标", "可持续", "面板"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-sustainability-impact-panel/"
---

Build an environmental impact panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} on a very light green-tinted background. Start with a small label, a heading and a paragraph stating the reporting standard and who verified the numbers. Then a four-card grid: each bordered white card holds a glyph tile, a large figure with its unit as a smaller muted span, a metric name, and a comparison line in plain language that makes the number legible — such as the equivalent in flights avoided. Under the cards, a two-column block: on the left, a stacked horizontal bar showing the split of emissions across three scopes with a legend below; on the right, three progress rows toward stated targets, each with a label, a thin track and a percentage with the target year. Close with a footer row linking the full report, the methodology and the verification statement.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
