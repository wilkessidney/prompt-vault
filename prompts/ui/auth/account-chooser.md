---
title: "账号选择器"
summary: "列出本机已登录过的多个身份供切换，也支持添加新账号"
category: ui
subcategory: auth
tags: ["登录", "多账号", "身份切换"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-account-chooser/"
---

Create an account chooser screen with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}, the kind shown when several accounts are already signed in. Centre a max-w-sm card on a neutral-50 page with a small brand tile, a "Choose an account" heading and a line naming the app requesting access. List three accounts as full-width rows: a coloured circular avatar with initials, the display name in medium weight, the email in muted small text, and on the right either a green "Active" pill or a muted "Signed out" label. Rows lift on hover with a neutral-50 background and keep a clear focus ring. Under the list, a dashed-border row with a plus glyph labelled "Use another account", then a footer with a "Sign out of all accounts" link and a line of legal text linking terms and privacy.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
