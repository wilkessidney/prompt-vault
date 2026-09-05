---
title: 事件驱动架构设计
summary: 设计基于事件流的系统边界与消息契约
category: coding-2
subcategory: architecture
tags: [架构, 事件驱动, 消息队列, 系统设计]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位资深架构师。请为下面场景设计事件驱动架构：
{{业务场景 + 主要领域 + 吞吐 / 一致性要求}}

要求：
- 画出核心事件流（生产者 → 事件 → 消费者），标注异步边界
- 定义 2-3 个关键事件的 payload schema（字段 + 类型 + 语义）
- 说明如何保证至少一次投递 / 幂等消费
- 指出何时该用事件而非直接调用（解耦 / 审计 / 削峰）
- 给出引入的事件总线选型建议（Kafka / 云原生 / 轻量）及理由
