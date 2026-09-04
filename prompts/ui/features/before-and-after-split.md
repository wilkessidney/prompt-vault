---
title: "新旧对比分栏"
summary: "旧方案与新方案并排对照"
category: ui
subcategory: features
tags: ["对比", "分栏", "说服"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/features/features-before-and-after-split/"
---

Build a two-column contrast section with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that sets the old workflow against the new one. A centered heading and subline, then two panels side by side on md and up. The left panel is muted — dashed border, neutral-50 background, an "Without Acme" label, and a list of five pain points each prefixed by a small grey ✕ tile, with the text in a softer grey. The right panel is the hero: solid neutral-900 background, a "With Acme" label in a translucent pill, the same five topics rewritten as outcomes, each prefixed by a white ✓ tile, and a footer strip inside the card quoting a hard number such as "Median setup time: 9 minutes". Keep both lists on the same baseline so the rows read across, and stack them with the muted panel first on mobile.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
