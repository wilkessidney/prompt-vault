---
title: "带办公地点的页脚"
summary: "多个城市的地址与本地联系方式"
category: ui
subcategory: footer
tags: ["页脚", "办公地点", "联系"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/footer/footer-footer-with-office-locations/"
---

Build a footer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that leads with physical presence. The top block is a three-column grid of offices: each has a city name as a small heading with a muted "HQ" or "Studio" label beside it, a three-line address in non-italic address markup, a phone number and an email as links, and a small line giving the local time and whether the office is currently open, with a coloured dot. Under a hairline, a compact four-column link grid in the usual quiet style with short lists. Under another hairline, a bottom bar holding the wordmark on the left, the copyright and registration number in the middle, and three social glyph buttons on the right. Keep everything on white with neutral-200 rules, and stack the offices to a single column below md with extra vertical spacing so the addresses stay readable.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
