---
title: "拖拽对比 Hero"
summary: "文案在左，右侧是可拖动的效果对比面板"
category: ui
subcategory: hero
tags: ["Hero", "拖拽", "对比"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/hero/hero-before-after-drag-hero/"
---

Create a two-column hero with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: marketing copy on the left, an interactive before/after comparison on the right. The copy column has an eyebrow, a tight headline, a supporting paragraph, a dark CTA plus a ghost secondary button, and a small line of proof. The comparison column is a relative 4:3 rounded panel with overflow-hidden and select-none. Inside it, layer a polished "after" mock on neutral-900 (a header row, a chart block, three metric tiles) as the base, then an absolutely positioned "before" layer clipped by its own width holding a drab neutral-100 version of the same mock; each layer carries its own small corner label. Over both, a full-height drag handle: a thin white rule with a round shadowed grip, positioned by inline left percentage, and reachable by keyboard as a button. Then add JavaScript that sizes the inner "before" mock to the panel width so it never reflows while clipped, updates the clip width and handle position from pointer events while dragging (pointer capture so the drag survives leaving the panel), moves the divider 5% per arrow-key press when the grip is focused, clamps the value between 0 and 100, and re-measures on resize.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
