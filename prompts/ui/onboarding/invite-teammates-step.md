---
title: "邀请同事步骤"
summary: "填邮箱、设角色，可发送或跳过"
category: ui
subcategory: onboarding
tags: ["引导", "邀请", "协作"]
model: 通用代码模型（Claude / Cursor / v0 / Copilot）
level: 进阶
featured: false
updated: 2026-09-04
source: "https://vibeprompts.dev/onboarding/onboarding-invite-teammates-step/"
---

Build an "invite your team" onboarding step with {{技术栈：Tailwind CSS / 原生 CSS / UnoCSS / styled-components}}, max-w-xl and centred. Above the heading, a step counter and a slim two-tone progress bar. Under the subline, an add row — an email field and a dark Add button side by side — plus a hidden inline error line and a hint that several addresses can be pasted at once. Below that, an empty list container for the invitees and a dashed empty-state panel saying nobody has been added yet. Each invitee row should render as an avatar circle with initials, the address, a role select (Admin, Member, Viewer), and a ✕ remove button. Finish with a footer row: a muted "I'll do this later" link on the left and a dark Continue button on the right. Then add JavaScript that splits pasted input on commas, semicolons and spaces, validates each address and shows the error for bad ones, ignores duplicates already in the list, derives the initials from the address, appends the row with a working remove button, swaps the empty state out once there is at least one invitee, and rewrites the Continue label to "Send 3 invites" or plain "Continue" depending on the count.

Deliver the result as {{输出格式：单个 HTML 文件（内联 style 与 script） / React 组件（.tsx） / Vue 单文件组件（.vue） / Astro 组件（.astro）}}.
