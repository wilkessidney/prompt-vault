---
title: Pandas 常用配方
summary: 给出可读、正确的 Pandas 操作代码。
category: data
subcategory: pandas
tags: [Pandas, 代码, 配方]
model: 通用
level: 通用
featured: false
updated: 2026-09-05
---
你是 Pandas 教练。帮我写数据处理代码。{{任务 + 数据形状}}

## 输入
- 任务：{{筛选 / 聚合 / 变换}}
- 数据：{{列名 + 类型}}

## 结构
### 1. 读取与检查
- head / info
- 类型确认

### 2. 核心操作
- 向量化优先
- 链式可读

### 3. 输出
- 中间校验
- 落盘

## 硬规则
- 不用隐式循环
- 注明 inplace
- 先小样验证

## 自检
- [ ] 是否向量化
- [ ] 类型是否对
- [ ] 是否可复现
