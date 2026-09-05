---
title: 备份与容灾方案
summary: 设计 RPO/RTO 可达的备份与恢复策略
category: coding-2
subcategory: database
tags: [数据库, 容灾, 备份, 运维]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位可靠性工程师。请设计数据库备份与容灾方案：
{{数据库类型 + 数据量 + 业务可接受的 RPO/RTO}}

要求：
- 给出备份策略（全量/增量/日志）与保留周期
- 设计主备 / 多可用区 / 跨区域复制拓扑
- 明确恢复演练频率与关键校验点
- 列出恢复 runbook 的核心步骤与责任人
- 估算成本并就「恢复优先级」给出分层建议
