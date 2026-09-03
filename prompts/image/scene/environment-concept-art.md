---
title: 环境与场景概念图
summary: 生成带氛围与叙事的场景概念图，控制透视、天气与光线。
category: image
subcategory: scene
tags: [场景, 概念图, 氛围]
model: Midjourney / Flux
level: 通用
featured: false
updated: 2026-09-04
---

## 模板
```
{{场景主体}}, {{环境细节}}, {{时间/天气/光线}}, {{透视：wide establishing shot / low angle / bird's eye view / dutch angle}}, {{氛围关键词}}, {{参考风格}}, highly detailed environment concept art, cinematic composition, volumetric lighting --ar {{16:9}} --style raw --v 6
```

## 组合变量库

**时间与光线**
| 关键词 | 效果 |
|--------|------|
| `golden hour` | 温暖、长影、日落前一小时 |
| `blue hour` | 冷蓝、静谧、日落后 |
| `overcast diffused light` | 柔和无影、阴天 |
| `harsh midday sun` | 强对比、短影 |
| `foggy morning` | 朦胧、层次感 |
| `neon night` | 赛博、湿润反光 |

**透视与构图**
- `wide establishing shot` — 大场景，人物很小，强调环境
- `low angle hero shot` — 仰视，压迫感
- `bird's eye view` — 俯视，看布局
- `one-point perspective` — 纵深走廊感
- `dutch angle` — 倾斜，不安感

**风格参考**
- `in the style of Studio Ghibli background` — 手绘温暖
- `Makoto Shinkai style` — 高饱和光影、云
- `Simon Stålenhag style` — 北欧科幻怀旧
- `Zaha Hadid architecture` — 流线型未来建筑

## 示例（已填值）
```
an abandoned research station in the Arctic, snow-covered antenna towers, blue hour, wide establishing shot, cold desolate atmosphere, volumetric fog, in the style of Simon Stålenhag, highly detailed environment concept art, cinematic composition --ar 16:9 --style raw --v 6
```

## 避坑
- 场景图最容易出的问题是「元素堆砌但无焦点」，务必指定一个视觉主体 + 一个视线引导（如 `a single warm light in the distance draws the eye`）。
- 加人物可瞬间提供尺度感：`a tiny human figure for scale`。
