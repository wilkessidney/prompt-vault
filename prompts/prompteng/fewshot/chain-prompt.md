---
title: 链式样例提示
summary: 用样例串起多步推理链
category: prompteng-2
subcategory: fewshot
tags: [提示词, 少样本, 链式, 推理]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位提示词设计师。请用 few-shot 教模型走推理链：
{{多步任务 + 期望的中间步骤}}

要求：
- 提供 2 个完整样例，展示「输入 → 逐步思考 → 输出」
- 让模型模仿样例的中间格式而非只给答案
- 标注样例应覆盖不同难度 / 分支
- 提供一段模板与格式约定
- 提醒样例错误会直接污染输出的风险
