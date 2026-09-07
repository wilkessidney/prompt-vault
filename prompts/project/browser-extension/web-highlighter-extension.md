---
title: 浏览器插件完整开发提示词：网页标注与笔记
summary: 以「网页高亮标注与侧边笔记」为例，使用 Manifest V3 构建 Chrome / Edge / Firefox 浏览器扩展的完整细则范例。
category: project
subcategory: browser-extension
tags: [浏览器插件, Chrome 扩展, Manifest V3, 网页标注, 范例]
model: 通用
level: 高级
featured: false
updated: 2026-09-05
---
请直接为我开发并交付一套完整可运行、可打包、可上架的浏览器扩展（Chrome / Edge / Firefox）。不要只输出方案、界面示例或伪代码；请创建完整项目、本地加载调试、修复错误，并给出可发布产物。

扩展定位：一款网页高亮标注与侧边笔记工具。用户可以在任意网页上选中文本并添加高亮（多种颜色）、添加批注、将页面保存到本地索引；所有数据默认保存在浏览器 IndexedDB 中，支持按域名 / 标签 / 时间检索历史标注，支持导出 JSON 备份。

执行要求：请严格按照下方规格一次性完成。

## 一、交付目标
交付内容至少包括：Manifest V3 完整源码（content script、background service worker、popup、options page、side panel）、高亮与批注模块、IndexedDB 数据层、搜索与筛选界面、导入导出、依赖清单、README、各浏览器打包脚本（zip / crx / xpi）、商店上架素材（截图尺寸建议）。代码必须分层清晰（content / background / popup / options / storage / ui），不要把全部功能堆在一个文件里。

## 二、技术栈约束
- 清单：Manifest V3，兼容 Chrome、Edge、Firefox（必要时使用 polyfill 或条件分支）。
- 前端：原生 JavaScript 或 Vite + React / Vue（禁止依赖需联网的运行时）。
- 存储：IndexedDB（Dexie.js 或原生 IDB），所有对象存储自动创建与迁移；支持导出导入 JSON。
- 内容脚本：注入页面进行文本选区与高亮渲染，使用 Shadow DOM 或独立 class 避免污染页面样式。
- 后台脚本：service worker，处理跨标签通信、右键菜单、快捷键、导入导出文件。
- 时区：Asia/Shanghai；所有时间按本地时间保存与显示。
- 打包：vite build 或 webpack；输出 dist/ 目录；Chrome/Edge 用 zip，Firefox 用 xpi（或 source zip）。

## 三、输入与解析
支持三种标注入口：鼠标选中文本后点击悬浮工具条；右键菜单「添加高亮」；快捷键（默认 Alt+H）。支持为每条高亮选择颜色（黄/绿/蓝/粉/紫）、添加批注（最多 500 字）、添加标签（多个，以空格分隔）。支持保存整页：点击扩展图标选择「保存页面」，记录页面标题、URL、截图（可选）、所有已存在高亮。

解析规则：选区使用 Range 与 DOM 序列化保存；页面重排后通过文本指纹（前后各 32 字符 + 段落路径）重新定位；定位失败时显示「原文已变化」标记。URL 规范化：去除常见跟踪参数（utm_source、fbclid 等），同一页面不同跟踪链接视为同一文档。

## 四、核心字段解析
高亮 highlight 对象：id（UUID）、url（规范化 URL）、pageTitle、color、text（选中文本，最多 1000 字）、prefix（选区前 32 字符）、suffix（选区后 32 字符）、xpath / cssSelector、note（批注）、tags（数组）、createdAt、updatedAt。页面 page 对象：id（URL 哈希）、url、title、domain、favicon、savedAt、highlightCount。标签 tag 对象：name、color、count。

字段校验：text 不能为空；color 必须是预设值；tags 每个不超过 20 字；note 不超过 500 字。非法数据不写入，返回 Toast 提示。

## 五、执行策略
选中文本后立即显示悬浮工具条（位置跟随选区结束点）；点击颜色即高亮；批注在弹窗中输入。高亮渲染在 content script 中异步执行，避免阻塞页面滚动。保存页面与导出操作在 background 中进行，使用 offscreen document 处理文件读写（Chrome 限制 service worker 不能直接用部分 API）。大页面高亮数量多时分批渲染。

## 六、异常分类与处理
区分页面 DOM 结构变化导致定位失败（显示「原文已变化」并允许手动重新选择）、存储配额已满（提示导出清理）、权限不足（content script 无法注入某些页面，如 Chrome 商店）、文件导入格式错误（提示 JSON 校验失败）。单条高亮失败不影响其他高亮显示；service worker 异常捕获并写入日志。

## 七、状态识别
高亮状态：正常、原文已变化、已删除（软删除）。页面状态：已保存、仅高亮未保存、已归档。明确「原文已变化」与「高亮丢失」差异：前者是页面内容变化但扩展仍保留记录，后者是 IndexedDB 数据被清除。只有出现明确特征时才转换状态。

## 八、定时任务与同步
可选每日自动备份：service worker 使用 alarms API 每天 02:00 导出最新数据到 Downloads 目录（文件名带日期）。支持手动同步到 WebDAV / GitHub Gist（可选，配置在 options page），实现跨浏览器同步；未配置时不阻塞本地功能。

## 九、IndexedDB 数据结构
对象存储：highlights（id 主键、url 索引、createdAt 索引、tag 索引）、pages（url 主键、domain 索引、savedAt 索引）、tags（name 主键）、settings（key 主键）、logs（自增 ID、time 索引）。使用 IndexedDB 事务写入，批量操作使用单事务。升级时通过 onupgradeneeded 检测并补充对象存储与索引，不要求用户清除数据。

## 十、统计口径
总高亮数 = highlights 非删除记录数；本周新增 = 本周 createdAt 记录数；最常访问域名 = 按 domain 分组计数；标签分布 = 按 tag 分组计数；连续使用天数 = 有 createdAt 或 updatedAt 的自然日连续数。所有统计来自 IndexedDB 真实记录，不伪造。

## 十一、扩展界面总体风格
Popup 宽度 380px，高度自适应；Options / Side Panel 使用浅色主题，主色靛蓝，红色仅删除/报错。字体优先系统默认无衬线。高亮颜色预设 5 种，饱和度适中，在网页上清晰可见。不做花哨动画，优先响应速度。

## 十二、主功能模块
Popup：顶部搜索框；中部最近 5 条高亮列表；底部按钮（打开侧边栏、保存当前页、打开设置）。Side Panel：左侧导航（全部高亮、按域名、按标签、已归档、设置）；右侧高亮卡片（页面标题、选中文本、批注、标签、时间、编辑/删除）。Options Page：通用设置、导入导出、快捷键、存储管理、关于。Content Script：悬浮工具条、页面内高亮渲染、原文变化检测。

## 十三、搜索与筛选
全部高亮页支持：关键词搜索（同时匹配 text、note、pageTitle、tags）；按域名筛选；按标签筛选；按颜色筛选；按时间范围筛选（最近 7 天 / 30 天 / 自定义）。搜索结果按时间倒序；双击高亮卡片可在原页面重新定位并滚动到高亮处（若页面仍打开）。

## 十四、智能去重与归档
同一 URL 多次保存时去重高亮（按 id）；同一选区重复高亮时提示已存在。页面可归档，归档后不再出现在默认列表但保留数据。删除高亮/页面需二次确认；删除后软删除保留 30 天，可在「回收站」恢复或彻底清理。

## 十五、失败 / 异常列表
Side Panel 提供「运行日志」入口：显示 content script 注入失败、存储错误、导入导出错误等；支持按级别筛选、清空。高亮渲染失败时在原位置显示占位提示，点击可重新定位。

## 十六、外部通知 / 集成
支持导出 Markdown/HTML 报告：将某域名或某标签下的所有高亮导出为带链接的 Markdown 文件或 HTML 文件。支持分享单条高亮为图片（使用 offscreen document + html2canvas 或 dom-to-image）。

## 十七、设置页
分组卡片：通用（默认高亮颜色、是否显示悬浮工具条、是否开启每日备份）；存储（已用空间、导出备份、导入恢复、清理回收站）；快捷键（高亮、保存页面、打开侧边栏）；同步（WebDAV / GitHub Gist 配置）；关于（版本号、免责声明、隐私说明）。

## 十八、只读数据查询
提供 options page 中的「开发者工具」入口（可折叠隐藏），只读查询 IndexedDB：list_highlights、list_pages、get_summary、search_by_tag。明确只读，不提供删除/修改按钮。

## 十九、运行日志
日志持久化到 IndexedDB，扩展重启不丢失。字段：时间、级别、来源、消息、详情。支持导出 CSV、清空（二次确认）。失败展示真实异常信息。

## 二十、数据清理
设置页实时显示 IndexedDB 占用大小。提供一键清理：删除回收站中超过 30 天的记录；清理重复或空 text 高亮。清理前二次确认并报告释放空间。

## 二十一、稳定性和安全要求
不写死用户数据路径；content script 使用独立 class/Shadow DOM，避免与页面样式冲突；不采集用户隐私内容（如密码框、输入框内容）；日志不输出完整 URL 中的敏感参数；数据库操作使用事务；任何失败不让扩展崩溃；处理大页面长文本、特殊 DOM 结构、SPA 路由变化。

## 二十二、打包和项目结构
建议目录：src/content/、src/background/、src/popup/、src/options/、src/sidepanel/、src/storage/、src/utils/、public/manifest.json、vite.config.js、package.json、README.md、scripts/build-chrome.js、scripts/build-firefox.js。主产物：dist-chrome.zip、dist-edge.zip、dist-firefox.xpi。构建后校验 manifest 有效、文件存在、图标齐全。

## 二十三、执行指令
现在请开始直接创建完整项目。先检查当前工作目录是否已有用户文件与数据，保留现有内容；然后依次完成 manifest、content script、background、popup、options、side panel、数据层、调试与打包；不要中途只向我描述计划，也不要在实现一半时停止。若遇到非关键歧义，请按以上规格做合理决定并继续；只有缺少必须的图标源文件时才允许使用临时图标并注明替换位置。
