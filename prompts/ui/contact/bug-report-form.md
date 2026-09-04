---
title: "Bug 反馈表单"
summary: "一次收集严重级别、复现步骤与环境信息"
category: ui
subcategory: contact
tags: ["Bug", "反馈表单", "表单"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-bug-report-form/"
---

Design a bug report form with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-2xl card with a heading, a muted line asking for one issue per report, and a link to the status page in case it is a known incident. The form has a summary field, a severity segmented control of four options from Low to Critical where the active one takes a tint matching its level, a textarea for steps to reproduce with monospaced placeholder text showing a numbered example, two-up fields for expected and actual behaviour, a dashed-border attachment dropzone with a paperclip glyph and a note about accepted types, and a collapsed details element revealing environment fields for browser, operating system and app version pre-filled with detected values. Finish with a submit row holding a dark button, a ghost "Save draft" and a muted line noting the report is visible to the workspace admins.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
