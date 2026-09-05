---
title: 示例筛选
summary: 挑选最具代表性的 few-shot 示例。
category: prompteng
subcategory: fewshot
tags: [fewshot, 示例, 提示词]
model: 通用
level: 通用
featured: false
updated: 2026-09-05
---
你是示例策划。帮我挑 few-shot 示例。{{任务 + 候选样本}}

## 输入
- 任务：{{要学什么}}
- 候选：{{样本池}}

## 结构
### 1. 覆盖性
- 边界情形
- 典型情形

### 2. 多样性
- 不重复模式
- 分布合理

### 3. 排序
- 由易到难
- 锚定格式

## 硬规则
- 示例质量高
- 格式一致
- 数量克制

## 自检
- [ ] 是否覆盖边界
- [ ] 是否多样
- [ ] 格式是否一
