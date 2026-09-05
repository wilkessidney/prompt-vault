---
title: 置信度校准
summary: 让模型在不确定时诚实表达不确定
category: prompteng-2
subcategory: antihallucination
tags: [提示词, 抗幻觉, 校准, 不确定]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位提示词工程师。请设计一段 system / 指令，让模型在不确定时显式表达：
{{任务类型 + 模型易编造的场景}}

要求：
- 明确「不知道就说不知道，不得填补空白」的硬约束
- 要求给出置信度或证据来源后再下结论
- 区分「高置信事实」与「推测」，用显式标签
- 提供 1 段可直接粘贴的指令模板
- 给一个反例说明未校准时的典型幻觉
