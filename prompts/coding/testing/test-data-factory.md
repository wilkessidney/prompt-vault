---
title: 测试数据工厂
summary: 生成可组合、可控的测试数据构造器，告别手写 fixture。
category: coding
subcategory: testing
tags: [测试数据, Fixture]
model: 通用
level: 通用
featured: false
updated: 2026-09-05
---
为下方数据结构设计测试数据工厂。

```
{{数据结构/schema/类型定义}}
```

## 用途
- 场景：{{单测 / 集成测试 / E2E 预置}}
- 语言：{{语言}}
- 需要的变体：{{合法最小、完整、非法字段、边界值}}

## 输出
1. **工厂代码**：
   - 默认生成「合法且无趣」的数据（所有字段有效但无特殊含义）
   - 参数覆盖式：`makeUser({ email: 'x@y.z' })` 只改指定字段
   - 预制变体：`makeUser.banned()`、`makeUser.noEmail()` 等语义化快捷方式
   - 关联数据级联生成（order → user 自动建）
2. **变体清单**：结合业务列出你建议的语义化变体及用途。
3. **反模式警告**：工厂与真实 schema 漂移怎么办（schema 校验进工厂测试）。

**硬规则**：工厂产的数据必须通过 schema 校验（非法变体除外）；禁止随机字段——随机让失败不可复现。
