---
title: "文档栏（含版本切换）"
summary: "面包屑 + 版本下拉 + 旧版提示"
category: ui
subcategory: nav
tags: ["导航", "文档", "版本"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-docs-bar-with-version-switcher/"
---

Create a documentation header with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. A sticky top bar with a light backdrop blur holds, from the left: a logo mark, a "Docs" wordmark, and a version switcher button showing the current version with a caret and a rounded border; on the right, links for Guides, API and Changelog plus a small "Ask AI ⌘K" pill. The version button opens an absolutely positioned dropdown card listing four versions, each row with the version number, a short label such as "Latest" or "Maintenance", and a check on the current one. Under the bar, a breadcrumb row — Docs / Deploying / Preview environments — and a hidden amber notice strip warning that an older version is being viewed with a link back to the latest. Then add JavaScript that opens and closes the dropdown, closes it on an outside click or Escape and restores focus to the button, marks the chosen version with the check and writes it into the button label, and reveals the amber notice for anything other than the latest release.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
