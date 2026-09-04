---
title: "跨时区会议时段规划"
summary: "并排展示多个城市的时间轴，找出共同可用的小时"
category: ui
subcategory: bonus
tags: ["时区", "日程", "工具"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-timezone-overlap-planner/"
---

Create a meeting time planner with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a bordered rounded-2xl card with a header holding a title, a muted line explaining that shaded blocks are working hours, and a small select for the reference city. The body is a grid of four rows, one per city: the left column shows the city name, its UTC offset and the local time of the current selection in monospace; the right column is a track of twenty-four thin cells, coloured neutral-100 outside working hours, neutral-200 for the local working day, and neutral-900 for the currently selected hour, with tiny labels every six cells. Under the rows, a summary strip naming the best overlapping window and how many cities it suits. Then add JavaScript that lets a click or drag on any track pick an hour, recomputes each local time from its offset, marks the selected column across all rows, and updates the summary with how many cities have that hour inside working time.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
