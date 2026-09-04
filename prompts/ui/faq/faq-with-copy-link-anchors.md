---
title: "答案可单独分享的 FAQ"
summary: "每条答案自带可复制的锚点链接"
category: ui
subcategory: faq
tags: ["FAQ", "锚点", "分享"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/faq/faq-faq-with-copy-link-anchors/"
---

Build an FAQ list with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} where every question can be linked to directly. Use a max-w-3xl column with a heading and a muted subline. Each item is a details element styled as a bordered rounded-xl card with the summary as a flex row holding the question in medium weight, a small link glyph button that appears on hover, and a plus that rotates to a cross when open. The answer is relaxed grey prose with an occasional inline link. Give every item an id derived from its question. Then add JavaScript that copies the absolute URL with the anchor to the clipboard when the link button is clicked, showing a small floating "Link copied" chip near the button for a moment, opens and scrolls to the matching item when the page loads with a hash, and closes other open items so only one answer is expanded at a time.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
