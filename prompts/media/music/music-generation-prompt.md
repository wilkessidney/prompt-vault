---
title: AI 音乐生成提示词（Suno / Udio）
summary: 按流派、情绪、乐器、人声与结构组织音乐生成提示词。
category: media
subcategory: music
tags: [Suno, 音乐生成, BGM]
model: Suno / Udio / MusicGen
level: 通用
featured: false
updated: 2026-09-04
---

## Suno 提示词结构
```
[流派] + [情绪/氛围] + [核心乐器] + [人声描述] + [节奏/速度] + [时代或地域参考] + [结构标签]
```

## 模板
```
{{流派：lo-fi hip hop / cinematic orchestral / synthwave / folk acoustic / city pop}}, {{情绪：melancholic / uplifting / tense / dreamy}}, featuring {{核心乐器：warm Rhodes piano, vinyl crackle, soft drums}}, {{人声：female vocals with breathy tone / instrumental only}}, {{BPM 与节奏}}, {{参考：reminiscent of 90s Japanese city pop}}, {{结构标签}}
```

## 元素词库

**流派**
`lo-fi hip hop` · `synthwave` · `ambient` · `post-rock` · `jazz trio` · `city pop` · `trap` · `orchestral` · `folk` · `shoegaze` · `bossa nova` · `drum and bass` · `indie pop` · `blues`

**情绪/氛围**
`melancholic` · `nostalgic` · `ethereal` · `driving` · `tense` · `triumphant` · `intimate` · `hypnotic` · `warm` · `dark` · `playful`

**人声**
`male/female vocals` · `breathy` · `raspy` · `falsetto` · `harmonized` · `whispered` · `no vocals / instrumental`

**质感**
`vinyl crackle` · `tape saturation` · `reverb-heavy` · `lo-fi` · `crisp production` · `live room feel`

## 结构标签（Suno 专用，写在 [方括号] 里）
```
[Intro] [Verse] [Pre-Chorus] [Chorus] [Bridge] [Guitar Solo] [Outro] [End]
```
可精细控制，如 `[Verse - intimate, only piano]`、`[Chorus - full drums, energetic]`。

## 示例（已填值）
```
lo-fi hip hop, nostalgic and warm, featuring dusty Rhodes piano, vinyl crackle and soft brushed drums, instrumental, 78 BPM, reminiscent of late-night study sessions, lo-fi tape saturation

[Intro - 4 bars, piano only]
[Verse - add soft drums and bass]
[Chorus - add warm pad, fuller mix]
[Outro - fade to piano and vinyl crackle]
```

## 避坑
- **中文歌词翻车率极高**（发音怪、声调错）。要做中文歌，先写英文版定旋律，再用 Cover 功能或后期替换人声。
- 提示词里不要写「好听」「高质量」这类主观词，模型无法理解。写具体的乐器、节奏、音色。
- `[Instrumental]` 要显式写，否则 Suno 大概率会加人声。
- 生成的音乐版权归平台规则约束，商用前确认授权条款。
