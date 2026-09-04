---
title: "移动端抽屉菜单"
summary: "汉堡按钮滑出全高面板"
category: ui
subcategory: nav
tags: ["导航", "抽屉", "移动端"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-mobile-drawer-menu/"
---

Build a mobile navigation with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The bar itself is a sticky top row with a wordmark on the left, a horizontal link list hidden below md, a "Sign in" link and a dark "Get started" button on the right also hidden below md, and a hamburger button of three stacked lines shown only on small screens. The drawer is a fixed inset-0 layer containing a black backdrop with a blur and a right-hand panel of eighty percent width, max-w-xs, full height, white, holding a header with the wordmark and a close cross, a stack of large tappable links with hairline dividers, a small section labelled Resources with three muted links, and a footer with the two buttons stacked full width. Then add JavaScript that opens and closes the drawer with a translate-x transition and a fading backdrop, locks body scroll while open, closes on backdrop click, on Escape and on any link click, and moves focus to the close button on open.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
