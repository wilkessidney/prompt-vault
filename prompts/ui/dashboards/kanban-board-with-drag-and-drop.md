---
title: "可拖拽看板"
summary: "四列布局，卡片可拖拽，列头实时计数"
category: ui
subcategory: dashboards
tags: ["看板", "拖拽", "任务管理"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-kanban-board-with-drag-and-drop/"
---

Build a kanban board with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. A header row with the board name, a small avatar stack of collaborators and a dark "New task" button, then a horizontally scrollable flex row of four columns — Backlog, In progress, In review, Shipped — each a fixed-width neutral-50 panel with a rounded border. Every column header shows its name, a count badge, and a ⋯ menu glyph; below it a drop area marked with a data-column attribute holding the cards, and a quiet "+ Add task" button pinned at the bottom. A card is a white rounded tile with a coloured category chip, a task title, and a footer row with an avatar circle, a due date and a small comment count; mark each with a data-card attribute. Then add JavaScript that makes the cards draggable with the native HTML drag-and-drop events: fade and rotate the card while it is being dragged, tint the column under the pointer and ring it, insert the card above whichever card the pointer is nearest (or at the end of an empty column), and recount every column header after each drop.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
