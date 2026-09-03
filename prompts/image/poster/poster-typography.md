---
title: 海报与字体排版设计
summary: 生成具有排版张力的海报构图，适合活动、专辑、电影海报。
category: image
subcategory: poster
tags: [海报, 排版, 平面设计]
model: Midjourney v6 / Flux
level: 进阶
featured: false
updated: 2026-09-04
---

## 模板
```
{{主题}} poster design, {{视觉主体}}, {{排版风格：Swiss style grid / brutalist typography / Japanese minimal / art deco / psychedelic}}, {{配色}}, {{文字内容占位：title at top, date at bottom}}, generous negative space, strong visual hierarchy, large typography, professional graphic design, print quality --ar {{2:3}} --style raw --v 6
```

## 风格关键词库
| 风格 | 关键词 |
|------|--------|
| 瑞士国际主义 | `Swiss style`, `grid system`, `Helvetica`, `asymmetric layout` |
| 粗野主义 | `brutalist poster`, `oversized bold type`, `high contrast`, `raw` |
| 日式极简 | `Japanese minimalism`, `generous white space`, `thin type`, `muted` |
| 复古装饰 | `art deco`, `gold foil accents`, `ornamental borders` |
| 迷幻摇滚 | `psychedelic poster`, `wavy distorted type`, `saturated colors` |
| 赛博朋克 | `cyberpunk poster`, `glitch effect`, `neon glow`, `CRT scanlines` |

## 文字处理策略（AI 画字不可靠）
1. **纯视觉方向稿**：提示词里写 `with placeholder text blocks`，让模型画出文字的位置和大小，后期用设计软件替换真实文字。
2. **短标题可试**：1-3 个字符或单词时成功率较高，用引号包裹：`title "FOCUS" in bold sans-serif`。
3. **长文案必翻车**：超过 5 个单词就别指望了，直接在后期加。

## 示例（已填值）
```
jazz concert poster design, a saxophonist silhouette in smoke, Swiss style grid layout, deep navy and warm yellow duotone, large typography at top with date information at bottom, generous negative space, strong visual hierarchy, professional graphic design, print quality --ar 2:3 --style raw --v 6
```

## 避坑
- 海报是 AI 生成最容易露馅的类型（文字乱码、元素错位）。生成后必须人工检查文字区域。
- 用 `--ar 2:3` 或 `--ar 3:4`，符合常见海报比例。
- 需要留出血位时，提示词里加 `with margin` 并自己在后期留。
