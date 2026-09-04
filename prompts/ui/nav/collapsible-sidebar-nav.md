---
title: "可折叠侧边栏"
summary: "分组纵向菜单，可收起为纯图标"
category: ui
subcategory: nav
tags: ["导航", "侧边栏", "折叠"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-collapsible-sidebar-nav/"
---

Build a vertical application sidebar with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a fixed-height 260px-wide column with a border on the right. The top holds a brand mark and a chevron button that collapses the rail. Below it, a search box, then two labelled groups ("Workspace" and "Insights"), each a button header with a caret and a list of links; every link is a rounded row with a monospaced icon glyph, a label, and optionally a count badge, and one link carries the active treatment of a neutral-100 background and a dark left accent. Pin a user chip with an avatar, a name, and a plan line to the bottom. Mark every text element that should disappear when collapsed with a data-label attribute, and give each group header a data-group attribute pointing at its list. Then add JavaScript that toggles a group open or closed with its caret rotating and aria-expanded following, collapses the whole rail to a 72px icon-only strip that hides labels, badges and group headers and centres the icons, keeps the chosen width in localStorage so it survives a reload, and moves the active class to whichever link is clicked.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
