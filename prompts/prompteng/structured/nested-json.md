---
title: 嵌套 JSON 输出
summary: 稳定生成多层 JSON
category: prompteng-2
subcategory: structured
tags: [提示词, 结构化, JSON, 嵌套]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位提示词工程师。请约束模型输出嵌套 JSON：
{{JSON Schema / 字段层级}}

要求：
- 给出完整 schema 作为约束（或贴 JSON 模板）
- 要求严格遵循类型，且「只输出 JSON」
- 标注数组与对象嵌套的示例
- 提供一段可粘贴指令 + 解析失败时的兜底提示
- 提醒大输出需开启流式 / 分段避免截断
