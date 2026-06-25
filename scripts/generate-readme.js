#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APPS_DIR = path.join(__dirname, '..', 'apps');
const ROOT = path.join(__dirname, '..');
const APPS_JSON_PATH = path.join(ROOT, 'apps.json');

function loadApps() {
  const apps = [];
  if (!fs.existsSync(APPS_DIR)) return apps;

  const dirs = fs.readdirSync(APPS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .filter(d => !d.name.startsWith('_')) // skip templates like _TEMPLATE
    .map(d => d.name);

  for (const dir of dirs) {
    const yamlPath = path.join(APPS_DIR, dir, 'app.yaml');
    const logoPath = path.join(APPS_DIR, dir, 'logo.png');

    if (!fs.existsSync(yamlPath)) {
      console.warn(`Warning: No app.yaml found in ${dir}`);
      continue;
    }

    try {
      const content = fs.readFileSync(yamlPath, 'utf8');
      const app = yaml.load(content);
      app._slug = dir;
      app._hasLogo = fs.existsSync(logoPath);
      apps.push(app);
    } catch (err) {
      console.error(`Error loading ${yamlPath}: ${err.message}`);
    }
  }

  return apps;
}

function generateAnchor(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

// Sanitize text for safe markdown embedding
function sanitizeMd(text) {
  return String(text)
    .replace(/[<>&"'`]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;', '`': '&#96;' }[c]))
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]');
}

// description may be a string or a per-locale map; resolve for a README language.
function descOf(desc, lang) {
  if (typeof desc === 'string') return desc;
  if (desc && typeof desc === 'object') return desc[lang] || desc.en || Object.values(desc)[0] || '';
  return '';
}

// Per-language README copy. App descriptions resolve per README language
// (string apps render the same in both); surrounding chrome is translated.
const LANGS = {
  en: {
    lang: 'en',
    file: 'README.md',
    switcher: '**English** · [中文](README.zh-CN.md)',
    intro: 'A curated list of apps and tools built with [Ofox](https://ofox.ai). Ofox is a unified gateway — one API key to reach Claude, GPT, Gemini, DeepSeek and more.',
    whatisH: 'What is Ofox?',
    whatisBody: '[Ofox](https://ofox.ai) gives you a single interface to AI models across providers, through one API.',
    whyH: '**Why Ofox:**',
    why: ['One interface to many AI models', 'Automatic fallback and load balancing', 'No vendor lock-in'],
    keyH: 'Get an API key',
    keySteps: ['Sign up at [ofox.ai](https://ofox.ai)', 'Add credits and generate an API key in the dashboard', 'Use it in any app below, or integrate it into your own project'],
    quickH: '🚀 Add your app in 3 steps',
    quickIntro: 'Get listed on [ofox.ai/awesome-ofox](https://ofox.ai/awesome-ofox) — real backlinks from a high-traffic AI site, plus a **$5 dev reward** when approved.',
    quickSteps: [
      'Copy [`apps/_TEMPLATE/app.yaml`](apps/_TEMPLATE/app.yaml) to `apps/your-app-name/app.yaml` and fill it in (every field is commented).',
      'Add a square `logo.png` (≤ 1MB) in the same folder.',
      'Open a Pull Request. **Don\'t** edit `README.md` / `apps.json` — they regenerate automatically.',
    ],
    quickReq: '**Who can be listed (pick one in `app.yaml`):** `integration` — users bring their own Ofox key (needs a `docs` setup page); or `powered-by` — your product is built on Ofox (account verified by email). Full rules → [CONTRIBUTING_EN.md](CONTRIBUTING_EN.md).',
    noEdit: 'This file is auto-generated. See CONTRIBUTING.md for how to add your app.',
    contentsH: 'Contents',
    appsH: 'Apps',
    addH: 'Add your app',
    addBody: 'Want your app on this list? See [CONTRIBUTING_EN.md](CONTRIBUTING_EN.md).',
    docLabel: 'Documentation',
    footer: 'Powered by [Ofox AI](https://ofox.ai) · One key, every model',
  },
  zh: {
    lang: 'zh',
    file: 'README.zh-CN.md',
    switcher: '[English](README.md) · **中文**',
    intro: '使用 [Ofox](https://ofox.ai) 构建的应用与工具精选。Ofox 是统一网关——一个 API Key 即可接入 Claude、GPT、Gemini、DeepSeek 等众多模型。',
    whatisH: '什么是 Ofox？',
    whatisBody: '[Ofox](https://ofox.ai) 提供统一的 AI 模型接口，一个 API 即可访问多家供应商的模型。',
    whyH: '**为什么选 Ofox：**',
    why: ['一个接口接入多家模型', '自动故障转移与负载均衡', '无供应商锁定'],
    keyH: '获取 API Key',
    keySteps: ['在 [ofox.ai](https://ofox.ai) 注册', '在控制台充值并生成 API Key', '在下面任意应用中使用，或集成进你自己的项目'],
    quickH: '🚀 三步添加你的应用',
    quickIntro: '上墙 [ofox.ai/awesome-ofox](https://ofox.ai/awesome-ofox) —— 获得来自高流量 AI 网站的真实反链，审核通过还有 **$5 开发激励金**。',
    quickSteps: [
      '把 [`apps/_TEMPLATE/app.yaml`](apps/_TEMPLATE/app.yaml) 复制到 `apps/你的应用名/app.yaml` 并填写（每个字段都有注释）。',
      '在同一目录放一张正方形 `logo.png`（≤ 1MB）。',
      '提交 Pull Request。**不要**改 `README.md` / `apps.json` —— 它们会自动重新生成。',
    ],
    quickReq: '**谁能上墙（在 `app.yaml` 里二选一）：** `integration` —— 用户填自己的 Ofox Key（需配 `docs` 接入文档）；或 `powered-by` —— 你的产品基于 Ofox 构建（邮件核实账户）。完整规则 → [CONTRIBUTING.md](CONTRIBUTING.md)。',
    noEdit: '本文件由脚本自动生成。如何添加你的应用请见 CONTRIBUTING.md。',
    contentsH: '目录',
    appsH: '应用',
    addH: '添加你的应用',
    addBody: '想把你的应用加入列表？请见 [CONTRIBUTING.md](CONTRIBUTING.md)。',
    docLabel: '文档',
    footer: 'Powered by [Ofox AI](https://ofox.ai) · 一个 Key，畅享所有模型',
  },
};

function generateAppCard(app, s) {
  const logoUrl = app._hasLogo
    ? `./apps/${app._slug}/logo.png`
    : 'https://via.placeholder.com/64?text=App';

  const openSourceBadge = app.open_source
    ? ` [![Open Source](https://img.shields.io/badge/Open%20Source-green)](${app.open_source})`
    : '';

  const tags = app.tags.map(tag => `\`${tag}\``).join(' ');

  const docs = app.docs
    ? `\n\n[${s.docLabel}](${app.docs})`
    : '';

  const safeName = sanitizeMd(app.name);
  const safeDesc = sanitizeMd(descOf(app.description, s.lang));

  return `### [${safeName}](${app.url})

<img src="${logoUrl}" alt="${safeName} logo" width="64" height="64">

${safeDesc}

${tags}${openSourceBadge}${docs}

---`;
}

function generateReadme(apps, s) {
  const sorted = [...apps].sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  const toc = sorted.map(app => `- [${app.name}](#${generateAnchor(app.name)})`).join('\n');
  const cards = sorted.map(app => generateAppCard(app, s)).join('\n\n');

  return `# Works with Ofox

${s.switcher}

${s.intro}

## ${s.quickH}

${s.quickIntro}

${s.quickSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

${s.quickReq}

## ${s.whatisH}

${s.whatisBody}

${s.whyH}
${s.why.map(w => `- ${w}`).join('\n')}

## ${s.keyH}

${s.keySteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

<!-- DO NOT EDIT THIS FILE DIRECTLY -->
<!-- ${s.noEdit} -->

## ${s.contentsH}

${toc}

## ${s.appsH}

${cards}

## ${s.addH}

${s.addBody}

---

${s.footer}
`;
}

function main() {
  console.log('Loading apps...');
  const apps = loadApps();
  console.log(`Found ${apps.length} app(s)`);

  for (const s of Object.values(LANGS)) {
    fs.writeFileSync(path.join(ROOT, s.file), generateReadme(apps, s));
    console.log(`${s.file} generated with ${apps.length} app(s)`);
  }

  // Generate apps.json for website consumption
  const appsJson = apps.map(app => ({
    slug: app._slug,
    name: app.name,
    category: app.category || 'integration',
    description: app.description,
    url: app.url,
    docs: app.docs || null,
    tags: app.tags,
    openSource: app.open_source || null,
    dateAdded: app.date_added,
  }));
  fs.writeFileSync(APPS_JSON_PATH, JSON.stringify(appsJson, null, 2) + '\n');
  console.log('apps.json generated');
}

main();
