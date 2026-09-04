---
title: "文件上传拖拽区"
summary: "拖放上传，列表逐行显示每个文件的进度与状态"
category: ui
subcategory: bonus
tags: ["文件上传", "拖拽", "进度"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/bonus/bonus-file-upload-dropzone/"
---

Create a file upload component with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}: a large dashed-border rounded-2xl dropzone with a centered icon tile, a bold "Drag files here" line, an underlined browse link, and a muted constraint line about accepted formats and max size, plus an empty list beneath it and a hidden row template. Then add the JavaScript that makes it a real uploader: highlight the zone while a file is dragged over it and reset on leave or drop, accept files from both the drop event and the file input, reject anything over the size limit with a red error row and a Retry link, and otherwise add a row showing the file-type badge, name, and human-readable size with a progress bar that fills as the upload advances before settling into a green completed state. Stub the actual transfer behind one clearly marked function so it can be swapped for a real XHR or fetch upload.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
