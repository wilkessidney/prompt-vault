---
title: 电影感人像摄影（Midjourney）
summary: 可复用的电影感人像公式：主体 + 镜头 + 布光 + 色调 + 胶片质感。
category: image
subcategory: photo
tags: [Midjourney, 人像, 摄影]
model: Midjourney v6 / Flux
level: 通用
featured: false
updated: 2026-09-04
---

## 通用公式
```
[主体描述] , [环境与动作] , [镜头与焦段] , [布光方案] , [色彩与影调] , [胶片/质感关键词] --ar [比例] --style raw --v 6
```

## 模板
```
{{主体：年龄/性别/神态/服装/动作}}, {{环境：室内/室外/天气/时段}}, shot on {{85mm / 35mm / 135mm}} lens, f/{{1.4-2.8}}, {{布光：Rembrandt lighting / golden hour backlight / soft window light / neon rim light}}, {{影调：moody low-key / bright high-key / teal and orange / muted earth tones}}, shot on Kodak Portra 400, film grain, shallow depth of field, cinematic color grading --ar {{3:4}} --style raw --v 6
```

## 变量说明
| 变量 | 常用取值 | 效果 |
|------|----------|------|
| 焦段 | 35mm 环境感强 / 85mm 人像标准 / 135mm 压缩感强 | 控制背景虚化与透视 |
| 光圈 | f/1.4 极浅景深 / f/2.8 适中 / f/8 环境清晰 | 控制虚化程度 |
| 布光 | Rembrandt（伦勃朗三角光）/ backlight（逆光轮廓）/ window light（柔和自然） | 决定情绪 |
| 影调 | teal & orange 商业感 / muted earth 文艺感 / monochrome 高级感 | 决定调性 |
| 胶片 | Kodak Portra 400 / Fujifilm Superia / CineStill 800T | 颗粒与色彩倾向 |

## 示例（已填值）
```
a 32-year-old architect with tired eyes, standing in a half-finished concrete building, late afternoon, shot on 85mm lens, f/1.8, Rembrandt lighting from a high window, muted earth tones with warm highlights, shot on Kodak Portra 400, film grain, shallow depth of field, cinematic color grading --ar 3:4 --style raw --v 6
```

## 避坑
- `--style raw` 能显著减少 Midjourney 的「油画味」默认美化，人像务必加。
- 不要在一个人像提示词里堆超过 3 个光源描述，会互相打架。
- 想要真实皮肤质感，加 `skin texture`、`visible pores`；不加则会被磨皮成塑料。
