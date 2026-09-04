---
title: "续费提醒横幅"
summary: "提示合同到期日，给出续费与不续费两个选择"
category: ui
subcategory: cta
tags: ["续费", "提醒", "SaaS"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/cta/cta-renewal-reminder-banner/"
---

Design an account renewal notice with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-3xl bordered rounded-2xl card with a neutral-900 header strip holding a calendar glyph, a heading reading "Your annual plan renews in 21 days" and the exact date in a monospaced pill on the right. The body is a two-column grid on sm: the left column lists the renewal terms as three labelled rows — plan, seats and amount, each with the value in medium weight and one showing a small "up from 20" note; the right column is a bordered neutral-50 block explaining what happens if nothing is done, in two short sentences. Below, a button row with a dark "Renew now and lock this rate", a bordered "Change plan" and a muted text link reading "Cancel renewal", plus a final line noting that a purchase order or updated billing details can be sent to the finance mailbox.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
