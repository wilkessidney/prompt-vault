---
title: "离站挽留弹窗"
summary: "检测鼠标离开意图时弹出一次性优惠"
category: ui
subcategory: cta
tags: ["挽留", "弹窗", "转化"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/cta/cta-exit-intent-offer-modal/"
---

Create an exit-intent offer modal with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Markup: a fixed inset-0 overlay with a black/40 backdrop, hidden by default, centring a max-w-md white card with rounded-3xl corners and a shadow. The card holds a small close ✕ in the corner, a rounded discount badge, a headline offering 20% off the first three months, a short supporting line, an email field with a full-width dark claim button, a row of two reassurance items with check glyphs, and a muted "No thanks, I'll pay full price" text button underneath. Then add JavaScript that shows it at most once per session: arm the trigger after a few seconds on the page, open when the pointer leaves through the top of the window or when the visitor scrolls past 60% of the document, remember the shown state in sessionStorage so a reload does not nag, close on the ✕, the decline link, a backdrop click, or Escape, and move focus into the email field when it opens.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
