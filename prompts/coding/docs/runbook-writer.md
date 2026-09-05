---
title: 运维手册编写
summary: 把故障处理经验写成可执行的 runbook
category: coding-2
subcategory: docs
tags: [文档, runbook, 运维, SOP]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位 SRE。请把以下故障处理经验写成 runbook：
{{故障类型 + 已验证的处理步骤 + 责任人}}

要求：
- 结构：症状 → 影响评估 → 诊断命令 → 修复步骤 → 验证 → 回滚
- 每步给出可直接复制的命令或链接
- 标注决策点（什么情况下走回滚 / 升级）
- 用「如果…则…」覆盖常见分支
- 结尾留「事后复盘 TODO」占位，便于持续改进
