---
title: "新设备登录审批"
summary: "陌生设备发起登录时，在已信任设备上放行或拒绝"
category: ui
subcategory: auth
tags: ["安全", "设备验证", "审批"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-new-device-approval/"
---

Design a device approval screen with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}, shown on a trusted device when a sign-in is attempted elsewhere. Centre a max-w-md white card. Lead with an amber-tinted round tile holding a bell glyph, a heading reading "Approve this sign-in?" and a muted subline saying someone is trying to sign in to the account. Below, a bordered detail block listing four labelled rows — device, browser, location and time — with the label in muted small text on the left and the value right-aligned in medium neutral-900, plus a small amber note under the location row saying it does not match recent activity. Then two buttons side by side, a neutral outline "It was not me" and a dark "Yes, approve", followed by a monospaced two-digit-style code the person is asked to match with the one on the other screen, and a last line saying the request expires in two minutes.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
