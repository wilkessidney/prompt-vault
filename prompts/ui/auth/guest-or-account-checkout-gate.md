---
title: "结算登录墙"
summary: "结账前给出三条路：游客下单、已有账号登录、新用户注册"
category: ui
subcategory: auth
tags: ["电商", "登录墙", "转化"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-guest-or-account-checkout-gate/"
---

Build a checkout identity step with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} offering three routes. Use a max-w-lg card with a small step label reading "Step 1 of 3", a heading, and a muted line saying an account is optional. The first block is the recommended route: a bordered card with a neutral-900 ring holding a heading, an email field, a dark "Continue as guest" button and a muted line explaining an account can be created afterwards from the receipt. Below a divider labelled "or", two compact routes side by side: a bordered card for signing in with an email field, a password field and an outline button, and a bordered card for social sign-in with two full-width provider buttons. At the bottom, a row of three trust notes with glyphs — encrypted payment, order tracking by email, and no marketing without consent — plus a line linking terms and privacy.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
