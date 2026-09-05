---
title: 负面约束注入
summary: 显式禁止常见失败模式
category: prompteng-2
subcategory: optimize
tags: [提示词, 优化, 约束, 防错]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位提示词优化师。请为提示注入负面约束：
{{任务 + 反复出现的失败模式}}

要求：
- 把「不要做 X」具体写成可执行的禁止项清单
- 对每条禁止给出「应改为 Y」的正向替代
- 用编号列表让约束醒目不易被忽略
- 提供一段可直接追加的约束块
- 提醒约束过多会压制创造力的平衡点
