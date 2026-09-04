---
title: "评分反馈挂件"
summary: "先打分，选完才展开文字评论框"
category: ui
subcategory: contact
tags: ["评分", "反馈", "挂件"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-feedback-rating-widget/"
---

Create a feedback widget with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-md bordered card with a heading asking how likely the person is to recommend the product, and a row of eleven small numbered buttons from zero to ten that wrap on narrow screens, with muted "Not likely" and "Very likely" labels at the ends. When a score is chosen it fills dark and a second stage appears: a short prompt whose wording depends on the score band, a textarea, an optional checkbox offering a follow-up conversation, and a dark submit button beside a ghost "Not now" link. Then add JavaScript that highlights the chosen number, reveals the second stage with a small height and opacity transition, changes the prompt for detractors, passives and promoters, keeps the score in a hidden field, and replaces the card contents with a short thank-you state on submit.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
