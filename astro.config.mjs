// @ts-check
import { defineConfig } from 'astro/config';

// Mirrors the blog/docs convention: own repo + own Vercel deploy, stitched under
// ofox.ai via home-page rewrites. Pages live under /awesome/ (en) and
// /{locale}/awesome/ (others); bundled assets go to /awesome/_assets/ so a single
// home-page rewrite rule (/awesome/*) covers the whole sub-site.
export default defineConfig({
  site: 'https://ofox.ai',
  redirects: { '/': '/awesome' },
  i18n: {
    defaultLocale: 'en',
    locales: ['zh', 'zh-TW', 'en', 'ja', 'ko', 'de', 'es', 'fr', 'pt', 'ru'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  build: {
    assets: 'awesome/_assets',
  },
  // Sitemap is generated into public/awesome/sitemap.xml by scripts/prepare-assets.js
  // so it is reachable under the /awesome/* proxy (the @astrojs/sitemap integration
  // only emits to the site root, which the main-site rewrite does not cover).
  // Static output (default). For Vercel-specific features add @astrojs/vercel
  // pinned to the blog's version at deploy time.
});
