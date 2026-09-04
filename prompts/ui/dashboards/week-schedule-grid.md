---
title: "周视图日程网格"
summary: "七列时间块，带当前时间指示线"
category: ui
subcategory: dashboards
tags: ["日程", "周视图", "网格"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-week-schedule-grid/"
---

Build a weekly schedule view with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The toolbar holds the month and year as a heading, previous and next chevron buttons with a "Today" button between them, a segmented Day, Week and Month control on the right and a dark "New event" button. The grid below has a narrow left gutter of hour labels from 08:00 to 18:00 in small monospaced text, and seven day columns with a header row showing the weekday abbreviation and the date number, where today gets a dark filled circle behind the number. Inside the columns, place absolutely positioned event blocks with top and height set inline, coloured with tinted backgrounds and a matching left border, showing a title and a time range in small text; include eight events across the week, two overlapping on one day rendered side by side at half width, and a red current-time line across the grid with a small dot at its left end.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
