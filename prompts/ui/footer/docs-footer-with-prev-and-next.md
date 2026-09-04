---
title: "文档页脚（上下页）"
summary: "上页下页导航、编辑链接与反馈合并成一条"
category: ui
subcategory: footer
tags: ["文档", "页脚", "导航"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/footer/footer-docs-footer-with-prev-and-next/"
---

Design a documentation page footer with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}. Start with a feedback row: a bordered rounded-xl strip asking whether the page was helpful, with two outline buttons carrying thumb glyphs on the right and a muted line under the question naming the last update date. Below it, a two-cell grid of previous and next page links: each is a bordered rounded-xl card with a tiny uppercase direction label, an arrow on the appropriate side, the page title in medium weight and a one-line description, with the next card right-aligned. Beneath, a thin row of three utility links with glyphs — edit this page on GitHub, report an issue, and view the page history — separated on wider screens and stacked on small ones. End with a muted line giving the documentation version and a link to older versions.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
