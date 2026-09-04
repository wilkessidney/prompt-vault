---
title: "两步账号向导"
summary: "字段校验通过才解锁下一步按钮"
category: ui
subcategory: onboarding
tags: ["引导", "向导", "校验"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-two-step-account-wizard/"
---

Build a two-step signup wizard with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centre a max-w-lg card. The header shows a step counter reading "Step 1 of 2" with a thin two-segment progress bar under it. Step one collects a full name, a work email and a password with a hint line about the minimum length; step two collects a company name, a team size select and a checkbox agreeing to terms. Only one step is visible at a time. The footer row has a ghost Back button, disabled on the first step, and a dark Next button that becomes Create account on the last step. Then add JavaScript that validates the visible step on input — a non-empty name, an email containing an at sign and a dot, a password of at least ten characters, and the checkbox on step two — enabling the primary button only when the step is valid, showing a small red message under any field left invalid after it has been touched, advancing the progress segments, and replacing the card contents with a success state on submit.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
