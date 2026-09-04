---
title: "换套餐（含差价预览）"
summary: "明确展示今天升级实际要付多少差价"
category: ui
subcategory: pricing
tags: ["定价", "差价", "升级"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-change-plan-with-prorated-preview/"
---

Design a change-plan panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for an in-app billing settings page. Use a max-w-2xl card. The header states "Change plan" with a muted line naming the current plan and renewal date. Below, three selectable plan rows as radio-style cards: each shows the plan name, a short line of positioning copy, the price on the right, and the current plan carries a "Current" pill while the selected one gets a neutral-900 ring and a filled radio dot. Under the list, a neutral-50 breakdown card titled "Due today" listing the new plan charge for the remaining period, an unused-time credit as a negative green line, and a bold total, followed by a muted line explaining the next full charge and its date. Close with a right-aligned pair of buttons, Cancel and a dark Confirm upgrade. Then add JavaScript that switches the selection styling and recalculates the proration figures from the days left in the billing period.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
