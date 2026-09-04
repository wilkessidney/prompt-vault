---
title: "快捷键录制器"
summary: "捕获按键组合，自动检测与已有快捷键的冲突"
category: ui
subcategory: bonus
tags: ["快捷键", "录制", "可访问性"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-keyboard-shortcut-recorder/"
---

Create a keyboard-shortcut recorder with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} inside a settings card. Show three existing actions in tidy rows, each with its current key combination rendered as kbd caps and a Change button. Clicking Change should replace that row with a focused recording surface that says “Press a key combination”, plus Cancel and Clear actions. Include a compact warning area for reserved browser shortcuts or conflicts with another action, and a footer note explaining that at least one modifier is required. Then add JavaScript that captures keydown events without typing into the page, ignores bare modifier presses, requires Ctrl, Alt, Shift, or Meta for letter and number shortcuts, normalizes modifier order, displays platform-aware Meta labels, detects duplicate bindings, rejects common browser commands such as new tab and reload, supports Escape to cancel, lets Backspace clear a binding, and commits a valid shortcut immediately.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
