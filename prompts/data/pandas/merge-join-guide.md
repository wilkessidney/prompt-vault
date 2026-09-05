---
title: 合并连接指南
summary: 安全正确地合并多张表。
category: data
subcategory: pandas
tags: [merge, 连接, Pandas]
model: 通用
level: 通用
featured: false
updated: 2026-09-05
---
你是数据整合专家。帮我写合并代码。{{表 A / B + 关联键}}

## 输入
- 表结构：{{键 + 字段}}
- 关系：{{一对一 / 多}}

## 结构
### 1. 连接类型
- inner / left
- 选因

### 2. 键处理
- 去重键
- 后缀避免冲突

### 3. 校验
- 行数预期
- 丢失检查

## 硬规则
- 先查重复键
- 说明连接类型
- 校验行数

## 自检
- [ ] 连接类型是否对
- [ ] 键是否唯一
- [ ] 行数是否符
