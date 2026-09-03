---
title: 角色设定三视图（Character Sheet）
summary: 生成多角度一致的角色设定图，用于 IP、游戏、表情包。
category: image
subcategory: character
tags: [角色设计, 三视图, IP]
model: Midjourney / SDXL
level: 进阶
featured: false
updated: 2026-09-04
---

## 模板
```
character sheet of {{角色名}}, {{外观：年龄/发型/服装/配色/标志性道具}}, full body, front view, side view, back view, three-view drawing, consistent design, neutral expression, T-pose OR standing pose, plain {{浅色}} background, clean line art, concept art style, character design by {{参考画师，可选}}, highly detailed --ar 16:9 --style raw --v 6
```

## 表情集（同一角色的多表情）
```
expression sheet of {{角色名}}, {{外观描述}}, 6 different facial expressions: happy, sad, angry, surprised, confused, neutral, arranged in a grid, consistent character design, simple background, clean style --ar 3:2 --style raw --v 6
```

## 保持角色一致性的操作要点
1. **先用 `--cref` 锁形象**：先生成一张满意的正面图，之后用 `--cref <图片URL>` 引用它，再换姿势和场景。
2. **用 `--cw 0-100` 控制强度**：`--cw 0` 只参考脸部（适合换装），`--cw 100` 连服装发型都锁死。
3. **固定描述词顺序**：角色的核心特征（发色、瞳色、标志性道具）每次都放在提示词最前面，权重最高。
4. **用 `--sref` 锁画风**：先定风格，再定角色。

## 角色描述结构（按这个顺序写，命中率最高）
```
[发色发型] + [瞳色] + [肤色] + [年龄感] + [上装] + [下装] + [鞋] + [配饰/道具] + [整体气质关键词]
```
示例：`short silver hair, amber eyes, pale skin, young woman, oversized white shirt, dark pleated skirt, black boots, round glasses, calm and bookish atmosphere`

## 避坑
- 不要在角色设定图里加复杂背景或强光影，会干扰形象读取。用 `plain background`。
- `three-view` 在 MJ v6 上偶尔会合成失败，多跑几次或用 `--chaos` 提高变化。
- 商用 IP 需要完全可控时，三视图只是参考，最终要交给画师重绘。
