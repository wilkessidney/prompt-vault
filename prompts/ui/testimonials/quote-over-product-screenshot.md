---
title: "压在产品图上的证言"
summary: "评价文字叠在被夸的产品截图之上"
category: ui
subcategory: testimonials
tags: ["证言", "叠层", "产品图"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/testimonials/testimonials-quote-over-product-screenshot/"
---

Create a testimonial card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that overlays a quote on a product screenshot. Build the screenshot from markup: a rounded-2xl dark card with a fake toolbar of three dots and a monospaced path, then a body showing a small stat row and a bar chart of eight columns of varying heights drawn with divs. Over the lower half, lay a white rounded-2xl card with a soft shadow, offset to the left and overlapping the frame edge, holding a quotation mark glyph, a two-sentence quote in medium type, and an attribution row with an avatar, name and role. On the right of the composition, stack three small metric chips vertically, each with a figure and a tiny label, aligned to the frame edge. Ensure the overlay stacks below the frame rather than overlapping on small screens.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
