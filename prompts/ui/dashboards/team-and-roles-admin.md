---
title: "团队与角色管理"
summary: "成员表格内可直接修改角色"
category: ui
subcategory: dashboards
tags: ["团队管理", "权限", "表格"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-team-and-roles-admin/"
---

Create a team administration panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The header holds a title, a muted seat counter reading how many of the licensed seats are in use, a search field and a dark "Invite people" button. The table lists six members with columns for member, role, last active and status: the member cell pairs an avatar circle with a name and email stacked; the role cell is a small bordered select with Owner, Admin, Editor and Viewer; last active is muted relative text; status is a pill reading Active, Invited or Suspended in appropriate tints, and each row ends with a three-dot menu button. Show a checkbox column with a header checkbox, and above the table a bulk-action bar that appears only when rows are selected, showing the count and two ghost buttons. Then add JavaScript that wires the select-all checkbox, keeps the bulk bar and its count in sync, and warns with an inline note when the last Owner role is changed away.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
