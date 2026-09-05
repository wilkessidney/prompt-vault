---
title: NoSQL 选型
summary: 按访问模式决定用哪种 NoSQL
category: coding-2
subcategory: database
tags: [数据库, NoSQL, 选型, 架构]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位数据架构师。请为以下场景做 NoSQL 选型：
{{数据形态 + 访问模式 + 规模 + 一致性要求}}

要求：
- 在文档 / 宽列 / KV / 图 / 时序中给出推荐及排除项
- 说明该选型如何匹配访问模式（读多写多 / 聚合查询）
- 指出放弃关系型带来的代价（事务 / 关联 / 迁移）
- 给出数据建模样例（主键 / 分区键设计）
- 推荐具体产品（托管优先）并说明运维负担
