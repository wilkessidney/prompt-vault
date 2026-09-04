---
title: "粘性视觉 + 滚动步骤"
summary: "视觉区固定不动，文字步骤逐条滚过"
category: ui
subcategory: features
tags: ["粘性", "滚动叙事", "交互"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/features/features-sticky-visual-with-scrolling-steps/"
---

Create a two-column "how it works" section with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} where the visual sticks while the copy scrolls. The left column is a sticky panel from lg up — top-24, self-start — holding a rounded-2xl neutral-900 card with a mock interface inside: a title bar of three dots, a stack of skeleton rows, and one highlighted row that reads like a log entry. The right column is a list of four numbered steps, each generously spaced with a numeral in a bordered circle, a medium-weight heading, a paragraph of relaxed grey prose and a small monospaced detail line. Give each step a left border that turns neutral-900 for the first one. Under the last step, a text link with an arrow. Collapse to one column below lg with the visual first and no stickiness.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
