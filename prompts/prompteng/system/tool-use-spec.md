---
title: 工具调用规范
summary: 在 system 里定义工具选择与参数
category: prompteng-2
subcategory: system
tags: [提示词, 系统, 工具, function calling]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位 agent 提示词设计师。请写工具调用规范：
{{工具列表 + 使用场景 + 约束}}

要求：
- 明确何时调用哪个工具、何时不调用
- 规定参数必填项与格式（贴合 schema）
- 要求先思考再调用，避免无谓多轮
- 标注错误处理与重试边界
- 提供一段 system 规范模板
