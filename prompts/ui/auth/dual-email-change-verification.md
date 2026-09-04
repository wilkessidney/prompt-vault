---
title: "邮箱变更双重验证"
summary: "修改邮箱需在新旧两个邮箱分别点击确认"
category: ui
subcategory: auth
tags: ["安全", "邮箱验证", "表单"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-dual-email-change-verification/"
---

Create a dual email-change verification flow with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Show old and new email addresses as two numbered steps, each with a six-digit code input, verification badge, and resend control. A progress line should connect the steps and the final Update email button should remain disabled until both codes are verified. Add JavaScript that formats numeric codes, verifies the demo codes 142857 and 620319 independently, updates the step states, runs a 20-second resend countdown per address, and announces when the email change is ready to submit.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
