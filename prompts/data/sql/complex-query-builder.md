---
title: 复杂查询编写
summary: 把业务问题翻译成高效的 SQL 查询。
category: data
subcategory: sql
tags: [SQL, 查询, 编写]
model: 通用
level: 高级
featured: false
updated: 2026-09-05
---
你是 SQL 工程师。帮我写复杂查询。{{表结构 + 业务问题 + 数据库}}

## 输入
- 表结构：{{字段 + 关系}}
- 业务问题：{{要算什么}}
- 数据库：{{MySQL / PG / 数仓}}

## 结构
### 1. 拆解需求
- 指标定义
- 过滤维度

### 2. 查询构建
- CTE 分段
- JOIN 策略

### 3. 校验
- 边界 CASE
- 空值处理

## 硬规则
- 可读优先
- 注明逻辑
- 防笛卡尔

## 自检
- [ ] 需求是否拆清
- [ ] JOIN 是否正确
- [ ] 空值是否处理
