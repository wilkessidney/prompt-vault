---
title: "按行业筛选证言墙"
summary: "chips 筛选出同行业的评价"
category: ui
subcategory: testimonials
tags: ["证言", "筛选", "行业"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/testimonials/testimonials-filterable-quote-grid-by-industry/"
---

Build a filterable testimonial grid with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Above the grid, a heading, a muted subline and a row of six filter chips — All, Healthcare, Logistics, Finance, Retail and Public sector — with the active chip dark. The grid holds nine bordered rounded-xl quote cards, three across on large screens: each card has a small industry label at the top, a quote of two or three sentences in relaxed type, and a footer separated by a hairline with an avatar circle, a name in medium weight and a role and company line. Two cards carry a small "Case study" pill linking onward. Then add JavaScript that filters cards by their industry data attribute with a brief fade, keeps a live count in the subline, shows a muted empty line when a filter matches nothing, and restores everything when All is chosen.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
