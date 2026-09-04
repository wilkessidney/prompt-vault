---
title: "通知偏好设置步骤"
summary: "选择接收什么通知、通过什么渠道"
category: ui
subcategory: onboarding
tags: ["引导", "通知", "偏好"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-notification-preferences-step/"
---

Design a notification preferences onboarding step with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The header has a step label, a heading and a muted line saying nothing is on by default except account security. The body is a table-like list with a header row of three channel columns — email, in-app and mobile push — and six category rows: product updates, mentions, comment replies, weekly digest, billing and security alerts. Each cell holds a small switch, and the security row switches are on and disabled with a muted "Required" label under the row name. Under the list, a quiet-hours block with a toggle and two time selects that dim when the toggle is off. Finish with a summary line reporting how many notifications are enabled, a ghost "Use recommended" button and a dark Continue. Then add JavaScript that counts enabled switches into the summary, applies a sensible recommended set, and enables or dims the quiet hours controls with its toggle.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
