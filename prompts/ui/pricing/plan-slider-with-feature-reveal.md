---
title: "滑动选套餐"
summary: "拖动滑块，档位与对应功能随之变化"
category: ui
subcategory: pricing
tags: ["定价", "滑块", "交互"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/pricing/pricing-plan-slider-with-feature-reveal/"
---

Create a pricing block with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} where a range slider chooses the plan. Centre a max-w-xl card. Above the slider, a question reading "How many events do you send a month?" and the current value as a large number with a muted unit. The range input is styled full width with an accent-neutral-900 accent colour, tick labels under it at 10k, 100k, 1M and 10M, and the matched plan shown beneath as a bordered strip with the plan name, its monthly price, and a muted line describing what it includes. Below that, a two-column list of the features unlocked at that tier, where features above the current tier are shown greyed with a muted lock note. Finish with a dark call-to-action button and a small line offering a custom quote above 10M events. Then add JavaScript that maps the slider position to four tiers, formats the event count, swaps the plan strip content and dims features that belong to higher tiers.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
