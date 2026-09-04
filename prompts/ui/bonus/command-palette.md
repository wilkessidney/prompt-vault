---
title: "命令面板 (⌘K)"
summary: "Spotlight 风格的全局搜索浮层，纯键盘导航"
category: ui
subcategory: bonus
tags: ["命令面板", "快捷键", "搜索"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-command-palette/"
---

Build a command palette overlay with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a dimmed backdrop with a blur, and a centered max-w-xl panel positioned toward the top of the screen with a heavy shadow and rounded-2xl corners. The panel has a search row with a leading glyph, a borderless input, and an Esc key hint; below it a scrollable results area grouped by small uppercase section labels, where each row shows an icon tile, a label, and a right-aligned keyboard shortcut, with the first row highlighted as the active selection. Close with a footer bar showing navigation hints using kbd elements. Then add the JavaScript a palette actually needs: filter rows as you type and hide any group heading left with no matches, move the highlight with the arrow keys wrapping at both ends and scrolling the active row into view, activate the highlighted row on Enter, follow the mouse so hover and keyboard selection never disagree, close on Escape or a click on the backdrop, and reopen on ⌘K / Ctrl-K with the query reset and the input focused.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
