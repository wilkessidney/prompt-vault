---
title: "带分类侧栏的 FAQ"
summary: "粘性主题列表在侧，可跳转分组答案"
category: ui
subcategory: faq
tags: ["FAQ", "分类导航", "粘性"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-faq-with-category-rail/"
---

Create a help-centre style FAQ with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} in two columns from lg up. The left column is a sticky rail (top-24, self-start) holding a small "Browse by topic" label and a list of category links — Billing, Accounts, Security, Data — each a rounded row with the topic name and a muted count badge, the first one carrying an active neutral-100 background; underneath, a bordered "Still stuck?" mini-card with a line of copy and a dark contact button. The right column is the content: for each category, an anchor-linked heading with a rule under it and two or three question-and-answer blocks, where the question is medium-weight neutral-900 and the answer is relaxed grey prose with the occasional inline link. Give each section an id matching its rail link so the anchors work, and collapse the rail above the content on smaller screens.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
