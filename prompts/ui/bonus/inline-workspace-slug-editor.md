---
title: "内联 URL 别名编辑器"
summary: "原地编辑工作区 URL 别名，带可用性校验与保存"
category: ui
subcategory: bonus
tags: ["内联编辑", "URL", "表单"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-inline-workspace-slug-editor/"
---

Build an inline workspace-slug editor with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} inside a compact settings card. The resting state shows the current public URL, a green Available badge, and an Edit button. The editing state replaces it with a fixed domain prefix, a focused text input, a live character counter, helper text describing the allowed format, and Cancel / Save buttons. Add a small preview line beneath the control so people can see the final URL before saving. Then add JavaScript that opens the editor, normalizes pasted or typed text to lowercase kebab-case, validates a 3–32 character slug, rejects a short list of reserved words, updates the preview and character counter live, supports Escape to cancel and Enter to save, preserves the original value on cancel, and simulates an asynchronous save with a Saving… state before returning to the read-only view.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
