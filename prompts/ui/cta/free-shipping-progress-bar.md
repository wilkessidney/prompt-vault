---
title: "免运费进度条"
summary: "显示购物车距离包邮门槛还差多少"
category: ui
subcategory: cta
tags: ["电商", "进度条", "转化"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/cta/cta-free-shipping-progress-bar/"
---

Create a shopping incentive bar with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-2xl bordered rounded-2xl card. The top row pairs a small van-like glyph tile with a sentence reading how much more is needed for free delivery, the remaining amount emphasised in medium weight, and the current basket total on the right in monospace. Under it, a thin track with a neutral-900 fill at seventy-two percent carrying three tick markers with tiny labels beneath — free delivery, free returns and a gift, the first two below the current position and rendered in green with check glyphs. Then a horizontal strip of three suggested products to close the gap, each a compact bordered tile with a small square placeholder, a name, a price and an "Add" text button. Finish with a muted line noting the delivery estimate and a link to the returns policy. Then add JavaScript that adds a product price to the basket when Add is clicked, moves the progress fill, rewrites the sentence, and switches it to a green "You have unlocked free delivery" state once the threshold is passed.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
