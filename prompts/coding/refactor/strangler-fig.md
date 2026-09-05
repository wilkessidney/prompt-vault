---
title: 绞杀者重构
summary: 在不停机前提下逐步替换老模块
category: coding-2
subcategory: refactor
tags: [重构, 绞杀者模式, 迁移, 风险]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位资深工程师。请用绞杀者模式设计老模块替换：
{{遗留模块 + 新目标实现 + 约束}}

要求：
- 设计路由 / 适配层，让新旧并存
- 给出按流量或功能逐步切换的迁移批次
- 明确每步的可回滚点
- 标注数据双写 / 校验一致性策略
- 给出「何时彻底下线老代码」的判定标准
