---
title: 移动应用完整开发提示词：习惯追踪与打卡
summary: 以「个人习惯追踪与每日打卡」为例，使用 React Native + Expo 构建跨平台移动应用的完整细则范例。
category: project
subcategory: mobile-app
tags: [移动应用, React Native, Expo, 习惯追踪, 范例]
model: 通用
level: 高级
featured: false
updated: 2026-09-05
---
请直接为我开发并交付一套完整可运行、可打包的跨平台移动应用（iOS + Android）。不要只输出方案、界面示例或伪代码；请创建完整项目、本地运行调试、修复错误，并给出可安装产物。

应用定位：一款个人习惯追踪与每日打卡应用，支持创建习惯、设置每周目标、每日一键打卡、查看连续打卡天数、生成周/月/年统计图表，并通过本地通知提醒用户。所有数据默认保存在本机 SQLite（通过 Expo SQLite），支持导出备份与导入恢复。

执行要求：请严格按照下方规格一次性完成。

## 一、交付目标
交付内容至少包括：React Native + Expo 完整源码、路由与导航、习惯数据模型、每日打卡记录、统计图表、本地通知、数据导出导入、依赖清单、README、EAS Build 配置、Android APK/AAB 与 iOS Simulator/App Store 构建产物。代码必须分层清晰（组件 / 服务 / 数据 / 通知），不要把全部功能堆在一个文件里。

## 二、技术栈约束
- 框架：React Native 0.72+，使用 Expo SDK 50+（ managed workflow 或 bare workflow 均可，优先 managed）。
- 导航：Expo Router 或 React Navigation 6+，底部 Tab + 模态弹窗。
- 状态管理：React Context 或 Zustand；数据持久化用 Expo SQLite（或 WatermelonDB 轻量版）。
- UI：React Native 原生组件 + 第三方图表库（如 react-native-gifted-charts 或 victory-native），禁止依赖需单独付费的运行时。
- 本地通知：expo-notifications，支持每日提醒与完成提醒。
- 时区：Asia/Shanghai；所有日期按本地自然日处理。
- 打包：EAS Build 配置；Android 输出 APK/AAB；iOS 输出 Simulator build 或 Archive。首次运行自动创建本地数据库与默认习惯示例。

## 三、习惯输入与解析
支持三种方式创建习惯：手动新建（名称、图标、颜色、每周目标天数、每日提醒时间）；从预设模板快速创建（如早起、喝水、运动、阅读、冥想）；批量导入 JSON 备份文件。 habit 字段校验：名称不能为空且不超过 30 字；每周目标天数 1～7；颜色必须是十六进制色值；图标从预设列表选择。批量导入按 habit_id 去重，重复项提示并跳过。

## 四、核心数据模型与字段解析
至少建立以下表。habits：id TEXT PRIMARY KEY、name TEXT NOT NULL、icon TEXT、color TEXT、weekly_goal INTEGER DEFAULT 7、reminder_time TEXT、reminder_enabled INTEGER DEFAULT 0、created_at TEXT、archived INTEGER DEFAULT 0、sort_order INTEGER。checkins：id TEXT PRIMARY KEY、habit_id TEXT、checked_at TEXT、date TEXT（YYYY-MM-DD）、note TEXT、created_at TEXT；复合索引 habit_id + date。settings：key TEXT PRIMARY KEY、value TEXT。exports：id TEXT PRIMARY KEY、filename TEXT、size INTEGER、created_at TEXT。

明确字段校验：打卡记录同一 habit + 同一 date 只能有一条；checked_at 必须合法；备注不超过 200 字。非法数据不写入，返回友好错误。删除习惯进入归档状态，保留历史打卡记录，可恢复或彻底删除。

## 五、执行策略
 habit 列表按 sort_order 与 created_at 排序；打卡操作即时写入 SQLite 并刷新界面；统计查询使用预聚合或运行时聚合（数据量小，可接受运行时计算）；图表数据按周/月/年分组，缺失日期补 0 但不伪造打卡；导出长任务使用 expo-file-system 异步写入，避免卡 UI。

## 六、异常分类与处理
区分用户输入错误（名称过长、目标天数非法，表单即时提示）、数据库错误（Expo SQLite 不可用，提示用户重启）、通知权限错误（用户未授权，引导去设置）、文件操作错误（导出目录不可写，提示换目录）。单操作失败不影响其他习惯；全局数据库初始化失败显示错误页并提供重置选项。

## 七、状态识别
明确 habit 状态：活跃（默认）、归档、已删除。明确打卡状态：已完成、未打卡、跳过（用户主动标记，不计入连续天数）。连续天数计算规则：从最近一天向前连续有打卡的天数，中间有跳过或中断则归零；周目标完成率 = 本周已完成天数 / weekly_goal。不得把未来日期或时区切换错误误判为中断。

## 八、本地通知与提醒
支持为每个 habit 设置每日提醒时间（如 08:00）。使用 expo-notifications 在设备本地调度通知；用户授权失败时友好提示； habit 归档后自动取消对应通知。提供「今日待打卡」汇总通知（可开关），在用户设定时间推送今日未打卡习惯列表。通知点击打开应用并跳转到对应 habit。

## 九、SQLite 数据结构
数据库操作使用参数化 SQL；开启 WAL 模式（如底层支持）；所有表自动创建；升级时通过 PRAGMA table_info 检测并补充新字段。导出表记录每次备份文件路径与大小，便于历史管理。

## 十、统计口径
今日完成数 = 今日有打卡记录的活跃 habit 数；本周完成率 = 本周已完成天数 / 本周目标总天数；本月完成率 = 本月已完成天数 / 本月目标总天数；连续打卡天数按实际连续记录计算；最长连续天数取历史最大值。图表数据：近 7 天每日完成 habit 数折线图；本周各 habit 完成率柱状图；年度热图（类似 GitHub contributions，按日显示完成密度）。缺失数据补 0 并标注，不伪造打卡。

## 十一、移动端界面总体风格
iOS 与 Android 均使用平台风格或统一 Material You 风格；浅色主题为主，主色由 habit 颜色决定，红色仅用于删除/报错。底部固定 Tab：今日、习惯、统计、设置。顶部标题清晰，字体 16-20px；卡片圆角 12px，阴影适度。不做花哨动画，优先操作效率与可读性。必须显示免责声明：数据仅保存在本机，请定期导出备份。

## 十二、主功能模块（固定顺序 Tab）
今日 Tab：顶部显示今日日期与一句鼓励语；下方为待打卡 habit 列表，每项左侧图标、名称、目标进度，右侧圆形打卡按钮；点击即打卡并播放轻量反馈（震动 + 图标缩放）；已完成项置底并灰显。习惯 Tab：全部活跃 habit 列表；支持拖拽排序、长按编辑、左滑归档、点击打开 habit 详情（历史打卡日历、连续天数、编辑）。统计 Tab：顶部切换 周/月/年；折线图 + 柱状图 + 年度热图；下方显示本周/本月/本年完成率与连续天数。设置 Tab：分组卡片（通知管理、数据备份与恢复、主题、关于）。

## 十三、 habit 详情与编辑
点击 habit 进入详情页：顶部显示图标、名称、颜色、连续天数、本周完成率；中部为日历视图（本月每天是否打卡，点击可补打卡或取消）；下方为编辑入口（名称、图标、颜色、每周目标、提醒时间、归档、删除）。删除必须二次确认，默认归档而非彻底删除。支持补打卡昨日及之前日期，但不允许预打卡未来日期。

## 十四、数据备份与恢复
设置页提供导出备份：生成 JSON 文件（含 habits、checkins、settings），保存到用户选择目录（通过 expo-document-picker 或 share sheet）。提供导入恢复：选择 JSON 文件，预览条目数与冲突（同名 habit），用户确认后覆盖或合并。备份文件带版本号与导出时间，旧版本备份兼容导入。

## 十五、失败与异常列表
设置页提供「运行日志」入口：显示数据库错误、通知调度失败、导出导入失败等；支持按级别筛选、清空（二次确认）。 habit 打卡失败时顶部 Toast 提示真实原因，不要只写「失败」。

## 十六、外部集成（可选）
支持 Apple Health / Google Fit 同步（如运动类 habit），标记为可选功能；未授权时不阻塞核心流程。支持通过系统分享 Sheet 分享周完成率卡片为图片。

## 十七、设置页
分组卡片纵向排列：通知管理（全局开关、每日汇总时间、各 habit 提醒时间列表）；数据（导出备份、导入恢复、清理旧记录、重置应用）；外观（主题色、是否跟随系统深色模式）；关于（版本号、免责声明、开源协议）。所有操作保存即生效，重置应用需二次确认。

## 十八、只读数据查询（开发调试）
提供隐藏调试命令或开发者模式（非用户入口），只读查询 SQLite：list_habits、list_checkins、get_summary。仅用于开发调试，不暴露给普通用户。

## 十九、运行日志
日志持久化到 SQLite 或文件，应用重启不丢失。字段：时间、级别、来源、消息、完整详情。支持导出日志文件。错误展示真实异常信息。

## 二十、数据清理
设置页显示数据库大小与打卡记录条数。提供一键清理：删除归档 habit 超过 365 天的打卡记录；保留每个 habit 一条最早基线用于连续天数计算。清理前二次确认并报告释放空间。

## 二十一、稳定性和安全要求
不写死用户数据路径；敏感信息（如 Health 授权 token）不输出到日志；数据库写入使用事务；任何操作失败不让应用崩溃；处理长 habit 名、空备注、时区切换、夏令时无关的上海时区；应用进入后台后通知仍正常触发。

## 二十二、打包和项目结构
建议目录：app/（页面）、components/（组件）、hooks/、services/（database.js、notifications.js、backup.js）、constants/、assets/、eas.json、app.json、package.json、README.md。主产物：Android APK/AAB、iOS build。构建后校验产物存在并报告路径大小。

## 二十三、执行指令
现在请开始直接创建完整项目。先检查当前工作目录是否已有用户文件与数据，保留现有内容；然后依次完成项目初始化、数据层、界面、通知、调试与打包；不要中途只向我描述计划，也不要在实现一半时停止。若遇到非关键歧义，请按以上规格做合理决定并继续；只有缺少必须的图标源文件时才允许使用临时图标并注明替换位置。
