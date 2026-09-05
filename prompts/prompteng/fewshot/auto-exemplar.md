---
title: 自动选例
summary: 根据输入自动挑最相关的 few-shot 样例
category: prompteng-2
subcategory: fewshot
tags: [提示词, 少样本, 检索, 示例]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位提示词工程师。请设计动态 few-shot 的方案：
{{任务 + 候选样例库 + 输入}}

要求：
- 给出按语义相似度从库里挑 2-3 个样例的策略
- 设计「样例 + 输入」的拼接格式
- 说明样例顺序与数量对效果的影响
- 标注当库为空时的兜底（零样本指令）
- 提供一段可落地的检索+拼接伪代码
