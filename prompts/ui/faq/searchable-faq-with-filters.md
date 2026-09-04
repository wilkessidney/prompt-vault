---
title: "可搜索筛选的 FAQ"
summary: "搜索框 + 主题 pill + 结果列表"
category: ui
subcategory: faq
tags: ["FAQ", "搜索", "筛选"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-searchable-faq-with-filters/"
---

Build a searchable help centre FAQ with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a centered heading, a prominent search input with a leading magnifier glyph, and a row of scrollable topic filter pills where the first is active and dark. Below, a results count line, then a list of question rows built from native details and summary elements, each tagged with a data-topic attribute and showing the question, a small topic chip on the right, and an answer that reveals on open with a "Was this helpful?" thumbs row underneath. Then add the JavaScript that makes the search and pills real: filter rows on every keystroke by matching the typed text against both question and answer, intersect that with the selected topic pill, keep the results count in sync, and render an empty state when a query matches nothing.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
