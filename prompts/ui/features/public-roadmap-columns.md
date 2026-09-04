---
title: "公开路线图看板"
summary: "已发布、进行中、考虑中三列"
category: ui
subcategory: features
tags: ["路线图", "看板", "透明"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/features/features-public-roadmap-columns/"
---

Build a public roadmap section with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} as three columns. Each column has a header row with a coloured dot, a title — Shipped, In progress, Exploring — and a muted count, then a stack of cards. Every card is a bordered rounded-xl tile with a small category label, a title in medium weight, a two-line description, and a footer row holding either a shipped date with a check glyph, a thin progress bar with a percentage, or an upvote button with a count. Give the shipped column faintly muted text so attention lands on the live work. Under the columns, a bordered strip inviting people to suggest something, with a one-line pitch and a dark button. Then add JavaScript that makes the upvote buttons toggle: incrementing the count and filling the button dark on first click, reverting on a second, and keeping a running total in the exploring column header.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
