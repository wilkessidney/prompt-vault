---
title: "卡片压边页脚"
summary: "白色转化卡片压在深色页脚之上"
category: ui
subcategory: footer
tags: ["页脚", "CTA", "层叠"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/footer/footer-footer-with-overlapping-cta-card/"
---

Build a footer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} where a call-to-action card overlaps its top edge. Wrap everything in a relative container: a dark neutral-950 footer with generous top padding, and inside it a white rounded-3xl card pulled upward with a negative margin so it straddles the boundary between the page and the footer. The card is a flex row on md — a headline and one supporting line on the left, a dark primary button and a ghost "Book a demo" button on the right — with a thin shadow. Under the card, the footer proper: a brand column with a wordmark, a one-line description and three small social squares, beside three link columns (Product, Company, Resources) in muted grey that brighten on hover. Close with a divider and a bottom row holding the copyright on the left and Privacy, Terms and Security links on the right, stacking on mobile.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
