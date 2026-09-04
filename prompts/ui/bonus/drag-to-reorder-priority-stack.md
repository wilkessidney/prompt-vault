---
title: "拖拽排序优先级列表"
summary: "支持鼠标拖拽与键盘操作调整顺序，实时更新排名"
category: ui
subcategory: bonus
tags: ["拖拽", "排序", "可访问性"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-drag-to-reorder-priority-stack/"
---

Build a reorderable priority list with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-lg card headed by a title, a count of the items and a reset button. Each row is a card with a grip handle on the left, a large monospace rank number, the item title with a one-line note under it, an owner initial in a round badge on the right, and a small "Up next" pill on whichever row sits at the top. Rows lift slightly on hover and the one being dragged goes semi-transparent with a dark ring. Add a hint line explaining that the handle can be dragged or focused and moved with the arrow keys, and a visually hidden live region. Then add JavaScript using pointer events: capture the pointer on the handle, reorder by comparing the pointer against the midpoints of the other rows, renumber the ranks and move the pill as the order changes, support arrow-key moves from a focused handle, keep focus on the handle after a keyboard move, and announce the new position in the live region. Reset restores the original order.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
