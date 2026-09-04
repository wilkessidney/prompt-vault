---
title: "锚点导航（含滚动监听）"
summary: "章节链接随滚动高亮当前所在区块"
category: ui
subcategory: nav
tags: ["导航", "锚点", "滚动监听"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-anchor-nav-with-scroll-spy/"
---

Create a marketing page anchor navigation with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The nav is a sticky bar under the header holding five section links in a horizontal row on a white background with a hairline bottom border and, on the right, a small dark "Get started" button that only appears once the page has scrolled past the hero. Links are small and muted, with the active one in neutral-900 carrying a subtle neutral-100 pill background. Below the nav, five demonstration sections with ids, each a tall block with a heading and a paragraph so the behaviour can be seen. Then add JavaScript that observes the sections with IntersectionObserver using a root margin biased toward the top of the viewport, marks the matching link active, reveals the button after 400 pixels of scroll, and scrolls smoothly with an offset that accounts for the sticky bar when a link is clicked.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
