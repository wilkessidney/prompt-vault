---
title: "三环仪表"
summary: "三个 SVG 圆环，环心各放一个数字"
category: ui
subcategory: stats
tags: ["指标", "环形图", "SVG"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-ring-gauge-trio/"
---

Create a three-up gauge row with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} and inline SVG. Each gauge sits in a bordered rounded-2xl card: an SVG viewBox of 100 by 100 with two circles — a neutral-100 track and a coloured progress ring using stroke-dasharray and stroke-dashoffset with a rotate minus ninety transform — and an absolutely centred figure showing the percentage in large medium-weight text with a tiny label under it. Around the gauge, a title above and a two-line explanation below, plus a footer row with the raw counts. Use green for a healthy metric, amber for one that needs attention and neutral-900 for a neutral one. Then add JavaScript that reads a data-value attribute on each ring, computes the dash offset from the circumference, and animates the offset from empty to its value with a CSS transition triggered on the next frame so the rings sweep in on load.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
