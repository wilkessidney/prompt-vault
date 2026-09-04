---
title: "输入确认删除弹窗"
summary: "必须准确输入目标名称才允许执行删除"
category: ui
subcategory: bonus
tags: ["危险操作", "确认弹窗", "删除"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-type-to-confirm-delete-dialog/"
---

Build a destructive confirmation dialog with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. A fixed inset-0 overlay with a black/50 backdrop centring a max-w-md white card with rounded-2xl corners. Inside: a red-tinted warning tile with an exclamation glyph beside a title reading "Delete acme/payments-api", a paragraph explaining the action cannot be undone, and a bordered list of exactly what disappears — 3 environments, 412 build records, 8 API tokens — each row with a small red dot. Then an instruction line asking the person to type the repository name to confirm, with the name shown in a monospaced pill they can copy, a text input under it, a footer with a Cancel button and a red Delete button that starts disabled and faded, and a small line noting the action is logged in the audit trail. Then add JavaScript that compares the input against the required name on every keystroke, enabling the delete button only on an exact match, adding a red ring to the input once the typing diverges from the target, allowing Enter to submit when it matches, closing on Cancel, Escape or a backdrop click, and putting the dialog into a "Deleting…" state with the button disabled when it fires.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
