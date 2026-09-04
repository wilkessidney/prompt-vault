---
title: "工作区品牌设置步骤"
summary: "Logo、主色与实时预览并排"
category: ui
subcategory: onboarding
tags: ["引导", "品牌", "设置"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-brand-your-workspace-step/"
---

Create a workspace branding step with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} in two columns. The left column is the form: a step label and heading, a workspace name field, a logo control showing a square preview tile with the current initial beside an outline "Upload" button and a muted "Remove" link plus a hint about file size, a colour picker row of eight round swatches where the selected one carries a ring, and a subdomain field with a fixed suffix rendered as a muted addon inside the input shell. The right column is a live preview: a small browser chrome with dots and an address bar showing the subdomain, then a mock app header using the chosen colour and initial, and two placeholder content rows. Then add JavaScript that mirrors the name, initial, colour and subdomain into the preview as they change, slugifies the subdomain field, and keeps the selected swatch ringed.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
