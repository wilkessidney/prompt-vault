---
title: "提示词 Token 计数器"
summary: "实时统计 token 数，并对照目标模型的上下文上限"
category: ui
subcategory: bonus
tags: ["Token", "LLM", "工具"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-prompt-token-counter/"
---

Build a token counter with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for people writing prompts. Use a max-w-2xl card with a heading, a model select of four options with their context sizes, and a large monospaced textarea. Under it, a stats row of four cells separated by vertical rules — characters, words, estimated tokens and estimated cost — each with a figure and a tiny label. Below that, a context usage bar with a fill that turns amber past seventy percent and red past ninety, a label reading tokens used against the window, and a muted line giving the tokens remaining. Finish with three small notes about the estimate being approximate, whitespace counting, and the response sharing the same window. Then add JavaScript that recomputes everything on input with a debounce, estimates tokens at roughly four characters each, prices per million tokens from the selected model, and updates the bar colour by threshold.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
