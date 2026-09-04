---
title: "底部标签栏"
summary: "移动端底部固定的标签导航"
category: ui
subcategory: nav
tags: ["导航", "移动端", "底部栏"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-bottom-tab-bar/"
---

Create a mobile bottom navigation with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Draw a narrow phone-shaped frame with a rounded border on a neutral background, containing a scrollable content area of placeholder blocks and, fixed to the bottom of the frame, a tab bar. The bar has five items with a glyph above a tiny label; the active item is neutral-900 with a small dot under the label while the others are muted, one carries a red notification dot on its glyph, and the middle item is a raised circular dark button with a plus glyph that sits slightly above the bar line. Add a safe-area strip below the tabs. Then add JavaScript that switches the active tab on tap, moves the indicator dot, updates the heading in the content area, and clears the notification dot the first time its tab is opened.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
