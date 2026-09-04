---
title: "投票结果分布"
summary: "各选项的票数占比与总投票数"
category: ui
subcategory: stats
tags: ["指标", "投票", "分布"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-poll-results-breakdown/"
---

Create a survey results block with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-2xl card with a question as the heading, a muted line giving the response count and the fieldwork dates, and a small "Multiple answers allowed" note. The results are six rows: each row is a full-width bordered rounded-xl bar container where a tinted fill sits behind the content at the answer percentage, and above it a flex row holding the answer label on the left and the percentage plus raw count on the right in monospace. Make the leading answer use a neutral-900 fill with white text and the rest a light neutral fill with dark text. Under the rows, a small horizontal divider then a two-column footer: a note on the method on the left, and on the right two links for the raw data and the previous wave. Add a small "Change since last wave" column of tiny green or red deltas beside each percentage.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
