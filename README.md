# getcard

Landing page for **getcard**, an independent intermediary service that helps
Russian residents remotely obtain a USD VISA debit card issued by a licensed
Kyrgyz bank.

Astro + Tailwind v4, static, Russian and English.

**Site:** [gohachad.github.io/getcard](https://gohachad.github.io/getcard/) ·
[Русская версия](https://gohachad.github.io/getcard/ru/) ·
[English](https://gohachad.github.io/getcard/en/)

> Not live yet — Pages is still pointed at `main`, which has no built output.
> The built site is on the `gh-pages` branch; switching **Settings → Pages →
> Branch** to `gh-pages` publishes it. See [docs/README.md](docs/README.md).
> Delete this note once the URL resolves.

---

## Running it

```bash
npm install
npm run dev      # http://localhost:4321/getcard/ru/
npm run build
npm run preview
npx astro check  # type-checks the locale trees
```

The `base` is `/getcard`, so every local URL carries that prefix.

## Unfinalised values

Anywhere a price or a legal detail is not decided, the page renders a visible
`[TBD]` rather than a plausible-looking invention. They all live in
[`src/config/placeholders.ts`](src/config/placeholders.ts) — fill that file in
and the markers disappear on their own.

Outstanding: getcard's service fee per tier, payment methods and schedule,
end-to-end timeline, legal entity and registration numbers, contact channels,
and whether a route without a power of attorney is offered.

The card's own figures — annual fees, ATM limits, the 1.5% cross-currency fee,
the 1% / $3 withdrawal fee — are real and live in the locale files.

## How it is put together

```
src/
  config/placeholders.ts   every [TBD] in one place
  i18n/ru.ts               Russian copy — written first, the source of truth
  i18n/en.ts               English, typed against the Russian tree
  i18n/types.ts            Widen<> — a missing key is a build error
  styles/global.css        @theme tokens; no tailwind.config.js
  fonts/                   Inter, latin + cyrillic variable woff2
  components/              one file per section
  pages/[lang]/index.astro the landing page, one route per locale
  pages/index.astro        / → /ru/
```

**Translations are type-checked.** `en.ts` is declared as `Translations`, a
widened `typeof ru`, so a key that exists in Russian and not in English fails
`astro check` instead of leaking an English string into the Russian build.

**JavaScript is limited to three places**, none of them a framework: the tier
selector, the mobile nav drawer, and nothing else — the FAQ uses native
`<details>`, so it is genuinely zero-JS and every answer is in the DOM for
search engines. The scripts are small enough that Astro inlines them; the
build ships no JS bundle at all.

**Fonts.** Inter is self-hosted as latin and cyrillic variable subsets with
`font-display: swap`. SF Pro is deliberately *not* shipped — it is licensed
for Apple-platform development only — but stays first in the CSS fallback
stack so Apple devices resolve it natively at no cost.

## Design

[`DESIGN.md`](DESIGN.md) is authoritative for colour, type, spacing, and
components. Two places where the build departs from it, both deliberate and
both noted in the code:

- Filled buttons use `--color-white` text rather than `--color-wash`. Wash on
  the action fill measures 4.40:1, just under AA, and §11 makes AA
  non-negotiable. White is 4.70:1.
- Spacing uses a 1px Tailwind base unit, so `p-24` means 24px and the numeric
  utilities map 1:1 onto the px scale in §4.

## Content rules

These are hard constraints, not preferences:

- The issuing bank is never named — only "лицензированный банк Кыргызстана" /
  "a licensed Kyrgyz bank".
- No affiliation with or endorsement by any bank, payment network, or Apple is
  implied anywhere.
- No superlatives about the bank; verifiable facts only.
- The VISA and Apple Pay marks are never reproduced. Both appear as plain text
  in the body typeface.
- No third-party brand names in the use-case section.
- The card render carries no bank name, wordmark, or payment mark.
