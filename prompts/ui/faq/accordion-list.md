---
title: "手风琴 FAQ 列表"
summary: "用 details 元素实现的展开收起问答列表，无需 JS"
category: ui
subcategory: faq
tags: ["FAQ", "手风琴", "无 JS"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-accordion-list/"
---

Build an FAQ accordion with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} using native <details>/<summary> elements so it works without JavaScript. Each item is a bordered row with a question in the summary, a rotating chevron via marker or a span, and an answer paragraph that reveals on open. Stack items with dividers inside a max-w-2xl column and a heading on top. Then layer on optional JavaScript that turns it into a true accordion: when one item opens, close whichever one was open, so only a single answer shows at a time. Everything still works with the script removed — that is the point of building on details.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
