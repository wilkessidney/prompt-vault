---
title: "双栏收件箱"
summary: "左侧会话列表，右侧阅读区"
category: ui
subcategory: dashboards
tags: ["收件箱", "双栏", "消息"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-inbox-split-view/"
---

Build a two-pane inbox layout with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The left pane is a 22rem column with its own border: a header with "Inbox", an unread count pill and a filter glyph, a compact search field, and a scrollable list of conversation rows. Each row is a button carrying a data-thread id, and shows an unread dot, an avatar circle with initials, the sender in medium weight, the time right-aligned, the subject, and a one-line preview truncated with line-clamp. The right pane fills the rest: a header with the subject, participant line and action glyphs (archive, snooze, ⋯), a scrollable thread body of message bubbles alternating between grey incoming cards and a neutral-900 outgoing card, and a sticky reply box at the bottom with a textarea and a dark Send button. Then add JavaScript holding the thread contents in an object keyed by id: clicking a row moves the selected highlight, clears that row's unread dot and decrements the header count, renders the subject, participants and every message into the reading pane, and scrolls the pane back to the top of the thread.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
