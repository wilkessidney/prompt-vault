---
title: 自然语言生成 SQL（开发向）
summary: 输入表结构和业务问题，生成可执行 SQL 并解释推理。
category: coding
subcategory: database
tags: [SQL, NL2SQL]
model: Claude / GPT-4o
level: 通用
featured: false
updated: 2026-09-05
---
根据表结构把业务问题翻译成 SQL。

## 表结构
```sql
{{建表语句或表结构描述}}
```

## 业务问题
{{用自然语言描述想查什么}}

## 输出
1. **澄清假设**：问题里模糊的地方（时间口径含不含今天？去重怎么算？），列出你的假设，禁止瞎猜。
2. **SQL**：带注释的可执行语句，方言为 {{MySQL / PostgreSQL / SQLite}}。
3. **解释**：逐段说明每个 JOIN / WHERE / 窗口函数在干什么。
4. **性能提醒**：这个查询在大表上会不会慢？需要什么索引？

**硬规则**：如果表结构不足以回答问题，先提问而不是编造字段。
