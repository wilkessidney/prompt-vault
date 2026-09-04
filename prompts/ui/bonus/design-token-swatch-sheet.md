---
title: "设计变量色板表"
summary: "列出配色、间距、圆角等 token，值可一键复制"
category: ui
subcategory: bonus
tags: ["设计系统", "Design Token", "色板"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-design-token-swatch-sheet/"
---

Build a design token reference sheet with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Start with a heading, a muted line naming the version, and a segmented control for three sections — colour, spacing, radius. The colour section is a grid of swatch cards: each has a tall block of the colour, then the token name in monospace, the hex value in muted monospace, and a small contrast note reading the ratio against white or black. Include eleven neutrals and four accents. The spacing section is a list of rows showing the token name, a bar whose width equals the value, and the pixel and rem values in monospace. The radius section is a row of six squares with increasing corner rounding and their token names beneath. Then add JavaScript that copies a token name on click and flashes a small check overlay on the swatch that was copied.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
