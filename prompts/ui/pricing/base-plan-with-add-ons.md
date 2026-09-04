---
title: "基础套餐 + 可选加购"
summary: "左侧基础套餐卡，右侧可勾选加购模块并实时算总价"
category: ui
subcategory: pricing
tags: ["定价", "加购", "计算"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-base-plan-with-add-ons/"
---

Create an à-la-carte pricing block with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. A dark rounded-2xl base plan card on the left showing the plan name, price, and what is included. On the right, a stacked list of optional add-on rows, each a label wrapping a checkbox carrying a data-price attribute, with a name, a one-line description, and a price on the far right; one row is pre-checked and highlighted with a ring. Below the list show a running total row and a checkout button. Then add JavaScript that recalculates the total from the base fee plus every checked add-on, moves the selected ring styling onto the rows that are actually checked, and updates the checkout button to name how many add-ons are included.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
