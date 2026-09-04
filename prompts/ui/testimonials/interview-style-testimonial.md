---
title: "访谈式证言"
summary: "以对话形式呈现，关键句抽出来做大字"
category: ui
subcategory: testimonials
tags: ["证言", "访谈", "引用"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/testimonials/testimonials-interview-style-testimonial/"
---

Design a long-form customer interview with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Open with a header block: a small "Customer interview" label, a headline, and a byline row with an avatar, the interviewee name and role, the company, and a muted reading time. Under it, a bordered fact strip of four cells with tiny uppercase labels and values — industry, team size, using since and the plan. The body is a max-w-2xl column of alternating question and answer blocks: questions in medium-weight neutral-900 preceded by a small monospaced "Q", answers in relaxed grey prose. After the second answer, break the column with a full-width pull quote in large type with a left rule; after the fourth, a bordered result box with three inline metrics. End with a closing question, a short answer, and a footer line linking to two other interviews.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
