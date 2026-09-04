---
title: "活跃会话管理"
summary: "列出所有已登录设备、地点与时间，可单独或全部下线"
category: ui
subcategory: auth
tags: ["安全", "设备管理", "会话"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-active-sessions-manager/"
---

Create a security settings panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} listing active sessions. The header holds a heading, a muted line giving the count of signed-in devices, and a bordered red-toned button reading "Sign out everywhere else". Below, a list of five session rows in a bordered card: each row has a device glyph tile, the device and browser on one line with a small green "This device" pill on the current one, a muted second line giving the IP, city and last-active time, and on the right either a muted "Current" label or a ghost "Sign out" button. Give one row an amber left accent and a small warning line reading that the location is unusual. Under the list, a bordered neutral-50 note explaining that signing out revokes the refresh token immediately and that API keys are unaffected, with a link to the API keys page.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
