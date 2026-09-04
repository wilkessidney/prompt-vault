---
title: "带图例的图表卡片"
summary: "纯 CSS 堆叠柱状图配范围选择器"
category: ui
subcategory: dashboards
tags: ["图表卡片", "纯 CSS", "图例"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-chart-card-with-legend/"
---

Build an analytics chart card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} using no charting library. The card header has a title, a subtitle with the total and a green delta, and a small segmented range picker (7d / 30d / 90d) where one option is active. The chart body is a flex row of column groups; each column is a rounded stacked bar built from two divs of different heights and shades, aligned to the bottom with items-end. Add x-axis labels beneath and a legend row with two colored dots naming the series. Then add JavaScript that renders the bars from a data array instead of fixed classes: hold one dataset per range, scale every bar as a percentage of the largest total so the chart always fills its height, redraw the bars, labels, total, and delta when the range changes, move the active pill, and give each column a title tooltip with its exact figures.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
