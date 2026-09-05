---
title: API 客户端生成
summary: 根据接口定义生成调用端代码
category: coding-2
subcategory: generate
tags: [生成, API, 客户端, SDK]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位全栈工程师。请根据接口定义生成客户端：
{{OpenAPI / 接口文档 + 目标语言}}

要求：
- 生成类型安全的方法（请求 / 响应建模）
- 统一错误处理与超时 / 重试默认配置
- 处理鉴权头与常见 content-type
- 给出调用示例与一个最小错误处理模板
- 标注需要人肉确认的不确定字段
