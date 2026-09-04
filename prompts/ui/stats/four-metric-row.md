---
title: "四列大数字"
summary: "四个大号数字配简短标签"
category: ui
subcategory: stats
tags: ["指标", "大数字", "四列"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-four-metric-row/"
---

Build a stats bar with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: four evenly spaced metrics, each a large bold number and a muted label below. Separate them with vertical dividers on desktop. Center within a max-width wrapper and collapse to a 2x2 grid on mobile. Give each number data attributes describing its target value, decimal places, and any prefix or suffix, then add JavaScript that counts each metric up from zero when the row first scrolls into view, using an IntersectionObserver to trigger once and requestAnimationFrame with an ease-out curve to animate. Respect prefers-reduced-motion by snapping straight to the final values.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
