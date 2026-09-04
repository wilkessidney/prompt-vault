---
title: "Markdown 实时预览"
summary: "左写右看的双栏编辑器，边打字边渲染"
category: ui
subcategory: bonus
tags: ["Markdown", "编辑器", "实时预览"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-markdown-live-preview/"
---

Build a split markdown editor with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a bordered rounded-2xl card with a toolbar holding a document title on the left, a word and character count in the middle, and on the right a two-option segmented control for Split and Preview plus a small "Copy HTML" button. Below, a two-column grid: the left pane is a monospaced textarea on a faint background with no border and a comfortable line height, pre-filled with a short sample document; the right pane is the rendered output on white with sensible typographic spacing. Then add JavaScript implementing a small markdown renderer covering headings up to level three, bold, italic, inline code, links, unordered lists, blockquotes and fenced code blocks, escaping HTML first so pasted markup cannot inject; re-render on input with a short debounce, keep the counts current, switch layout when Preview is selected, and copy the generated HTML.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
