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
 * Absolute path for a locale's landing page, base path included.
 * `import.meta.env.BASE_URL` is '/getcard/' in this project.
 */
export const localePath = (locale: Locale): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${locale}/`;
};

/** BCP 47 tag for the `lang` and `hreflang` attributes. */
export const htmlLang: Record<Locale, string> = { ru: 'ru', en: 'en' };
