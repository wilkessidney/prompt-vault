---
title: "平台抽成分层"
summary: "成交量越高佣金率越低"
category: ui
subcategory: pricing
tags: ["定价", "抽成", "市场"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-marketplace-take-rate-tiers/"
---

Design a commission pricing section with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for a marketplace. Open with a heading, a paragraph explaining there is no monthly fee and the platform only earns when the seller does, and a small pill reading "No listing fees". Below, a bordered rounded-2xl table with four rows: monthly sales volume bands on the left, the take rate as a large percentage in the middle, and the effective fee on a sample order on the right; highlight the second row as the typical band with a neutral-50 background and a small "Most sellers" pill. Under the table, three explainer cards in a grid covering payout timing, chargeback handling and what the rate includes, each with a glyph tile and two lines of copy. Finish with a worked example strip on neutral-900: a sale amount, the commission, the payment processing cost and the seller payout, laid out as four cells separated by vertical rules.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
