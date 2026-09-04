---
title: "积分包充值"
summary: "一次性额度包，买得越多单价越低"
category: ui
subcategory: pricing
tags: ["定价", "积分", "充值"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-credit-pack-top-up/"
---

Build a prepaid credit purchase block with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. A centered heading, then three selectable pack cards built as labels wrapping hidden radio inputs — Starter 1,000, Growth 5,000, Scale 25,000 — each showing the credit count in large type, its one-time price, and a small saving pill on the discounted packs; use peer-checked variants so the chosen card gets a dark border and a ring. Underneath, a grey summary panel with a quantity stepper (minus, count, plus) on the right of its heading row, a line-item list for credits, effective rate and volume discount, a bold "Total today" row, a full-width dark buy button, and a footnote that credits never expire. Carry the credit count and price on each radio as data attributes. Then add JavaScript that reprices everything whenever the pack or quantity changes: multiply the pack by the quantity, format the credit count with thousands separators, show the effective per-credit rate to three decimals, compare it against the $0.02 list rate to show the saving (hiding that row when there is none), clamp the stepper between 1 and 20, and write the total into the summary.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
