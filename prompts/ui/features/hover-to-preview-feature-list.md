---
title: "悬停预览功能列表"
summary: "左侧列表悬停时切换右侧预览面板"
category: ui
subcategory: features
tags: ["悬停预览", "交互", "功能展示"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/features/features-hover-to-preview-feature-list/"
---

Build a feature explorer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} in two columns. The left column is a list of five rows; each row has a small square glyph tile, a medium-weight title, a one-line description and a chevron, and the active row gets a neutral-50 background with a neutral-900 left rule. The right column is a rounded-2xl bordered panel with a soft neutral-50 header strip showing a fake breadcrumb and three window dots, and a body that shows the active feature — a large glyph, a heading, a paragraph, and a two-column list of small facts with muted labels above medium values. Below the panel, a caption in muted small text. Then add JavaScript that switches the active row on both hover and click, swaps the panel content from a data map, and applies a short opacity transition to the panel body so the change reads as a fade rather than a jump. Stack the columns below lg with the panel underneath.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
