---
title: "新手任务清单卡"
summary: "入门任务列表带完成进度"
category: ui
subcategory: onboarding
tags: ["引导", "清单", "进度"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-checklist-card/"
---

Create a getting-started checklist card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a title with a progress label (e.g. "2 of 4 done"), a thin progress bar, and a list of tasks. Completed tasks show a filled check and strikethrough muted text; incomplete tasks show an empty circle and an action link on the right. Then add JavaScript that lets the list be completed: clicking a task or its action link toggles it done, which fills the marker, strikes the label, hides the action, animates the progress bar to the new percentage, and updates the "n of m done" count — with a small celebratory line replacing the count once everything is checked.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
