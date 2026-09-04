---
title: "带投票的 FAQ"
summary: "每条答案下方可投\"有帮助/没帮助\"，收起时收集反馈"
category: ui
subcategory: faq
tags: ["FAQ", "投票", "反馈"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-accordion-with-helpful-votes/"
---

Build an FAQ accordion with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} where each answer asks whether it helped. Use native details/summary elements inside a bordered, divided card: the summary row is a flex line with the question in medium weight and a plus glyph that rotates when open, and the answer body is relaxed grey prose. Under every answer add a feedback row — a muted "Was this helpful?" label, a Yes and a No button as small bordered pills, and a right-aligned tally line reading something like "18 of 21 found this helpful". Give the details elements a shared name-like data attribute and each feedback row a data-votes pair of numbers. Then add JavaScript that keeps only one answer open at a time, and on a vote replaces the two buttons with a quiet "Thanks — this helps us rewrite it" note while incrementing the tally and recomputing the ratio, ignoring further clicks in that row.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
