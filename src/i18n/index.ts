import { ru } from './ru';
import { en } from './en';
import { LOCALES, DEFAULT_LOCALE, type Locale, type Translations } from './types';

export { LOCALES, DEFAULT_LOCALE };
export type { Locale, Translations };

const dictionaries: Record<Locale, Translations> = { ru, en };

export const t = (locale: Locale): Translations => dictionaries[locale];

/** The other locale, for the RU/EN switcher. */
export const otherLocale = (locale: Locale): Locale => (locale === 'ru' ? 'en' : 'ru');

/**
 * Path for a locale's landing page as this build serves it — base path
 * included. Use for links and anything the browser resolves.
 */
export const localePath = (locale: Locale): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${locale}/`;
};

/**
 * Path for a locale's landing page on the production domain — deliberately
 * without the base path.
 *
 * The base is a hosting detail of the GitHub Pages project site; the canonical
 * identity of the page is getcard.kg/ru/. Mixing the two would emit
 * getcard.kg/getcard/ru/, which will never exist.
 */
export const canonicalPath = (locale: Locale): string => `/${locale}/`;

/** BCP 47 tag for the `lang` and `hreflang` attributes. */
export const htmlLang: Record<Locale, string> = { ru: 'ru', en: 'en' };
