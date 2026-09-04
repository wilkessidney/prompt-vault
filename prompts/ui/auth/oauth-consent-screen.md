---
title: "OAuth 授权同意页"
summary: "逐条列出第三方应用申请的权限范围，供用户分别授予"
category: ui
subcategory: auth
tags: ["OAuth", "授权", "权限"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-oauth-consent-screen/"
---

Build an OAuth authorisation screen with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centre a max-w-md card. At the top, two rounded tiles side by side with a small connecting arrow between them — the third-party app on the left and your product on the right — then a heading reading "Sunbeam wants to access your workspace" and a muted line naming the account it would connect. Below, a bordered list of four permission rows, each with a glyph tile, a scope title in medium weight, a plain-English explanation and, on two of them, a small "Read only" pill. Under the list, a warning-toned line reminding the person that access can be revoked at any time from settings. Finish with a full-width dark "Allow access" button, a bordered "Cancel" button under it, and a footnote in small text giving the developer name and the redirect host in monospace.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
