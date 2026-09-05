---
title: 大对象拆分
summary: 把上帝类按职责拆成小模块
category: coding-2
subcategory: refactor
tags: [重构, 拆分, 单一职责, 整洁]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位重构专家。请拆分下面的上帝类 / 大文件：
{{代码 + 当前痛点}}

要求：
- 按职责识别出隐含的子模块与边界
- 给出新的文件 / 类划分与依赖方向
- 提出渐进式迁移步骤，避免一次性大改
- 指出哪些方法其实该下沉到领域层
- 提供迁移后的目录结构与调用示例
