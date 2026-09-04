---
title: "按部门动态变化的表单"
summary: "选择咨询部门后，表单字段随之改变"
category: ui
subcategory: contact
tags: ["动态表单", "路由", "表单"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-routed-enquiry-form/"
---

Build a contact form with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that adapts to the chosen department. Use a max-w-xl card. At the top, a heading and a muted line about response times. The first control is a row of four selectable department tiles — Sales, Support, Billing and Press — each a bordered rounded-xl button with a glyph and a label, the active one dark. Under it, name and email fields side by side, a subject field, a message textarea, and a contextual helper block that changes with the department: a bordered neutral-50 note giving the expected reply time, a suggested self-serve link and, for Support only, an extra input asking for the workspace name. Finish with a submit button whose label names the department and a footnote about attachments. Then add JavaScript that switches the active tile, swaps the helper copy and links from a map, shows or hides the workspace field, and updates the button label.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
