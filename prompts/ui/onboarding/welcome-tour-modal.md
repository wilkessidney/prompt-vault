---
title: "欢迎引导弹窗"
summary: "首次进入的弹窗，给出三件可以先试的事"
category: ui
subcategory: onboarding
tags: ["引导", "弹窗", "首次"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-welcome-tour-modal/"
---

Build a first-run welcome modal with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a fixed inset-0 overlay with a blurred dark backdrop centring a max-w-lg white card with rounded-2xl corners. The card opens with a wide banner area drawn as a soft neutral gradient holding a large glyph and a small monospaced version tag in the corner. Under it, a heading welcoming the person by name, a paragraph of two sentences, and three suggested actions as bordered rows with a glyph tile, a title, a one-line description and a right chevron, the first row carrying a small "Start here" pill. The footer has a checkbox reading "Do not show this again" on the left and two buttons on the right, a ghost "Skip the tour" and a dark "Take the tour". Then add JavaScript that closes the modal on either button, on Escape and on a backdrop click, and remembers the checkbox choice in localStorage so a return visit skips it.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
