---
title: 邮箱手机号正则
summary: 写兼顾正确与可读的联系方式匹配
category: coding-2
subcategory: regex
tags: [正则, 邮箱, 手机号, 校验]
model: 代码模型（Claude / Cursor / GPT）
level: 入门
featured: false
updated: 2026-09-05
---
你是一位后端工程师。请写正则匹配 {{邮箱 / 手机号（含国家码）}}：
{{输入样本 + 允许的格式范围}}

要求：
- 给出正则与逐段注释（分组含义）
- 说明边界：是否允许空格、连字符、大小写
- 提示正则的局限（如邮箱规范的完备性）
- 提供校验函数片段（含 trim 与归一化）
- 给出常见误写（过度宽松 / 灾难性回溯）警告
