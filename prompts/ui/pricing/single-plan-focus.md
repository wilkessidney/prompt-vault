---
title: "单一套餐聚焦"
summary: "只推一个套餐，配月付/年付切换"
category: ui
subcategory: pricing
tags: ["定价", "单套餐", "切换"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-single-plan-focus/"
---

Build a single-plan pricing block with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centered card with a monthly/annual toggle (annual shows a "Save 20%" pill), a large price, a feature checklist in two columns, and one prominent CTA. Add a small "14-day money-back guarantee" note under the button. Give each toggle button a data-period attribute and ids to the price and the billing note, then add JavaScript that swaps the active pill styling and rewrites the price when the period changes — $29/mo billed monthly, $23/mo when billed annually — and shows the annual total charged up front in the note line.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
