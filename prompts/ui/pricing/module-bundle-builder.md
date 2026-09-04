---
title: "模块自由组合"
summary: "勾选需要的模块，总价实时变化"
category: ui
subcategory: pricing
tags: ["定价", "组合", "计算器"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-module-bundle-builder/"
---

Build a modular pricing configurator with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-4xl two-column grid. The left column is a list of six selectable module cards: each a bordered rounded-xl row with a checkbox on the left, a module name and a one-line description, and a price on the right; the core module is pre-selected and disabled with a muted "Required" label. Selected cards gain a neutral-900 border and a faint background. The right column is a sticky summary card listing the chosen modules as rows with names and prices, a bundle discount line in green that appears from three modules, a bold total, a dark checkout button and a muted note about monthly billing. Then add JavaScript that toggles modules, rebuilds the summary rows, applies a ten percent discount at three modules and fifteen at five, and updates the total and the button label with the module count.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
