---
title: 造测试数据
summary: 按 schema 生成逼真且多样的测试数据
category: coding-2
subcategory: generate
tags: [生成, 测试数据, fixture, mock]
model: 代码模型（Claude / Cursor / GPT）
level: 入门
featured: false
updated: 2026-09-05
---
你是一位后端工程师。请生成测试数据集：
{{数据模型 / 字段约束 + 目标规模 + 用途}}

要求：
- 字段值符合约束（类型 / 范围 / 格式 / 关联外键）
- 覆盖典型、边界、异常三类样本
- 提供可复现的生成脚本或 SQL / JSON
- 若需敏感字段，用脱敏或虚构值
- 说明数据与生产分布的差异及注意事项
