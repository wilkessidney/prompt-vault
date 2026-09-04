---
title: "两步验证设置"
summary: "扫码绑定验证器 App，随后展示并允许下载备用码"
category: ui
subcategory: auth
tags: ["2FA", "安全设置", "二维码"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-two-factor-setup-with-qr/"
---

Build a two-factor enrolment card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}, max-w-xl on a soft neutral background. Above the fold: a small uppercase "Security" eyebrow, a headline, and a line naming a few authenticator apps. The pairing panel puts a square QR placeholder (a 5-column grid of small rounded squares inside a bordered tile) beside a column holding a "Can't scan it?" hint, the setup key in a monospaced pill with a Copy button, and a six-digit confirmation input with wide letter-spacing. Footer row: a muted Cancel link and a dark "Turn on" button. Below it, a hidden success panel with a green confirmation strip, a grid of one-time backup codes, and a "Copy all codes" button. Then add JavaScript that copies the setup key to the clipboard and flips the button label to "Copied" for a moment, strips non-digits from the confirmation field and keeps the "Turn on" button disabled until six digits are present, and on confirm swaps the pairing panel for the backup-code panel and wires its copy button to put every code on the clipboard as separate lines.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
