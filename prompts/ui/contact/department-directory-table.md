---
title: "部门通讯录表格"
summary: "列出各部门职责范围与对应联系方式"
category: ui
subcategory: contact
tags: ["通讯录", "表格", "企业站"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-department-directory-table/"
---

Design a contact directory with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Start with a heading, a muted line saying every address reaches a person rather than a queue, and a search field. Then a bordered rounded-2xl table with rows for eight departments: columns for department with a glyph and a one-line description, the best contact route shown as an email or a link with a small type label, the typical response time, and hours. Zebra-stripe alternate rows faintly, and give one row an amber "Urgent only" pill in the response column. Under the table, a three-card row for the things that are not email — a phone number for urgent production issues, a postal address for legal notices, and a security disclosure address with a PGP fingerprint in monospace. Finish with a muted line about response times during holidays.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
