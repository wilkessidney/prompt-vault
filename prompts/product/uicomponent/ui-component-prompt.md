---
title: UI 组件生成提示词（Tailwind）
summary: 生成结构化的 UI 组件提示词，含布局、状态、响应式与可访问性要求。
category: product
subcategory: uicomponent
tags: [UI 组件, Tailwind, 前端]
model: Claude / v0 / GPT-4o
level: 通用
featured: false
updated: 2026-09-04
---

请生成一个 {{组件名}} UI 组件。

## 技术栈
- 框架：{{React + TypeScript / Vue 3 / 纯 HTML}}
- 样式：{{Tailwind CSS / CSS Modules / styled-components}}
- 图标库：{{lucide-react / heroicons / 无}}
- 设计系统：{{已有哪些 token，无则写「无，请自行定义」}}

## 组件需求
- 用途：{{}}
- 内容结构：{{列出所有内容元素}}
- 交互行为：{{hover / focus / 展开 / 拖拽 / 输入校验}}
- 变体：{{尺寸 / 类型 / 状态}}

## 实现要求

### 1. 结构与语义
- 使用正确的 HTML 语义标签（`nav`/`button`/`dialog`/`article`），不要全是 `div`
- 交互元素必须可聚焦、可键盘操作

### 2. 状态全覆盖（每个都要实现并注释）
| 状态 | 视觉表现 |
|------|----------|
| 默认 | |
| hover | |
| focus-visible | 必须有清晰焦点环 |
| active | |
| disabled | |
| 加载中 | |
| 错误 | |
| 空数据 | |
| 内容溢出 | |

### 3. 响应式
- 移动端（<640px）：{{布局变化}}
- 平板（640-1024px）
- 桌面（>1024px）
说明每个断点下的具体布局差异，不要只写「自适应」。

### 4. 可访问性
- ARIA 属性：`role`/`aria-label`/`aria-expanded`/`aria-live` 等
- 键盘导航：Tab 顺序、Enter/Space 激活、Esc 关闭、方向键（如适用）
- 颜色对比度 ≥ 4.5:1（正文）/ 3:1（大字号与非文本元素）
- 不依赖颜色单独传达信息
- 支持 `prefers-reduced-motion`

### 5. 代码组织
- 单一职责，组件不超过 {{150}} 行；超了就拆分并说明拆分依据
- Props 用 TypeScript 完整定义，含 JSDoc
- 不引入需求之外的抽象与配置

## 输出
1. 完整组件代码
2. 3 个使用示例（覆盖主要变体）
3. Props 说明表
4. 可访问性自检结果

## 硬规则
- 不要为了实现效果牺牲语义与可访问性。
- 动画时长控制在 150-300ms，且必须响应减少动效偏好。
- 不使用已废弃 API 和不稳定的实验特性。
