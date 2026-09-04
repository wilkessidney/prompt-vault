---
title: "账单 FAQ（附套餐概览）"
summary: "问答旁常驻显示当前套餐摘要"
category: ui
subcategory: faq
tags: ["FAQ", "账单", "粘性侧栏"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-billing-faq-with-plan-recap/"
---

Design a billing help section with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} in two columns from lg. The narrow left column is a sticky card summarising the current plan: a plan name with a pill, the monthly figure, three detail rows for seats, next invoice and payment method with muted labels, a full-width outline button reading "Manage billing" and a small link to download invoices. The wide right column is a heading followed by two labelled groups of questions — Payments and Cancellation — each rendered as details elements with a chevron that rotates when open, hairline dividers instead of card borders, and answers in relaxed grey prose. One answer should contain a small bordered table of three rows showing when charges land for monthly, annual and usage plans. Stack to one column below lg with the plan card first.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
