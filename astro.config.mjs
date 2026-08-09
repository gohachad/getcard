// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/**
 * Two deployment targets, one build.
 *
 * GitHub Pages serves this as a project site under /getcard, so every asset
 * and internal link needs that prefix. The production domain, getcard.kg,
 * serves from the root, where the same prefix breaks all of them.
 *
 * Both are environment variables with the Pages values as defaults, so nothing
 * changes until someone opts in:
 *
 *   Pages (default)   npm run build
 *   getcard.kg        BASE_PATH=/ npm run build
 *
 * SITE_URL is separate on purpose. It is the site's public identity — canonical
 * URLs, hreflang, Open Graph — and that is getcard.kg regardless of where a
 * given build happens to be hosted. It never carries BASE_PATH.
 */
const BASE_PATH = process.env.BASE_PATH ?? '/getcard';
const SITE_URL = process.env.SITE_URL ?? 'https://getcard.kg';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'always',

  // Russian is the primary market. Both locales are prefixed so neither is
  // the "default" one visually; `/` is handled by src/pages/index.astro.
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
