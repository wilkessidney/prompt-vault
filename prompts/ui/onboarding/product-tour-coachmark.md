---
title: "产品引导聚光灯"
summary: "聚光提示气泡锚定在具体按钮上"
category: ui
subcategory: onboarding
tags: ["引导", "聚光灯", "提示"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-product-tour-coachmark/"
---

Create a product-tour coachmark with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a mock toolbar with three buttons where the middle one is spotlighted by a ring. Anchored below it, a dark rounded popover positioned absolutely against the highlighted button, with an arrow notch made from a rotated square, a step counter such as "Step 2 of 4", a short title, a sentence of guidance, a row of four progress dots with the current one wider and lighter, and Skip tour plus Next actions. Because the popover is absolutely positioned it contributes no flow height, so add generous bottom padding on the wrapper to reserve room for it. Then add JavaScript holding the tour copy in an array so Next advances the counter, title, body, and dots, the last step reads Done, and either Done or Skip tour removes the coachmark.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
