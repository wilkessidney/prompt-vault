---
title: "活动 Hero（含倒计时）"
summary: "日期、地点与到开幕前的实时倒计时"
category: ui
subcategory: hero
tags: ["Hero", "活动", "倒计时"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/hero/hero-event-hero-with-countdown/"
---

Create a conference hero with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a two-column layout on a white page: the left column holds a monospaced date-and-city line, a very large headline with the event name split across two lines and the year in a lighter weight, a paragraph, a pair of buttons — a dark "Get tickets" and a bordered "See the programme" — and a small line saying how many tickets remain at the current price. The right column is a bordered rounded-2xl card containing a four-cell countdown grid with large monospaced numbers over tiny uppercase labels for days, hours, minutes and seconds, a hairline, then three detail rows with glyph tiles for venue, dates and format. Then add JavaScript that counts down to a fixed date, pads each unit to two digits, updates every second, and replaces the grid with a "Doors are open" message when the target passes.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
