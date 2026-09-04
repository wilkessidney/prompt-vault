---
title: "行业对标"
summary: "自己的数字旁对照行业中位数与前 10%"
category: ui
subcategory: stats
tags: ["指标", "对标", "基准"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-benchmark-against-industry/"
---

Design a benchmark comparison with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Inside a bordered rounded-2xl card, put a header with a title, a muted line naming the peer set and sample size, and a small select for the industry. Below, five metric blocks stacked with generous spacing: each has the metric name and a short explanation on the left, and a comparison bar area on the right holding three stacked thin bars labelled You, Median and Top 10%, with widths set inline, values printed at the ends, and the user bar in neutral-900 while the others are neutral-300 and green respectively. Add a small verdict pill to each metric reading ahead, level or behind in the appropriate tint. Under the metrics, a footer note explaining the data is self-reported and anonymised, with the last refresh date in monospace.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
