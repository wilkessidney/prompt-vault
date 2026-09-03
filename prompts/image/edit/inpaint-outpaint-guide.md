---
title: 局部重绘与扩图（Inpainting / Outpainting）
summary: 图生图改局部的提示词写法：描述变化部分、保持其余一致。
category: image
subcategory: edit
tags: [图生图, 局部重绘, 扩图]
model: SDXL / Flux / Midjourney
level: 通用
featured: false
updated: 2026-09-04
---

## 核心原则
局部重绘的提示词**只描述变化的部分**，不要把没变的部分也写一遍（写了反而容易改坏）。

## 场景 1：换物体
```
原图描述中需要替换的部分：{{旧物体 → 新物体}}

提示词写法：
```
{{新物体的详细描述}}, {{光照方向要与原图一致}}, {{视角与原图一致}}, matching the original photo's lighting and color grading, seamless integration, high detail
```
重绘幅度（Denoising Strength）：{{0.6-0.75}}
```

## 场景 2：移除物体
```
提示词写法（描述「应该是什么」而不是「不要什么」）：
```
{{物体被移除后应该露出的背景}}, clean, seamless, consistent with surrounding texture
```
重绘幅度：{{0.5-0.6}}
注意：负向提示词里写 `{{要移除的物体}}`，正向提示词写背景内容。
```

## 场景 3：扩图（Outpainting）
```
提示词写法：
```
{{延续原图的场景描述}}, continue the environment naturally, consistent perspective, consistent lighting, seamless extension
```
扩图方向：{{左/右/上/下}}
重绘幅度：{{0.55-0.7}}
```

## 场景 4：换风格（图生图）
```
提示词写法：
```
{{原图内容描述}}, {{目标风格}}, preserve the original composition and layout
```
重绘幅度：{{0.4-0.55}} —— 值越高构图越容易崩
```

## 重绘幅度（Denoising Strength）对照
| 数值 | 效果 | 适用 |
|------|------|------|
| 0.1-0.3 | 几乎不变，仅微修瑕疵 | 去噪、轻微锐化 |
| 0.4-0.55 | 保留构图，改风格 | 风格迁移 |
| 0.6-0.75 | 改变内容，保留大致结构 | 换物体 |
| 0.8-1.0 | 几乎重画 | 只想保留色块/构图轮廓 |

## 避坑
- **光照一致性是第一杀手**。扩图时先观察原图光源方向，在提示词里写明（如 `lit from the left`）。
- `seamless`、`consistent with` 这类词对 SDXL/Flux 有效，对 MJ 的 Vary(Region) 效果弱。
- 局部重绘的边缘接缝：蒙版要扩大 20-40px，不要贴边。
