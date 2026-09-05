---
title: 慢查询诊断
summary: 定位并优化慢 SQL。
category: data
subcategory: sql
tags: [SQL, 优化]
model: 通用
level: 进阶
featured: false
updated: 2026-09-05
---
你是 DBA。诊慢查询。
## 输入
- 慢 SQL：{{}}
- 表规模/索引：{{}}
## 输出
1. EXPLAIN 解读（全扫/错索引）。
2. 索引/重写建议。
3. 改写后的 SQL。
4. 验证：预期提升量级。
硬规则：先 EXPLAIN 再改，禁止盲加索引。
