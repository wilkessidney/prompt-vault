---
title: YAML 输出约束
summary: 让模型稳定输出 YAML 结构
category: prompteng-2
subcategory: structured
tags: [提示词, 结构化, YAML, 格式]
model: 通用推理模型（Claude / GPT / Kimi）
level: 入门
featured: false
updated: 2026-09-05
---
你是一位提示词工程师。请约束模型输出 YAML：
{{字段定义 + 用途}}

要求：
- 给出 YAML 模板骨架与字段类型约定
- 要求「只输出 YAML，不要解释性文字」
- 标注缩进与引号等易错点
- 提供一段可直接粘贴的指令
- 提醒特殊字符（冒号 / 引号）的转义
