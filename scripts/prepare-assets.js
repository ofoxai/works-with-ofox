#!/usr/bin/env node
// Copy each apps/<slug>/logo.png into public/awesome/logos/<slug>.png so logos are
// served at /awesome/logos/<slug>.png (covered by home-page's /awesome/* rewrite).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const APPS_DIR = path.join(root, 'apps');
const OUT = path.join(root, 'public', 'awesome', 'logos');

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
