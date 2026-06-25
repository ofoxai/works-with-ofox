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
- [ ] `app.yaml` 字段完整（name / description / url / docs / tags / date_added）；`tags` 取自 `chat / coding / productivity / creative / research / other`
- [ ] `logo.png` 为正方形 PNG，≤ 1MB（推荐 256×256）
- [ ] **该应用已在自己的官网 / 仓库文档中记录了对 Ofox 的支持**，`docs` 指向那个页面 — ⚠️ 上墙硬门槛 / the bar for listing
- [ ] 我**没有**手动改 `README.md` / `apps.json`（合并后自动生成）

## 对方收录 Ofox 的证据 / Proof the app documents Ofox

<!-- 通常就是你 app.yaml 里的 `docs` 链接(你站点上写明支持/接入 Ofox 的页面)。再贴一次方便审核。
     Usually the same `docs` link from your app.yaml — paste it here for review convenience. -->

-

<details>
<summary>📄 <code>app.yaml</code> 示例 / example</summary>

```yaml
name: "Your App"
description: "一句话介绍你的应用 / one-line description"
url: "https://your-app.com"
docs: "https://your-app.com/docs/ofox"   # 你站点上的 Ofox 接入页 / your Ofox setup page
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
