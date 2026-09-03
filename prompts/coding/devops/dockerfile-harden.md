---
title: Dockerfile 瘦身与安全加固
summary: 多阶段构建、降权限、清缓存，产出体积更小更安全的镜像配置。
category: coding
subcategory: devops
tags: [Docker, CI/CD, 安全]
model: 通用
level: 通用
featured: false
updated: 2026-09-04
---

你是容器化与供应链安全工程师。优化下面的 Dockerfile。

## 原始 Dockerfile
```dockerfile
{{Dockerfile}}
```

## 应用类型
{{语言与框架}}

## 优化目标（按优先级）
1. **体积**：多阶段构建，运行阶段只保留运行时依赖；清理包管理器缓存；合并 RUN 层。
2. **安全**：
   - 非 root 用户运行
   - 固定基础镜像 tag 到 digest 或具体版本（不用 latest）
   - 删除构建期密钥与临时文件
   - 不在镜像中留 shell 调试工具（生产镜像）
3. **构建速度**：按变更频率排层，依赖文件先 COPY；合理使用 BuildKit 缓存挂载。
4. **可观测**：正确的 `HEALTHCHECK`、信号处理（用 `exec` 或 tini 避免 PID 1 僵尸进程问题）。

## 输出
### 优化后 Dockerfile
（完整，带行内注释说明每行为什么这么写）

### 改动对照表
| 项目 | 优化前 | 优化后 | 说明 |

### 预估效果
- 镜像体积：{{原始大小}} → {{预估大小}}
- 构建时间变化说明

### .dockerignore
给出配套的 .dockerignore 文件

### 遗留风险
说明本次优化没解决、需要你确认的问题（如基础镜像 CVE、多架构支持）。
