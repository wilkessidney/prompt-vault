---
title: 字段映射
summary: 把异构源字段映射到统一 schema。
category: data
subcategory: cleaning
tags: [清洗, 映射]
model: 通用
level: 进阶
featured: false
updated: 2026-09-05
---
你是数据工程师。做字段映射。
## 输入
- 源 schema：{{}}
- 目标 schema：{{}}
## 输出
1. 字段一一映射表（含转换规则）。
2. 类型/单位/编码差异处理。
3. 无法映射字段的处置（丢弃/新建）。
4. 映射后的校验点。
硬规则：映射要可逆可追溯，禁止默默丢字段。
