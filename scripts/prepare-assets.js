#!/usr/bin/env node
// Copy each apps/<slug>/logo.png into public/awesome/logos/<slug>.png so logos are
// served at /awesome/logos/<slug>.png (covered by home-page's /awesome/* rewrite).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const APPS_DIR = path.join(root, 'apps');
const PUBLIC_AWESOME = path.join(root, 'public', 'awesome');
const OUT = path.join(PUBLIC_AWESOME, 'logos');

fs.mkdirSync(OUT, { recursive: true });
let n = 0;
for (const dir of fs.readdirSync(APPS_DIR)) {
  const logo = path.join(APPS_DIR, dir, 'logo.png');
  if (fs.existsSync(logo)) {
    fs.copyFileSync(logo, path.join(OUT, `${dir}.png`));
    n++;
  }
}
console.log(`prepare-assets: copied ${n} logos to public/awesome/logos/`);

// Sitemap under /awesome/ so it is reachable behind the main-site /awesome/* proxy.
const SITE = 'https://ofox.ai';
const LOCALES = ['zh', 'zh-TW', 'en', 'ja', 'ko', 'de', 'es', 'fr', 'pt', 'ru'];
const apps = JSON.parse(fs.readFileSync(path.join(root, 'apps.json'), 'utf8'));
const prefix = (l) => (l === 'en' ? '' : `/${l}`);
const urls = [];
for (const l of LOCALES) {
  urls.push(`${SITE}${prefix(l)}/awesome`);
  for (const a of apps) urls.push(`${SITE}${prefix(l)}/awesome/${a.slug}`);
}
const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
  '\n</urlset>\n';
fs.writeFileSync(path.join(PUBLIC_AWESOME, 'sitemap.xml'), xml);
fs.writeFileSync(
  path.join(PUBLIC_AWESOME, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${SITE}/awesome/sitemap.xml\n`
);
console.log(`prepare-assets: wrote sitemap.xml (${urls.length} urls) + robots.txt`);
