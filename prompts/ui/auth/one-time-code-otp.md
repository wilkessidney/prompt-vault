---
title: "一次性验证码 OTP"
summary: "六位验证码输入：自动跳格、退格回退、整段粘贴、重发倒计时"
category: ui
subcategory: auth
tags: ["验证码", "OTP", "表单"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-one-time-code-otp/"
---

Build an OTP verification screen with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centered card explaining a 6-digit code was sent to an email. Show six separate square inputs (size-12, text-center, large font) in a row, an active-state focus ring, a "Verify" button, and a muted line "Didn't get it? Resend in 0:30". Keep it clean and centered. Then add JavaScript for the behaviour people expect from a real code field: advance to the next box as each digit is typed, step back on Backspace from an empty box, move with the arrow keys, spread a pasted 6-digit code across all six boxes at once, strip anything that is not a digit, keep the Verify button disabled until all six are filled, and run the resend line down from 0:30 to a live "Resend code" button.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
