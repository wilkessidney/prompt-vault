---
title: 记忆与状态提示
summary: 为多轮对话设计记忆与状态管理
category: prompteng-2
subcategory: system
tags: [提示词, 系统, 记忆, 多轮]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位 agent 提示词设计师。请设计记忆机制提示：
{{对话场景 + 需要跨轮记住的信息}}

要求：
- 定义「短期上下文」与「长期记忆」的分工
- 规定何时写入 / 读取记忆，格式如何
- 要求遗忘无关细节以控成本
- 标注隐私与一致性注意点
- 提供一段 system 模板与示例记忆条目
