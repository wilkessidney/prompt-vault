---
title: "滚动吸附功能轮播"
summary: "可滑动的功能卡片，配箭头与圆点导航"
category: ui
subcategory: features
tags: ["轮播", "吸附滚动", "卡片"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/features/features-scroll-snap-feature-carousel/"
---

Create a horizontally scrolling feature carousel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The header row holds a title and subline on the left and two round arrow buttons on the right, hidden below sm. The track is a flex row with snap-x snap-mandatory, overflow-x-auto, scroll-smooth and a hidden scrollbar; each card is a shrink-0 snap-start article about 85% wide on mobile, 45% on sm and 31% on lg, with a rounded icon tile, a title, two lines of copy, and a subtle "Learn more →" link. Add an empty dots container under the track. Then add JavaScript that measures the first card plus the gap to scroll exactly one card per arrow press, builds one dot per card and marks the nearest one active as the track scrolls, lets a dot click jump to its card, fades out an arrow when the track is at either end, and recalculates on resize so the maths survives a breakpoint change.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
