---
title: "口令短语生成器"
summary: "用单词组合生成易记密钥，实时显示强度与熵值"
category: ui
subcategory: bonus
tags: ["密码生成", "安全", "工具"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-passphrase-generator/"
---

Build a passphrase generator with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-lg card with a heading and a muted line explaining that four common words beat one mangled one. The output is a dark rounded-xl panel showing the generated phrase in large monospace with a regenerate button carrying a refresh glyph and a copy button. Under it, controls: a range slider for word count from three to eight with the value shown beside the label, and three toggle rows with small switches for adding a number, adding a separator symbol and capitalising each word. Then a strength block with a four-segment bar that fills according to the estimated entropy, a label reading the strength band, and a monospaced line giving the entropy in bits and an estimated offline cracking time. Then add JavaScript that builds the phrase from a small word list, recomputes entropy from the pool size and word count, updates the bar and wording, and copies with a confirmation.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
