---
title: "双向滚动表白墙"
summary: "两行评价朝相反方向持续漂移"
category: ui
subcategory: testimonials
tags: ["证言", "滚动", "跑马灯"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/testimonials/testimonials-scrolling-wall-of-love/"
---

Create a scrolling testimonial wall with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} made of two horizontal rows that drift in opposite directions. Above them, a centred heading and a muted subline. Each row is an overflow-hidden container with edge mask fades holding a flex track of six compact quote cards, duplicated once for a seamless loop; the top row animates leftwards over forty seconds and the bottom row rightwards over fifty, both paused on hover and disabled entirely under a reduced-motion media query. Each card is a fixed-width bordered rounded-xl white tile with an avatar circle, a name and handle stacked, and two or three lines of quote text in relaxed grey. Define the keyframes in a small style block at the end, using a minus fifty percent translation so the duplicated half lines up exactly.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
