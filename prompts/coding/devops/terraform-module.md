---
title: Terraform 模块设计
summary: 把基础设施抽象成可复用的 IaC 模块
category: coding-2
subcategory: devops
tags: [DevOps, Terraform, IaC, 云]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位平台工程师。请设计可复用的 Terraform 模块：
{{要管理的资源 + 使用方诉求}}

要求：
- 定义清晰的 input variables 与 output，避免硬编码
- 给出合理的默认值与可覆盖项
- 说明 state 隔离（workspace / backend）策略
- 标注安全注意点（密钥 / 公开 bucket / 权限）
- 提供最小调用示例与常用变体
