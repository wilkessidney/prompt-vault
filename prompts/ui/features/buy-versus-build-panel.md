---
title: "自建 vs 采购对比"
summary: "诚实对比自研与采购的总成本"
category: ui
subcategory: features
tags: ["选型", "成本对比", "B2B"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/features/features-buy-versus-build-panel/"
---

Design a buy-versus-build comparison with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-4xl section with a heading, a paragraph acknowledging that building it is genuinely possible, and two columns of equal width. The left column, headed "Build it yourself", is a bordered card listing six cost lines as rows with a label and a figure — engineering time, on-call, infrastructure, compliance work, ongoing maintenance and opportunity cost — with a hairline before a bold first-year total. The right column, headed "Use ours", is a neutral-900 card with the same row structure but far shorter, ending in its own total in white, plus a small line noting what is not included. Below, a horizontal bar comparison showing the two totals to scale with figures at the ends, and a closing line in muted text stating the assumptions behind the estimate with a link to the workings.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
