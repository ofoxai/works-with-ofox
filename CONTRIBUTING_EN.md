# Contributing

> [← Back to README](README.md) · **中文版: [CONTRIBUTING.md](CONTRIBUTING.md)**

Want to add your app to the "Works with Ofox" showcase? Follow the steps below!

**Showcase: [ofox.ai/awesome-ofox](https://ofox.ai/awesome-ofox)** — Your submission gets a real backlink from a high-traffic AI site, helping with SEO and visibility.

**🎁 What you get:**
- **$10 dev incentive** — after approval & listing, paid to your Ofox account once confirmed by email
- **App showcase** — featured on the Ofox wall
- **Become a Partner** — once approved we bind you as a Partner; you earn a rebate when someone signs up and uses Ofox through your referral link. Grab your link and details on the [Partner page](https://ofox.ai/partner)
- **Refer users** — lifetime binding + gift (same, platform side)

> **Claiming the $10 + Partner (paid after email confirmation):** ① open the PR → ② get reviewed & listed → ③ email **hi@ofox.ai** with: your Ofox account email, team ID (if you have multiple), and the approved app name → ④ we verify and credit the $10 to that account → ⑤ and bind you as a [Partner](https://ofox.ai/partner).
> We'll also @ you on the PR after merge with the claim steps.

---

## Who can be listed

Qualify under **either** category — declare it in the `category` field of `app.yaml`:

| Category | What it is | How eligibility is verified | `docs` |
|----------|-----------|------------------------------|--------|
| **`integration` · Integrates Ofox** | Users enter **their own** Ofox API key in your app to use models | A page on your site/repo showing **how to configure Ofox in your app**; `docs` points to it | **required** |
| **`powered-by` · Built on Ofox** | Your product **itself** is built on the AI service Ofox provides | We verify your **Ofox account & usage by email** at review | optional |

Both also need:
- A **publicly accessible** app page;
- **Some traction / user base** (GitHub stars, active users, downloads, community activity; exceptionally innovative projects may be considered).

> Auto-validation checks against your declared `category`: `integration` must include `docs` or CI blocks the PR; `powered-by` may omit it.
> Tags must be one of these 6: `chat / coding / productivity / creative / research / other`.

## Steps

### 1. Fork this repository

### 2. Create your app folder under `apps/`

```
apps/your-app-name/
├── app.yaml
└── logo.png
```

Folder name should use lowercase letters, numbers, and hyphens (e.g. `my-cool-app`).

### 3. Create `app.yaml`

> Easiest path: copy [`apps/_TEMPLATE/app.yaml`](apps/_TEMPLATE/app.yaml) (every field is commented) into your folder and edit the values.

```yaml
name: "Your App Name"
category: "integration"   # integration (users bring their own key — needs docs) / powered-by (built on Ofox)
description: "A one-liner about your app (max 300 characters)"
url: "https://your-app-url.com"
docs: "https://your-app-url.com/docs/ofox"   # required for integration; delete for powered-by
tags:
  - coding     # Must be one of these 6: chat / coding / productivity / creative / research / other
open_source: "https://github.com/you/your-app"  # Optional: open source repo
date_added: "2026-04-03"                          # Today's date YYYY-MM-DD
```

### 4. Add Logo

- File must be named `logo.png`
- Recommended size: 128x128 or 256x256 pixels
- Square, PNG format
- Max file size: 1MB

### 5. Submit a Pull Request

- Your PR will first go through **automated validation** (field completeness, logo format, URL format & safety; note: links are NOT fetched, so double-check `url`/`docs` open)
- Once automated checks pass, it enters **manual review** where we check app quality and integration authenticity
- **You only add `apps/<slug>/` (app.yaml + logo.png). Do NOT edit `README.md` / `apps.json`** — they regenerate automatically (at deploy build + committed post-merge by a GitHub Action); hand edits get overwritten
- After manual review and merge, your app will automatically appear on the showcase

## Tags

| Tag | Description |
|-----|-------------|
| `chat` | Conversational AI, chatbots, assistants |
| `coding` | Dev tools, code generation, IDEs |
| `productivity` | Task management, automation, workflows |
| `creative` | Design, writing, music, media, content creation |
| `research` | Analysis, search, data, knowledge management |
| `other` | Other types |

## Example

Copy [`apps/_TEMPLATE/app.yaml`](apps/_TEMPLATE/app.yaml) (every field is commented) as your starting point.

## Questions?

Feel free to open an issue.
