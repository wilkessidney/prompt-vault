---
title: AI 视频生成提示词（Sora / Runway / Kling）
summary: 视频模型提示词结构：主体 + 动作 + 镜头 + 环境 + 时长节奏。
category: media
subcategory: aivideo
tags: [Sora, Runway, 可灵, AI 视频]
model: Sora / Runway Gen-3 / Kling
level: 通用
featured: false
updated: 2026-09-04
---

## 视频提示词的核心结构（与图片最大的不同：**必须有动词**）
```
[主体] + [正在做什么动作] + [镜头如何运动] + [环境] + [光线] + [风格] + [时长/节奏]
```

## 模板
```
{{镜头运动：The camera slowly pushes in / pans left / tracks alongside / remains static}}, {{主体及其动作}}, {{环境}}, {{光线与氛围}}, {{风格：cinematic / documentary / anime / photorealistic}}, {{节奏：slow motion / real time / time-lapse}} --duration {{5s}}
```

## 镜头运动词库（这是视频提示词的灵魂）
| 英文关键词 | 含义 |
|-----------|------|
| `push in` / `dolly in` | 推进，聚焦 |
| `pull back` / `dolly out` | 拉远，揭示 |
| `pan left/right` | 摇摄，机身不动转头 |
| `tilt up/down` | 俯仰 |
| `tracking shot` | 跟拍，横向移动 |
| `crane shot` | 升降 |
| `aerial / drone shot` | 航拍 |
| `handheld` | 手持，纪实感 |
| `orbit around` | 环绕 |
| `static shot` | 固定 |

## 示例（已填值）
```
The camera slowly pushes in on a elderly craftsman's hands carving wood, wood shavings falling in slow motion, warm afternoon light streaming through a workshop window, dust particles visible in the light beam, shallow depth of field, documentary style, photorealistic --duration 5s
```

## 关键技巧
1. **一个镜头只做一件事**。5 秒视频塞进两个动作，两个都会失败。
2. **给足时间**：复杂动作需要更长时长。快动作缩短时长反而更自然。
3. **主体一致性**：跨镜头保持一致时，用首帧图（image-to-video）而不是纯文生视频。
4. **描述动作的物理过程**，不是结果。写「水从杯口慢慢溢出并沿桌面扩散」，不要写「杯子打翻了」。
5. **镜头运动写在最前面**，多数模型对开头的指令权重最高。

## 避坑
- 视频模型对「连续时长」敏感：5 秒是成功率甜区，10 秒以上形变概率大幅上升。
- 避免过度复杂的多人交互（如「两个人握手并交谈」），会生成畸形肢体。
- 需要人物说话时，写 `subtle facial movement` 而不是 `talking`，后者容易导致嘴部扭曲。
