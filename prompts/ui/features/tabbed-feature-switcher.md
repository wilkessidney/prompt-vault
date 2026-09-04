---
title: "Tab 切换功能区"
summary: "纯 CSS 实现的 Tab 切换，无需 JS"
category: ui
subcategory: features
tags: ["Tab", "纯 CSS", "功能展示"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/features/features-tabbed-feature-switcher/"
---

Build a tabbed feature switcher with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} that works without JavaScript. Put three same-named radio inputs (visually hidden with sr-only) inside a section marked as a group, then a centered pill row of labels pointing at them, then three panels. Drive every state change with group-has variants keyed to the checked input id — for example group-has-[#feat-a:checked]:grid on the matching panel and the same variant for the active pill background — so both the pill highlight and the visible panel react to selection. Note that peer variants will not work here because the labels are nested inside the pill container rather than being siblings of the inputs. Each panel is a two-column card with a heading, a paragraph, a bullet list, and a rounded media placeholder.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
