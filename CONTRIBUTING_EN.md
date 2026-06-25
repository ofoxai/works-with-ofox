# Contributing

> [← Back to README](README.md) · **中文版: [CONTRIBUTING.md](CONTRIBUTING.md)**

Want to add your app to the "Works with Ofox" showcase? Follow the steps below!

**Showcase: [ofox.ai/awesome-ofox](https://ofox.ai/awesome-ofox)** — Your submission gets a real backlink from a high-traffic AI site, helping with SEO and visibility.

**🎁 What you get:**
- **$5 dev incentive** — paid to the Ofox account you give in the PR after approval (only specify a team if you have multiple; a single team is credited automatically)
- **App showcase** — featured on the Ofox wall
- **Become a Partner** — once approved we bind you as a Partner; you earn a rebate when someone signs up and uses Ofox through your referral link. Grab your link and details on the [Partner page](https://ofox.ai/partner)
- **Refer users** — lifetime binding + gift (same, platform side)

> When opening the PR, **fill in your Ofox account email accurately** (the $5 is paid to it). You'll be notified via GitHub email on approval (watch your GitHub-linked inbox).
> Account info is used only for payout — **never added to `app.yaml` or shown on the wall.**

---

## Requirements

Your app must:
- Use [Ofox](https://ofox.ai) to access AI models, with support for users entering their own Ofox API Key
- Have a publicly accessible page
- **Already document Ofox support on your own site or repo** — this is the bar for listing: the `docs` field must point to a page on *your* site explaining how to configure an Ofox API Key, not a guide written solely by Ofox.
- **Have some traction or user base** — Brand new projects with no users are unlikely to be merged. Signals we look for: GitHub stars, active users, downloads, community activity, etc. Exceptionally innovative projects may be considered.

> Categories (`tags`) must be chosen from these 6: `chat / coding / productivity / creative / research / other`.

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
description: "A one-liner about your app (max 300 characters)"
url: "https://your-app-url.com"
docs: "https://your-app-url.com/docs/ofox"   # Ofox integration docs (required)
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

See [`apps/deepchat/`](apps/deepchat/) for a complete example.

## Questions?

Feel free to open an issue.
