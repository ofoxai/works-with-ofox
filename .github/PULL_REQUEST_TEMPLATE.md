> 📋 提交前请先读 **[CONTRIBUTING.md](https://github.com/ofoxai/works-with-ofox/blob/main/CONTRIBUTING.md)**(中文)· Read **[CONTRIBUTING_EN.md](https://github.com/ofoxai/works-with-ofox/blob/main/CONTRIBUTING_EN.md)** first (English).

## 应用 / App

- **名称 / Name:**
- **链接 / URL:**
- **slug（`apps/` 下的目录名 / folder name）:**

## 💰 领取 $5 开发激励金 / Claim your $5

> 审核通过后,$5 开发激励金会发放到你下面填的 Ofox 账户。**这些信息只用于发放,不会写进 `app.yaml`、不会公开到墙上。**
> The $5 dev incentive is paid to the Ofox account below after approval. Used only for payout — never added to `app.yaml` or shown on the wall.

- **Ofox 账户(注册邮箱)/ Ofox account (email):**
- **接收 $5 的 team 名称 / Team to credit（选填 / optional）:**
  <!-- 只在你有多个 Ofox 团队时填;只有一个团队会自动发放到该团队。
       Only if you have multiple Ofox teams — with a single team it's credited there automatically. -->

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
