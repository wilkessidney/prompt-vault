---
title: "安装 CLI 步骤"
summary: "按操作系统分 Tab 的可复制安装命令"
category: ui
subcategory: onboarding
tags: ["引导", "CLI", "复制"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-install-the-cli-step/"
---

Build a developer onboarding step with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for installing a command-line tool. The header has a step label, a heading and a muted line naming the current version and size. Below, a segmented control of three tabs — macOS, Linux and Windows — then a dark rounded-xl command block showing one or two monospaced lines with a leading prompt symbol in a dimmer colour and a copy button in the corner. Under it, a "Then verify" block with a second smaller command and the expected output shown in muted monospace. Then a three-item checklist that fills in as steps complete, each with a circle that becomes a green check. Finish with a footer of a ghost "Skip, I use Docker" button and a dark Continue that is disabled until the verification step is marked done. Then add JavaScript that switches command sets per platform, copies to the clipboard with confirmation, marks checklist items complete on copy, and enables Continue when all are done.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
