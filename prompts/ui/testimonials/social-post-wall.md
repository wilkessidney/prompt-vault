---
title: "社交帖子墙"
summary: "把夸赞截图排成社媒帖子样式"
category: ui
subcategory: testimonials
tags: ["证言", "社媒", "截图"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/testimonials/testimonials-social-post-wall/"
---

Create a wall of social posts with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} presented in a masonry-feeling three-column layout using CSS columns. Each post is a bordered rounded-xl white card kept whole with break-inside avoid: a header row with a round avatar, a display name in medium weight, a muted handle and a small platform glyph on the right, then the post body in relaxed text where mentions and hashtags are wrapped in blue-toned spans, then a footer row with a timestamp and two muted engagement counts with glyphs. Vary the post lengths so the columns stagger naturally, and give two of the seven posts a subtle neutral-900 border to mark them as favourites. Above the wall, a centred heading and a muted line inviting people to add their own with a hashtag.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
