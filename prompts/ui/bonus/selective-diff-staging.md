---
title: "代码块选择性暂存"
summary: "逐个 hunk 审阅代码差异并选择性地 stage"
category: ui
subcategory: bonus
tags: ["Git", "Diff", "代码评审"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-selective-diff-staging/"
---

Build a compact selective diff-staging panel with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. The header names a changed file, shows its branch path, a green additions count and red deletions count, plus a master checkbox. Below, render two code hunks as bordered groups with monospaced line numbers and tinted addition/deletion rows; each hunk gets its own checkbox and a concise context label. Finish with a sticky-looking footer that reports how many hunks are selected and has a dark “Stage selected” button. Then add JavaScript that keeps the master checkbox synchronized, including its indeterminate state, updates the selected count and button label, disables the action when nothing is checked, and on staging replaces each selected hunk with a calm staged confirmation row while recalculating the remaining totals. Use semantic checkbox labels and an aria-live status so the interaction remains accessible.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
