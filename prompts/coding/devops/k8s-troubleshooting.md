---
title: K8s 问题排查指南
summary: Pod 起不来 / OOM / 调度失败等常见 K8s 问题的排查树。
category: coding
subcategory: devops
tags: [Kubernetes, 排查]
model: Claude / GPT-4o
level: 进阶
featured: false
updated: 2026-09-05
---
帮我排查 Kubernetes 问题。

## 现象
- 症状：{{Pod Pending / CrashLoopBackOff / OOMKilled / Service 不通 / 节点 NotReady}}
- 工作负载类型：{{Deployment / StatefulSet / Job}}
- 已知信息：
```
{{kubectl describe / logs 输出}}
```

## 输出
### 1. 现象解读
这个状态码本质上说明什么。

### 2. 排查树
按顺序给出 kubectl 命令序列（get pods → describe → events → logs → 资源水位），每个命令看什么信号。

### 3. 按我的具体情况给出
最可能的 3 个原因 + 验证方法 + 修复方案（yaml 级）。

### 4. 常见坑
该症状的 top 坑（如 imagePullPolicy、resource requests 超节点容量、livenessProbe 误杀、DNS 配置）。

**硬规则**：命令必须可直接复制执行；修改生产资源前标注【需确认】。
