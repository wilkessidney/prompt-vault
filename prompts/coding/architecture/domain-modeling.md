---
title: 领域建模
summary: 从需求提炼聚合根、实体与值对象
category: coding-2
subcategory: architecture
tags: [架构, DDD, 领域建模, 聚合]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位 DDD 实践者。请对以下业务进行领域建模：
{{业务描述 + 关键规则}}

要求：
- 识别聚合根、实体、值对象，并给出边界理由
- 列出 2-3 个核心聚合及其不变量（invariant）
- 标出跨聚合的一致性问题与最终一致性处理
- 给出仓储（Repository）边界建议
- 用一段伪代码或类图说明聚合间如何协作
