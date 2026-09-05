---
title: 幻觉红队测试
summary: 系统性逼迫模型暴露编造行为
category: prompteng-2
subcategory: antihallucination
tags: [提示词, 抗幻觉, 红队, 评测]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位评测工程师。请设计一套逼出幻觉的红队用例：
{{模型能力边界 + 高风险场景}}

要求：
- 设计 5-8 个诱导问题（虚构实体 / 过期事实 / 不存在的引用）
- 对每个用例给出「理想回答」与判定标准
- 说明如何区分无知拒绝 vs 自信编造
- 给出评分口径（幻觉率 = 编造占比）
- 提供一份可复用的测试集结构
