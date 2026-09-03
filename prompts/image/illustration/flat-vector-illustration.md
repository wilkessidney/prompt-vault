---
title: 扁平矢量插画风格
summary: 生成适合网页/App 的干净扁平插画，指定配色与笔触。
category: image
subcategory: illustration
tags: [插画, 扁平风, UI 配图]
model: Midjourney / Flux
level: 通用
featured: false
updated: 2026-09-04
---

## 模板
```
{{场景/主题}}, flat vector illustration, {{配色方案}}, clean geometric shapes, no gradients or minimal gradients, thick clean outlines OR no outlines, simple background, modern editorial illustration style, inspired by Malika Favre and Pablo Stanley, white space, centered composition --ar {{16:9}} --style raw --v 6
```

## 配色方案库（替换 {{配色方案}}）
- `pastel palette, soft pink and mint green`
- `corporate blue and orange, high contrast`
- `monochromatic with a single accent color`
- `earthy tones, terracotta and sage`
- `duotone, deep navy and warm yellow`

## 风格变体关键词
| 想要的效果 | 追加关键词 |
|-----------|-----------|
| 描边风 | `bold black outlines`, `line art style` |
| 无描边纯色块 | `no outlines`, `solid color shapes` |
| 等距 2.5D | `isometric illustration`, `2.5D`, `45 degree angle` |
| 手绘感 | `hand-drawn texture`, `slight imperfections`, `organic lines` |
| 质感颗粒 | `subtle grain texture`, `risograph print style` |

## 示例（已填值）
```
a person working at a standing desk with a cat on the floor, flat vector illustration, pastel palette with soft pink and mint green, clean geometric shapes, no outlines, simple background, modern editorial illustration style, generous white space --ar 16:9 --style raw --v 6
```

## 避坑
- 生成 UI 配图时加 `generous white space`，否则元素铺满整图没法往界面里放。
- 需要透明背景时，明确写 `isolated on transparent background`（SD/Flux 有效，MJ 不支持真透明）。
- 扁平插画最忌讳模型偷偷加渐变和阴影，用 `flat design`, `no gradients`, `no shadows` 三重压制。
