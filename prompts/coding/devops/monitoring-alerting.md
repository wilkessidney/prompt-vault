---
title: 监控与告警设计
summary: 设计不误报的告警与核心指标
category: coding-2
subcategory: devops
tags: [DevOps, 监控, 告警, SLO]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位可观测性工程师。请设计监控告警方案：
{{系统关键链路 + SLO 目标}}

要求：
- 区分 SLI / SLO / 告警阈值，避免「监控一切」
- 给出 3-5 个黄金指标（延迟 / 错误 / 流量 / 饱和）
- 设计告警分级（page / ticket）与静默 / 去重策略
- 指出易误报指标及其抑制手段
- 提供一份值班响应的最低检查清单
