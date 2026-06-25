# Contributing / 提交你的应用

> [← 返回 README](README.zh-CN.md) · **English version: [CONTRIBUTING_EN.md](CONTRIBUTING_EN.md)**

想把你的应用添加到 "Works with Ofox" 展示墙？按照以下步骤操作！

**展示墙地址：[ofox.ai/awesome-ofox](https://ofox.ai/awesome-ofox)** — 你的提交会获得来自高流量 AI 网站的真实反链，有助于 SEO 和曝光。

**🎁 你能得到什么：**
- **$5 开发激励金** —— 审核通过、应用上墙后，通过邮件确认发放到你的 Ofox 账户
- **应用展示** —— 上 Ofox 开发墙
- **成为 Partner** —— 审核通过后我们为你绑定 Partner；有人通过你的专属推广链接注册并使用 Ofox，你即可获得返利。到 [Partner 平台](https://ofox.ai/zh/partner) 获取推广链接、查看详情
- **推荐用户** —— 终身绑定 + gift（同上，平台侧）

> **领取 $5 + Partner（邮件确认发放）**：① 提交 PR → ② 通过审核、应用上墙 → ③ 发邮件到 **hi@ofox.ai**，注明：Ofox 注册邮箱、团队 ID（有多个团队时）、通过审核的应用名称 → ④ 核实后把 $5 打入该 Ofox 账户 → ⑤ 同时为你绑定 [Partner](https://ofox.ai/zh/partner) 资格。
> 合并后我们也会在 PR 里 @ 你，附上领取指引。

---

## 谁可以上墙

满足以下**任一类**即可（在 `app.yaml` 的 `category` 字段里声明属于哪类）：

| 类别 | 是什么 | 怎么证明资格 | `docs` |
|------|--------|--------------|--------|
| **`integration` · 集成 Ofox** | 用户在你的应用里填入**自己的** Ofox API Key 来用模型 | 你站点/仓库上有一页说明**如何在你的应用里配置 Ofox**，`docs` 指向它 | **必填** |
| **`powered-by` · 基于 Ofox 构建** | 你的产品**自身**基于 Ofox 的 AI 服务开发 | 审核时我们通过**邮件核实你的 Ofox 账户及用量** | 选填 |

两类都还需要：
- **公开可访问**的应用页面；
- **有一定的影响力或用户基础**（GitHub stars、活跃用户、下载量、社区活跃度等；特别创新的项目可以例外）。

> 自动校验会按你声明的 `category` 检查：`integration` 必须填 `docs`，否则 CI 直接拦下；`powered-by` 可不填。
> 类别标签（`tags`）只能从这 6 个里选：`chat / coding / productivity / creative / research / other`。

## 提交步骤

### 1. Fork 这个仓库

### 2. 在 `apps/` 目录下创建你的应用文件夹

```
apps/your-app-name/
├── app.yaml
└── logo.png
```

文件夹名用小写字母、数字和连字符（如 `my-cool-app`）。

### 3. 创建 `app.yaml`

> 最简单的方式：直接复制 [`apps/_TEMPLATE/app.yaml`](apps/_TEMPLATE/app.yaml)（每个字段都有注释）到你的文件夹里再改。

```yaml
name: "你的应用名称"
category: "integration"   # integration（用户填自己的 Key，需 docs）/ powered-by（基于 Ofox 构建）
description: "一句话介绍你的应用（最多 300 字符）"
url: "https://your-app-url.com"
docs: "https://your-app-url.com/docs/ofox"   # integration 必填；powered-by 可删此行
tags:
  - coding     # 只能取自这 6 类：chat / coding / productivity / creative / research / other
open_source: "https://github.com/you/your-app"  # 选填：开源仓库
date_added: "2026-04-03"                          # 今天的日期 YYYY-MM-DD
```

### 4. 添加 Logo

- 文件名必须为 `logo.png`
- 推荐尺寸：128x128 或 256x256 像素
- 正方形、PNG 格式
- 文件大小不超过 1MB

### 5. 提交 Pull Request

- PR 提交后会先经过**自动验证**（字段完整性、logo 格式、URL 格式与安全；注意:不会真的访问链接,所以请自己确认 `url`/`docs` 能打开）
- 自动验证通过后，进入**人工审核**流程，我们会检查应用质量、集成真实性等
- **你只需新增 `apps/<slug>/`(app.yaml + logo.png)。不要手动编辑 `README.md` / `apps.json`** —— 它们会自动重新生成(部署构建时 + 合并后由 GitHub Action 提交),你改了反而会被覆盖
- 人工审核通过并合并后，你的应用会自动出现在展示墙上

## 标签说明

| 标签 | 说明 |
|------|------|
| `chat` | 对话 AI、聊天机器人、助手 |
| `coding` | 开发工具、代码生成、IDE |
| `productivity` | 任务管理、自动化、工作流 |
| `creative` | 设计、写作、音乐、媒体、内容创作 |
| `research` | 分析、搜索、数据、知识管理 |
| `other` | 其他类型 |

## 示例

参考 [`apps/deepchat/`](apps/deepchat/) 获取完整示例。

## 有问题？

欢迎提 issue 咨询。
