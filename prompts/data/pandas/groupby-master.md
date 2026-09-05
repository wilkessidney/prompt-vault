---
title: groupby 高阶用法
summary: 用 groupby + agg 做复杂分组聚合。
category: data
subcategory: pandas
tags: [groupby, 聚合, Pandas]
model: 通用
level: 高级
featured: false
updated: 2026-09-05
---
你是 Pandas 专家。帮我写 groupby。{{分组键 + 聚合需求}}

## 输入
- 分组键：{{单列 / 多列}}
- 聚合：{{多指标 + 多函数}}

## 结构
### 1. 分组设计
- 键的选择
- 是否排序

### 2. 聚合
- agg 字典
- named agg

### 3. 后处理
- 重置索引
- 列名整理

## 硬规则
- 明确输出形状
- 命名清晰
- 避免 apply 慢

## 自检
- [ ] 分组键是否对
- [ ] 聚合是否全
- [ ] 形状是否明
