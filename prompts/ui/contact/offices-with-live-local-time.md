---
title: "办公室卡片（含当地时间）"
summary: "各城市办公室卡片，实时显示当地时间是否在工作时段"
category: ui
subcategory: contact
tags: ["办公地点", "时区", "卡片"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-offices-with-live-local-time/"
---

Build an offices section with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. A heading, a line inviting people to drop in, then a four-column grid of city cards. Each card carries a data-office attribute and shows the city name with the country under it, a two-line street address, a phone number and an email link, and a footer strip separated by a border holding a live local time in monospaced type on the left and an open/closed pill on the right. Keep the cards light — thin border, rounded-2xl, generous padding — and drop to two columns on sm and one on mobile. Then add JavaScript that stores each office's IANA time zone and opening hours, formats the current time in that zone with Intl.DateTimeFormat, decides whether the desk is open from the zone's own weekday and hour rather than the visitor's, paints the pill green for open and grey for closed with an "Opens 09:00" style hint when shut, and refreshes every thirty seconds so the clocks stay honest.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
