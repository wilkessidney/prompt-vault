---
title: "带一键展开的 FAQ"
summary: "计数加一个开关控制全部答案展开收起"
category: ui
subcategory: faq
tags: ["FAQ", "批量展开", "交互"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-faq-with-expand-all-control/"
---

Build an FAQ block with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that gives readers bulk control. The header row has a heading on the left and, on the right, a muted count reading how many of the questions are open plus a small bordered button that toggles between "Expand all" and "Collapse all". Below, seven details elements as bordered cards with the question in medium weight, a muted one-line preview of the answer that is hidden once the item opens, and a chevron that rotates. Answers are relaxed grey prose. Add a footer row with a bordered box offering a link to the full documentation and a support email. Then add JavaScript that keeps the counter in sync with any toggle, switches the button label and behaviour depending on whether every item is already open, and updates the preview visibility when an item opens or closes.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
