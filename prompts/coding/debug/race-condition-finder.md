---
title: 竞态条件定位
summary: 在并发代码里找出数据竞争
category: coding-2
subcategory: debug
tags: [调试, 并发, 竞态, 线程]
model: 代码模型（Claude / Cursor / GPT）
level: 进阶
featured: false
updated: 2026-09-05
---
你是一位并发专家。请在下面代码里找竞态条件：
{{并发代码（线程 / 协程 / async）}}

要求：
- 标出所有共享可变状态与未加保护的访问点
- 指出哪些路径会触发数据竞争或死锁
- 给出修复（锁粒度 / 无锁 / 不可变 / 串行化队列）
- 说明为何某些「看起来对」的写法仍有窗口
- 提供可复现的最小用例或检测工具（race detector）建议
