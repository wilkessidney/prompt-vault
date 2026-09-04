---
title: "实时日志查看器"
summary: "流式追加日志，可按级别过滤并暂停"
category: ui
subcategory: dashboards
tags: ["日志", "实时", "运维"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-log-viewer-with-live-tail/"
---

Build a log viewer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The toolbar holds a service select, a search field with a magnifier glyph, four severity toggle chips for debug, info, warn and error with counts, a "Live" pill with a pulsing green dot, and a pause button. The body is a dark rounded-xl panel of monospaced log lines: each line has a muted timestamp, a coloured severity tag of fixed width, a service name in a dimmer colour, and the message, with error lines given a faint red left border and a slightly tinted background. Under the panel, a status bar with the line count on the left and the retention window on the right. Then add JavaScript that appends a new random line every second while live, caps the buffer at eighty lines, auto-scrolls to the bottom unless the user has scrolled up, toggles severities on and off, filters on the search text and switches the pause button between paused and live states.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
