# Contributing / 提交你的应用

> **English version: [CONTRIBUTING_EN.md](CONTRIBUTING_EN.md)**

想把你的应用添加到 "Works with Ofox" 展示墙？按照以下步骤操作！

**展示墙地址：[ofox.ai/awesome](https://ofox.ai/awesome)** — 你的提交会获得来自高流量 AI 网站的真实反链，有助于 SEO 和曝光。

**🎁 你能得到什么：**
- **$5 开发激励金** —— 审核通过后发放到你在 PR 里填的 Ofox 账户（只在有多个团队时需指定 team，单团队自动发放）
- **应用展示** —— 上 Ofox 开发墙
- **成为 Partner** —— 专属链接 + 返利（在 [ofox.io](https://ofox.io) 平台开通）
- **推荐用户** —— 终身绑定 + gift（同上，平台侧）

> 提 PR 时**务必填准** Ofox 账户邮箱（按它发放 $5）。审核通过会通过 GitHub 邮件通知你（留意 GitHub 绑定邮箱）。
> 账户信息只用于发放，**不会写进 `app.yaml`、不会公开到墙上**。

---

## 要求

你的应用必须：
- 使用 [Ofox](https://ofox.ai) 访问 AI 模型
- 支持用户填入自己的 Ofox API Key
- 有公开可访问的页面
- 有一个 Logo 图片（PNG 格式）
- **在你自己的官网或仓库文档中已经记录了对 Ofox 的支持** —— 这是上墙的硬门槛：`docs` 字段必须指向你站点上写明“如何配置 Ofox API Key”的页面，而不是仅由 Ofox 单方面撰写的教程。
- **有一定的影响力或用户基础** — 全新的、无用户的项目不太可能被合并。我们关注的信号包括：GitHub stars、活跃用户数、下载量、社区活跃度等。特别创新的项目可以例外。

> 类别（`tags`）只能从这 6 个里选：`chat / coding / productivity / creative / research / other`。

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

```yaml
name: "你的应用名称"
description: "一句话介绍你的应用（最多 300 字符）"
url: "https://your-app-url.com"
docs: "https://your-app-url.com/docs/ofox"   # Ofox 集成配置文档（必填）
tags:
  - coding     # 只能取自这 6 类：chat / coding / productivity / creative / research / other
open_source: "https://github.com/you/your-app"  # 选填：开源仓库
date_added: "2026-04-03"                          # 今天的日期 YYYY-MM-DD
```

### 4. 添加 Logo

- 文件名必须为 `logo.png`
- 推荐尺寸：128x128 或 256x256 像素
- 正方形、PNG 格式
- 文件大小不超过 512KB

### 5. 提交 Pull Request

- PR 提交后会先经过**自动验证**（字段完整性、logo 格式、链接有效性）
- 自动验证通过后，进入**人工审核**流程，我们会检查应用质量、集成真实性等
- **不要手动编辑 README.md** — 合并后由 GitHub Action 自动生成
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
