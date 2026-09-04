---
title: "CSV 字段映射步骤"
summary: "把上传的表头逐列匹配到系统字段"
category: ui
subcategory: onboarding
tags: ["引导", "CSV", "映射"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-csv-column-mapping-step/"
---

Design a data import mapping step with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The header shows a step label, a heading reading "Match your columns", and a muted line naming the uploaded file with its row count and a "Replace file" link. Below, a bordered card holding a table with three columns: the field we expect with its name in medium weight and a "required" or "optional" tag under it, a select carrying the detected column names with an "Ignore this field" option, and a preview cell showing two example values in monospace muted text. Include six field rows. Above the table, a green tinted strip reporting how many columns were matched automatically. Under the card, a note about unmapped required fields and a footer with a ghost Back button and a dark Continue button. Then add JavaScript that recomputes the matched count on every change, blocks Continue while any required field is unmapped, and flags duplicate column assignments in red.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
