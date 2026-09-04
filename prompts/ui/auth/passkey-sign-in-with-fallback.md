---
title: "Passkey 登录（含密码兜底）"
summary: "优先唤起生物识别，不支持时降级到密码登录"
category: ui
subcategory: auth
tags: ["Passkey", "生物识别", "登录"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-passkey-sign-in-with-fallback/"
---

Build a passkey-first sign-in card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centre a max-w-sm white card with rounded-2xl corners and a soft border on a neutral-50 page. Inside: a small dark rounded logo tile, a heading reading "Sign in to Northwind", and a muted line saying the account uses a passkey. Show the remembered account as a bordered row with a round avatar initial, the email address, and a "Not you?" link on the right. Under it, a full-width dark button labelled "Continue with passkey" carrying a shield glyph, then a caption explaining the device will ask for Face ID, a fingerprint or the device PIN. Add a hairline divider with the word "or", two outline buttons for "Use a one-time code" and "Sign in with password", and a footer line about security keys. Keep every control at least 44px tall and give the buttons visible focus rings.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
