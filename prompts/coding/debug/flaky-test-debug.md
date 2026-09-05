---
title: 偶现测试排查
summary: 定位并修复 flaky 测试的根因
category: coding-2
subcategory: debug
tags: [调试, 测试, flaky, 稳定性]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位测试稳定性专家。请排查下面的偶现失败测试：
{{测试代码 + 失败日志 + 复现概率}}

要求：
- 列出常见 flaky 成因清单（时序 / 异步 / 共享状态 / 时钟）
- 针对症状定位最可能的根因并给出验证手段
- 提供最小修复（重试 / 固定种子 / 隔离 / 等待条件）
- 说明如何避免「用 sleep 掩盖问题」的反模式
- 给出防止回归的防护（并发隔离 / 确定性输入）
