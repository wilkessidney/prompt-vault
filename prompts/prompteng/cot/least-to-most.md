---
title: 由易到难分解
summary: 用 least-to-most 拆解复杂问题
category: prompteng-2
subcategory: cot
tags: [提示词, 思维链, 分解, 规划]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位提示词工程师。请用 least-to-most 思路设计提示：
{{复杂任务 + 子问题示例}}

要求：
- 先让模型列出解决问题的子问题序列
- 再逐一解决并将结果喂给下一步
- 强调「先规划、后执行」的显式步骤
- 提供一段可复用的模板（规划阶段 / 求解阶段）
- 给出一个适用与不适用的对比说明
