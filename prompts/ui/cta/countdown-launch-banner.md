---
title: "发布倒计时横幅"
summary: "实时倒计时叠加在早鸟注册表单上"
category: ui
subcategory: cta
tags: ["倒计时", "发布", "落地页"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/cta/cta-countdown-launch-banner/"
---

Build a dark launch countdown banner with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}, full width with a rounded-3xl inner card. Centre a small "Early access closes soon" pill, a two-line headline, and a countdown row of four tiles — days, hours, minutes, seconds — each a translucent rounded box with a large monospaced number above a tiny uppercase label. Under the timer, an inline email form (single field plus a white submit button) that stays side by side from sm up, then a muted line about seats remaining. Give each number tile an id and wrap the whole timer in a container that can be replaced when it reaches zero. Then add JavaScript that counts down to a launch timestamp every second: pad each unit to two digits, stop the interval at zero and swap the timer for a "We are live" message with a changed button label, and keep the seat line honest by decrementing it on a slow interval.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
