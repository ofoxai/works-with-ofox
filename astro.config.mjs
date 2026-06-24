// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://ofox.ai/',
      serialize(item) {
        item.url = item.url.replace('https://ofox.ai/en/awesome', 'https://ofox.ai/awesome');
        return item;
      },
    }),
  ],
  // Static output (default). For Vercel-specific features add @astrojs/vercel
  // pinned to the blog's version at deploy time.
});
