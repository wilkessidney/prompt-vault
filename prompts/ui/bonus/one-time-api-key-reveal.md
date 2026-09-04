---
title: "API Key 一次性展示"
summary: "密钥只显示一次，带倒计时与复制确认门槛"
category: ui
subcategory: bonus
tags: ["API Key", "安全", "倒计时"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-one-time-api-key-reveal/"
---

Design a one-time secret reveal panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-lg card. The header pairs a key-like glyph tile with a heading reading "Your new API key" and a muted line saying it will not be shown again. Below, a dark rounded-xl panel holding the key in monospace, initially masked as a row of dots, with a "Reveal" button and a copy button side by side on the right. Under the panel, a warning strip in amber tint noting that the key grants full write access and should go straight into a secret manager. Then a bordered detail list of three rows — key name, scopes as small pills, and created date. Close with a checkbox that must be ticked to enable the dark "I have stored it safely" button. Then add JavaScript that reveals the key, starts a thirty second countdown after which it re-masks, copies to the clipboard with a confirmation, and gates the confirm button on the checkbox.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
