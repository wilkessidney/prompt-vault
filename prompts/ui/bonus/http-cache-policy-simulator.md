---
title: "HTTP 缓存策略模拟器"
summary: "可视化展示 fresh / stale / expired 三种缓存状态的判定过程"
category: ui
subcategory: bonus
tags: ["缓存", "HTTP", "调试工具"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-http-cache-policy-simulator/"
---

Build an HTTP cache-policy simulator with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Include controls for public or private caching, max-age, stale-while-revalidate, and immutable behavior. Show the generated Cache-Control header, a request-age slider, response outcome badge, browser and CDN decision steps, and a horizontal freshness timeline. Add JavaScript that recalculates HIT, STALE, REVALIDATE, or MISS behavior from the policy, updates the header, and explains each decision in plain language.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
