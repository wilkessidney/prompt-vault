---
title: "账号锁定与恢复"
summary: "连续输错导致锁定后的提示页，同时给出解锁与找回路径"
category: ui
subcategory: auth
tags: ["登录", "安全", "账号恢复"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-account-locked-with-recovery/"
---

Design a locked-account screen with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centre a max-w-md card led by a red-tinted round tile with a shield glyph, a heading reading "Too many attempts", and a paragraph explaining the account is locked for fifteen minutes after five failed sign-ins. Under it, a bordered neutral-50 panel showing a countdown as a large monospaced figure with a thin progress track beneath it that empties as the timer runs, plus a muted caption naming the time the lock lifts. Below, a "Cannot wait?" section with three recovery rows as bordered buttons — email a sign-in link, use a recovery code, contact an administrator — each with a glyph tile, a label and a one-line description. Finish with a muted footer line saying the attempt was logged with its IP and location. Then add JavaScript that counts down from fifteen minutes, updates the figure and the track each second, and swaps the panel for a green "You can try again" state with a button when it reaches zero.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
