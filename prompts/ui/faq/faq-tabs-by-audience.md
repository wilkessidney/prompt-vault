---
title: "按受众分 Tab 的 FAQ"
summary: "买家、管理员、开发者各自看到不同答案"
category: ui
subcategory: faq
tags: ["FAQ", "分群", "Tab"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-faq-tabs-by-audience/"
---

Create an FAQ with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that splits its questions by who is asking. Centre a max-w-3xl column with a heading and a muted subline. Under it, a segmented control of three options — For buyers, For admins, For developers — rendered as a bordered rounded-xl inline group where the active segment has a neutral-900 background and white text. Below, a panel showing four questions for the active audience as details elements with hairline dividers, plus a small footer line naming a relevant next step for that audience with an arrow link. Then add JavaScript that holds three sets of question and answer pairs in a data structure, renders the active set, moves the segment styling, closes any open answer when switching, and reflects the choice in the URL query string so the tab survives a refresh.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
