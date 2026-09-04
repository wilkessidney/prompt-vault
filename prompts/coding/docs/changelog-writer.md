---
title: 变更日志（Changelog）生成
summary: 把 git 提交记录整理成面向用户的变更日志。
category: coding
subcategory: docs
tags: [Changelog, 发布]
model: 通用
level: 通用
featured: false
updated: 2026-09-05
---
把下方提交记录整理成变更日志。

## 提交记录
```
{{git log 或 PR 列表}}
```

## 版本信息
- 版本号：{{版本号}}
- 受众：{{终端用户 / 开发者 / 内部}}

## 输出
按 Keep a Changelog 规范：
1. **Added / Changed / Fixed / Removed / Deprecated / Security** 分组。
2. 每条从用户视角写（「修复了导入大文件时偶发的卡死」而不是「fix import bug」）。
3. **Breaking Changes** 单独置顶，写迁移方法。
4. 提交信息里的内部重构、CI 调整等用户无感的改动，合并成一行或省略。

**硬规则**：保留 issue/PR 编号；不确定影响的提交标注【需确认】而不是猜。
