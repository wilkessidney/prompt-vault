---
title: "Agent 运行轨迹"
summary: "可展开的 AI 工具调用时间线，展示每一步输入输出与耗时"
category: ui
subcategory: bonus
tags: ["AI", "调试", "时间线"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-agent-run-trace/"
---

Build an agent run trace with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for inspecting what an AI agent actually did. Use a max-w-3xl card with a header carrying the run title, a green completed pill, a monospace run id with the agent name and step count, then right-aligned duration and token totals and a replay button. Below it, an ordered list of steps joined by a thin vertical rail: each row has a small round status dot, a monospace kind badge reading thought, tool or output, the step name, a truncated one-line result, and right-aligned duration and token figures. Clicking a row expands a dark monospace panel underneath showing the raw input and output for that step. Then add JavaScript that renders the steps from an array, toggles one panel at a time, and makes replay clear the totals and reveal the steps one after another with a short stagger, adding each step duration and token count to the header as it lands.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
