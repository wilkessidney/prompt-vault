---
title: "面包屑页头"
summary: "位置路径、标题与该记录的操作按钮"
category: ui
subcategory: nav
tags: ["导航", "面包屑", "页头"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-breadcrumb-page-header/"
---

Design an application page header with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The top line is a breadcrumb of four levels separated by chevrons, the last one in medium neutral-900 and the earlier ones muted links, with a small overflow ellipsis button standing in for a collapsed middle level. Below it, a flex row that wraps: on the left a record title as a large heading with a small status pill beside it and, underneath, a muted metadata line with three items separated by dots — owner, created date and identifier in monospace; on the right, a button group of a bordered "Duplicate", a bordered "Share" and a dark primary "Publish", plus a square more-actions button with three dots. Under everything, a row of five tabs with a bottom border where the active tab carries a neutral-900 underline, and one tab shows a small count badge.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
