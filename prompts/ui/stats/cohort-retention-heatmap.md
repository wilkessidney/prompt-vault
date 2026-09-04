---
title: "留存 cohort 热力图"
summary: "按周留存着色的分组网格"
category: ui
subcategory: stats
tags: ["指标", "留存", "热力图"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-cohort-retention-heatmap/"
---

Create a cohort retention card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} and no chart library. A bordered card with a title, a subline naming the metric, and a legend on the right made of five small squares stepping from light to solid with "Low" and "High" captions. The body is a horizontally scrollable table with border-separate spacing, a header row of "Cohort", "Users", and Week 0 through Week 6, and an empty tbody. Close with a footnote about how the cohort is defined. Then add JavaScript that fills the table from an array of cohorts, each with a signup month, a user count, and a retention curve: render one cell per week, shade it by writing an rgba background whose alpha tracks the percentage, flip the text to white once the cell is dark enough to need it, print the percentage inside the cell, leave future weeks as an empty dashed placeholder, and add a title tooltip converting the percentage back into a user count.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
