---
title: "头像切换证言"
summary: "一排头像，点谁显示谁的故事"
category: ui
subcategory: testimonials
tags: ["证言", "头像", "切换"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/testimonials/testimonials-avatar-tab-quote-switcher/"
---

Build a testimonial switcher with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} controlled by a row of avatars. Centre a max-w-3xl column. At the top, a horizontal row of five circular avatars with initials on coloured backgrounds; the active one is full size with a neutral-900 ring and the others are slightly smaller and dimmed. Below, the quote panel: a company wordmark in muted uppercase, a large quote in relaxed leading, an attribution block with name and role, and a small row of three metric chips with a label and value. Under the panel, a pair of previous and next chevron buttons on the left and a set of five thin progress dashes on the right where the active one is filled. Then add JavaScript that renders the panel from a data array, wires the avatars and the chevrons, updates the ring and dimming states, advances automatically every seven seconds, and pauses the timer when the pointer is over the panel.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
