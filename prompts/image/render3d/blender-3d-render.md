---
title: 3D 渲染 / 等距场景
summary: 生成 Octane/Blender 质感的 3D 渲染图，适合科技感配图与图标。
category: image
subcategory: render3d
tags: [3D, Blender, 等距]
model: Midjourney / Flux / SDXL
level: 通用
featured: false
updated: 2026-09-04
---

## 模板 A：等距 3D 场景（Isometric）
```
{{场景内容}}, isometric 3D render, {{主色 + 辅色}}, soft studio lighting, ambient occlusion, clean edges, minimalist, high detail, Octane render, Blender, 8k, white background --ar 1:1 --style raw --v 6
```

## 模板 B：产品级 3D 渲染
```
{{物体}}, 3D render, {{材质：matte plastic / polished metal / frosted glass / soft rubber}}, subsurface scattering, studio HDRI lighting, soft shadows, ray tracing, physically based rendering, Cinema 4D, Octane render, ultra detailed, 8k --ar 1:1 --style raw --v 6
```

## 模板 C：黏土/软萌风（Claymorphism）
```
{{物体}}, claymorphism style, soft clay material, rounded edges, pastel {{颜色}}, soft shadows, subtle glossy surface, 3D render, clean white background, UI asset style --ar 1:1 --style raw --v 6
```

## 质感关键词速查
| 材质 | 关键词 |
|------|--------|
| 磨砂塑料 | `matte plastic`, `soft touch surface` |
| 抛光金属 | `polished chrome`, `anodized aluminum`, `brushed metal` |
| 磨砂玻璃 | `frosted glass`, `translucent`, `subsurface scattering` |
| 软胶/黏土 | `soft rubber`, `clay material`, `squishy` |
| 发光 | `emissive`, `glowing edges`, `neon rim`, `volumetric light` |

## 避坑
- 3D 渲染词和写实摄影词**不要混用**，会生成「照片里有个塑料模型」的怪图。
- `ambient occlusion` 是让物体「落地」的关键，缺了会像悬浮在空中。
- 想要可直接用作图标的素材，务必加 `clean background`, `centered`, `no text`。
