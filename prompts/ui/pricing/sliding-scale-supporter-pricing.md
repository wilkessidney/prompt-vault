---
title: "滑动定价（支持者模式）"
summary: "按自己认为的价值付款"
category: ui
subcategory: pricing
tags: ["定价", "滑动", "捐赠"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-sliding-scale-supporter-pricing/"
---

Create a pay-what-you-can pricing block with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for an independent or open-source product. Centre a max-w-2xl card with a heading, a paragraph explaining the software is the same at every price and the higher tiers fund the lower ones, and a row of three preset amount cards — Supporter, Standard and Patron — each with a monthly figure, a one-line description of who it is for, and a small label; the middle one is preselected with a neutral-900 border. Under them, a custom amount row with a currency addon and a numeric input, plus a slider tied to the same value. Then a distribution strip showing three thin bars labelled with the share of users at each tier. Finish with a dark button whose label carries the chosen amount and a muted line saying the price can be changed or paused at any time, no questions asked.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
