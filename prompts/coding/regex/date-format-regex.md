---
title: 日期格式解析
summary: 写匹配多种日期写法的正则
category: coding-2
subcategory: regex
tags: [正则, 日期, 格式, 解析]
model: 代码模型（Claude / Cursor / GPT）
level: 入门
featured: false
updated: 2026-09-05
---
你是一位数据工程师。请写正则识别并归一化日期：
{{支持的格式：ISO / 中文 / 带时区 等}}

要求：
- 给出可捕获年 / 月 / 日分组的正则
- 处理分隔符差异（- / / 年月日）
- 标注二义性（如 03/04/05 的解析歧义）
- 提供转为标准格式（ISO）的替换示例
- 提醒优先用语言内置日期库而非纯正则
