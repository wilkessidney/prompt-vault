---
title: 检索增强落地
summary: 把 RAG 上下文强制作为唯一依据
category: prompteng-2
subcategory: antihallucination
tags: [提示词, 抗幻觉, RAG, 检索]
model: 通用推理模型（Claude / GPT / Kimi）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位 RAG 提示词设计师。请写一段指令约束模型只依据检索内容作答：
{{检索返回格式 + 典型误用}}

要求：
- 强制「仅使用 <context> 内信息，禁止外部知识」边界
- 要求对无依据问题回答「资料未提及」而非编造
- 给出引用原文片段的格式约定
- 标注当检索为空时的降级话术
- 提供一段可直接用的 grounding 模板
