---
title: "接入工具链步骤"
summary: "集成磁贴点击后翻转为已连接态"
category: ui
subcategory: onboarding
tags: ["引导", "集成", "磁贴"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-connect-your-stack-step/"
---

Create a "connect your tools" onboarding step with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Centre a heading, a subline explaining that connections can be changed later, and a live counter reading "0 of 6 connected". Below, a responsive grid of integration cards, each carrying a data-tool attribute: a rounded tile with a monospaced glyph on a tinted square, the tool name, a one-line category, and a small bordered Connect button in the corner. Underneath the grid, a muted note about read-only scopes, then a footer with a "Skip for now" link and a Continue button that starts disabled and faded. Then add JavaScript that toggles each card between connected and not: swap the button to a green "Connected ✓" state and back, ring the connected card, keep a set of connected tools, update the counter, and enable the Continue button once at least one tool is connected while rewriting its label to name the count.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
