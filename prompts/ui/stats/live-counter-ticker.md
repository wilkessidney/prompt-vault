---
title: "实时计数器"
summary: "数字持续跳动，营造实时感"
category: ui
subcategory: stats
tags: ["指标", "实时", "计数器"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/stats/stats-live-counter-ticker/"
---

Create a live activity strip with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a full-width neutral-950 band containing a max-w-5xl flex row that wraps: on the left, a pill with a pulsing green dot reading "Live", a large monospaced counter with thousands separators, and a small label beneath reading events processed today. In the middle, a thin vertical rule and two secondary figures stacked with muted labels — active regions and current throughput per second. On the right, a compact bar chart of twelve slim vertical bars in varying heights representing the last twelve minutes, with the newest bar highlighted in green. Then add JavaScript that increments the main counter by a small random amount several times a second with a brief highlight flash on change, updates the throughput figure every two seconds, and every five seconds shifts the bar chart left by dropping the first bar and appending a new one with a random height.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
