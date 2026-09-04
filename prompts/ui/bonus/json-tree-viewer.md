---
title: "JSON 树形查看器"
summary: "可折叠的 JSON 节点树，标注类型与子元素数量"
category: ui
subcategory: bonus
tags: ["JSON", "树形", "调试工具"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-json-tree-viewer/"
---

Create a JSON viewer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-2xl card with a toolbar holding a title, a muted node count, and two small buttons for expand all and collapse all, plus a copy button. The body renders a nested structure as indented rows: object and array nodes are buttons with a rotating chevron, the key in a medium weight, a muted type label, and a count of children in brackets; leaf rows show the key, a colon, and the value coloured by type — strings in green, numbers in blue, booleans in purple and null in muted grey — with strings quoted. Indentation is done with left padding and a faint vertical guide line per level. Then add JavaScript that renders the tree from an object literal, toggles a node open or closed, implements expand and collapse all, and copies the formatted JSON to the clipboard.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
