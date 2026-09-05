---
title: 动态示例选择
summary: 根据输入检索最相关的示例。
category: prompteng
subcategory: fewshot
tags: [动态, 检索, fewshot]
model: 通用
level: 高级
featured: false
updated: 2026-09-05
---
你是检索增强设计者。帮我做动态示例。{{输入 + 示例库}}

## 输入
- 当前输入：{{查询}}
- 示例库：{{带索引}}

## 结构
### 1. 相似度
- 检索策略
- 排序依据

### 2. 组装
- 取 Top-K
- 拼入提示

### 3. 回退
- 无近例时
- 默认通用

## 硬规则
- 相关性优先
- 数量可控
- 有回退

## 自检
- [ ] 是否相关
- [ ] 数量是否控
- [ ] 是否回退
