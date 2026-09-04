---
title: "标题轮换 Hero"
summary: "同一个标题位置循环切换不同受众定位"
category: ui
subcategory: hero
tags: ["Hero", "动画", "标题"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/hero/hero-hero-with-rotating-role/"
---

Build a centred hero with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} whose headline swaps one word on a timer. The layout is a max-w-3xl centred column: a muted eyebrow in small caps, then a two-line headline where the second line ends with a highlighted span sitting on a neutral-100 rounded box that holds the rotating word, a paragraph, and a pair of buttons — a dark primary and a bordered secondary with a play glyph. Under the buttons, a single line of muted text naming four customer types separated by dots. Then add JavaScript that cycles the highlighted word through a list of four audiences every two and a half seconds using a fade-and-lift transition, measures the widest word once on load so the box never jumps in width, and pauses the rotation while the tab is hidden.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
