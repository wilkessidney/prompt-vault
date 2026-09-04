---
title: "灰度开关管理面板"
summary: "按百分比放量，可按环境分别开关"
category: ui
subcategory: dashboards
tags: ["灰度发布", "Feature Flag", "面板"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/dashboards/dashboards-feature-flag-rollout-panel/"
---

Build a feature flag management panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The header holds the flag name in monospace with a small "boolean" type pill, a muted description line, and a prominent switch on the right showing the flag on in production. Below, three environment rows in a bordered card: each has the environment name, a small state pill, a rollout percentage with a range slider, and a muted line giving how many users that represents. Then a targeting section listing two rules as bordered rows with a condition in monospace, a small "then serve true" clause and a delete cross, plus a dashed "Add a rule" row. Finish with an audit strip of three recent changes, each with an avatar, a sentence describing the change and a relative timestamp. Then add JavaScript that keeps each percentage label and its user estimate in sync with its slider, and flips the environment pill between off, partial and full.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
