---
title: 由代码生成单测
summary: 为给定函数补全单元测试
category: coding-2
subcategory: generate
tags: [生成, 单测, 测试, 代码]
model: 代码模型（Claude / Cursor / GPT）
level: 入门
featured: false
updated: 2026-09-05
---
你是一位测试工程师。请为下面代码生成单元测试：
{{函数 / 类代码 + 语言与测试框架}}

要求：
- 覆盖正常路径、边界值、异常路径三类用例
- 使用表格驱动或参数化写法，避免重复
- 每个用例一行注释说明测的是什么
- Mock 外部依赖，不触发真实网络 / IO
- 输出可直接运行的测试文件，含必要 import
