---
title: 日志根因分析
summary: 从一堆日志里还原故障时间线
category: coding-2
subcategory: debug
tags: [调试, 日志, 排障, 可观测]
model: 代码模型（Claude / Cursor / GPT）
level: 入门
featured: false
updated: 2026-09-05
---
你是一位 SRE。请根据以下日志还原故障：
{{日志片段（含时间 / 级别 / 服务）}}

要求：
- 按时间线梳理关键事件与首次异常点
- 区分「根因」与「连锁报错」，不要被表象带偏
- 标出缺失的关键日志（为下次埋点建议）
- 给出最可能的根因假设与验证下一步
- 用一句话总结故障画像，便于同步给团队
