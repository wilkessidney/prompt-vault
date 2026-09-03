---
title: 命令行工具脚手架生成
summary: 一句话描述生成带参数解析、帮助文档、错误码的 CLI 工具骨架。
category: coding
subcategory: generate
tags: [CLI, 脚手架, Python/Node]
model: 通用
level: 通用
featured: false
updated: 2026-09-04
---

请为我生成一个命令行工具 `{{工具名}}` 的完整骨架。

## 工具用途
{{一句话用途}}

## 技术选型
语言：{{Python 3.11 / Node 20 / Go 1.22}}

## 必须包含
1. **参数解析**：子命令结构 `{{工具名}} <command> [options]`，支持 `--help`、`--version`、`--verbose`。
2. **配置优先级**：命令行参数 > 环境变量 > 配置文件 > 默认值，并在 help 中说明。
3. **错误码体系**：0 成功 / 1 通用错误 / 2 参数错误 / 3 网络错误 / 4 权限错误，每个错误输出结构化信息（含 `code`、`message`、`hint`）。
4. **日志**：verbose 模式输出 debug 日志，默认只输出 info 及以上，日志带时间戳与级别。
5. **优雅退出**：捕获 SIGINT，清理临时资源后退出。

## 输出
- 完整可运行代码（单文件优先）
- 一份 README 片段：安装方式 + 3 个使用示例 + 退出码说明
- 后续扩展点清单（我只想看到 3-5 条真正值得扩展的）
