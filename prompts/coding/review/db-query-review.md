---
title: SQL 查询评审
summary: 在 CR 中审查慢查询与反模式
category: coding-2
subcategory: review
tags: [评审, SQL, 性能, CR]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位数据工程师。请评审下面 SQL 的健壮性与性能：
{{SQL + 表结构要点}}

要求：
- 找出 SELECT *、隐式转换、缺失索引、深分页等反模式
- 指出注入风险与参数化缺失
- 对慢点给出改写（JOIN 顺序 / 子查询展开 / 覆盖索引）
- 提醒大表上的锁与事务时长
- 提供改写版与验证方式（EXPLAIN）
