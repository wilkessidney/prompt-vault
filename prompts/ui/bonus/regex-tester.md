---
title: "正则测试器"
summary: "输入正则与修饰符，高亮展示匹配结果与捕获组"
category: ui
subcategory: bonus
tags: ["正则", "调试工具", "表单"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-regex-tester/"
---

Build a regular expression tester with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-2xl card with a heading and a muted line. The pattern row is a bordered field with monospaced slashes rendered as muted addons on either side of the input, and a small flags input after the closing slash. Under it, a textarea of test text pre-filled with a few lines. Below, a result panel showing the subject text with every match wrapped in a highlighted span, then a match list where each entry shows an index, the matched text in monospace and any capture groups as small pills. A status line reports the match count or a red parse error. Then add JavaScript that compiles the pattern on every keystroke inside a try-catch, escapes the subject before injecting highlights, always forces the global flag for the highlight pass, guards against zero-length matches looping forever, and lists up to twenty matches.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
