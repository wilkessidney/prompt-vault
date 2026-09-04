---
title: "架构流程图"
summary: "用方框与箭头画清数据流转路径"
category: ui
subcategory: features
tags: ["架构图", "流程图", "技术"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/features/features-architecture-flow-diagram/"
---

Build an architecture explainer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that draws a data flow without images. Above the diagram, a heading and a muted line. The diagram is a horizontal row of four stages on lg screens, stacking vertically on small ones: each stage is a bordered rounded-xl card with a small numbered label, a glyph tile, a title, a one-line description and two tiny monospaced tags; between stages, an arrow glyph centred in a narrow column that rotates to point downward when stacked. Above the row, a dashed-border band labelled "Your infrastructure" enclosing the first stage only, to show the boundary. Under the diagram, three footnote cards explaining what never leaves the customer network, where encryption is applied, and what is retained, each with a glyph and two lines. Keep everything monochrome except one green accent on the encryption note.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
