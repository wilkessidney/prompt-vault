---
title: "带状态与区域的页脚"
summary: "底部含运行状态徽标与地区选择"
category: ui
subcategory: footer
tags: ["页脚", "状态", "国际化"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/footer/footer-footer-with-status-and-region/"
---

Build a site footer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} whose bottom bar carries operational controls. The top area is a four-column grid: a brand column with a wordmark, a two-line description and a status pill linking to the status page with a green pulse dot reading "All systems operational", plus three link columns headed Product, Company and Legal with five, four and four links each in muted text. Add a hairline divider, then a bottom bar that wraps: on the left, a copyright line and a small separated link to the sitemap; on the right, two compact bordered selects, one for language and one for region, each with a small leading glyph, followed by three round social buttons with glyphs. Keep the whole footer on white with neutral-200 hairlines, and let the bottom bar stack to a column on small screens.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
