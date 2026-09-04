---
title: "多币种多语言导航"
summary: "国际站顶部含币种与语言切换"
category: ui
subcategory: nav
tags: ["导航", "国际化", "电商"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-nav-with-currency-and-language/"
---

Build a header for an international site with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The bar holds a wordmark on the left, five centre links, and on the right a locale group: a bordered pill button showing a globe glyph with the language code and a chevron, a second pill showing the currency code with its symbol, a vertical hairline, then a sign-in link and a dark button. Below the bar, an inline panel that is normally hidden and expands to show two columns of options — twelve languages as a grid of small buttons with the native name and the code, and eight currencies as rows with the code, name and symbol — with the current choices ringed. Then add JavaScript that opens and closes the panel from either pill, marks and stores the selection, updates both pill labels, closes on Escape or an outside click, and shows a small muted line naming the shipping region implied by the currency.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
