---
title: Python CLI 工具完整开发提示词（范例）
summary: 以「批量媒体文件整理」为例，套用模块化模板生成的命令行工具规格范例。
category: project
subcategory: cli-tool
tags: [CLI, Python, 命令行, 范例]
model: 通用
level: 高级
featured: false
updated: 2026-09-05
---
请直接为我开发并交付一个完整可运行、可 pip 安装、可发布的 Python CLI 工具（目标：命令行直接使用）。不要只输出片段、示例命令或伪代码；请创建完整项目、本地运行测试、修复错误，并给出可发布产物。

工具定位：批量整理本地媒体文件（图片 / 视频 / 音频），按拍摄时间或文件名规则重命名、按年月归类到目录、生成去重报告、可选调用 Pillow 生成缩略图。所有写操作默认预览（dry-run），用户明确确认后才真正执行，避免误删误移动。

执行要求：请严格按照下方规格一次性完成。

## 一、交付目标
交付内容至少包括：CLI 主程序入口、核心处理逻辑模块、配置模块、日志模块、本地 SQLite 状态库、单元测试、pyproject.toml（支持 pip install -e . 安装）、README.md、示例配置文件、Makefile 或任务脚本。代码必须分层清晰（cli 入口 / 业务规则 / IO 操作 / 元数据解析 / 日志 / 数据库），不要把全部功能堆在一个巨大函数里。

## 二、技术栈约束
- 运行时：Python 3.10+，兼容 CPython 与常见虚拟环境。
- CLI 框架：Click 或 argparse；命令自动补全（可选 shell 补全脚本）。
- 数据库：SQLite 记录已处理文件哈希、目标路径与处理时间；开启 WAL 模式；所有表自动创建，旧表缺字段自动迁移。
- 文件操作：标准库 pathlib / shutil / hashlib；元数据解析：Pillow（EXIF）、pymediainfo 或 mutagen（视频/音频时间）；图片缩略图用 Pillow。
- 打包：pyproject.toml 配置 console_scripts 入口；支持 pip install -e . 与 python -m build 生成 wheel/sdist；纯终端，无 GUI、无黑框概念。
- 时区与编码：媒体时间统一使用 Asia/Shanghai；路径与日志使用 UTF-8；配置文件默认放在用户配置目录（如 ~/.config/media-organizer/）。

## 三、输入与解析
必须支持三种输入形态：单个文件路径；目录路径（递归处理）；从文本文件读取路径清单（--from-file）。支持 --pattern / --exclude 过滤（glob 语法，如 *.jpg, *.mp4）。支持路径去重：同一文件多次出现只处理一次。支持按文件类型白名单过滤（图片 / 视频 / 音频 / 全部）。

解析规则：每个文件提取四元信息——文件类型（image/video/audio/other）、拍摄/录制时间、原始文件名（无扩展名）、文件哈希（sha256 前 16 位）。拍摄时间提取优先级：EXIF DateTimeOriginal → EXIF DateTime → 视频/音频元数据 create_time / creation_time → 文件名中的日期时间模式（如 IMG_20240908_153022.jpg）→ 文件 mtime → 无时间标记。

## 四、核心字段解析
给出元数据字段映射表与回退规则。图片：EXIF 中 DateTimeOriginal、DateTime、ModifyDate；如果 PIL 无法读取 EXIF，标记为 EXIF 缺失。视频：优先读取 mediainfo 的 Encoded_Date / Tagged_Date / Duration；其次读取文件名日期模式。音频：优先 mutagen 的 date / TDRC；其次文件名日期模式。所有时间统一解析为 YYYY-MM-DD HH:MM:SS 本地时间；无法解析时归入 unsorted/ 目录并在报告中标注原因。文件哈希用于重复判定与断点续传；大文件支持分块哈希以加速。

## 五、执行策略
默认 dry-run 预览：先扫描全部输入，生成操作清单（移动 / 复制 / 跳过 / 重命名 / 生成缩略图），以表格形式输出，让用户确认。只有显式传入 --yes 或 --move / --copy 指定动作时才真正执行。大目录分批处理，每批 100 个文件；单文件失败记录并继续，不中断整轮。操作支持两种模式：--move（整理后删除源文件）与 --copy（保留源文件）；默认 dry-run 不执行任何写操作。

## 六、异常分类、重试与熔断
区分权限错误（PermissionError，跳过并记录）、磁盘满（OSError 28，立即停止并提示）、损坏文件（PIL 无法打开 / 视频元数据读取失败，计入损坏报告但不崩溃）、目标冲突（目标路径已存在，按 --on-conflict 处理）、未知异常（记录完整 traceback）。临时 IO 错误可重试一次，重试失败计入失败列表。单文件失败不影响其他文件；整轮结束输出成功、跳过、重复、失败、损坏各多少。

## 七、状态识别
重复 = 文件 sha256 完全一致；冲突 = 目标目录已存在同名文件但内容不同；已处理 = 该文件哈希与目标路径已记录在 SQLite 状态库中。明确「损坏」与「未知格式」差异：损坏文件是已知格式但无法读取；未知格式是不在支持白名单内。只有出现明确业务特征时才转入对应分类，不能把路径拼写错误或权限错误误判为文件损坏。

## 八、定时任务与监听模式
可选 --watch 模式监听目录（简易轮询，默认 30 秒一次），发现新文件自动处理；使用单实例文件锁防止重复启动监听。支持 --cron 输出 crontab 示例，方便用户设置定时整理。监听模式下只处理新增或修改时间晚于上次扫描的文件，避免重复处理。

## 九、SQLite 数据结构
至少建立以下表。files：id TEXT PRIMARY KEY（文件哈希）、source_path TEXT、target_path TEXT、status TEXT（processed/skipped/duplicate/failed/corrupted）、file_type TEXT、size INTEGER、taken_at TEXT、processed_at TEXT，为 status 与 processed_at 建索引。config：key TEXT PRIMARY KEY、value TEXT。duplicates：hash TEXT、source_path TEXT、existing_path TEXT、detected_at TEXT，为 hash 建索引。logs：自增 ID、level TEXT、source TEXT、path TEXT、message TEXT、detail TEXT、created_at TEXT，为 created_at 建索引。

数据库操作使用参数化 SQL；开启 WAL 模式；升级时通过 PRAGMA table_info 检测并补充新字段，不要求用户删除旧数据库。

## 十、统计口径
整理数 = 状态为 processed 的文件数；重复数 = duplicates 表记录数 + 状态为 duplicate 的文件数；失败数 = 状态为 failed 的文件数；损坏数 = 状态为 corrupted 的文件数；跳过数 = 状态为 skipped 的文件数；释放/占用空间按真实文件大小计算。所有报告数字来自 SQLite 真实记录，不伪造。分类统计：按图片 / 视频 / 音频 / 无时间 分别计数。

## 十一、CLI 输出风格
终端输出清晰分级（INFO/WARN/ERROR/DEBUG），支持 --quiet（只输出错误与最终摘要）、--verbose（输出 DEBUG 级详情）、--no-color（禁用颜色）。默认输出使用 rich 或 colorama 彩色表格：文件路径、操作类型、目标路径、状态、耗时。进度显示：处理大目录时显示进度条与预计剩余时间（如 tqdm）。最终摘要包含：扫描文件数、成功整理数、重复数、失败数、损坏数、跳过数、耗时、输出目录总大小。

## 十二、主功能模块（子命令）
按顺序实现以下子命令：
- organize：按拍摄时间归类到目标目录（YYYY/MM 结构），支持 --move / --copy / --dry-run / --yes。
- dedupe：扫描指定目录，按内容哈希找出重复文件，提供 --list / --delete / --link / --move-to 操作，删除前必须二次确认（除非 --yes）。
- thumb：为图片生成指定尺寸的缩略图，输出到目标目录，支持 --size、--quality、--format。
- report：生成整理/去重报告，支持 --format text / json / csv，支持按时间范围筛选。
- watch：监听目录并自动处理新增文件，支持 --interval、--daemon、--pid-file。
- config：查看与修改默认配置（目标目录、白名单、时区、日志级别）。
- logs：查看最近日志，支持 --level、--tail、--export。

每个子命令都支持 --help，输出使用示例与参数说明。

## 十三、智能去重与冲突处理
重复判定：先按 sha256 全文件哈希；大文件可先按大小 + 前 1MB 哈希预筛选，再全量哈希确认。去重操作提供四种模式：list（仅列出）、delete（删除重复，保留最老/最新/路径最短）、link（硬链接或符号链接替代重复文件）、move-to（把重复文件移到隔离目录）。删除或移动重复文件前必须弹窗/输出清单并二次确认（除非 --yes）。关键字段缺失（如无法读取哈希）的文件不参与去重，标记为待检查。

## 十四、失败 / 异常列表
失败列表只放临时处理失败与环境错误，不放明确跳过或重复项。每条记录包含：源路径、目标路径、操作类型、失败原因、完整异常详情、发生时间。支持命令行查看：organizer report --status failed；支持单条或批量重试：organizer retry --id <hash>；支持忽略并标记为 skipped。重试成功后自动移出失败列表。损坏文件单独进入 corrupted 列表，不混在失败列表中。

## 十五、分析视图与报告
report 子命令输出多种格式。text 格式：终端表格，含分类统计、重复组列表、失败摘要。json 格式：结构化输出，便于其他工具消费。csv 格式：每条文件一行，含源路径、目标路径、状态、哈希、大小、拍摄时间。支持按时间范围（--since、--until）、文件类型（--type）、状态（--status）筛选。报告文件可导出到指定目录，文件名带时间戳。

## 十六、外部通知 / 集成
可选 Webhook 通知：整理/去重任务完成后向指定 URL 发送 POST，包含摘要 JSON。配置项：webhook_url、webhook_events（complete/failure/duplicate_found）。发送失败写入日志但不影响本地文件处理。支持 --dry-run 时测试 Webhook 发送一条示例消息。

## 十七、设置与配置
配置文件按分组组织：paths（source_dirs、target_dir、thumbs_dir、quarantine_dir）；filters（include_patterns、exclude_patterns、supported_types）；processing（timezone、on_conflict、default_action、hash_chunk_size）；notifications（webhook_url、webhook_events）；logging（level、max_days、max_size）。配置可通过 CLI 修改：organizer config set paths.target_dir /Volumes/Photos。配置校验：目标目录必须存在或可创建；时区必须是 IANA 合法时区；日志级别必须是 DEBUG/INFO/WARN/ERROR。

## 十八、只读查询接口
提供 --query 参数或 query 子命令，只读查询 SQLite 状态库，绝不修改文件或数据库。至少支持：list（按状态/类型/时间范围列文件）；duplicates（列重复组）；summary（统计摘要）；search（按路径或哈希搜索）。查询结果与 report 子命令使用同一套统计逻辑，保证一致。

## 十九、运行日志
日志同时输出到控制台与文件。文件日志按天轮转，默认保留 30 天；格式包含时间、级别、来源、路径、消息、完整异常详情。支持日志按级别筛选、导出 CSV、清空（二次确认）。失败记录必须展示真实异常信息，不要只写「失败」二字。日志中不输出敏感路径（如用户主目录可替换为 ~）。

## 二十、数据占用和一键清理
config 子命令或 report 提供数据占用显示：状态库大小、缩略图目录大小、隔离目录大小。提供一键清理：删除状态库中超过 N 天的 processed 记录（默认 365 天），保留失败/损坏记录；清理过期日志；执行 WAL checkpoint 与 VACUUM。清理前二次确认并报告释放空间。

## 二十一、稳定性和安全要求
不在源码中写死个人路径或密钥；目标目录通过参数或配置传入；日志不输出完整文件内容或敏感元数据（如 GPS 坐标若存在建议默认剥离）；数据库写入使用事务，防止中途退出留下半条记录；所有文件操作设置合理超时；任何单文件失败不能让整个 CLI 崩溃；支持长文件名、特殊字符路径、符号链接、跨文件系统复制。--move 操作默认要求 --yes，防止误删源文件。

## 二十二、打包和项目结构
建议目录：src/media_organizer/（__main__.py、cli.py、organizer.py、deduplicator.py、thumbs.py、metadata.py、database.py、config.py、logger.py、reporter.py、watcher.py、notifier.py）、tests/、pyproject.toml、README.md、config.example.toml、Makefile。主产物：安装后生成 organizer 可执行命令；pip install -e . 即可使用。构建后校验入口存在、版本号正确、wheel 可安装。

## 二十三、执行指令
现在请开始直接创建完整项目。先检查当前工作目录是否已有用户文件与数据，保留现有内容；然后依次完成核心模块、CLI 入口、数据库、测试、打包配置与 README；不要中途只向我描述计划，也不要在实现一半时停止。若遇到非关键歧义，请按以上规格做合理决定并继续；只有缺少必须的图标源文件时才允许使用临时资源并注明替换位置。
