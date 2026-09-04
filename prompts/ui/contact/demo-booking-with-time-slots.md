---
title: "演示预约（选时段）"
summary: "先选日期、再选时段，最后填信息确认"
category: ui
subcategory: contact
tags: ["预约", "日历", "表单"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-demo-booking-with-time-slots/"
---

Create a demo booking panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a left column with the host avatar, host name and role, the meeting length with a clock glyph, the timezone, and three bullet points about what the call covers. A right column shows a horizontal row of selectable day chips (weekday abbreviation over the date number) with one selected in dark, then a grid of time-slot buttons where one is disabled, and a full-width confirm button below. Stack the columns on mobile. Then add JavaScript that makes the picker behave: selecting a day highlights it and loads that day's slots — each day offers different availability, and a day with none shows a "fully booked" message — selecting a slot highlights it and clears when the day changes, and the confirm button stays disabled until both are chosen, then names the exact day and time it will book.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
