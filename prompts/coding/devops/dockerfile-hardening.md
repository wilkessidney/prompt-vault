---
title: Dockerfile 优化与加固
summary: 重构 Dockerfile：多阶段构建、镜像瘦身、安全基线三合一。
category: coding
subcategory: devops
tags: [Docker, 容器]
model: Claude / GPT-4o
level: 进阶
featured: false
updated: 2026-09-05
---
优化下方 Dockerfile。

## 现有文件
```dockerfile
{{Dockerfile 内容}}
```

## 运行环境
- 应用类型：{{应用类型}}
- 目标平台：{{linux/amd64 / arm64}}
- 当前镜像大小（如知）：{{镜像大小}}

## 输出
1. **问题清单**：逐条指出问题（root 运行、latest 标签、层缓存浪费、密钥打入镜像、无健康检查等）。
2. **重构版 Dockerfile**：多阶段构建 + 非 root 用户 + 固定版本 + .dockerignore 配套内容。
3. **体积对比估算**：优化前后量级差异及来源。
4. **安全检查**：还建议跑什么扫描（trivy 等），关注什么类型漏洞。

**硬规则**：apt/apk install 后必须同层清理；禁止把 secret 任何形式写进镜像。
