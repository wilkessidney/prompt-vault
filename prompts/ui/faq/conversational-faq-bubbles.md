---
title: "对话气泡式 FAQ"
summary: "问答以聊天气泡形式呈现"
category: ui
subcategory: faq
tags: ["FAQ", "对话", "气泡"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-conversational-faq-bubbles/"
---

Create an FAQ laid out as a conversation with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Use a max-w-2xl column with a small header row showing a support avatar, a name, and a green dot with the words "usually replies in minutes". Below, alternating message bubbles: questions are right-aligned neutral-900 bubbles with white text and a rounded-2xl shape squared on the bottom-right; answers are left-aligned neutral-100 bubbles with dark text squared on the bottom-left, each preceded by a small avatar. Include five exchanges, keeping the answers two or three sentences, and give one answer a small bordered white card inside it listing three bullet points. Between exchanges add tiny centred timestamps in muted text. End the thread with a typing indicator of three animated dots and a disabled input row with a send button, making clear it is a decorative representation rather than a live chat.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
