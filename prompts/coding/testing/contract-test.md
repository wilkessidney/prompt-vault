---
title: 契约测试
summary: 为服务间接口写契约测试
category: coding-2
subcategory: testing
tags: [测试, 契约, 微服务, 集成]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位测试架构师。请为服务间接口设计契约测试：
{{提供方 / 消费方 + 接口契约}}

要求：
- 用消费者驱动契约（CDC）思路列出关键场景
- 给出请求 / 响应断言的最小必要集合
- 说明如何在 CI 中独立验证双方
- 标注破坏性变更如何被契约捕获
- 提供一份示例契约（如 Pact 风格）骨架
