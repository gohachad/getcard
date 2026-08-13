import type { APIRoute } from 'astro';
import { LOCALES, canonicalPath, htmlLang } from '../i18n';

/**
 * sitemap.xml, generated at build time.
 *
 * Only indexable routes are listed. `/` is deliberately absent: it answers
 * with a 301 to /ru/, and listing a redirect in a sitemap asks crawlers to
 * index a URL that resolves elsewhere.
 *
 * URLs are built from canonicalPath(), the same helper the canonical tags use,
 * so the sitemap and the canonicals can never disagree. That matters here
 * because the Pages build carries a /getcard base path while the site's public
 * identity is always getcard.kg at the root — canonicalPath() is the one that
 * omits the base.
 *
 * Each entry declares its alternates with xhtml:link, which is how Google is
 * told the two locales are the same page in different languages rather than
 * duplicates competing with each other.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://getcard.kg')).origin;
  const absolute = (locale: (typeof LOCALES)[number]) => `${origin}${canonicalPath(locale)}`;

  // Build date. The content of these two pages changes only when the site is
  // rebuilt and redeployed, so the two coincide.
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = LOCALES.map(
    (locale) => `  <url>
    <loc>${absolute(locale)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${locale === 'ru' ? '1.0' : '0.8'}</priority>
${LOCALES.map(
  (alt) =>
    `    <xhtml:link rel="alternate" hreflang="${htmlLang[alt]}" href="${absolute(alt)}" />`
).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute('ru')}" />
  </url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
