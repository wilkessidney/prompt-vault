---
title: 全栈 Web 应用完整开发提示词（范例）
summary: 以「个人记账 + 可视化」为例，套用模块化模板生成的完整 Web 项目规格范例。
category: project
subcategory: web-app
tags: [Web 开发, 全栈, 前后端, 范例]
model: 通用
level: 高级
featured: false
updated: 2026-09-05
---
请直接为我开发并交付一套完整可运行、可部署的全栈 Web 应用（目标：本地运行 + 一键 Docker 部署）。不要只输出方案、界面示例或伪代码；请创建完整项目、本地启动调试、修复错误，并给出可部署产物。

软件定位：一个个人记账与财务可视化应用，支持多账户、收支分类、标签、月度预算、CSV 批量导入，并提供收支趋势、分类占比、账户余额与预算执行进度的可视化看板。业务数据保存在本机 / 服务端 SQLite（或 Postgres，二选一在设置中可切换）。

执行要求：请严格按照下方规格一次性完成。

## 一、交付目标
交付内容至少包括：前端源码（单页应用）、后端 API 源码、数据库初始化与自动迁移、定时任务（月度结算与日报）、依赖清单、Dockerfile + docker-compose、README、环境变量示例、构建脚本。代码必须分层清晰（前端页面 / 组件、后端路由、服务层、数据访问层、数据库迁移、定时任务），不要把全部功能堆在一个文件里。

## 二、技术栈约束
- 运行时：Node.js 20 LTS 或 Python 3.12。
- 前端：Vite + React 或 Svelte，禁止依赖需单独付费的运行环境。
- 后端：Express 或 FastAPI，REST API，JSON 通信。
- 数据库：SQLite（WAL 模式）默认，支持切换到 Postgres；所有表自动创建，旧数据库缺少字段时自动迁移。
- HTTP：后端使用成熟框架；前端使用 fetch 或轻量封装；API 返回统一 envelope { code, data, message }。
- 部署：Docker 多阶段构建，运行时无控制台；docker-compose 一键起前后端 + 数据库；生产环境支持环境变量注入密钥与数据库地址。
- 时区与编码：全部使用 Asia/Shanghai；首次运行自动建库、默认分类与默认账户。
- 会话：JWT 或无状态 Token；不强制登录（单机版可默认 guest），但接口鉴权逻辑必须存在。

## 三、输入与解析
必须支持三种记账入口：手动表单记账（金额、类型收/支、账户、分类、标签、时间、备注）；批量导入 CSV（表头可智能映射，支持 支付宝/微信/银行 常用表头别名）；重复规则（如每月房租、工资在指定日自动生成）。CSV 导入按「交易时间 + 金额 + 备注哈希」去重；批量导入结束显示成功、重复、格式错误、金额非法各多少条。

## 四、核心接口与字段解析
给出完整 REST 路由与字段表。交易 transaction：id、amount（数字，保留两位小数，支出为负/收入为正）、type（income/expense）、account_id、category_id、tag_ids（数组）、transacted_at（ISO 8601 本地时间）、note、created_at。账户 account：id、name、type（现金/储蓄卡/信用卡/投资/电子钱包）、initial_balance、currency（默认 CNY）。分类 category：id、name、type、color、icon、parent_id（可选）。标签 tag：id、name、color。预算 budget：id、month（YYYY-MM）、category_id（NULL 表示总预算）、amount、note。导入记录 import：id、filename、total、success、duplicate、failed、created_at。

明确字段校验：金额必须为合法数字且不为 0；时间必须为合法日期且不能是未来超过 1 年；分类必须存在且与交易类型匹配（收入分类不能用于支出）；账户必须存在。非法请求返回 4xx 并说明具体字段错误，不写脏数据。删除交易时必须回滚对应账户余额，禁止物理删除，提供软删除与回收站。

## 五、执行策略
手动记账即时写入并返回最新余额；CSV 大文件导入分批写入并使用事务，每批 100 条；导入长任务放入后台队列（或异步任务表），前端通过轮询或 WebSocket 获取进度；请求间无需浏览器兜底。月度结算任务使用单实例锁，防止重复执行。

## 六、异常分类、重试与熔断
区分客户端错误（4xx，直接返回字段级错误）、服务端错误（5xx，记录日志并返回友好提示）、外部依赖失败（数据库断开、磁盘满）。数据库连接失败时后端启动应明确报错并退出，不能默默使用空数据；单请求失败不影响其他请求；定时任务失败重试一次并记录告警日志。

## 七、状态识别
明确「删除」「归档」「待确认」差异。删除交易进入回收站 30 天，期间可恢复，真正删除后保留审计日志；归档交易不参与日常统计但可单独查看；CSV 导入中无法解析的行标记为待确认，用户可批量编辑或忽略。不得把网络错误、前端校验失败误标为交易状态。

## 八、定时任务与调度
默认启用两项定时任务：每月 1 日 02:00 生成上月预算执行快照；每日 08:00 生成昨日收支日报（如开启 Webhook 通知则发送）。任务使用单实例锁（文件锁或数据库锁）防止重复执行；跨日 / 跨月边界按自然时间处理；失败重试一次，连续失败写入告警日志。

## 九、SQLite / Postgres 数据结构
至少建立以下表。accounts：id TEXT PRIMARY KEY、name TEXT NOT NULL、type TEXT、initial_balance REAL DEFAULT 0、currency TEXT DEFAULT 'CNY'、created_at TEXT、archived INTEGER DEFAULT 0。categories：id TEXT PRIMARY KEY、name TEXT NOT NULL、type TEXT（income/expense）、color TEXT、icon TEXT、parent_id TEXT、sort_order INTEGER。tags：id TEXT PRIMARY KEY、name TEXT UNIQUE、color TEXT。transactions：id TEXT PRIMARY KEY、amount REAL NOT NULL、type TEXT NOT NULL、account_id TEXT、category_id TEXT、transacted_at TEXT、note TEXT、deleted INTEGER DEFAULT 0、deleted_at TEXT、created_at TEXT。budgets：id TEXT PRIMARY KEY、month TEXT NOT NULL、category_id TEXT、amount REAL NOT NULL、note TEXT；复合唯一索引 month+category_id。budget_snapshots：id TEXT PRIMARY KEY、budget_id TEXT、month TEXT、actual REAL、remaining REAL、created_at TEXT。imports：id TEXT PRIMARY KEY、filename TEXT、total INTEGER、success INTEGER、duplicate INTEGER、failed INTEGER、created_at TEXT。settings：key TEXT PRIMARY KEY、value TEXT NOT NULL。logs：自增 ID、level TEXT、source TEXT、message TEXT、detail TEXT、created_at TEXT，为 created_at 建索引。

数据库操作使用参数化 SQL；SQLite 开启 WAL 模式；软件升级时通过 PRAGMA table_info（或 Postgres information_schema）检测并补充新字段，不要求用户删除旧数据库。

## 十、统计口径
所有统计必须基于真实交易记录，不写假数据。本月收入 = 本月 income 类型交易金额汇总；本月支出 = 本月 expense 类型交易金额汇总（取绝对值）；本月结余 = 收入 - 支出。月度趋势 = 最近 12 个月每月收入/支出；缺失月份显示「—」不伪造 0。分类占比 = 当期该分类支出 / 当期总支出。账户余额 = 账户 initial_balance + 该账户所有未删除交易净额。预算执行 = 该预算周期内对应分类支出 / 预算金额，超过 100% 标红。趋势图与饼图使用真实聚合数据，不得用随机数填充。

## 十一、Web 界面总体风格
响应式布局，浅色主题为主，主色蓝色，红色仅用于支出 / 报错。桌面端左侧固定导航，右侧主内容区；移动端底部 Tab 导航。表格行高约 48px，列宽合理，支持横向滚动；表单输入带即时校验与错误提示。不做花哨动画，优先信息密度。必须显示免责声明：仅供个人学习记录，不构成投资建议。顶部状态栏显示当前账本、数据最后更新时间、未同步提示（如启用服务端）。

## 十二、主功能模块（固定顺序导航）
按顺序：概览看板、记一笔、交易列表、账户、分类、预算、导入、回收站、设置、运行日志。

概览看板：顶部四张卡片（本月收入、本月支出、本月结余、预算使用率）；中部折线图（近 6 个月收支趋势）；右侧/下方饼图（本月支出分类占比）；最近 5 笔交易列表。记一笔：快速表单，支持切换收/支、选择账户与分类、添加标签、选择时间、填写备注、保存后再记一笔。交易列表：搜索框（名称/账户/分类/备注）、时间筛选、类型筛选；表格列（时间、类型、分类、账户、金额、标签、备注）；表头排序；双击编辑；右键菜单；多选批量删除/归档；删除二次确认。账户：账户卡片显示余额与类型；支持新增、编辑、归档、调整初始余额。分类：分类树/列表；支持新增、编辑、拖拽排序；支出/收入分类用颜色区分。预算：按月显示各分类预算进度条；支持新增/编辑预算；超预算标红。导入：拖拽上传 CSV、选择表头映射、预览前 10 条、开始导入、显示进度与结果报告。回收站：30 天内可恢复，可彻底删除。设置：分组卡片（账本设置、分类预设、通知、数据清理、导入导出）。运行日志：按级别筛选、刷新、清空（二次确认）、导出 CSV。

## 十三、智能去重（导入与重复规则）
CSV 导入去重：同一文件内按「交易时间 + 金额绝对值 + 备注前 20 字」哈希去重；跨文件按同样规则去重。重复规则：用户可设置周期性交易（如每月 1 日房租），系统在到期前 3 天首页提示确认，确认后自动生成。关键字段缺失（时间为空或金额为 0）不参与去重，标记为待确认。

## 十四、失败 / 异常列表
导入失败列表显示文件名、行号、原始内容、失败原因（字段缺失/金额非法/时间格式错误/分类不存在）。支持单条编辑后重试、批量忽略、批量删除。重试成功后移出失败列表。服务端错误（数据库断开等）不进入此列表，而是写入运行日志。

## 十五、分析视图与单品弹窗
概览看板点击分类饼图区块可下钻到该分类交易列表。交易列表双击打开单品弹窗：展示交易时间、类型、分类、账户、标签、金额、备注，并提供编辑、复制、删除按钮。预算模块点击进度条打开预算详情弹窗：展示当月实际支出、剩余预算、历史同期对比、该预算分类的交易明细。

## 十六、外部通知 / 集成
设置页提供 Webhook 配置（如企业微信机器人、Discord、Slack 或通用 HTTP POST）：URL 输入框、启用开关、发送测试按钮、选择通知事件（日报 / 月报 / 超预算提醒）。日报示例：「09月08日 昨日收入 0.00，支出 128.50，本月结余 3821.30」。月报示例：「8月收支月报：收入 12500.00，支出 8679.50，结余 3820.50，超预算分类：餐饮」。消息过长自动拆分；发送失败写入日志但不影响数据保存。

## 十七、设置页
按分组卡片纵向排列：账本设置（本位币、默认账户、数据保留天数）；分类与标签（导入默认分类、批量编辑）；通知（Webhook、事件选择、测试）；数据（导入 JSON/导出 JSON、一键清理、备份恢复）；安全（修改 Token、会话过期时间）。保存、测试、清理等操作按钮分组明确。

## 十八、只读 API / MCP 服务
提供独立只读查询接口（或 MCP 服务），使用 Token 或本地 stdio 通信，只读访问数据库，绝不提供增删改能力。至少提供：list_accounts（账户列表与余额）；list_transactions（交易列表，可按时间、账户、分类、标签筛选）；get_monthly_summary（指定月份收入/支出/结余）；get_category_breakdown（指定周期分类占比）；get_budget_status（预算执行状态）；search_transactions（按关键词搜索）。所有返回结果包含统计口径与数据截止时间；查询逻辑与前端看板共用同一套统计函数，保证结果一致。

## 十九、运行日志
日志持久化到数据库，重启不丢失。字段：时间、级别（INFO/WARN/ERROR）、来源、消息、完整详情。界面支持按级别 / 来源筛选、刷新、清空（二次确认）、导出 CSV；双击查看完整异常详情并支持复制。导入失败、服务端异常、Webhook 发送失败都要展示真实异常信息，不要只写「失败」二字。

## 二十、数据占用和一键清理
设置页实时显示数据库文件大小与交易记录条数。提供一键清理：默认保留最近 24 个月交易记录；归档账户与分类保留；清理前二次确认并报告删除条数与释放空间；执行 SQLite 的 WAL checkpoint 与 VACUUM（或 Postgres VACUUM ANALYZE）。清理逻辑始终可用，与其他功能开关无关。

## 二十一、稳定性和安全要求
不在源码中写死个人密钥、数据库密码或 Webhook Token；敏感信息通过环境变量注入；日志不输出完整 Token、Cookie 或密码；数据库写入使用事务，防止中途退出留下半条记录；所有外部请求（Webhook、文件上传）设置超时；任何后端异常不能让前端崩溃；支持长标题、空备注、零金额、跨月等边界情况。Docker 镜像使用非 root 用户运行。

## 二十二、打包和项目结构
建议目录：frontend/（Vite + React/Svelte）、backend/（Express/FastAPI）、shared/（类型定义与常量）、migrations/（数据库迁移脚本）、scripts/（构建与定时任务脚本）、docker-compose.yml、Dockerfile、.env.example、README.md、pyproject.toml 或 package.json。主产物：前端静态文件 + 后端服务镜像；docker-compose up 一键启动。构建后校验前后端产物存在、数据库迁移可重放、无控制台黑框。

## 二十三、执行指令
现在请开始直接创建完整项目。先检查当前工作目录是否已有用户文件与数据，保留现有内容；然后依次完成后端、前端、数据库迁移、定时任务、本地调试与 Docker 化；不要中途只向我描述计划，也不要在实现一半时停止。若遇到非关键歧义，请按以上规格做合理决定并继续；只有缺少必须的图标源文件时才允许使用临时图标并注明替换位置。
