/* 图像生成 / 视频与音频 / 写作与内容 */
export default [
  // ============ 图像生成 ============
  {
    cat: 'image', sub: 'photo', slug: 'mj-cinematic-portrait',
    title: '电影感人像摄影（Midjourney）',
    summary: '可复用的电影感人像公式：主体 + 镜头 + 布光 + 色调 + 胶片质感。',
    tags: ['Midjourney', '人像', '摄影'],
    model: 'Midjourney v6 / Flux', level: '通用',
    content: `## 通用公式
\`\`\`
[主体描述] , [环境与动作] , [镜头与焦段] , [布光方案] , [色彩与影调] , [胶片/质感关键词] --ar [比例] --style raw --v 6
\`\`\`

## 模板
\`\`\`
{{主体：年龄/性别/神态/服装/动作}}, {{环境：室内/室外/天气/时段}}, shot on {{85mm / 35mm / 135mm}} lens, f/{{1.4-2.8}}, {{布光：Rembrandt lighting / golden hour backlight / soft window light / neon rim light}}, {{影调：moody low-key / bright high-key / teal and orange / muted earth tones}}, shot on Kodak Portra 400, film grain, shallow depth of field, cinematic color grading --ar {{3:4}} --style raw --v 6
\`\`\`

## 变量说明
| 变量 | 常用取值 | 效果 |
|------|----------|------|
| 焦段 | 35mm 环境感强 / 85mm 人像标准 / 135mm 压缩感强 | 控制背景虚化与透视 |
| 光圈 | f/1.4 极浅景深 / f/2.8 适中 / f/8 环境清晰 | 控制虚化程度 |
| 布光 | Rembrandt（伦勃朗三角光）/ backlight（逆光轮廓）/ window light（柔和自然） | 决定情绪 |
| 影调 | teal & orange 商业感 / muted earth 文艺感 / monochrome 高级感 | 决定调性 |
| 胶片 | Kodak Portra 400 / Fujifilm Superia / CineStill 800T | 颗粒与色彩倾向 |

## 示例（已填值）
\`\`\`
a 32-year-old architect with tired eyes, standing in a half-finished concrete building, late afternoon, shot on 85mm lens, f/1.8, Rembrandt lighting from a high window, muted earth tones with warm highlights, shot on Kodak Portra 400, film grain, shallow depth of field, cinematic color grading --ar 3:4 --style raw --v 6
\`\`\`

## 避坑
- \`--style raw\` 能显著减少 Midjourney 的「油画味」默认美化，人像务必加。
- 不要在一个人像提示词里堆超过 3 个光源描述，会互相打架。
- 想要真实皮肤质感，加 \`skin texture\`、\`visible pores\`；不加则会被磨皮成塑料。`,
  },
  {
    cat: 'image', sub: 'product', slug: 'product-photography',
    title: '电商产品主图（白底 / 场景）',
    summary: '生成可用于电商的干净产品图，支持白底与场景两种模式。',
    tags: ['电商', '产品图', '商业摄影'],
    model: 'Midjourney / Flux / SDXL', level: '通用',
    content: `## 模式 A：白底主图（平台合规）
\`\`\`
{{产品名}}, {{材质}}, {{颜色}}, studio product photography, seamless pure white background, soft even lighting, no harsh shadows, three-point lighting setup, shot on 100mm macro lens, f/8, ultra sharp focus, high detail, commercial e-commerce photography, 8k --ar 1:1 --style raw --v 6
\`\`\`

## 模式 B：场景氛围图
\`\`\`
{{产品名}} placed on {{台面材质}}, {{环境：morning sunlight from window / warm wooden table / marble surface}}, {{点缀物：a ceramic cup, dried flowers, linen cloth}}, soft natural lighting, warm color palette, shallow depth of field, lifestyle product photography, editorial style, shot on 50mm lens, f/2.8 --ar 4:5 --style raw --v 6
\`\`\`

## 变量替换表
| 变量 | 替换建议 |
|------|----------|
| {{产品名}} | 要具体到型号与外观，如「matte black wireless earbuds with charging case」 |
| {{材质}} | brushed aluminum / frosted glass / matte plastic / natural linen |
| {{台面材质}} | white marble / oak wood / concrete / linen fabric |

## 增强关键词（按需追加）
- 反光产品（金属/玻璃）：\`softbox reflection\`, \`gradient reflection on surface\`, \`no watermark\`
- 透明产品：\`glass transparency\`, \`caustics\`, \`light refraction\`
- 织物：\`fabric texture visible\`, \`fiber detail\`

## 避坑
- 产品图**不要**加 \`--stylize\` 高值，会导致产品外观被「艺术化」改形，商用会出事。用 \`--s 50\` 或更低。
- 白底图用 \`pure white background\` 而不是 \`white background\`，后者可能生成带渐变的灰底。
- 需要严格还原真实产品时，用 \`--cref\` 或图像参考，不要纯文生图。`,
  },
  {
    cat: 'image', sub: 'illustration', slug: 'flat-vector-illustration',
    title: '扁平矢量插画风格',
    summary: '生成适合网页/App 的干净扁平插画，指定配色与笔触。',
    tags: ['插画', '扁平风', 'UI 配图'],
    model: 'Midjourney / Flux', level: '通用',
    content: `## 模板
\`\`\`
{{场景/主题}}, flat vector illustration, {{配色方案}}, clean geometric shapes, no gradients or minimal gradients, thick clean outlines OR no outlines, simple background, modern editorial illustration style, inspired by Malika Favre and Pablo Stanley, white space, centered composition --ar {{16:9}} --style raw --v 6
\`\`\`

## 配色方案库（替换 {{配色方案}}）
- \`pastel palette, soft pink and mint green\`
- \`corporate blue and orange, high contrast\`
- \`monochromatic with a single accent color\`
- \`earthy tones, terracotta and sage\`
- \`duotone, deep navy and warm yellow\`

## 风格变体关键词
| 想要的效果 | 追加关键词 |
|-----------|-----------|
| 描边风 | \`bold black outlines\`, \`line art style\` |
| 无描边纯色块 | \`no outlines\`, \`solid color shapes\` |
| 等距 2.5D | \`isometric illustration\`, \`2.5D\`, \`45 degree angle\` |
| 手绘感 | \`hand-drawn texture\`, \`slight imperfections\`, \`organic lines\` |
| 质感颗粒 | \`subtle grain texture\`, \`risograph print style\` |

## 示例（已填值）
\`\`\`
a person working at a standing desk with a cat on the floor, flat vector illustration, pastel palette with soft pink and mint green, clean geometric shapes, no outlines, simple background, modern editorial illustration style, generous white space --ar 16:9 --style raw --v 6
\`\`\`

## 避坑
- 生成 UI 配图时加 \`generous white space\`，否则元素铺满整图没法往界面里放。
- 需要透明背景时，明确写 \`isolated on transparent background\`（SD/Flux 有效，MJ 不支持真透明）。
- 扁平插画最忌讳模型偷偷加渐变和阴影，用 \`flat design\`, \`no gradients\`, \`no shadows\` 三重压制。`,
  },
  {
    cat: 'image', sub: 'render3d', slug: 'blender-3d-render',
    title: '3D 渲染 / 等距场景',
    summary: '生成 Octane/Blender 质感的 3D 渲染图，适合科技感配图与图标。',
    tags: ['3D', 'Blender', '等距'],
    model: 'Midjourney / Flux / SDXL', level: '通用',
    content: `## 模板 A：等距 3D 场景（Isometric）
\`\`\`
{{场景内容}}, isometric 3D render, {{主色 + 辅色}}, soft studio lighting, ambient occlusion, clean edges, minimalist, high detail, Octane render, Blender, 8k, white background --ar 1:1 --style raw --v 6
\`\`\`

## 模板 B：产品级 3D 渲染
\`\`\`
{{物体}}, 3D render, {{材质：matte plastic / polished metal / frosted glass / soft rubber}}, subsurface scattering, studio HDRI lighting, soft shadows, ray tracing, physically based rendering, Cinema 4D, Octane render, ultra detailed, 8k --ar 1:1 --style raw --v 6
\`\`\`

## 模板 C：黏土/软萌风（Claymorphism）
\`\`\`
{{物体}}, claymorphism style, soft clay material, rounded edges, pastel {{颜色}}, soft shadows, subtle glossy surface, 3D render, clean white background, UI asset style --ar 1:1 --style raw --v 6
\`\`\`

## 质感关键词速查
| 材质 | 关键词 |
|------|--------|
| 磨砂塑料 | \`matte plastic\`, \`soft touch surface\` |
| 抛光金属 | \`polished chrome\`, \`anodized aluminum\`, \`brushed metal\` |
| 磨砂玻璃 | \`frosted glass\`, \`translucent\`, \`subsurface scattering\` |
| 软胶/黏土 | \`soft rubber\`, \`clay material\`, \`squishy\` |
| 发光 | \`emissive\`, \`glowing edges\`, \`neon rim\`, \`volumetric light\` |

## 避坑
- 3D 渲染词和写实摄影词**不要混用**，会生成「照片里有个塑料模型」的怪图。
- \`ambient occlusion\` 是让物体「落地」的关键，缺了会像悬浮在空中。
- 想要可直接用作图标的素材，务必加 \`clean background\`, \`centered\`, \`no text\`。`,
  },
  {
    cat: 'image', sub: 'character', slug: 'character-sheet-design',
    title: '角色设定三视图（Character Sheet）',
    summary: '生成多角度一致的角色设定图，用于 IP、游戏、表情包。',
    tags: ['角色设计', '三视图', 'IP'],
    model: 'Midjourney / SDXL', level: '进阶',
    content: `## 模板
\`\`\`
character sheet of {{角色名}}, {{外观：年龄/发型/服装/配色/标志性道具}}, full body, front view, side view, back view, three-view drawing, consistent design, neutral expression, T-pose OR standing pose, plain {{浅色}} background, clean line art, concept art style, character design by {{参考画师，可选}}, highly detailed --ar 16:9 --style raw --v 6
\`\`\`

## 表情集（同一角色的多表情）
\`\`\`
expression sheet of {{角色名}}, {{外观描述}}, 6 different facial expressions: happy, sad, angry, surprised, confused, neutral, arranged in a grid, consistent character design, simple background, clean style --ar 3:2 --style raw --v 6
\`\`\`

## 保持角色一致性的操作要点
1. **先用 \`--cref\` 锁形象**：先生成一张满意的正面图，之后用 \`--cref <图片URL>\` 引用它，再换姿势和场景。
2. **用 \`--cw 0-100\` 控制强度**：\`--cw 0\` 只参考脸部（适合换装），\`--cw 100\` 连服装发型都锁死。
3. **固定描述词顺序**：角色的核心特征（发色、瞳色、标志性道具）每次都放在提示词最前面，权重最高。
4. **用 \`--sref\` 锁画风**：先定风格，再定角色。

## 角色描述结构（按这个顺序写，命中率最高）
\`\`\`
[发色发型] + [瞳色] + [肤色] + [年龄感] + [上装] + [下装] + [鞋] + [配饰/道具] + [整体气质关键词]
\`\`\`
示例：\`short silver hair, amber eyes, pale skin, young woman, oversized white shirt, dark pleated skirt, black boots, round glasses, calm and bookish atmosphere\`

## 避坑
- 不要在角色设定图里加复杂背景或强光影，会干扰形象读取。用 \`plain background\`。
- \`three-view\` 在 MJ v6 上偶尔会合成失败，多跑几次或用 \`--chaos\` 提高变化。
- 商用 IP 需要完全可控时，三视图只是参考，最终要交给画师重绘。`,
  },
  {
    cat: 'image', sub: 'scene', slug: 'environment-concept-art',
    title: '环境与场景概念图',
    summary: '生成带氛围与叙事的场景概念图，控制透视、天气与光线。',
    tags: ['场景', '概念图', '氛围'],
    model: 'Midjourney / Flux', level: '通用',
    content: `## 模板
\`\`\`
{{场景主体}}, {{环境细节}}, {{时间/天气/光线}}, {{透视：wide establishing shot / low angle / bird's eye view / dutch angle}}, {{氛围关键词}}, {{参考风格}}, highly detailed environment concept art, cinematic composition, volumetric lighting --ar {{16:9}} --style raw --v 6
\`\`\`

## 组合变量库

**时间与光线**
| 关键词 | 效果 |
|--------|------|
| \`golden hour\` | 温暖、长影、日落前一小时 |
| \`blue hour\` | 冷蓝、静谧、日落后 |
| \`overcast diffused light\` | 柔和无影、阴天 |
| \`harsh midday sun\` | 强对比、短影 |
| \`foggy morning\` | 朦胧、层次感 |
| \`neon night\` | 赛博、湿润反光 |

**透视与构图**
- \`wide establishing shot\` — 大场景，人物很小，强调环境
- \`low angle hero shot\` — 仰视，压迫感
- \`bird's eye view\` — 俯视，看布局
- \`one-point perspective\` — 纵深走廊感
- \`dutch angle\` — 倾斜，不安感

**风格参考**
- \`in the style of Studio Ghibli background\` — 手绘温暖
- \`Makoto Shinkai style\` — 高饱和光影、云
- \`Simon Stålenhag style\` — 北欧科幻怀旧
- \`Zaha Hadid architecture\` — 流线型未来建筑

## 示例（已填值）
\`\`\`
an abandoned research station in the Arctic, snow-covered antenna towers, blue hour, wide establishing shot, cold desolate atmosphere, volumetric fog, in the style of Simon Stålenhag, highly detailed environment concept art, cinematic composition --ar 16:9 --style raw --v 6
\`\`\`

## 避坑
- 场景图最容易出的问题是「元素堆砌但无焦点」，务必指定一个视觉主体 + 一个视线引导（如 \`a single warm light in the distance draws the eye\`）。
- 加人物可瞬间提供尺度感：\`a tiny human figure for scale\`。`,
  },
  {
    cat: 'image', sub: 'logo', slug: 'minimal-logo-mark',
    title: '极简 Logo 与图标生成',
    summary: '生成干净的几何 Logo 概念，控制形态、配色与负空间。',
    tags: ['Logo', '图标', '品牌'],
    model: 'Midjourney / Flux', level: '通用',
    content: `## 模板 A：几何符号 Logo
\`\`\`
minimalist logo mark, {{核心意象：如 a fox head formed by two triangles}}, geometric, {{形态：circular badge / rounded square / pure symbol}}, negative space design, {{配色：single color black / duotone / gradient}}, clean vector lines, perfectly symmetrical, centered, isolated on white background, no text, brand identity design --ar 1:1 --style raw --v 6
\`\`\`

## 模板 B：App 图标
\`\`\`
app icon design, {{主体}}, {{风格：flat / gradient / glassmorphism / 3D clay}}, rounded squircle shape, vibrant {{颜色}}, subtle inner shadow, centered, high detail, isolated on white background, no text, 1024x1024 icon --ar 1:1 --style raw --v 6
\`\`\`

## 模板 C：线性图标集
\`\`\`
icon set of {{主题：如 productivity tools}}, line icons, consistent 2px stroke weight, rounded caps, minimal, single color black on white, arranged in a neat grid, uniform size and visual weight, no fill --ar 1:1 --style raw --v 6
\`\`\`

## 让 Logo 更「像 Logo」的关键词
- \`negative space\` — 负空间巧思，这是好 Logo 的标志
- \`optical balance\` / \`perfectly balanced\` — 视觉平衡
- \`geometric construction\` — 几何构造感
- \`scalable at small sizes\` — 小尺寸可辨识
- \`one concept only\` — 只表达一个概念

## 避坑（重要）
- **AI 生成的 Logo 不能直接商用注册**。字形会糊、矢量质量差、且有过版权风险。正确用法：拿它做**视觉方向的快速验证**，确定方向后交给设计师重绘成矢量。
- 要文字 Logo 时，AI 几乎必然把字母画错。做法是：只生成图形符号，文字后期用设计软件叠加。
- 加 \`no text\` 是必须的，否则模型一定会塞进乱码文字。`,
  },
  {
    cat: 'image', sub: 'poster', slug: 'poster-typography',
    title: '海报与字体排版设计',
    summary: '生成具有排版张力的海报构图，适合活动、专辑、电影海报。',
    tags: ['海报', '排版', '平面设计'],
    model: 'Midjourney v6 / Flux', level: '进阶',
    content: `## 模板
\`\`\`
{{主题}} poster design, {{视觉主体}}, {{排版风格：Swiss style grid / brutalist typography / Japanese minimal / art deco / psychedelic}}, {{配色}}, {{文字内容占位：title at top, date at bottom}}, generous negative space, strong visual hierarchy, large typography, professional graphic design, print quality --ar {{2:3}} --style raw --v 6
\`\`\`

## 风格关键词库
| 风格 | 关键词 |
|------|--------|
| 瑞士国际主义 | \`Swiss style\`, \`grid system\`, \`Helvetica\`, \`asymmetric layout\` |
| 粗野主义 | \`brutalist poster\`, \`oversized bold type\`, \`high contrast\`, \`raw\` |
| 日式极简 | \`Japanese minimalism\`, \`generous white space\`, \`thin type\`, \`muted\` |
| 复古装饰 | \`art deco\`, \`gold foil accents\`, \`ornamental borders\` |
| 迷幻摇滚 | \`psychedelic poster\`, \`wavy distorted type\`, \`saturated colors\` |
| 赛博朋克 | \`cyberpunk poster\`, \`glitch effect\`, \`neon glow\`, \`CRT scanlines\` |

## 文字处理策略（AI 画字不可靠）
1. **纯视觉方向稿**：提示词里写 \`with placeholder text blocks\`，让模型画出文字的位置和大小，后期用设计软件替换真实文字。
2. **短标题可试**：1-3 个字符或单词时成功率较高，用引号包裹：\`title "FOCUS" in bold sans-serif\`。
3. **长文案必翻车**：超过 5 个单词就别指望了，直接在后期加。

## 示例（已填值）
\`\`\`
jazz concert poster design, a saxophonist silhouette in smoke, Swiss style grid layout, deep navy and warm yellow duotone, large typography at top with date information at bottom, generous negative space, strong visual hierarchy, professional graphic design, print quality --ar 2:3 --style raw --v 6
\`\`\`

## 避坑
- 海报是 AI 生成最容易露馅的类型（文字乱码、元素错位）。生成后必须人工检查文字区域。
- 用 \`--ar 2:3\` 或 \`--ar 3:4\`，符合常见海报比例。
- 需要留出血位时，提示词里加 \`with margin\` 并自己在后期留。`,
  },
  {
    cat: 'image', sub: 'edit', slug: 'inpaint-outpaint-guide',
    title: '局部重绘与扩图（Inpainting / Outpainting）',
    summary: '图生图改局部的提示词写法：描述变化部分、保持其余一致。',
    tags: ['图生图', '局部重绘', '扩图'],
    model: 'SDXL / Flux / Midjourney', level: '通用',
    content: `## 核心原则
局部重绘的提示词**只描述变化的部分**，不要把没变的部分也写一遍（写了反而容易改坏）。

## 场景 1：换物体
\`\`\`
原图描述中需要替换的部分：{{旧物体 → 新物体}}

提示词写法：
\`\`\`
{{新物体的详细描述}}, {{光照方向要与原图一致}}, {{视角与原图一致}}, matching the original photo's lighting and color grading, seamless integration, high detail
\`\`\`
重绘幅度（Denoising Strength）：{{0.6-0.75}}
\`\`\`

## 场景 2：移除物体
\`\`\`
提示词写法（描述「应该是什么」而不是「不要什么」）：
\`\`\`
{{物体被移除后应该露出的背景}}, clean, seamless, consistent with surrounding texture
\`\`\`
重绘幅度：{{0.5-0.6}}
注意：负向提示词里写 \`{{要移除的物体}}\`，正向提示词写背景内容。
\`\`\`

## 场景 3：扩图（Outpainting）
\`\`\`
提示词写法：
\`\`\`
{{延续原图的场景描述}}, continue the environment naturally, consistent perspective, consistent lighting, seamless extension
\`\`\`
扩图方向：{{左/右/上/下}}
重绘幅度：{{0.55-0.7}}
\`\`\`

## 场景 4：换风格（图生图）
\`\`\`
提示词写法：
\`\`\`
{{原图内容描述}}, {{目标风格}}, preserve the original composition and layout
\`\`\`
重绘幅度：{{0.4-0.55}} —— 值越高构图越容易崩
\`\`\`

## 重绘幅度（Denoising Strength）对照
| 数值 | 效果 | 适用 |
|------|------|------|
| 0.1-0.3 | 几乎不变，仅微修瑕疵 | 去噪、轻微锐化 |
| 0.4-0.55 | 保留构图，改风格 | 风格迁移 |
| 0.6-0.75 | 改变内容，保留大致结构 | 换物体 |
| 0.8-1.0 | 几乎重画 | 只想保留色块/构图轮廓 |

## 避坑
- **光照一致性是第一杀手**。扩图时先观察原图光源方向，在提示词里写明（如 \`lit from the left\`）。
- \`seamless\`、\`consistent with\` 这类词对 SDXL/Flux 有效，对 MJ 的 Vary(Region) 效果弱。
- 局部重绘的边缘接缝：蒙版要扩大 20-40px，不要贴边。`,
  },

  // ============ 视频与音频 ============
  {
    cat: 'media', sub: 'script', slug: 'short-video-script',
    title: '短视频脚本（黄金 3 秒开头）',
    summary: '按平台节奏写脚本，逐秒规划钩子、信息与转化点。',
    tags: ['短视频', '脚本', '抖音/视频号'],
    model: '通用', level: '通用',
    content: `你是短视频编剧，深谙 {{平台：抖音 / 视频号 / 小红书 / YouTube Shorts}} 的完播逻辑。

## 选题与背景
- 主题：{{}}
- 目标受众：{{}}，他们的痛点是 {{}}
- 视频时长：{{15s / 30s / 60s}}
- 账号人设：{{}}
- 目的：{{涨粉 / 引流 / 带货 / 品牌}}

## 输出结构
### 1. 三个备选开头（黄金 3 秒）
每个开头用不同钩子类型：
- **冲突型**：抛出一个反常识结论
- **痛点型**：直接说出观众的窘境
- **悬念型**：展示结果但不说怎么做

每个开头写出：口播原话（≤15 字）+ 画面 + 字幕样式

### 2. 逐秒脚本表
| 时间 | 口播 | 画面/镜头 | 字幕 | 音效/BGM | 目的 |
（每一行控制在 2-4 秒，标注这一秒的目标：留人 / 给信息 / 造情绪 / 引导）

### 3. 结尾转化
给出 2 个版本：
- 引导互动版（评论/关注话术）
- 引导行动版（点击/购买话术）

### 4. 标题与封面
- 3 个标题备选（≤20 字，带数字或悬念）
- 封面文字（≤9 字，手机上能看清）+ 画面构图建议

### 5. 发布建议
- 话题标签（5-8 个，按大中小流量搭配）
- 发布时间建议与理由
- 评论区引导话术（自问自答造互动）

## 硬规则
- 每一秒都要回答「观众为什么要继续看下去」。没有理由的段落就是掉帧点，删掉。
- 口播要口语，写出来要能直接念。禁止书面语长句。
- 信息密度：{{30s}} 的视频只讲 **1 个核心观点 + 2 个支撑点**，不要贪多。`,
  },
  {
    cat: 'media', sub: 'storyboard', slug: 'storyboard-shots',
    title: '分镜脚本与运镜设计',
    summary: '把脚本拆成镜头表，标注景别、运镜、时长与转场。',
    tags: ['分镜', '运镜', '导演'],
    model: '通用', level: '通用',
    content: `你是分镜师。把下面的脚本/文案拆成可拍摄的镜头表。

## 素材
{{脚本正文 或 文案 或 故事描述}}

## 视频规格
- 时长：{{}}
- 风格基调：{{}}
- 拍摄条件：{{单机位 / 多机位 / 素材剪辑 / AI 生成}}

## 输出：分镜表
| 镜号 | 时长 | 景别 | 运镜 | 画面内容 | 台词/字幕 | 声音 | 转场 |
|------|------|------|------|----------|-----------|------|------|

## 景别与运镜使用规范
**景别**（选择要有理由，不能随机切换）
| 景别 | 用途 |
|------|------|
| 大远景 / 远景 | 建立环境、转场、情绪留白 |
| 全景 | 展示人物全身动作 |
| 中景 | 对话、叙事主力镜头 |
| 近景 | 强调表情与情绪 |
| 特写 | 强调细节、制造冲击 |

**运镜**
| 运镜 | 情绪效果 |
|------|----------|
| 固定 | 客观、稳定、克制 |
| 推 | 聚焦、强调、压迫 |
| 拉 | 揭示、抽离、结束感 |
| 摇 / 移 | 跟随、展示空间 |
| 跟拍 | 代入、临场 |
| 手持晃动 | 紧张、纪实 |
| 升降 | 宏大、转场 |

## 输出额外要求
### 剪辑节奏建议
- 卡点位置与 BGM 节拍的对应
- 快慢节奏的段落划分

### 视觉一致性
- 色彩方案（主色、肤色处理、对比度）
- 镜头语言统一规则（如「全程手持」「只用固定镜头」）

### 可行性检查
如果某个镜头在当前条件下拍不了，标注并给出替代方案。

## 硬规则
- 每个镜头的**时长必须写具体秒数**，不要用「3-5 秒」这种模糊值。
- 相邻镜头之间景别必须有变化，否则会有跳帧感（除非刻意）。`,
  },
  {
    cat: 'media', sub: 'aivideo', slug: 'ai-video-prompt',
    title: 'AI 视频生成提示词（Sora / Runway / Kling）',
    summary: '视频模型提示词结构：主体 + 动作 + 镜头 + 环境 + 时长节奏。',
    tags: ['Sora', 'Runway', '可灵', 'AI 视频'],
    model: 'Sora / Runway Gen-3 / Kling', level: '通用',
    content: `## 视频提示词的核心结构（与图片最大的不同：**必须有动词**）
\`\`\`
[主体] + [正在做什么动作] + [镜头如何运动] + [环境] + [光线] + [风格] + [时长/节奏]
\`\`\`

## 模板
\`\`\`
{{镜头运动：The camera slowly pushes in / pans left / tracks alongside / remains static}}, {{主体及其动作}}, {{环境}}, {{光线与氛围}}, {{风格：cinematic / documentary / anime / photorealistic}}, {{节奏：slow motion / real time / time-lapse}} --duration {{5s}}
\`\`\`

## 镜头运动词库（这是视频提示词的灵魂）
| 英文关键词 | 含义 |
|-----------|------|
| \`push in\` / \`dolly in\` | 推进，聚焦 |
| \`pull back\` / \`dolly out\` | 拉远，揭示 |
| \`pan left/right\` | 摇摄，机身不动转头 |
| \`tilt up/down\` | 俯仰 |
| \`tracking shot\` | 跟拍，横向移动 |
| \`crane shot\` | 升降 |
| \`aerial / drone shot\` | 航拍 |
| \`handheld\` | 手持，纪实感 |
| \`orbit around\` | 环绕 |
| \`static shot\` | 固定 |

## 示例（已填值）
\`\`\`
The camera slowly pushes in on a elderly craftsman's hands carving wood, wood shavings falling in slow motion, warm afternoon light streaming through a workshop window, dust particles visible in the light beam, shallow depth of field, documentary style, photorealistic --duration 5s
\`\`\`

## 关键技巧
1. **一个镜头只做一件事**。5 秒视频塞进两个动作，两个都会失败。
2. **给足时间**：复杂动作需要更长时长。快动作缩短时长反而更自然。
3. **主体一致性**：跨镜头保持一致时，用首帧图（image-to-video）而不是纯文生视频。
4. **描述动作的物理过程**，不是结果。写「水从杯口慢慢溢出并沿桌面扩散」，不要写「杯子打翻了」。
5. **镜头运动写在最前面**，多数模型对开头的指令权重最高。

## 避坑
- 视频模型对「连续时长」敏感：5 秒是成功率甜区，10 秒以上形变概率大幅上升。
- 避免过度复杂的多人交互（如「两个人握手并交谈」），会生成畸形肢体。
- 需要人物说话时，写 \`subtle facial movement\` 而不是 \`talking\`，后者容易导致嘴部扭曲。`,
  },
  {
    cat: 'media', sub: 'voiceover', slug: 'tts-voice-direction',
    title: '配音文案与语音参数设计',
    summary: '把书面文案改写成适合朗读的口语稿，并给出语音参数建议。',
    tags: ['配音', 'TTS', '语音合成'],
    model: '通用', level: '通用',
    content: `## Part 1：文案口语化改写

### 原始文案
\`\`\`
{{文案}}
\`\`\`

### 改写要求
1. **拆长句**：每句不超过 20 字，超过就断句。
2. **去书面语**：把「因此」「然而」「综上所述」换成「所以」「但是」「说白了」。
3. **数字读法**：把「3.5%」写成「百分之三点五」，把「2024年」写成「二零二四年」。
4. **标注停顿**：用 \`/\` 标短停，\`//\` 标长停。
5. **标注重音**：用 **加粗** 标出需要强调的词。
6. **难读词注音**：生僻字、多音字、英文缩写用括号标注读音。

### 输出
- 改写后的口播稿（带停顿与重音标记）
- 预计时长（按每分钟 {{200-260}} 字估算）
- 难读词清单

## Part 2：语音参数建议

### 语音选择
| 场景 | 建议声线 | 语速 | 情绪 |
|------|----------|------|------|
| 知识科普 | 清晰中性男声/女声 | 中速 | 平稳、可信 |
| 品牌宣传 | 温暖女声/浑厚男声 | 中慢 | 从容、有质感 |
| 短视频口播 | 年轻活泼 | 快速 | 有能量、起伏大 |
| 纪录片旁白 | 低沉男声 | 慢速 | 沉稳、叙事感 |
| 儿童内容 | 明亮高音 | 中速 | 夸张、有表演感 |

### 参数建议（TTS 系统）
\`\`\`
voice: {{声线 ID}}
speed: {{0.8 - 1.3}}
pitch: {{-2 到 +2}}
stability: {{0.3 活泼 / 0.7 平稳}}
similarity_boost: {{0.75}}
style_exaggeration: {{0-0.5}}
\`\`\`

### 韵律标记（SSML 建议）
给出关键句的 SSML 标记示例（停顿 \`<break>\`、重音 \`<emphasis>\`、语速 \`<prosody>\`）。

## 硬规则
- 配音稿必须**能一口气念下来不拗口**。写完后自己在心里念一遍，卡住的地方就是病句。
- 数字、英文、专业术语是配音车祸高发区，必须逐个标注。`,
  },
  {
    cat: 'media', sub: 'music', slug: 'music-generation-prompt',
    title: 'AI 音乐生成提示词（Suno / Udio）',
    summary: '按流派、情绪、乐器、人声与结构组织音乐生成提示词。',
    tags: ['Suno', '音乐生成', 'BGM'],
    model: 'Suno / Udio / MusicGen', level: '通用',
    content: `## Suno 提示词结构
\`\`\`
[流派] + [情绪/氛围] + [核心乐器] + [人声描述] + [节奏/速度] + [时代或地域参考] + [结构标签]
\`\`\`

## 模板
\`\`\`
{{流派：lo-fi hip hop / cinematic orchestral / synthwave / folk acoustic / city pop}}, {{情绪：melancholic / uplifting / tense / dreamy}}, featuring {{核心乐器：warm Rhodes piano, vinyl crackle, soft drums}}, {{人声：female vocals with breathy tone / instrumental only}}, {{BPM 与节奏}}, {{参考：reminiscent of 90s Japanese city pop}}, {{结构标签}}
\`\`\`

## 元素词库

**流派**
\`lo-fi hip hop\` · \`synthwave\` · \`ambient\` · \`post-rock\` · \`jazz trio\` · \`city pop\` · \`trap\` · \`orchestral\` · \`folk\` · \`shoegaze\` · \`bossa nova\` · \`drum and bass\` · \`indie pop\` · \`blues\`

**情绪/氛围**
\`melancholic\` · \`nostalgic\` · \`ethereal\` · \`driving\` · \`tense\` · \`triumphant\` · \`intimate\` · \`hypnotic\` · \`warm\` · \`dark\` · \`playful\`

**人声**
\`male/female vocals\` · \`breathy\` · \`raspy\` · \`falsetto\` · \`harmonized\` · \`whispered\` · \`no vocals / instrumental\`

**质感**
\`vinyl crackle\` · \`tape saturation\` · \`reverb-heavy\` · \`lo-fi\` · \`crisp production\` · \`live room feel\`

## 结构标签（Suno 专用，写在 [方括号] 里）
\`\`\`
[Intro] [Verse] [Pre-Chorus] [Chorus] [Bridge] [Guitar Solo] [Outro] [End]
\`\`\`
可精细控制，如 \`[Verse - intimate, only piano]\`、\`[Chorus - full drums, energetic]\`。

## 示例（已填值）
\`\`\`
lo-fi hip hop, nostalgic and warm, featuring dusty Rhodes piano, vinyl crackle and soft brushed drums, instrumental, 78 BPM, reminiscent of late-night study sessions, lo-fi tape saturation

[Intro - 4 bars, piano only]
[Verse - add soft drums and bass]
[Chorus - add warm pad, fuller mix]
[Outro - fade to piano and vinyl crackle]
\`\`\`

## 避坑
- **中文歌词翻车率极高**（发音怪、声调错）。要做中文歌，先写英文版定旋律，再用 Cover 功能或后期替换人声。
- 提示词里不要写「好听」「高质量」这类主观词，模型无法理解。写具体的乐器、节奏、音色。
- \`[Instrumental]\` 要显式写，否则 Suno 大概率会加人声。
- 生成的音乐版权归平台规则约束，商用前确认授权条款。`,
  },
  {
    cat: 'media', sub: 'podcast', slug: 'podcast-outline',
    title: '播客大纲与问题清单',
    summary: '规划一期播客的结构、时间轴与提问设计。',
    tags: ['播客', '访谈', '内容策划'],
    model: '通用', level: '通用',
    content: `你是播客制作人。规划一期节目。

## 节目信息
- 节目名/定位：{{}}
- 本期主题：{{}}
- 嘉宾：{{背景与经历}}
- 目标听众：{{}}
- 时长：{{30 / 60 / 90 分钟}}
- 形式：{{单人 / 访谈 / 对谈 / 圆桌}}

## 输出
### 1. 一句话卖点
听众为什么要点开这期？（≤25 字，要具体，不要「干货满满」）

### 2. 时间轴结构
| 时间段 | 板块 | 内容要点 | 目的 |
（建议结构：冷开场钩子 30s → 嘉宾介绍 → 核心议题 3-4 个 → 快问快答 → 收尾）

### 3. 问题清单
按类型分组，每个问题标注：问题 | 类型 | 预期回答方向 | 如果答偏了怎么追问

**问题类型配比**
- **破冰故事类**（20%）：让嘉宾进入叙事状态，如「你第一次意识到 XX 是什么时候？」
- **具体细节类**（30%）：要场景和数字，如「那次决策的具体数字是多少？」
- **观点交锋类**（25%）：制造张力，如「但有人说 XX，你怎么看？」
- **复盘反思类**（15%）：提炼经验，如「如果重来一次你会怎么做？」
- **开放收尾类**（10%）：给听众带走的东西

### 4. 追问库
针对每个核心议题准备 2 个追问，用于嘉宾回答太浅时下探。
追问句式模板：「能举个具体的例子吗？」「当时你具体是怎么判断的？」「这个决定的代价是什么？」

### 5. 风险预案
- 嘉宾话少：准备了哪些开放式问题救场
- 嘉宾跑题：设计了哪几个过渡话术拉回
- 敏感话题：哪些问题需要提前沟通

### 6. 配套物料
- 3 个节目标题备选
- Shownotes 摘要（150 字）
- 3-5 个可剪成短视频的高光片段预判点

## 硬规则
- 禁止「你有什么想对听众说的吗」这种让嘉宾无从下手的空问题。
- 每个问题都要能引出**具体的故事或数字**，而不是抽象观点。`,
  },

  // ============ 写作与内容 ============
  {
    cat: 'writing', sub: 'article', slug: 'longform-outline',
    title: '长文写作大纲与初稿',
    summary: '先锁结构再写正文，避免写到一半发现逻辑断了。',
    tags: ['长文', '结构', '创作'],
    model: '通用', level: '通用',
    content: `你是资深内容创作者。写关于「{{主题}}」的文章。

## 写作背景
- 目标读者：{{身份、已有认知水平、真实痛点}}
- 读者读完应该：{{知道 / 能做 / 相信什么}}
- 字数：{{}}
- 平台与调性：{{公众号 / 知乎 / 个人博客 / 行业媒体}}
- 我的独特视角（必填）：{{只有我能讲的经历或观点}}

## 第一步：结构大纲（先只输出这个，等我确认）
1. **标题**：3 个备选，每个标注用了哪种钩子（数字/反常识/悬念/利益）
2. **核心论点**：一句话，必须是一个**可被反驳的判断**，不是「XX 很重要」
3. **大纲**：
| 段落 | 功能 | 要点 | 预计字数 | 素材 |
4. **素材缺口**：哪些论点缺案例/数据支撑，列出来给我补

## 第二步：正文写作（确认大纲后）
按大纲写，遵循：
- **开头 200 字**：必须完成「共鸣痛点 → 亮出反常识结论 → 说明读完能得到什么」
- **每一节**：先给结论，再给论证。禁止铺垫三段才说重点。
- **每个抽象论点后必须跟**：一个具体案例 / 一组数字 / 一个比喻，三选一
- **过渡**：段与段之间要有显性的逻辑连接词，不能靠读者自己猜
- **结尾**：回扣开头的承诺，给出可执行的下一步，不要升华成正确的废话

## 文风要求
- 句子平均长度不超过 {{30}} 字，长短句交替
- 禁用词：赋能、抓手、闭环、生态、颗粒度、心智（除非是反讽）
- 每段不超过 5 行
- 能用具体名词就不用抽象名词（写「改了 12 版」而不是「进行了大量优化」）

## 第三步：自检清单
写完逐项检查并报告结果：
- [ ] 第一段是否让人想继续读
- [ ] 是否有任何一个段落删掉后不影响理解（有就删）
- [ ] 是否有「XX 很重要」这类无信息量句子
- [ ] 每个数据是否标了来源
- [ ] 结论是否比开头给的更多`,
  },
  {
    cat: 'writing', sub: 'headline', slug: 'headline-generator',
    title: '标题批量生成与筛选',
    summary: '一次产出 30 个标题，按钩子类型分组并给出推荐理由。',
    tags: ['标题', '钩子', 'CTR'],
    model: '通用', level: '通用',
    content: `你是标题撰写专家。为下面的内容生成标题。

## 内容概要
{{核心内容、关键结论、最反常识的一点}}

## 发布平台
{{公众号 / 小红书 / 知乎 / 头条 / 邮件主题 / YouTube}}

## 目标
- 读者是谁：{{}}
- 希望触发的情绪：{{好奇 / 焦虑 / 认同 / 紧迫}}
- 限制：{{字数上限、禁用词}}

## 输出：30 个标题，按 6 种钩子分组，每组 5 个

### 1. 数字型
用具体数字降低认知成本（\`我用了 3 个月，踩了 7 个坑\`）

### 2. 反常识型
颠覆一个读者以为正确的认知（\`做得越多，错得越狠\`）

### 3. 痛点型
直接点名读者的窘境（\`写了 200 篇，为什么还是没人看\`）

### 4. 悬念型
给出结果，藏起方法（\`他只用了一招，把转化率翻了倍\`）

### 5. 身份型
锁定人群，制造归属感（\`给所有刚转岗的产品经理\`）

### 6. 利益型
直给收益（\`这套模板，帮你省下每周 5 小时\`）

## 每组输出后附
### 推荐 Top 3
| 标题 | 类型 | 预估点击优势 | 风险 |
（风险如：标题党嫌疑、与内容不符、平台限流词）

### 平台适配改写
把推荐的 Top 1 改写成适合 {{其他平台}} 的版本（如公众号→小红书要加 emoji 和换行）。

### A/B 测试建议
给出 2 组可对照测试的标题组合，以及判断标准（点击率差多少算显著）。

## 硬规则
- 禁止「震惊！」「不转不是中国人」这类低质标题党——除非你明确要求。
- 每个标题必须**与内容真实对应**，夸张但不可撒谎。标题承诺的东西正文必须给到。
- 平台限流敏感词（如「最」「第一」「100%」）要标注出来。`,
  },
  {
    cat: 'writing', sub: 'social', slug: 'xhs-note-writer',
    title: '小红书笔记撰写',
    summary: '按小红书语感写图文笔记，含标题、正文、emoji 排版与标签。',
    tags: ['小红书', '社媒', '图文'],
    model: '通用', level: '通用',
    content: `你是小红书内容操盘手，深谙平台语感。

## 内容信息
- 主题：{{}}
- 我的身份/人设：{{}}
- 目标受众：{{年龄/身份/痛点}}
- 笔记目的：{{种草 / 干货 / 记录 / 引流}}
- 是否有产品：{{产品名与卖点，无则写「无」}}

## 输出

### 1. 标题（5 个备选，≤20 字）
要求：带情绪词或数字，口语化，符合小红书体感。
至少包含 1 个「我」字开头的第一人称标题。

### 2. 封面文案
- 主标题（≤9 字，手机缩略图可读）
- 副标题（≤15 字）
- 配色与字体建议

### 3. 正文（300-800 字）
结构要求：
- **开头 2 行**：制造共鸣或抛出结果，必须有钩子
- **中间分点**：用 \`1️⃣ 2️⃣ 3️⃣\` 或 \`▫️\` 分点，每点一个小标题 + 2-3 行说明
- **结尾**：引导互动（提问式）+ 适当留白

**语感要求**
- 用「姐妹们」「真的会谢」「踩坑」「亲测」这类平台高频词，但不要堆砌
- 每段不超过 3 行，段落之间空行
- emoji 密度：每 2-3 行一个，用于分隔视觉，不用于装饰句尾
- 第一人称叙事，要有具体的个人细节（时间、地点、数字）

### 4. 话题标签（8-12 个）
按流量层级搭配：
- 大流量泛标签 2-3 个（{{如 #好物分享}}）
- 中流量垂类标签 3-4 个
- 精准长尾标签 3-4 个
- 1 个自建账号标签

### 5. 评论区运营
- 置顶评论内容（补充正文没说的关键信息）
- 3 条预设互动回复
- 引导词设计（提示读者评论什么关键词）

### 6. 发布建议
- 最佳发布时间与理由
- 首小时互动策略

## 硬规则
- 小红书对营销词敏感，「最」「第一」「绝对」「100%」「国家级」要规避。
- 涉及医疗、金融、减肥等类目，避免功效承诺。
- 不要写成公众号式的长段落，手机上会劝退。`,
  },
  {
    cat: 'writing', sub: 'rewrite', slug: 'style-polish',
    title: '文风润色与改写',
    summary: '在不改变信息的前提下提升表达质量，逐条说明改了什么。',
    tags: ['润色', '改写', '文风'],
    model: '通用', level: '通用',
    content: `你是文字编辑。润色下面的文字。

## 原文
\`\`\`
{{原文}}
\`\`\`

## 改写目标
- 场景：{{邮件 / 报告 / 公众号 / 论文 / 社媒}}
- 读者：{{}}
- 希望的效果：{{更简洁 / 更专业 / 更口语 / 更有说服力 / 更温和}}
- 保留要素：{{必须保留的信息、术语、数据}}
- 字数要求：{{压缩到 X 字 / 不限}}

## 润色维度（逐项处理）
1. **去冗余**：删掉「进行了」「起到了……的作用」「在……的过程中」这类空壳结构
2. **动词优先**：把名词化表达还原成动词（「做出调整」→「调整」）
3. **去套话**：删掉「众所周知」「随着……的发展」「综上所述」这类无信息量开场
4. **拆长句**：超过 {{40}} 字的句子拆开
5. **具体化**：抽象词换成具体事实（「显著提升」→「从 12% 提升到 31%」）
6. **逻辑显性化**：补上缺失的连接词
7. **语气校准**：按目标场景调整正式度与人称

## 输出
### 润色后文本
（直接可用，不要加「这是润色后的版本」这类说明）

### 改动清单
表格：原文片段 | 改后 | 改动类型 | 理由
（按重要性排序，至少列出 5 处实质性改动）

### 保留说明
列出你**故意没改**的地方及原因（如：术语不能改、这是作者的个人风格、改了会丢失信息）。

### 可选版本
如果该场景存在风格分歧（如「更正式」vs「更亲切」），给出另一个方向的简短版本。

## 硬规则
- **不得增删事实、数据、结论**。润色只动表达，不动内容。
- 不要为了「文采」加入原文没有的形容词。
- 如果原文存在事实错误或逻辑漏洞，不在正文中擅自修正，在末尾单独列出提醒。`,
  },
  {
    cat: 'writing', sub: 'translation', slug: 'context-translation',
    title: '带语境的高质量翻译',
    summary: '不是字面翻译，而是按目标读者与用途重述，附术语表与决策说明。',
    tags: ['翻译', '本地化', '术语'],
    model: '通用', level: '通用',
    content: `你是本地化专家，拒绝机翻腔。

## 待翻译内容
\`\`\`
{{原文}}
\`\`\`

## 翻译参数
- 源语言 → 目标语言：{{中 → 英 / 英 → 中}}
- 用途：{{产品文案 / 技术文档 / 营销物料 / 学术论文 / 邮件}}
- 目标读者：{{}}
- 语气：{{正式 / 中性 / 亲切 / 幽默}}
- 术语表：{{已有术语对照，无则写「无，请为我建立」}}

## 翻译原则
1. **重述优先于直译**：翻译的是「作者想让读者理解什么」，不是「这段文字由哪些词组成」。
2. **尊重目标语言的表达习惯**：中译英时，把中文的螺旋式铺垫重组为英文的结论先行；英译中时，把长定语从句拆成短句。
3. **文化适配**：习语、笑话、典故要做等效替换，并标注说明。
4. **术语一致性**：同一术语全文统一译法。
5. **保留不可译内容**：专有名词、代码、品牌名保留原文，必要时加注释。

## 输出
### 译文
（直接可用）

### 术语表
| 原文 | 译文 | 决策理由 |
（至少覆盖所有专业术语和有歧义的词）

### 关键决策说明
列出 3-5 处你做了**非字面处理**的地方：
- 原文是什么
- 字面翻译会怎样（为什么不好）
- 你为什么这么处理

### 存疑点
列出你不确定、需要结合业务确认的译法（如品牌名的官方中文名、行业特定缩写）。

## 硬规则
- 中译英时禁止输出「Chinglish」式的长主语从句堆砌。
- 英译中时禁止「当……的时候」「被……」「性」「化」滥用导致的翻译腔。
- 数字、单位、日期格式要按目标语言习惯转换（如 1万 → 10k、2024年9月4日 → Sep 4, 2024）。`,
  },
  {
    cat: 'writing', sub: 'email', slug: 'business-email',
    title: '商务邮件撰写',
    summary: '按场景与关系亲疏调整语气，结论先行，控制长度。',
    tags: ['邮件', '商务沟通', '职场'],
    model: '通用', level: '通用',
    content: `你是商务沟通专家。写一封邮件。

## 邮件要素
- 收件人：{{身份、与我的关系（上下级/客户/陌生合作方）}}
- 我的身份：{{}}
- 目的：{{请求 / 通知 / 道歉 / 跟进 / 拒绝 / 感谢}}
- 关键信息：{{必须传达的内容}}
- 期望对方做的动作：{{明确动作与截止时间}}
- 背景：{{对方已知的上下文}}

## 写作规则
1. **结论先行**：第一句话就说清「我为什么写这封邮件」和「我需要你做什么」。
2. **一段一事**：每个段落只讲一件事，段落间空行。
3. **长度控制**：正文不超过 {{150}} 字能说清就不写 300 字。超过 5 段的邮件，把细节放附件。
4. **请求要具体**：不写「麻烦你看看」，写「请在 {{日期}} 前确认第 2 节的方案 A 或 B」。
5. **降低对方成本**：能替对方想好的就先想好（如给出选项而不是开放式提问）。

## 输出
### 邮件主题（3 个备选）
要求：包含核心动作 + 关键信息，≤20 字，能在收件箱一眼看懂。
格式参考：\`[动作] + [对象] + [期限]\`

### 邮件正文
\`\`\`
称呼：

第一句：目的 + 诉求

正文：分点说明（2-4 点）

下一步：明确动作、负责人、时间

结尾 + 签名
\`\`\`

### 语气版本
除首选版本外，再给一个**更正式**或**更简洁**的版本（注明差异点）。

### 检查清单
- [ ] 收件人打开邮件 3 秒内能否知道要做什么
- [ ] 是否有模糊的时间词（尽快、近日）→ 换成具体日期
- [ ] 是否给对方留了拒绝的空间
- [ ] 附件是否已在正文中提及

## 硬规则
- 禁止「尊敬的先生/女士您好」这种群发腔，除非确实是群发。
- 道歉邮件不解释原因超过一句，重点在补救方案。
- 拒绝邮件先给结论，再给理由，最后给替代方案。`,
  },
  {
    cat: 'writing', sub: 'fiction', slug: 'scene-writing',
    title: '小说场景写作',
    summary: '用「展示而非讲述」写场景，控制视角、节奏与感官细节。',
    tags: ['小说', '场景', '叙事'],
    model: '通用', level: '进阶',
    content: `你是小说家。写一个场景。

## 场景设定
- 情节功能：{{这个场景要推进什么，人物关系发生什么变化}}
- 地点与时间：{{}}
- 出场人物：{{}}（含各自当下的目的，目的之间要有冲突）
- 视角：{{第一人称 / 第三人称限知 / 全知}}
- 情绪基调：{{}}
- 字数：{{}}

## 写作要求
### 1. 场景结构
- **进入**：用一个具体的感官细节或动作开场，不要背景介绍
- **目标冲突**：每个人物在这个场景里想要什么，为什么会碰
- **转折**：场景内必须发生一次变化（信息揭示、关系改变、决策做出）
- **离开**：结尾要有余味，用一个动作或意象收束，不要总结陈词

### 2. 技法要求
- **展示而非讲述**：不写「他很生气」，写他的动作、生理反应、对物体的处置方式
- **感官层次**：视觉之外，至少调动 2 种感官（声音、气味、触感、味觉）
- **对话**：每句对话都要有潜台词，人物说的是 A，想的是 B；避免对话承担说明功能
- **节奏控制**：紧张场景用短句、少形容词；抒情场景可放宽
- **细节选择**：只写 1-2 个有意味的细节，不要环境描写铺满

### 3. 输出
- 场景正文
- **自评**：这个场景的转折在哪一句？潜台词最强的对话是哪句？如果删掉第一段会损失什么？

## 禁用清单
- 不要在对话里让人物说出他们都知道的信息（「你知道的，我们在上海」）
- 不要用「突然」推动情节
- 不要用天气开头（除非有明确功能）
- 形容词不超过名词数量的 1/3`,
  },
];
