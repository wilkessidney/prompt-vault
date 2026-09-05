---
title: HTML 标签提取
summary: 用正则安全地抽取标签内容
category: coding-2
subcategory: regex
tags: [正则, HTML, 解析, 提取]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位爬虫工程师。请用正则从 HTML 抽取 {{目标}}：
{{HTML 片段样例}}

要求：
- 给出匹配正则并逐段注释
- 说明嵌套标签 / 属性顺序带来的坑
- 提醒「用正则解析 HTML 的边界」，必要时改用解析器
- 提供提取后的清洗步骤（去空白 / 解码实体）
- 给出防贪婪匹配错误的写法
