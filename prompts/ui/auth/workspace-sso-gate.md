---
title: "企业 SSO 登录门"
summary: "先输邮箱判断该走企业 SSO 还是普通密码登录"
category: ui
subcategory: auth
tags: ["SSO", "企业登录", "单点登录"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-workspace-sso-gate/"
---

Create an email-first sign-in card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}, max-w-sm on a neutral background. Start with a logo badge, a "Sign in to Northwind" heading, and a line explaining that the work email decides the sign-in method. The form holds an email field with a hidden inline error line, a hidden identity row that shows the confirmed address in a grey pill with a "Change" button, a hidden password field, a full-width dark Continue button, and a hidden note about single sign-on. Finish with a "Create an account" link. Then add JavaScript for the two-step flow: on Continue, validate the address and reveal the error if it is malformed; otherwise lock the email into the identity pill and look up its domain in a small map of SSO-enabled companies — matched domains relabel the button "Continue with Okta" (or whichever provider) and reveal the SSO note, unmatched domains reveal the password field and relabel the button "Sign in". "Change" restores the first step, and the button label always reflects the current step.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
