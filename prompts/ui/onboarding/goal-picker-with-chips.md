---
title: "目标选择（chips 多选）"
summary: "多选目标标签，决定后续引导内容"
category: ui
subcategory: onboarding
tags: ["引导", "多选", "Chips"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-goal-picker-with-chips/"
---

Build a goal selection onboarding step with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centre a max-w-2xl column with a step label, a heading asking what the person wants to do first, and a muted line saying they can pick more than one. Below, a grid of nine selectable chips laid out two or three per row: each is a bordered rounded-xl button with a glyph tile, a short label and a muted one-line description, and when selected it gains a neutral-900 border, a soft neutral-50 background and a small check badge in the corner. Under the grid, a live line reading how many are selected with a minimum of one, and a footer with a ghost "Skip" and a dark Continue button that stays disabled until at least one chip is chosen. Then add JavaScript that toggles selection, caps the choice at four with a small inline note when the cap is reached, and keeps the counter and button state in sync.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
