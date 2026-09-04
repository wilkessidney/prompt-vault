---
title: "门店查询器"
summary: "按邮编搜索，旁边列出就近门店"
category: ui
subcategory: contact
tags: ["门店", "搜索", "地图"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-store-locator-with-results/"
---

Build a store locator with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} in two panes. The left pane has a search row with a location field carrying a pin glyph and a "Use my location" button, three filter chips for open now, click and collect, and repairs, and then five result cards: each with the shop name, a distance in monospace on the right, a two-line address, an open or closed pill with today hours, and a row of two small text links for directions and calling. The right pane is a stylised map placeholder built from a tinted grid with five numbered markers positioned absolutely and one highlighted larger in dark. Below the panes, a bordered strip about a shop that is temporarily closed, with a glyph and a date. Then add JavaScript that links list and map — hovering a card enlarges its marker, clicking selects both, and the selected card gains a neutral-900 ring.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
