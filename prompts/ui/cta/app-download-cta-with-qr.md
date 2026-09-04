---
title: "App 下载引导（含二维码）"
summary: "桌面端显示二维码，移动端直接显示商店按钮"
category: ui
subcategory: cta
tags: ["App 下载", "二维码", "响应式"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/cta/cta-app-download-cta-with-qr/"
---

Create an app download call-to-action with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} as a dark rounded-2xl panel split into two columns. The left column holds a small label, a heading about picking up where you left off, a short paragraph, two store buttons drawn as bordered blocks with a glyph and stacked labels, and a muted line listing supported versions. The right column is a white rounded-2xl tile centred on the panel holding a QR code drawn purely in CSS — a grid of small squares with three larger finder squares in the corners built from nested divs — and under it a caption reading "Point your camera here". Hide the QR tile below the sm breakpoint since a phone cannot scan its own screen, and hide nothing on desktop. Keep the panel inside a max-w-5xl container with generous padding.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
