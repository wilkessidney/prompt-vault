---
title: 可扩展性评审
summary: 找出系统的水平扩展瓶颈并给方案
category: coding-2
subcategory: architecture
tags: [架构, 扩展, 性能, 评审]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位 scalability 专家。请评审下面系统的扩展瓶颈：
{{架构描述 / 关键组件 / 当前负载}}

要求：
- 找出有状态节点、单点、热点数据等扩展卡点
- 按「无状态化 / 缓存 / 分片 / 异步」给出改造优先级
- 估算各方案的成本与收益，给出落地顺序
- 指出哪些瓶颈其实不需要现在解决（避免过度设计）
- 给出一条最低风险的起步改造建议
