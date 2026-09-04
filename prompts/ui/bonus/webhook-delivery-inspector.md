---
title: "Webhook 投递记录查看器"
summary: "展示每次投递的状态码、耗时与退避重试记录"
category: ui
subcategory: bonus
tags: ["Webhook", "调试", "日志"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-webhook-delivery-inspector/"
---

Build a webhook delivery inspector with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-4xl card split into a narrow left column listing recent deliveries and a wider right panel for the selected one. Each list row shows a coloured status dot, the event name in monospace, the response code and a relative timestamp, with the active row picked out by a tinted background. The right panel has a header with the event name, a status pill and a retry button, a small definition grid of endpoint, attempt count, signature and duration, then the request payload and the response body in dark monospace blocks. Beneath them, a row of attempt chips recording every try. Then add JavaScript that switches deliveries, and makes retry run a real exponential backoff — a countdown of two, four then eight seconds shown on the button, a new attempt chip each round that survives the repaint, and a failing delivery that finally returns two hundred on the third attempt and flips every status in the panel and the list to succeeded.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
