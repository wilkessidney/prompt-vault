---
title: "WCAG 对比度检查器"
summary: "检测前景背景色组合，实时给出 AA/AAA 达标判定"
category: ui
subcategory: bonus
tags: ["无障碍", "WCAG", "配色"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-wcag-contrast-checker/"
---

Create a polished WCAG contrast checker with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a two-column card with foreground and background controls, each combining a native color input and an editable hex field, plus a swap-colors button between them. Under the controls, show a generous live preview containing large heading text, body copy, and a button using the chosen colors. Finish with a results strip that shows the contrast ratio and four pass/fail badges for AA normal, AA large, AAA normal, and AAA large text. Then add JavaScript that accepts three- or six-digit hex colors, keeps the native pickers and text fields synchronized, marks invalid input without breaking the last valid preview, swaps the colors, calculates relative luminance and contrast using the WCAG formula, formats the ratio to two decimals, and updates every pass badge against the correct 3.0, 4.5, and 7.0 thresholds.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
