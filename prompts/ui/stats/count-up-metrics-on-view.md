---
title: "滚动进入时数字滚动"
summary: "首次进入视口时数字动画递增到位"
category: ui
subcategory: stats
tags: ["指标", "动画", "数字"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-count-up-metrics-on-view/"
---

Build a metrics band with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} on a neutral-900 background. Centre a small uppercase label and a one-line heading, then a four-column grid of metrics separated by hairline vertical rules on md and up. Each metric shows a large white figure with an optional prefix and suffix rendered as smaller muted spans, a medium-weight label under it, and a tiny grey note giving the measurement window. Use figures like 99.98 percent uptime, 2.4 million decisions a day, 41 milliseconds median latency and 14 regions. Then add JavaScript that watches the section with an IntersectionObserver, and the first time it becomes visible animates each figure from zero to its target over about 1.2 seconds using requestAnimationFrame with an ease-out curve, preserving decimal places and thousands separators, and skipping the animation entirely when the visitor prefers reduced motion.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
