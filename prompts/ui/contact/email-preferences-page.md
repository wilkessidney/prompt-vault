---
title: "邮件订阅偏好设置"
summary: "按类别精细退订，而不是一刀切全退"
category: ui
subcategory: contact
tags: ["邮件", "偏好设置", "退订"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-email-preferences-page/"
---

Build an email preferences page with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}, the destination of an unsubscribe link. Centre a max-w-xl card with a heading, a muted line naming the address being managed, and a small "You clicked unsubscribe in an email" note. The body offers four options as bordered radio rows: pause for thirty days, reduce to a monthly summary, keep only account and security email, and unsubscribe from everything; each has a title, a one-line consequence and a small tag where useful. The third option is preselected. Under the options, a collapsible "Choose individually" section revealing six checkboxes for specific lists. Finish with a dark Save button and a ghost "Keep everything as it is" link, plus a footnote noting that account and security messages cannot be switched off and explaining why.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
