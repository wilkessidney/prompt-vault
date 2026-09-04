---
title: "事故看板"
summary: "按严重程度排序的实时事故列表，标注负责人"
category: ui
subcategory: dashboards
tags: ["事故", "看板", "运维"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-incident-board/"
---

Build an incident management board with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The header has a title, a live pill with a pulsing red dot reading how many incidents are open, and two buttons — a bordered "Subscribe" and a dark "Declare incident". Below, three summary tiles for open, mitigated and resolved-today counts with muted labels. The main list groups incidents by severity: a small uppercase group heading with a coloured square, then rows in a bordered card. Each row shows a severity chip, the incident title in medium weight, a muted line with the affected service and start time, a duration in monospace, a small stacked avatar pair for responders, and a status pill on the right. Include two Sev-1, two Sev-2 and one Sev-3 example, with the resolved one dimmed and struck through in its title. End with a link to the full timeline.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
