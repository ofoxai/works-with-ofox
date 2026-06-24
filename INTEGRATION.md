# 接入主站 (ofox.ai/awesome) — Integration Guide

本仓库是一个**独立部署**的 Astro 静态站，经 home-page 反向代理挂到 `ofox.ai/awesome`，
与 `blog`(Astro)/`ofox-docs`(Nextra) 完全同一套模式。下面是把它接上主站的全部步骤。

> 约定来源:home-page `next.config.ts` 的 `rewrites()` + `app/api/blog-proxy/[...path]`,
> origin 走 env(`BLOG_ORIGIN` / `DOCS_ORIGIN`)。墙复用这套,新增 `WALL_ORIGIN`。

## 1. 独立部署(本仓库,不碰主站)

- 在 Vercel 新建项目，指向本仓库。框架自动识别为 **Astro**;`vercel.json` 已固定
  `buildCommand: npm run build`、`outputDirectory: dist`。
- 构建链:`npm run build` = `generate-readme`(由 `apps/*.yaml` 生成 `apps.json`/`README`)
  → `prepare-assets`(拷 logo 到 `public/awesome/logos/`)→ `astro build`。
- 纯静态输出(SSG),无需 SSR 适配器。**若要 Vercel 专属特性**(ISR/图片优化),
  再装 `@astrojs/vercel`,版本对齐 blog 锁定版(注意 10.0.7+ 已要求 astro 6)。
  ⚠️ 上适配器时**必须删掉 `vercel.json` 里的 `outputDirectory: dist`**——适配器会把产物
  改到 `.vercel/output`,保留旧的 `outputDirectory` 会导致整站 404。
- 产物路径已对齐:页面 `/awesome/`、`/{locale}/awesome/`;资源 `/awesome/_assets/`、
  logo `/awesome/logos/`。整站都在 `/awesome/*` 前缀下 → 主站一条 rewrite 即可覆盖。
- 部署后拿到 origin,例如 `https://works-with-ofox.vercel.app`,记为 `WALL_ORIGIN`。

## 2. home-page 接入(唯一需要碰主站的一步)

照 blog 的写法,在 home-page 加:

**a. 环境变量**(Vercel project env)
```
WALL_ORIGIN = https://works-with-ofox.vercel.app
```

**b. `next.config.ts` 的 `rewrites().beforeFiles` 增加**(放在 locale 中间件之前):
```ts
const WALL_ORIGIN = process.env.WALL_ORIGIN || "https://works-with-ofox.vercel.app";
// ...
{ source: "/awesome", destination: `${WALL_ORIGIN}/awesome` },
{ source: "/awesome/:path*", destination: `${WALL_ORIGIN}/awesome/:path*` },
// 本地化前缀(可选,墙自身已生成 /zh/awesome 等):
{ source: "/:locale(zh|zh-TW|ja|ko|ru|es|fr|de|pt)/awesome/:path*",
  destination: `${WALL_ORIGIN}/:locale/awesome/:path*` },
```
> 若主站对 HTML 做 origin 改写(像 `blog-proxy` 那样处理相对链接/Vary),可复用同一代理路由;
> 本墙所有内部链接都是 `/awesome/...` 绝对路径,直接 rewrite 即可,无需改写 HTML。

**c. sitemap / robots**:构建时 `prepare-assets.js` 生成 `public/awesome/sitemap.xml`
(列出全部 `/awesome` 与 `/{locale}/awesome` URL,`site=https://ofox.ai`,en 无 `/en` 前缀)
和 `public/awesome/robots.txt`(`Sitemap: https://ofox.ai/awesome/sitemap.xml`)。二者都在 `/awesome/*`
代理覆盖范围内,proxy 一开即可达。**建议**在主站根 `robots.txt` 里也加一行
`Sitemap: https://ofox.ai/awesome/sitemap.xml`,或把这些 URL 收进主站 sitemap 索引。

## 3. 上线前检查清单(本仓库侧已就绪项打勾)

- [x] Astro SSG,90 页预渲染,卡片/详情进静态 HTML(SEO 反链有效)
- [x] 10 语言;类别 6 类对齐 schema
- [x] 详情页真实链接 `app.ofox.ai` / `app.ofox.ai/manage/api-keys`
- [x] GTM `GTM-TJPB6XKD` 埋点(与 ofox.ai/blog 同容器→GA4)+ 关键事件
- [x] PR 模板 + 应用提交 Issue 表单(门槛 A:对方自己收录 Ofox)
- [x] `generate.yml` 用 `BOT_TOKEN` 兼容 main 分支保护(ruleset 要求人工 approve)
- [ ] **创建 `BOT_TOKEN`**(admin 的 fine-grained PAT 或 GitHub App,contents:write)→ repo secret → 加进 ruleset bypass
- [ ] **部署到 Vercel 拿 `WALL_ORIGIN`**
- [ ] **home-page 加上面的 rewrite**(碰主站,需授权)
- [ ] 仓库转 **public** + 处理 2 个 high 依赖漏洞(Dependabot)
- [ ] 填入**真实应用**(替换 example.com 占位;门槛 A 需对方已自发收录)
