---
title: "底部常驻转化条"
summary: "固定在底部的优惠条，可关闭"
category: ui
subcategory: cta
tags: ["CTA", "吸底", "横幅"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/cta/cta-sticky-bottom-conversion-bar/"
---

Create a sticky bottom conversion bar with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a fixed bar pinned to the bottom of the viewport with a blurred translucent dark background and a top border. Inside a max-width row, show a bold short offer on the left with a strikethrough original price and a highlighted discounted price, a countdown chip in the middle, a primary light button on the right, and a small dismiss X. Hide the countdown chip below sm. Then add JavaScript that ticks the countdown down to a fixed deadline once per second in days/hours/minutes/seconds, swaps the chip to an "Offer ended" state when it reaches zero, and dismisses the bar with a slide-down transition — remembering the dismissal in localStorage so it stays gone on the next visit.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
