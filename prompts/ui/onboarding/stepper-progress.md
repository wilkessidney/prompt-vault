---
title: "步骤进度条"
summary: "带编号的步骤指示，标注当前所在"
category: ui
subcategory: onboarding
tags: ["引导", "步骤条", "进度"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-stepper-progress/"
---

Build an onboarding stepper with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a horizontal row of numbered step circles connected by lines, with completed steps filled dark, the current step ringed, and future steps muted. Below, a card with the current step title, a short description, and Back/Continue buttons. Then add JavaScript that actually walks the flow: hold the step copy in an array, repaint the circles and connector lines as done / current / upcoming when the index moves, swap the title and description, disable Back on the first step, and turn Continue into Finish on the last one before showing a completed state.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
