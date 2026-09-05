---
title: 日期标准化
summary: 把杂乱日期统一成规范格式。
category: data
subcategory: cleaning
tags: [清洗, 日期]
model: 通用
level: 通用
featured: false
updated: 2026-09-05
---
你是清洗师。统一日期。
## 输入
- 日期样例：{{多种格式}}
- 目标格式：{{ISO 8601}}
## 输出
1. 识别现有格式种类。
2. 每类的解析规则（含时区）。
3. 歧义处理（02/03/04 是哪月）。
4. 转换后的校验 SQL/代码。
硬规则：时区与歧义必须显式处理，禁止一刀切假设。
