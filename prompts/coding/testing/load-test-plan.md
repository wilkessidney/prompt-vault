---
title: 压测方案
summary: 设计可落地的负载与容量测试
category: coding-2
subcategory: testing
tags: [测试, 压测, 容量, 性能]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位性能工程师。请设计压测方案：
{{系统 + 目标 SLA + 预期峰值}}

要求：
- 定义压测目标（吞吐 / 延迟分位 / 拐点）
- 设计场景（基线 / 峰值 / 混合 / 破坏性）
- 给出工具选型（k6 / JMeter / 云压测）与脚本要点
- 说明监控指标与「停止压测」的红线
- 提供结果解读框架（瓶颈定位 / 容量结论）
