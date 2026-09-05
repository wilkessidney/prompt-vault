---
title: 上下文压缩
summary: 在 system 层约束长上下文摘要
category: prompteng-2
subcategory: system
tags: [提示词, 系统, 压缩, 上下文]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位系统提示词设计师。请设计上下文压缩指令：
{{可用上下文规模 + 任务}}

要求：
- 要求模型先压缩 / 提炼相关上下文再推理
- 给出保留什么（目标相关事实）与丢弃什么
- 标注压缩后需保留来源可追溯性
- 提供一段 system 模板
- 提醒过度压缩会丢关键约束的风险
