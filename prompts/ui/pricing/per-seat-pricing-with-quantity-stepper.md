---
title: "按席位定价（含数量微调）"
summary: "团队人数直接决定月度总价"
category: ui
subcategory: pricing
tags: ["定价", "按席位", "步进器"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-per-seat-pricing-with-quantity-stepper/"
---

Build a per-seat pricing card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centre a max-w-lg white card with rounded-2xl corners. The header holds a small "Team plan" pill, a headline price built from a large figure and a muted "per seat / month" suffix, and a one-line description. Under it a bordered control row: the label "How many seats?" on the left and on the right a stepper made of a minus button, a wide monospaced number and a plus button, with the minus disabled at the floor of two seats. Below, a summary block with three lines — seats times unit price, a volume discount line that only appears above ten seats, and a bold total — separated by a hairline. Finish with a full-width dark "Start 14-day trial" button, a muted note that seats can be changed any time and are billed pro rata, and three feature check rows. Then add JavaScript that steps the seat count between 2 and 250, applies a 10 percent discount from 10 seats and 20 percent from 50, recalculates every figure, shows or hides the discount line, and disables the minus button at the floor.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
