---
title: "应用顶栏（搜索 + Tab）"
summary: "产品头部含搜索框与分区 Tab"
category: ui
subcategory: nav
tags: ["导航", "顶栏", "Tab"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-app-bar-with-search-and-tabs/"
---

Create a two-row application header with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The top row holds a workspace switcher chip with a small avatar and a chevron, a wide centered search input showing a right-aligned keyboard shortcut hint, a notification bell with a red unread dot, and a user avatar. The second row is a set of underline tabs where the active tab has a dark bottom border and dark text while the others are muted, plus a right-aligned settings link. Separate the rows with a subtle border and let the tab row scroll horizontally on small screens. Then add JavaScript that wires up the two affordances the markup promises: make the ⌘K / Ctrl-K shortcut focus and select the search field (and Escape blur it), showing the correct modifier for the visitor platform in the hint, and move the active underline between tabs on click.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
