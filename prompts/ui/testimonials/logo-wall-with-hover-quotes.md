---
title: "悬停出评价的 Logo 墙"
summary: "鼠标悬停 Logo 即显示对应评价"
category: ui
subcategory: testimonials
tags: ["证言", "Logo 墙", "悬停"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/testimonials/testimonials-logo-wall-with-hover-quotes/"
---

Build a customer logo wall with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} where each logo reveals a quote on hover. Above the grid, a centred small label and a one-line heading. The grid is five columns on large screens and two on small, each cell a bordered rounded-xl tile with a fixed aspect ratio holding a muted uppercase wordmark centred, and, on hover or focus, an overlay that fades in showing a short quote in small white text on a neutral-900 background with the person name beneath. Include ten tiles. Under the grid, a centred row of three summary figures separated by dots, then a muted line offering the full customer list. Make the overlay keyboard reachable by using a group with focus-within and giving each tile a tabindex, and disable the reveal under a reduced-motion preference by keeping the transition instant rather than removing it.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
