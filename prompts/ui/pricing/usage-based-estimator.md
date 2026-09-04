---
title: "按用量估算器"
summary: "拖动用量滑块估算月度费用"
category: ui
subcategory: pricing
tags: ["定价", "按量", "估算"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-usage-based-estimator/"
---

Build a usage-based pricing estimator with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. A wide rounded-3xl card split into two parts: on the left a range slider labelled "Monthly API calls" with the current value shown large above it and min/max hints below, plus a second slider for seats. On the right a bordered summary panel listing base platform fee, metered usage, and seats as line items, a divider, and a bold estimated monthly total with a per-unit footnote and a CTA button. Style the sliders with accent-neutral-900 and give every value that changes its own id. Then add JavaScript that recomputes the estimate on every slider input: map the call slider through a quadratic curve from 100K to 10M so the low end stays fine-grained, charge $0.05 per 1K calls beyond a 500K included tier, add $12 per seat on top of a $49 platform fee, and write the formatted call count, line items, and total back into the panel.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
