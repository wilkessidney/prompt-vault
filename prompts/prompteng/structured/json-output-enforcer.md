---
title: 强制结构化输出（JSON Schema）
summary: 让模型稳定输出可解析的 JSON，附带校验与失败重试策略。
category: prompteng
subcategory: structured
tags: [JSON, 结构化输出, 可靠性]
model: 通用
level: 通用
featured: false
updated: 2026-09-04
---

为下面的任务设计一套「结构化输出」提示词方案。

## 任务
{{任务描述}}

## 目标 JSON Schema
```json
{{Schema}}
```

## 输出要求
### 1. 提示词正文
包含以下要素：
- 明确的输出契约：只输出 JSON，无任何前后缀文字、无 Markdown 代码围栏
- 完整 Schema 内联在提示词中，每个字段有 `description`、类型、约束
- 枚举字段列出所有合法值并说明各自语义
- 对「信息缺失」的处理规则：缺失字段填 `null` 还是在 `notes` 中说明？二选一并写死
- 对「不确定」的处理规则：禁止编造，不确定必须体现为 `confidence` 字段或 `null`
- 2-3 个 few-shot 示例（一个完整、一个含缺失字段、一个边界情况）

### 2. 健壮性设计
- 如果模型仍输出围栏包裹的 JSON，用什么规则清洗？给出代码。
- 校验失败时的重试提示词怎么写？给出重试版本。
- 最大重试次数与降级策略建议。

### 3. 配套校验代码
给出目标语言的解析 + Schema 校验代码（Python 用 pydantic / JS 用 zod）。

### 4. 已知陷阱
说明这个任务下结构化输出常见的失败模式（如字段幻觉、枚举外取值、超长字段截断）。
