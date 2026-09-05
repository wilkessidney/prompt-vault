---
title: 输出 Schema 设计
summary: 为 LLM 设计稳定可解析的 JSON schema。
category: prompteng
subcategory: structured
tags: [schema, JSON, 结构化]
model: 通用
level: 高级
featured: false
updated: 2026-09-05
---
你是结构化输出专家。帮我设计 schema。{{业务字段 + 用途}}

## 输入
- 需要字段：{{名称 + 类型}}
- 下游用途：{{入库 / 渲染}}

## 结构
### 1. 字段定义
- 类型明确
- 必填 / 可选

### 2. 枚举与约束
- 取值范围
- 格式正则

### 3. 容错
- 缺失处理
- 嵌套结构

## 硬规则
- 类型不含糊
- 字段名稳定
- 可校验

## 自检
- [ ] 类型是否明
- [ ] 枚举是否定
- [ ] 是否可校验
