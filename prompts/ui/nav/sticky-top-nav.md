---
title: "顶部粘性导航"
summary: "Logo + 链接 + CTA 的经典吸顶栏"
category: ui
subcategory: nav
tags: ["导航", "吸顶", "通用"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-sticky-top-nav/"
---

Build a sticky top navigation bar with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a translucent, blurred, bordered bar. Left: logo mark + wordmark. Center/right: horizontal nav links (hidden on mobile). Far right: a ghost "Sign in" link and a solid "Get started" button. Include a hamburger button that appears below md, and a collapsed mobile panel underneath repeating the links and actions. Then add JavaScript to make the hamburger work: toggle the panel, swap the icon between bars and an X, keep aria-expanded and aria-controls honest, close the panel when a link inside it is tapped or when Escape is pressed, and close it automatically if the viewport grows past the md breakpoint while it is open.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
