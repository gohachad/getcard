// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gohachad.github.io',
  base: '/getcard',
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
