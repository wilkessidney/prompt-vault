---
title: "紧凑应用底栏"
summary: "产品内的细条底栏，含运行状态与语言切换"
category: ui
subcategory: footer
tags: ["页脚", "应用内", "紧凑"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/footer/footer-compact-app-footer-bar/"
---

Create a slim in-product footer bar with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} — the kind that sits under a logged-in dashboard rather than a marketing page. One row, small type, a top border, with three zones: on the left a wordmark, a monospaced build version pill, and a status link showing a green dot with "All systems normal"; in the middle a set of quiet utility links (Docs, Keyboard shortcuts, Report a bug, Changelog) that collapse away below md; on the right a keyboard hint showing ⌘ and K in individual key caps, a region and language select styled as a bare control, and the copyright. Keep the whole bar to a single line on desktop, let it wrap into a tidy stack on mobile, and use hover colours rather than underlines so it stays visually quiet under an app.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
