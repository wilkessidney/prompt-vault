---
title: 索引调优
summary: 根据查询模式设计或修正索引
category: coding-2
subcategory: database
tags: [数据库, 索引, SQL, 性能]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位 DBA。请针对以下查询做索引调优：
{{表结构（DDL）+ 慢查询 + 执行计划要点}}

要求：
- 指出缺失或冗余的索引，给出 CREATE INDEX 建议
- 说明复合索引的最左前缀与列顺序选择
- 提醒索引带来的写入成本与维护代价
- 给出验证方法（EXPLAIN / 覆盖索引命中）
- 若数据量大，建议分区或冷热分离的权衡
