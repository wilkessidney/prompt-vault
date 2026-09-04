---
title: "重置密码（带强度校验）"
summary: "新密码表单实时显示强度条与逐条达标情况"
category: ui
subcategory: auth
tags: ["密码", "表单校验", "重置"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-reset-password-with-strength-meter/"
---

Create a reset-password card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Include a title, a line naming the account being reset, a new password field, a four-segment strength meter bar that starts empty, a small strength label, a confirm field, and a requirements checklist whose items each carry a data-rule attribute. Finish with a full-width dark submit button and a back-to-sign-in link. Then add JavaScript that scores the password on every keystroke — length, a number, a symbol, mixed case — paints that many meter segments amber then green, writes Weak / Fair / Good / Strong into the label, flips each checklist row between a muted dot and a green check as its rule passes, and keeps the submit button disabled until every rule passes including the two fields matching.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
