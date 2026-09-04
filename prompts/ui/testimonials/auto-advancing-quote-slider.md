---
title: "自动轮播证言"
summary: "一次展示一句，圆点带进度环"
category: ui
subcategory: testimonials
tags: ["证言", "轮播", "自动"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/testimonials/testimonials-auto-advancing-quote-slider/"
---

Create a single-quote testimonial slider with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} on a light panel. Centre a small uppercase eyebrow, then a large serif-weight quote in text-2xl that has room for three lines, an attribution block with an avatar circle, name, role and company, and a company logotype line in muted type. Under it, a control row with a left arrow, a set of dots, and a right arrow. Everything that changes gets an id so it can be rewritten. Then add JavaScript that holds an array of quotes and cycles them every six seconds: fade the panel out and back in around each swap using opacity classes, rebuild the dots so the current one is a wide pill, let arrows and dot clicks jump around with the timer restarting after a manual move, pause the rotation while the pointer is over the panel or a control has keyboard focus, and wrap around at both ends.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
