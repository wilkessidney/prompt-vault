---
title: "灰度放量进度盘"
summary: "拖动百分比控制灰度，下方网格实时展示分桶命中情况"
category: ui
subcategory: bonus
tags: ["灰度发布", "Feature Flag", "滑块"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-feature-flag-rollout-dial/"
---

Create a feature flag rollout control with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-xl card headed by the flag name, its monospace key, and a switch on the right that arms or kills the flag entirely. Under it, a three-way segmented control for development, staging and production. Then the dial: an oversized percentage figure with a range slider beneath it, and below that a grid of a hundred small rounded squares, twenty to a row, each standing for one percent of traffic, filled squares showing who currently gets the flag. Add a line reading the estimated audience against the environment total, an amber note that only appears past half of production traffic, and a short list of override rules with their own pills. Then add JavaScript that redraws the grid and the audience count as the slider moves, swaps the environment totals, shows the warning by threshold, and greys the whole dial out with the flag reading off when the kill switch is thrown.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
