---
title: API 服务完整开发提示词：价格监控与降价通知
summary: 以「电商价格监控与降价 Webhook 通知」为例，构建可部署后端 API 服务的完整细则范例。
category: project
subcategory: api-service
tags: [API 服务, 后端, 价格监控, Webhook, 范例]
model: 通用
level: 高级
featured: false
updated: 2026-09-05
---
请直接为我开发并交付一套完整可运行、可部署的后端 API 服务（目标：本地运行 + 一键 Docker 部署）。不要只输出方案或伪代码；请创建完整项目、本地运行调试、修复错误，并给出可部署产物。

服务定位：一个电商价格监控与降价通知服务。用户通过 API 添加商品 URL 或商品 ID，服务定时抓取商品公开价格，当价格低于用户设定阈值或发生降价时，通过 Webhook 发送通知。所有数据保存在服务端 Postgres（默认）或 SQLite（开发模式）。

执行要求：请严格按照下方规格一次性完成。

## 一、交付目标
交付内容至少包括：后端 API 源码、数据库初始化与自动迁移、定时价格抓取任务、Webhook 通知模块、REST API 文档（OpenAPI / Swagger）、依赖清单、Dockerfile + docker-compose、README、环境变量示例、构建脚本。代码分层：路由 / 服务层 / 数据访问层 / 采集层 / 通知层，不堆在一个文件。

## 二、技术栈约束
- 运行时：Python 3.11+（FastAPI）或 Node.js 20 LTS（Express / NestJS）。以下以 Python + FastAPI 为例，若用 Node 需保持同等级分层。
- 框架：FastAPI；异步请求使用 httpx；任务调度使用 APScheduler 或 Celery（单机 APScheduler 即可）。
- 数据库：Postgres 13+ 生产默认，SQLite（WAL）开发模式可选；SQLAlchemy 2.0 + Alembic 迁移；所有表自动创建，旧库缺字段自动迁移。
- 缓存与锁：Redis 可选，用于分布式锁与任务去重；单机可用文件锁或数据库 advisory lock。
- 浏览器兜底：Playwright 或 httpx + curl_cffi，优先直采接口，失败时静默浏览器兜底。
- 部署：Docker 多阶段构建；docker-compose 一键起 API + 数据库 + Redis（可选）+ 定时任务。
- 时区：Asia/Shanghai；所有价格时间按自然时间处理。

## 三、商品输入与解析
支持 API 添加商品：POST /products 接收 url（必需）、name（可选，未提供则抓取后回填）、target_price（可选）、webhook_url（可选，也可使用全局 Webhook）。支持批量导入 CSV：product_url, target_price, webhook_url。支持解析常见电商 URL：京东（jd.com）、淘宝/天猫（tmall.com/taobao.com）、亚马逊（amazon.cn/com）、拼多多（pinduoduo.com）等；无法识别的域名返回 400 并说明不支持。

解析规则：从 URL 提取商品 ID；规范化 URL（去除跟踪参数）；同一商品按平台+ID 去重；批量导入结束显示成功、重复、不支持平台、解析失败各多少。

## 四、核心接口与字段解析
商品 product 对象：id（UUID）、platform、product_id、url、name、current_price、currency、last_price、last_checked_at、status（active/paused/delist/error）、target_price、global_webhook_override、created_at、updated_at。价格快照 price_snapshot 对象：id、product_id、price、currency、captured_at、capture_method（api/browser/failed）、raw_response（文本，限制大小）。

字段校验：url 必须合法且为 http/https；target_price 必须为非负数；webhook_url 必须合法（若提供）。非法请求返回 4xx 并说明字段错误。

## 五、执行策略
价格抓取采用多级兜底：1) 直采商品接口或页面结构化数据；2) 失败后使用 Playwright 静默浏览器；3) 仍失败标记为 error 并进入失败队列。每个商品独立执行，不允许先全部直采再统一浏览器。请求间随机等待 1～3 秒，可在设置调整。长任务放入后台线程 / worker，API 接口保持响应。

## 六、异常分类、重试与熔断
区分临时失败（5xx、超时、连接重置，重试 3 次，指数退避）、风控（403/验证码/461，达到阈值后冷却 30 分钟，禁止高频循环）、明确下架（页面返回 404 或包含「商品已下架」「商品不存在」，状态改为 delist）、解析失败（字段缺失，记录失败原因）。单商品失败不影响其他商品；所有错误写入日志。

## 七、状态识别
商品状态：active（正常监控）、paused（用户暂停）、delist（明确下架）、error（连续失败超过阈值）。价格状态：price_drop（降价）、price_up（涨价）、price_stable（价格不变）、first_record（首次记录）。只有接口明确返回成功且字段完整时，空价格才可解释为真实 0；超时/状态码异常/解析失败一律判失败，不写假数据。

## 八、定时任务与调度
默认每 4 小时抓取一次（可配置）。使用 APScheduler 或 Celery beat；到点立即执行；同刻只能运行一轮，使用分布式锁防止重叠。用户在非整点启动服务后，不顺延为整点，按实际周期调度。抓取结果持久化后触发通知判断。

## 九、数据库数据结构
表：products（id 主键、platform+product_id 唯一索引、url、status 索引）、price_snapshots（id 主键、product_id + captured_at 索引、price 索引）、webhooks（id 主键、url、events、enabled）、alerts（id 主键、product_id、trigger_price、actual_price、sent_at、status）、settings（key 主键）、logs（自增 ID、时间、级别、来源、详情）。

使用参数化 SQL；Postgres 使用事务；Alembic 管理迁移；开发模式 SQLite 开启 WAL，升级时通过 PRAGMA table_info 补字段。

## 十、统计口径
监控商品数 = products active + paused；今日降价数 = 今日 alerts 中 trigger 为 price_drop 的数量；今日均价 = 今日所有成功抓取价格的平均值；降价幅度 = (last_price - current_price) / last_price；通知成功率 = 成功发送 Webhook 数 / 总发送数。缺失数据显「—」，不伪造 0。

## 十一、API 接口总体风格
RESTful + JSON；统一返回 { code, data, message }；HTTP 状态码符合语义：200 成功、201 创建、400 参数错误、404 资源不存在、429 限流、500 服务端错误。API 文档自动生成为 /docs（Swagger UI）。支持 API Key 认证（Header X-API-Key），默认开发模式允许空 Key。

## 十二、主功能模块（REST 路由）
POST /products：添加商品。GET /products：列表，支持按 status、platform 筛选，按 created_at 排序。GET /products/{id}：详情与最近 24 小时价格曲线。PUT /products/{id}：更新 target_price、webhook_url、status。DELETE /products/{id}：软删除。POST /products/{id}/check：立即手动抓取。GET /alerts：通知历史列表。GET /snapshots：价格快照列表。GET /stats：仪表盘统计。GET /logs：运行日志。POST /webhooks/test：测试 Webhook。

## 十三、智能去重与批量操作
同一 platform + product_id 去重；批量添加时返回每条结果；支持批量暂停/恢复/删除；批量操作使用事务，部分失败不影响其他。

## 十四、失败 / 异常列表
GET /logs 提供失败记录：product_id、platform、失败时间、失败原因、重试次数。支持对失败商品手动重试：POST /products/{id}/retry。重试成功后状态恢复 active，失败次数清零。明确下架商品移入 delist，不再自动重试。

## 十五、分析视图与单品详情
GET /products/{id} 返回：商品基本信息、当前价格、上次价格、价格变化率、近 7 天 / 30 天价格折线图数据、最近 20 条快照、通知历史。GET /stats 返回：监控商品总数、今日降价数、今日抓取成功数、失败数、通知发送数、各平台分布。

## 十六、外部通知 / Webhook
当 price_drop 或 price <= target_price 时触发 Webhook。POST 用户配置的 URL，Payload 包含：event（price_drop / target_hit）、product（id, name, url, current_price, last_price, currency）、timestamp、signature（HMAC-SHA256，可选）。支持 Webhook 重试：失败时按 1/5/15 分钟间隔重试 3 次；连续失败标记 webhook 为 disabled。支持全局 Webhook 与 per-product Webhook 覆盖。提供 /webhooks/test 发送测试事件。

## 十七、设置页 / 配置接口
环境变量：DATABASE_URL、REDIS_URL（可选）、API_KEY、CHECK_INTERVAL_MINUTES、DEFAULT_WEBHOOK_URL、LOG_LEVEL、MAX_RETRIES、RATE_LIMIT_RPM。运行时可通过 POST /settings 更新部分配置（不暴露数据库密码）。配置校验：URL 合法、数字非负。

## 十八、只读查询 API
提供只读端点（或独立只读 Token）：GET /readonly/products、GET /readonly/snapshots、GET /readonly/stats。只读端点不允许 POST/PUT/DELETE；与主界面使用同一套统计函数，保证结果一致。

## 十九、运行日志
日志持久化到数据库或文件，服务重启不丢失。字段：时间、级别、来源、product_id、消息、完整详情。支持按级别 / 来源 / product_id 筛选、导出 CSV。失败展示真实异常信息。

## 二十、数据清理
GET /stats 实时显示数据库大小与快照数量。提供一键清理 API：POST /cleanup，删除超过 90 天的 price_snapshots，但每个 product 保留一条最早基线；删除超过 30 天的 logs；清理前二次确认（通过 API 调用需显式 confirm=true），清理后报告删除条数与释放空间。

## 二十一、稳定性和安全要求
不写死数据库密码与 API Key；敏感信息通过环境变量注入；日志不输出完整 Webhook Secret、Cookie 或数据库密码；数据库写入使用事务；外部请求设置超时；任何失败不让 API 进程崩溃；支持长商品名、空价格、跨时区、上海时区夏令时无关。API Key 失败返回 401，不泄露内部错误。

## 二十二、打包和项目结构
建议目录：app/（FastAPI 路由）、services/（scraper.py、notifier.py、scheduler.py）、models/、schemas/、db/（database.py、migrations/）、clients/（browser.py、http.py）、config/、tests/、Dockerfile、docker-compose.yml、.env.example、README.md、scripts/run_migrations.sh。主产物：Docker image；docker-compose up 一键启动。构建后校验容器健康检查通过、数据库迁移可重放。

## 二十三、执行指令
现在请开始直接创建完整项目。先检查当前工作目录是否已有用户文件与数据，保留现有内容；然后依次完成后端、数据库、采集、通知、定时任务、本地调试与 Docker 化；不要中途只向我描述计划，也不要在实现一半时停止。若遇到非关键歧义，请按以上规格做合理决定并继续；只有缺少必须的图标源文件时才允许使用临时资源并注明替换位置。
