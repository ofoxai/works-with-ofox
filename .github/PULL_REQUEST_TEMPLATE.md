> 📋 提交前请先读 **[CONTRIBUTING.md](https://github.com/ofoxai/works-with-ofox/blob/main/CONTRIBUTING.md)**(中文)· Read **[CONTRIBUTING_EN.md](https://github.com/ofoxai/works-with-ofox/blob/main/CONTRIBUTING_EN.md)** first (English).

## 应用 / App

- **名称 / Name:**
- **链接 / URL:**
- **slug（`apps/` 下的目录名 / folder name）:**

## 💰 $5 开发激励金 + Partner / $5 dev reward + Partner

发放方式 = 邮件确认后打入你的 Ofox 账户（此处无需填账户）。流程 / How it works:

1. 提交本 PR / Open this PR
2. 通过审核、应用上墙 / Reviewed & listed on the wall
3. 发邮件到 **hi@ofox.ai**，注明:Ofox 注册邮箱 · 团队 ID（有多个团队时） · 通过审核的应用名称
   Email **hi@ofox.ai** with: your Ofox account email · team ID (if you have multiple) · the approved app name
4. 核实后把 $5 打入该账户 / We verify and credit the $5
5. 同时绑定 Partner 资格（返利详情见 [Partner](https://ofox.ai/partner)） / You also get Partner status — see [Partner](https://ofox.ai/partner)

> 合并后我们会在本 PR 里 @ 你并附上领取指引。/ We'll @ you here after merge with the claim steps.

## 提交清单 / Checklist

- [ ] 在 `apps/<slug>/` 下新增了 `app.yaml` 和 `logo.png`
- [ ] `app.yaml` 字段完整（name / **category** / description / url / tags / date_added；`integration` 还需 `docs`）；`tags` 取自 `chat / coding / productivity / creative / research / other`
- [ ] `logo.png` 为正方形 PNG，≤ 1MB（推荐 256×256）
- [ ] 我属于（在 `app.yaml` 的 `category` 里声明） / My category (declared in `app.yaml`):
  - [ ] **`integration`** — 用户填自己的 Ofox Key，且 `docs` 指向我的接入文档 / users bring their own key; `docs` points to my setup page
  - [ ] **`powered-by`** — 产品基于 Ofox 构建，可配合邮件核实 Ofox 账户及用量 / built on Ofox; can verify Ofox account & usage by email
- [ ] 我**没有**手动改 `README.md` / `apps.json`（合并后自动生成）

## 资格说明 / Eligibility

<!-- integration：贴你站点上的 Ofox 接入文档链接（通常即 app.yaml 的 docs）。
     powered-by：说明你基于 Ofox 构建；我们会邮件核实你的 Ofox 账户及用量。
     integration: paste your Ofox setup doc link (usually the docs in app.yaml).
     powered-by: note you're built on Ofox; we'll verify your account & usage by email. -->

-

<details>
<summary>📄 <code>app.yaml</code> 示例 / example</summary>

```yaml
name: "Your App"
category: "integration"   # integration（用户填自己的 Key，需 docs）/ powered-by（基于 Ofox 构建）
description: "一句话介绍你的应用 / one-line description"
url: "https://your-app.com"
docs: "https://your-app.com/docs/ofox"   # integration 必填 / powered-by 可删
tags:
  - coding
open_source: "https://github.com/you/your-app"   # 选填 / optional
date_added: "2026-06-24"
```
</details>

## 补充说明 / Notes

<!-- 影响力/用户基础（GitHub stars、用户数、下载量等），或其它想让审核者知道的信息 -->

---

**提交后会发生什么 / What happens next**
自动校验 `validate` ✅ → 维护者人工审核（审应用质量 + 上方“收录证据”）→ 合并 → GitHub Action 自动重生成 `README`/`apps.json` → 你的应用出现在墙上。
