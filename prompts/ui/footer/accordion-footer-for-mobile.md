---
title: "移动端折叠页脚"
summary: "链接分栏在小屏上折叠为手风琴"
category: ui
subcategory: footer
tags: ["页脚", "响应式", "手风琴"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/footer/footer-accordion-footer-for-mobile/"
---

Build a responsive footer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} whose link groups collapse on small screens and expand on medium and up. Each group is a details element with a summary showing the group heading and a chevron that rotates when open; from md upward, force the details open with an attribute and hide the chevron so the groups read as ordinary columns. Include four groups — Product, Company, Developers and Legal — with four to six links each. Above the groups, a brand row with a wordmark, a one-line description and three social glyph buttons. Below them, a bottom bar with the copyright on the left and, on the right, a small "Back to top" link with an up arrow. Then add JavaScript that opens every group when the viewport crosses the md breakpoint and closes them again below it, so switching orientation does not leave the footer in a strange state.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
