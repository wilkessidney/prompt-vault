---
title: "回电预约卡"
summary: "填手机号、时区与方便接听的时间段"
category: ui
subcategory: contact
tags: ["回电", "预约", "表单"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-request-a-callback-card/"
---

Build a callback request card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-lg bordered card with a phone glyph tile, a heading reading "We will call you", and a line saying most calls happen within the hour during office hours. The form has a phone field with a country code select rendered as an addon inside the input shell, a timezone select pre-filled with a detected zone, and a preferred window control: six time-slot chips in a two-row grid — this morning, this afternoon, this evening, tomorrow morning, tomorrow afternoon and "any time" — where the selected chip is dark and unavailable ones are dimmed and disabled. Under it, an optional one-line "what is it about" field, a submit button, and a small print row with a shield glyph noting the number is used only for this call and never added to a marketing list.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
