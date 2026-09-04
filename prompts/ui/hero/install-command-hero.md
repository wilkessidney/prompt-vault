---
title: "安装命令式 Hero"
summary: "开发者落地页，首屏就是可复制的安装命令"
category: ui
subcategory: hero
tags: ["Hero", "开发者", "复制"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/hero/hero-install-command-hero/"
---

Build a centered developer-tool hero with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} on a near-black background. Stack a small pill announcing the latest release, a large tight-tracking headline in white, a muted one-paragraph subline, and then the centrepiece: a dark terminal card with a rounded border, a top strip of three window dots and a package-manager tab row (npm, pnpm, bun, deno) where each tab carries a data-pm attribute, and a body showing a monospaced prompt line with a copy button on the right. Under the terminal, a row with a white primary button and a ghost "Read the docs" link, then a thin line of project facts — MIT licensed, zero config, 12k stars. Then add JavaScript that swaps the active tab styling and rewrites the install command for the chosen package manager, and wires the copy button to put the command — without the leading prompt character — on the clipboard, flipping its label to a checkmark for a moment.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
