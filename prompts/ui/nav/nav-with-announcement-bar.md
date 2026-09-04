---
title: "带公告条的导航"
summary: "导航栏上方是可关闭的公告条"
category: ui
subcategory: nav
tags: ["导航", "公告", "横幅"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-nav-with-announcement-bar/"
---

Create a two-tier site header with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The top tier is a neutral-900 announcement bar with centred small text carrying a bold label pill, a sentence about a release, an inline underlined link with an arrow, and a dismiss cross positioned at the right edge. The second tier is the main nav on white with a hairline bottom border: a wordmark, a centre group of five links where one carries a small green "New" badge, and a right group with a search glyph button, a "Sign in" text link and a dark rounded button. Make the whole header sticky as one unit so both tiers scroll together. Then add JavaScript that removes the announcement bar when the cross is clicked, remembers the dismissal in localStorage under a versioned key so a new announcement can reappear, and restores the hidden state on load before paint.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
