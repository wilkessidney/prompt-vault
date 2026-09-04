---
title: "故障排查决策树"
summary: "一次问一个问题，逐步收敛到答案"
category: ui
subcategory: faq
tags: ["排查", "决策树", "引导"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-troubleshooting-decision-tree/"
---

Build a guided troubleshooting widget with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-xl bordered card with a heading reading "Let us narrow it down", a muted subline, and a breadcrumb row of answered steps rendered as small pills with the chosen answers and a reset link on the right. The body shows one question at a time: a question in medium weight and two or three full-width answer buttons as bordered rows with a chevron. The final state replaces the question with a resolution panel — a tinted box with a title, two paragraphs, a monospaced command where relevant, and two buttons for marking it solved or contacting support. Then add JavaScript holding the tree as a nested object, rendering the current node, appending each answer to the breadcrumb, allowing a click on any breadcrumb pill to rewind to that point, and resetting the whole flow from the reset link.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
