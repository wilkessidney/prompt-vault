---
title: "多区域性能看板"
summary: "各区域延迟与可用率，旁配地图区块"
category: ui
subcategory: dashboards
tags: ["监控", "延迟", "多区域"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-regional-performance-board/"
---

Create a regional operations dashboard with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The left two thirds is a bordered card holding a title, a legend of three coloured dots for healthy, degraded and down, and a stylised world map built from a grid of small squares in varying tints — no images — with five larger dots absolutely positioned over it representing regions, one amber and one red. The right third is a scrollable list of eight region rows, each with a status dot, the region code in monospace, the city name, the p99 latency and a small uptime percentage; the degraded row carries a one-line note. Under both, a strip of four aggregate figures separated by vertical rules. Then add JavaScript that links the list to the map: hovering a row enlarges its map dot and shows a small tooltip with the region name and latency, and clicking a row keeps it selected until another is chosen.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
