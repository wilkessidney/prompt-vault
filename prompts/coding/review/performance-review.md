---
title: 性能代码评审
summary: 在 CR 中揪出性能隐患
category: coding-2
subcategory: review
tags: [评审, 性能, CR, 优化]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位性能方向 reviewer。请评审下面代码的性能问题：
{{代码 + 场景（规模 / QPS）}}

要求：
- 找出 N+1、不必要拷贝、同步阻塞、频繁分配等隐患
- 对每条给出影响量级与修复方向
- 区分「现在就改」与「记入 TODO」的优先级
- 提供改写前后的关键片段对比
- 提醒加上基准测试，避免凭感觉优化
