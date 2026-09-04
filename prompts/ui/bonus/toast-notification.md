---
title: "Toast 轻提示"
summary: "浮动的成功或失败提示，可关闭并自动消失"
category: ui
subcategory: bonus
tags: ["Toast", "反馈", "通知"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-toast-notification/"
---

Build a toast notification with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a floating card fixed to the bottom-right with an icon dot, a title, a short description, a close button, and a thin timer bar along the bottom. Use a subtle shadow and rounded-xl. Then add JavaScript exposing a small toast(title, message, variant) function that clones a hidden template into a stack, so several toasts can sit above one another, each sliding in, counting its timer bar down over five seconds, then sliding out and removing itself — pausing the countdown while the pointer is over it, and dismissing immediately on the close button. Include success and error variants that swap the icon colours.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
