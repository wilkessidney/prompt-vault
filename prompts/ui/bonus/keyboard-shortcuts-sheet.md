---
title: "快捷键速查表"
summary: "弹窗内可搜索的快捷键清单，按分组排列"
category: ui
subcategory: bonus
tags: ["快捷键", "速查表", "弹窗"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-keyboard-shortcuts-sheet/"
---

Create a keyboard shortcuts dialog with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a fixed overlay with a dark backdrop centring a max-w-3xl white card. The header holds a title, a muted line naming the platform detected, a search field and a close cross. The body is a two-column grid of four groups — General, Navigation, Editing and View — each with a small uppercase heading and five rows; every row has the action name on the left and its keys on the right rendered as separate kbd elements with a muted plus between them. The footer shows a hint that the sheet opens with a question mark and a link to full documentation. Then add JavaScript that filters rows live on the search text, hides any group that empties, closes on Escape, on the cross and on a backdrop click, and reopens the dialog when the question mark key is pressed.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
