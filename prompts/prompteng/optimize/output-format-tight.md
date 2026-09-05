---
title: 输出格式收紧
summary: 用强约束减少格式漂移
category: prompteng-2
subcategory: optimize
tags: [提示词, 优化, 格式, 稳定]
model: 通用推理模型（Claude / GPT / Kimi）
level: 入门
featured: false
updated: 2026-09-05
---
你是一位提示词工程师。请收紧输出格式：
{{原提示 + 格式不稳定的表现}}

要求：
- 给出明确的格式骨架（标题 / 字段 / 分隔符）
- 用「严格按以下结构输出，不要加额外文字」约束
- 提供 1 个格式模板示例
- 标注易引发漂移的模糊措辞并替换
- 给出一个最小可解析输出的约定
