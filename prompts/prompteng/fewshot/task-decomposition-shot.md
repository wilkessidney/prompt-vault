---
title: 任务分解样例
summary: 用样例教模型先分解再执行
category: prompteng-2
subcategory: fewshot
tags: [提示词, 少样本, 分解, 规划]
model: 通用推理模型（Claude / GPT / Kimi）
level: 入门
featured: false
updated: 2026-09-05
---
你是一位提示词工程师。请通过样例教模型做任务分解：
{{任务类型 + 1-2 个分解示例}}

要求：
- 样例展示「把任务拆成有序子任务」的格式
- 让模型对新任务先输出分解再逐一完成
- 提供可直接用的 few-shot 模板
- 标注分解粒度过粗 / 过细的坏例子
- 给出一个应用该模式的真实任务示范
