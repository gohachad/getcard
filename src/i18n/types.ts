import type { ru } from './ru';

/**
 * Widens the literal types produced by `as const` back to `string` / `number`
 * / `boolean`, and readonly tuples back to arrays.
 *
 * The point: `en` is declared as `Translations`, so a missing, misspelled, or
 * renamed key is a build error rather than an English string silently leaking
 * into the Russian build. Without widening, `Translations` would demand the
 * exact Russian string literals, which is not what we want to check.
 */
export type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? Widen<U>[]
        : { -readonly [K in keyof T]: Widen<T[K]> };

export type Translations = Widen<typeof ru>;

export const LOCALES = ['ru', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ru';
