---
title: "邮箱验证等待页"
summary: "等待验证的状态页，重发按钮带冷却倒计时"
category: ui
subcategory: auth
tags: ["邮箱验证", "倒计时", "等待态"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-verify-email-with-resend-timer/"
---

Create an email verification waiting screen with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centre a max-w-sm card holding a neutral-tinted round tile with an envelope glyph, a heading reading "Check your inbox", and a line saying a verification link was sent to an address shown in medium weight with a small "change" link beside it. Add three muted hint rows with check glyphs — the link works once, it expires in an hour, and the tab can be closed once verified. Then a full-width outline "Resend email" button that starts disabled with a countdown in its label, a small muted line reporting how many times it has been sent, and a footer link to contact support. Then add JavaScript that starts a thirty second countdown, updates the button label each second, enables it when the countdown ends, and on click increments the send counter, updates the "sent" line and restarts the countdown from a longer interval each time.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
