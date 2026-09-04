---
title: "接受团队邀请"
summary: "从邮件邀请链接加入工作区，展示邀请人与团队信息"
category: ui
subcategory: auth
tags: ["团队协作", "邀请", "入职"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/auth/auth-workspace-invite-acceptance/"
---

Build an invitation acceptance card with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}} for someone opening a team invite link. Centre a max-w-md white card on a neutral-50 page. At the top, two overlapping circles — the inviter avatar and the workspace logo tile — with a small dark check badge between them, then a heading reading "Jules invited you to Studioform" and a muted line with the workspace domain. Add a bordered summary block showing the role being granted as a pill, the number of teammates already in the workspace as a row of stacked avatars with a plus-two counter, and the invited email address in monospace. Under it, a full-width dark "Accept invitation" button, a ghost "Decline" button beneath it, and a small print line explaining the invite expires in seven days and that the workspace admin can see when it is accepted.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
