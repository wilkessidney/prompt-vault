---
title: "工作区切换导航"
summary: "顶栏内含可搜索的租户切换下拉"
category: ui
subcategory: nav
tags: ["导航", "工作区", "切换器"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-workspace-switcher-nav/"
---

Design an application top bar with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} built around a workspace switcher. The bar holds, on the left, a small square logo tile then a switcher button showing the current workspace avatar, its name, a muted plan label and a chevron. On the right, a breadcrumb-free set of controls: a bordered search field with a keyboard hint, a bell button with a red unread dot, and a round user avatar. The dropdown is an absolutely positioned max-w-xs card under the switcher: a search input at the top, a scrollable list of five workspaces each with an avatar, name, member count and a check glyph on the active one, then a divider and two actions — create a workspace and manage workspaces — each with a leading glyph. Then add JavaScript that toggles the dropdown, filters the list from the input, closes on outside click and on Escape, and swaps the button label when a workspace is chosen.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
