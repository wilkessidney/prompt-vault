---
title: "审批队列（含详情抽屉）"
summary: "左侧待审列表，右侧展示选中项详情"
category: ui
subcategory: dashboards
tags: ["审批", "队列", "抽屉"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-approvals-queue-with-detail-drawer/"
---

Design an approvals workspace with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} in two panes. The left pane is a bordered list with a header showing a title and a pending count, three filter chips for pending, approved and rejected, and six request rows: each with a requester avatar, a title line describing what is being asked, a muted line with the amount and the age of the request, and a small type pill. The selected row has a neutral-50 background and a neutral-900 left border. The right pane is a detail panel showing the request title, a status pill, a two-column definition list of six fields, a justification paragraph in a bordered quote block, an attachment row with a file glyph and size, and a sticky footer with a red-outlined Reject button, a bordered "Ask a question" and a dark Approve. Then add JavaScript that swaps the detail panel content when a row is selected and decrements the pending count when a request is approved or rejected.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
