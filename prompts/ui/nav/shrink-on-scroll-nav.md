---
title: "滚动收缩导航"
summary: "初始较高的头部，滚动后自动压缩"
category: ui
subcategory: nav
tags: ["导航", "滚动", "动效"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-shrink-on-scroll-nav/"
---

Create a header with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that starts tall and compacts on scroll. At rest the bar is roughly 88 pixels tall with a transparent background, a large wordmark, spaced-out links in slightly larger text and an outline call-to-action. Once the page has scrolled past 40 pixels it becomes 60 pixels tall with a white background, a hairline bottom border, a soft shadow, a smaller wordmark and a filled dark button, all handled by class toggles on a single container with transition utilities on height, padding, background and shadow. Add a thin reading-progress line pinned to the bottom edge of the header, filling in neutral-900 as the page scrolls. Include a page of placeholder blocks below so the behaviour is visible. Then add JavaScript that toggles the compact classes past the threshold using a passive scroll listener, and updates the progress line width from the scroll ratio.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
