---
title: "可用性状态条"
summary: "各服务的历史可用率条与实时汇总"
category: ui
subcategory: stats
tags: ["指标", "可用性", "状态"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-uptime-status-strip/"
---

Build a status panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that reports uptime per service. A bordered card whose header holds "System status" on the left and a green pill reading "All systems operational" with a pulsing dot on the right. Below it, one row per service — API, Dashboard, Webhooks, Email delivery — each row showing the service name and its 60-day uptime percentage on one line, then an empty flex container marked with a data-uptime attribute that will hold the history bars. Close the card with a legend row of tiny colour swatches and the labels "60 days ago" and "Today" pushed to opposite ends. Then add JavaScript that renders the bars from data instead of markup: use a small seeded pseudo-random generator so the same history appears on every load, mark roughly 2% of days as an outage and 4% as degraded, paint each day green, amber or red, give each bar a title tooltip with its date and status, compute the uptime percentage per service by weighting degraded days as partial, and downgrade the header pill to amber if any service is not fully green.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
