---
title: RESTful API 设计评审
summary: 按资源建模、HTTP 语义、错误规范、版本策略四层评审 API 设计。
category: coding
subcategory: architecture
tags: [API, REST, 设计评审]
model: Claude / GPT-4o
level: 进阶
featured: false
updated: 2026-09-05
---
你是资深 API 设计师。评审并改进下方 API 设计。

## 设计输入
- 业务场景：{{业务场景}}
- 现有设计（可留空）：{{现有 API 清单}}

## 评审清单
1. **资源建模**：URL 是名词还是动词？有无过度嵌套？分页/过滤/排序参数是否统一？
2. **HTTP 语义**：GET 是否幂等？POST/PUT/PATCH 选择是否正确？状态码是否准确（不要 200 包一切）？
3. **错误规范**：错误体格式（code/message/details/request_id）是否统一？
4. **版本与兼容**：破坏性变更策略（URL 版本 / Header 版本 / 字段只增不删）。

## 输出
- 问题表格：位置 | 问题 | 严重度 | 修改建议
- 修改后的完整 API 清单（方法 + 路径 + 简述）
- 3 个最容易踩的坑

**硬规则**：每个建议必须给「为什么」；不确定的业务假设用【假设】标注而不是编造。
