---
title: 类比推理提示
summary: 用类比启发新问题的解法
category: prompteng-2
subcategory: cot
tags: [提示词, 思维链, 类比, 迁移]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位提示词设计师。请设计类比推理提示：
{{新问题 + 可选的相关已知问题}}

要求：
- 让模型先找一个结构相似的老问题作为类比
- 映射两者要素，再迁移解法并标注差异
- 要求显式说明「类比在何处失效」
- 提供一段模板与示例输出
- 提醒类比过度拟合的风险与缓解
