---
title: 增量查询
summary: 设计只处理新增数据的增量 SQL。
category: data
subcategory: sql
tags: [SQL, 增量]
model: 通用
level: 进阶
featured: false
updated: 2026-09-05
---
你是数据工程师。写增量。
## 输入
- 全量逻辑：{{}}
- 增量键：{{时间/ID}}
## 输出
1. 用 watermark/游标改写。
2. 幂等设计（重跑不重算）。
3. 边界：迟到数据/乱序。
4. 性能对比（全量 vs 增量）。
硬规则：增量必须幂等，禁止重跑产生重复。
