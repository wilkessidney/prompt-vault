---
title: 变异测试
summary: 用变异测试评估用例有效性
category: coding-2
subcategory: testing
tags: [测试, 变异测试, 覆盖, 质量]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位测试质量专家。请说明并落地变异测试：
{{代码库语言 + 现有测试}}

要求：
- 解释变异得分（mutation score）为何比行覆盖更可信
- 推荐工具（如 Stryker / mutmut）并给配置要点
- 设计先从核心模块切入的范围
- 解读「存活变异」意味着用例漏测什么
- 给出把变异测试接进 CI 的渐进方案
