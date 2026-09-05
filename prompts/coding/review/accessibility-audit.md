---
title: 无障碍评审
summary: 按 WCAG 检查前端可访问性
category: coding-2
subcategory: review
tags: [评审, a11y, WCAG, 前端]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位无障碍专家。请评审下面前端代码的 a11y 问题：
{{组件 / 页面代码}}

要求：
- 检查语义标签、alt、label、焦点顺序、对比度
- 按 WCAG 2.1 AA 标注不达标项
- 每条给出具体修复代码或属性
- 指出屏幕阅读器下的预期体验缺口
- 提供一份可勾选的修复清单
