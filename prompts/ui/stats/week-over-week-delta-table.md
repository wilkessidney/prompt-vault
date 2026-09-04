---
title: "周环比数据表"
summary: "紧凑指标表，带正负变化标记"
category: ui
subcategory: stats
tags: ["指标", "环比", "表格"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-week-over-week-delta-table/"
---

Build a compact comparison table with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for a weekly metrics email or dashboard. Inside a bordered rounded-2xl card, add a header with a title, a muted subtitle naming the two weeks being compared, and a small ghost button reading "Export". The table has four columns — metric, this week, last week and change — with a neutral-50 header row in small uppercase letters, hairline dividers between rows, and figures right-aligned in monospace. Include six rows covering signups, activation rate, weekly active teams, revenue, support tickets and median response time. The change column shows an arrow glyph with a signed percentage in green for improvements and red for regressions, remembering that fewer tickets and faster responses are improvements. Add a footnote under the table explaining that revenue is normalised to constant currency.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
