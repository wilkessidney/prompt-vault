---
title: "Cron 表达式生成器"
summary: "用下拉和开关拼出 cron，实时显示表达式与下次执行时间"
category: ui
subcategory: bonus
tags: ["Cron", "定时任务", "表单"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-cron-schedule-builder/"
---

Build a schedule builder with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that produces a cron expression. Use a max-w-xl card with a heading and a muted line saying the expression updates as you choose. The controls are a frequency select with hourly, daily, weekly and monthly options; a minute select; an hour select hidden for hourly; a row of seven weekday toggle chips shown only for weekly; and a day-of-month select shown only for monthly. Under the controls, a dark result panel showing the cron expression in large monospaced text with a copy button, and beneath it a plain-English summary sentence and a muted line listing the next three run times. Then add JavaScript that shows and hides the relevant controls per frequency, assembles the five cron fields, writes the human summary, computes three upcoming runs from the current time, and copies the expression with a brief confirmation.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
