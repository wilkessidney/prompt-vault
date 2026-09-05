---
title: CSV 抽取
summary: 从非结构化文本抽成表格
category: prompteng-2
subcategory: structured
tags: [提示词, 结构化, CSV, 抽取]
model: 通用推理模型（Claude / GPT / Kimi）
level: 入门
featured: false
updated: 2026-09-05
---
你是一位提示词工程师。请让模型输出 CSV：
{{源文本 + 需要的列}}

要求：
- 列出列名与每列含义
- 要求「每行一条记录，逗号分隔，无多余文字」
- 标注含逗号 / 换行的字段需加引号
- 提供一段指令模板与 1 行示例
- 提醒输出后做列数对齐校验
