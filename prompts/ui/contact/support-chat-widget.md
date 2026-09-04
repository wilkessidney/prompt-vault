---
title: "客服聊天挂件"
summary: "悬浮气泡，展开后是带快捷回复的对话线程"
category: ui
subcategory: contact
tags: ["在线客服", "聊天", "挂件"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/contact/contact-support-chat-widget/"
---

Create a floating support chat widget with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. A fixed bottom-right launcher button — a dark circle with a chat glyph and a small red unread dot — plus a chat panel above it that is hidden by default: a 22rem card with rounded-2xl corners and a shadow, a dark header with an agent avatar, the agent name, a green "Typically replies in 2 minutes" line and a close ✕, a scrollable message area seeded with one incoming bubble, a row of quick-reply chips, and a composer with a text input and a send button. Incoming messages are grey bubbles aligned left, outgoing ones are dark and aligned right. Then add JavaScript that opens and closes the panel (clearing the unread dot on first open and closing on Escape), appends the typed message as an outgoing bubble on submit, shows a three-dot typing indicator for a moment, then answers with a canned reply picked by matching keywords like "pricing", "bug" or "demo" against the message with a sensible fallback, sends a quick-reply chip as if it had been typed, and keeps the message area scrolled to the newest bubble.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
