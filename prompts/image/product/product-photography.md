---
title: 电商产品主图（白底 / 场景）
summary: 生成可用于电商的干净产品图，支持白底与场景两种模式。
category: image
subcategory: product
tags: [电商, 产品图, 商业摄影]
model: Midjourney / Flux / SDXL
level: 通用
featured: false
updated: 2026-09-04
---

## 模式 A：白底主图（平台合规）
```
{{产品名}}, {{材质}}, {{颜色}}, studio product photography, seamless pure white background, soft even lighting, no harsh shadows, three-point lighting setup, shot on 100mm macro lens, f/8, ultra sharp focus, high detail, commercial e-commerce photography, 8k --ar 1:1 --style raw --v 6
```

## 模式 B：场景氛围图
```
{{产品名}} placed on {{台面材质}}, {{环境：morning sunlight from window / warm wooden table / marble surface}}, {{点缀物：a ceramic cup, dried flowers, linen cloth}}, soft natural lighting, warm color palette, shallow depth of field, lifestyle product photography, editorial style, shot on 50mm lens, f/2.8 --ar 4:5 --style raw --v 6
```

## 变量替换表
| 变量 | 替换建议 |
|------|----------|
| {{产品名}} | 要具体到型号与外观，如「matte black wireless earbuds with charging case」 |
| {{材质}} | brushed aluminum / frosted glass / matte plastic / natural linen |
| {{台面材质}} | white marble / oak wood / concrete / linen fabric |

## 增强关键词（按需追加）
- 反光产品（金属/玻璃）：`softbox reflection`, `gradient reflection on surface`, `no watermark`
- 透明产品：`glass transparency`, `caustics`, `light refraction`
- 织物：`fabric texture visible`, `fiber detail`

## 避坑
- 产品图**不要**加 `--stylize` 高值，会导致产品外观被「艺术化」改形，商用会出事。用 `--s 50` 或更低。
- 白底图用 `pure white background` 而不是 `white background`，后者可能生成带渐变的灰底。
- 需要严格还原真实产品时，用 `--cref` 或图像参考，不要纯文生图。
