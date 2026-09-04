---
title: "滑动下划线 Tab"
summary: "指示条在标签之间平滑滑动"
category: ui
subcategory: nav
tags: ["导航", "Tab", "动效"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/nav/nav-sliding-underline-tabs/"
---

Build a page-level tab bar with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} where the active underline slides. Wrap a max-w-4xl container: above the tabs, a small page title row with a heading and a muted record count. The tab strip is a relative flex row over a hairline bottom border with six tab buttons in small medium-weight text, plus an absolutely positioned two-pixel neutral-900 bar at the bottom that is moved and resized rather than re-rendered. Under the strip, a panel area showing a short paragraph and a bordered placeholder block for the active tab. Then add JavaScript that measures the active button offset and width and applies them to the indicator via inline left and width styles with a transition, switches the panel copy, keeps the indicator correct on window resize, and supports left and right arrow keys for moving between tabs.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
