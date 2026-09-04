---
title: "继续引导横幅"
summary: "从上一次中断处接着完成设置"
category: ui
subcategory: onboarding
tags: ["引导", "续接", "横幅"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-resume-onboarding-banner/"
---

Design an in-app resume banner with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for someone who abandoned setup partway. Use a max-w-4xl bordered rounded-2xl card with a neutral-50 background. The left side has a small "Setup unfinished" pill, a heading naming what remains, a one-line explanation of what unlocks when it is done, and a progress row with a thin track at forty percent, a "2 of 5 steps" label and the time estimate for the rest. The right side is a compact list of the five steps, each a row with a numbered circle that is filled and ticked for the two completed ones, the step name, and a muted status word — done, next, or a faint "later"; the next step carries a small dark "Continue" button. Under both, a bottom bar with a muted dismiss link on the left and a note that setup can be finished from the account menu at any time.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
