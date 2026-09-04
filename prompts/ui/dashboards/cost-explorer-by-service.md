---
title: "按服务的成本分析"
summary: "各项服务的花费拆分与未来支出预测"
category: ui
subcategory: dashboards
tags: ["成本", "云账单", "分析"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-cost-explorer-by-service/"
---

Design a cloud cost dashboard with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The header holds a title, a muted month label, a month-picker select and an outline "Set a budget" button. Below, three summary cards: month to date with a large figure and a small delta pill, forecast for the month with a muted note about the method, and budget with a thin track showing the percentage consumed and an amber fill when past eighty percent. Then a table of six services with columns for service, this month, last month, change and a share bar; the change column uses green and red arrows and the share column draws a thin neutral-900 bar with the percentage beside it. Highlight the largest row with a faint background. Under the table, two footnote lines about tax exclusion and the daily refresh time, plus a link to the detailed breakdown.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
