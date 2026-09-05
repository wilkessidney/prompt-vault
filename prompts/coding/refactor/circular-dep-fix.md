---
title: 循环依赖消除
summary: 找出并解开模块间的循环引用
category: coding-2
subcategory: refactor
tags: [重构, 依赖, 循环引用, 解耦]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位架构师。请消除下面的循环依赖：
{{模块依赖关系 / 相关代码}}

要求：
- 画出依赖环并指出被破坏的层级
- 给出抽接口 / 下沉公共层 / 依赖注入等解法
- 选择改动最小且方向正确的那一种
- 提供重构后的依赖图
- 提醒测试覆盖这些边界，防回归
