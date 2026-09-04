---
title: "带工具栏的数据表"
summary: "支持搜索、筛选与状态标签的数据列表"
category: ui
subcategory: dashboards
tags: ["数据表格", "搜索", "工具栏"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-data-table-with-toolbar/"
---

Create a data table card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a header row with a title, a search input, and a filter/"Add" button; then a table with columns (Name, Status pill, Plan, Created) and a few rows. Status uses colored pills (green/amber/gray). Add hover states on rows and a rounded bordered container. Then add JavaScript so the toolbar is not decorative: filter rows live as the visitor types, make the Name, Plan, and Created headers clickable to sort ascending then descending with an arrow indicator on the active column, show a "no results" row when the search matches nothing, and keep a row count in the header.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
