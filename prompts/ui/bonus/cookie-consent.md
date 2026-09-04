---
title: "Cookie 同意条"
summary: "底部隐私横幅，支持按类别分别授权"
category: ui
subcategory: bonus
tags: ["Cookie", "合规", "横幅"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-cookie-consent/"
---

Build a cookie-consent banner with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a fixed bottom bar with a short privacy message and a link, plus "Accept all" and "Reject" buttons. Keep it unobtrusive with a soft shadow and rounded corners. Then add the JavaScript that gives it meaning: record the choice and the timestamp in localStorage, hide the banner with a slide-down transition once a choice is made, skip showing it at all on later visits, wrap every storage call in try/catch so private-mode browsers do not throw, and dispatch a custom cookie-consent event carrying the decision so analytics or embeds can subscribe rather than being hard-wired into the banner.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
