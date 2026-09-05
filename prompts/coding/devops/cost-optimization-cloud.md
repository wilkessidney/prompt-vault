---
title: 云成本优化
summary: 找出云账单里的浪费并降本
category: coding-2
subcategory: devops
tags: [DevOps, 成本, 云, FinOps]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位 FinOps 顾问。请分析以下云资源使用并降本：
{{资源清单 / 用量 / 账单要点}}

要求：
- 找出闲置 / 低利用率资源（空跑实例 / 未挂载盘 / 旧快照）
- 给出规格下调、Spot、预留实例、自动伸缩的组合建议
- 估算每项可省比例与改动风险
- 指出「先别动」的高风险项
- 提供一张按优先级排序的降本行动表
