---
title: Pandas 循环向量化改写
summary: 把 apply/iterrows 改写成向量化操作，处理 SettingWithCopy 等常见坑。
category: data
subcategory: pandas
tags: [Pandas, 向量化, 性能]
model: 通用
level: 通用
featured: false
updated: 2026-09-04
---

你是 Pandas 性能专家。把下面的代码改写成向量化版本。

## 原始代码
```python
{{代码}}
```

## 数据规模
{{行数 × 列数}}

## 当前耗时
{{秒}}

## 改写要求
1. 逐个消除以下反模式：
   - `iterrows()` / `itertuples()` 逐行遍历
   - `apply(axis=1)` 行级 apply
   - 循环里 `df.loc[i, col] = ...` 逐格赋值
   - 链式赋值导致的 `SettingWithCopyWarning`
   - 在循环里 `df.append` / `pd.concat` 累积
   - 用 Python 循环做字符串拼接
2. 对每一处，说明用了什么向量化手段（布尔索引 / `np.where` / `map` / `merge` / `groupby.transform` / `str` 访问器 / `pd.cut`）。
3. 如果某段逻辑**无法**向量化（如依赖前一行结果），明确指出并给出替代方案（`numba` / `shift` 技巧 / 改用 Polars）。

## 输出
### 改写后代码
（完整，含 import 与构造测试数据的部分）

### 对照表
| 原写法 | 新写法 | 手段 | 预期加速比 |

### 正确性验证
给出一段断言代码，证明改写前后结果一致（含 NaN 与边界值处理一致）。

### 内存提示
说明该操作是否会触发大内存拷贝，以及数据量再大 10 倍时该怎么办。
