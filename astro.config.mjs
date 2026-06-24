// @ts-check
import { defineConfig } from 'astro/config';

// Mirrors the blog/docs convention: own repo + own Vercel deploy, stitched under
// ofox.ai via home-page rewrites. Pages live under /awesome-ofox/ (en) and
// /{locale}/awesome-ofox/ (others); bundled assets go to /awesome-ofox/_assets/ so a single
// home-page rewrite rule (/awesome-ofox/*) covers the whole sub-site.
export default defineConfig({
  site: 'https://ofox.ai',
  redirects: { '/': '/awesome-ofox' },
  i18n: {
    defaultLocale: 'en',
    locales: ['zh', 'zh-TW', 'en', 'ja', 'ko', 'de', 'es', 'fr', 'pt', 'ru'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    assets: 'awesome-ofox/_assets',
  },
  // Sitemap is generated into public/awesome-ofox/sitemap.xml by scripts/prepare-assets.js
  // so it is reachable under the /awesome-ofox/* proxy (the @astrojs/sitemap integration
  // only emits to the site root, which the main-site rewrite does not cover).
  // Static output (default). For Vercel-specific features add @astrojs/vercel
  // pinned to the blog's version at deploy time.
});
