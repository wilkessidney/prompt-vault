---
title: "本地货币定价"
summary: "切换地区后所有套餐价格同步换算"
category: ui
subcategory: pricing
tags: ["定价", "国际化", "货币"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-prices-in-local-currency/"
---

Create a pricing section with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that adapts to the visitor's region. Above the three plan cards, a right-aligned control row with a small globe glyph and a native select listing US Dollar, Euro, British Pound, Japanese Yen, and Indian Rupee. Each of the three cards (Starter, Team, Business) shows a plan name, a large price with a /mo suffix, a per-extra-seat line, a short description, a feature list, and a button; give every element that holds money a data-usd attribute with its dollar amount so nothing is hard-coded twice. Under the grid, a muted footnote about the tax treatment of the selected region. Then add JavaScript holding one record per currency — exchange rate, locale, tax note — that on change converts each data-usd amount, rounds sensibly (whole units for western currencies, nearest hundred for yen and rupee), formats it with Intl.NumberFormat so the symbol and separators match the locale, and swaps the footnote text.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
