# getcard

Landing page for **getcard**, an independent intermediary that helps Russian
citizens obtain a multi-currency VISA card issued by a licensed Kyrgyz bank.

Astro + Tailwind v4, static, Russian and English.

**Site:** [getcard.kg](https://getcard.kg) — the production domain.
A staging copy deploys to `gohachad.github.io/getcard/`.

> Neither URL is live yet. The built site is on the `gh-pages` branch;
> switching **Settings → Pages → Branch** to `gh-pages` publishes the staging
> copy. See [docs/README.md](docs/README.md). Delete this note once it resolves.

---

## What the page argues

One thing: **getting the card through us is fast and takes almost no effort.**
Two documents, one meeting, and the card is working. The tiers, the currencies
and the two-audience columns are supporting evidence.

The strongest fact on the page, and the reason the promise is credible rather
than generic: **the account and card go live when the card is issued**, so it
can go into Apple Pay or Google Pay before the plastic arrives.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321/getcard/ru/
npm run build
npm run preview
npx astro check  # type-checks the locale trees
```

## Deployment: two targets, one build

GitHub Pages serves this as a project site under `/getcard`, so assets and
internal links need that prefix. `getcard.kg` serves from the root, where the
same prefix breaks every one of them. Both are environment variables, with the
Pages values as defaults:

```bash
npm run build                  # staging: base = /getcard
BASE_PATH=/ npm run build      # production: getcard.kg, base = /
```

`SITE_URL` is separate and defaults to `https://getcard.kg`. It is the site's
public identity — canonical URLs, `hreflang`, Open Graph — and never carries
`BASE_PATH`. That is deliberate: mixing them would emit
`getcard.kg/getcard/ru/`, a URL that will never exist. So the staging build's
canonical URLs already point at the production domain.

| Variable | Default | Purpose |
|---|---|---|
| `BASE_PATH` | `/getcard` | Path prefix for assets and internal links |
| `SITE_URL` | `https://getcard.kg` | Absolute origin for canonical / hreflang / OG |

## Unconfirmed and unfinalised values

Two markers, both visible in the rendered page and both greppable. Everything
behind them lives in [`src/config/placeholders.ts`](src/config/placeholders.ts).

### `[VERIFY]` — displayed but not confirmed with the bank

Checked against the issuing bank's published VISA tariff schedule for foreign
citizens, effective 26 November 2025, reading the debit columns rather than the
revolving-credit group in the same table.

**Confirmed and no longer marked:** annual fees ($20 / $100 / $150, identical in
the first year and every year after) and the ATM withdrawal fee outside
Kyrgyzstan (1%, minimum $3).

**Still marked**, because the published schedule does not settle them:

- **daily ATM limits** — the schedule merges these cells across several card
  columns, so a per-tier figure cannot be read off it honestly
- **cross-currency fee** — does not appear in that schedule at all
- **validity period** — not stated there either

The schedule also offers a **five-year upfront option** (Platinum $400,
Infinite $600, not available on Gold) that the page does not yet mention.

### `[TBD]` — not decided yet

Whether 29 000 ₽ covers all three tiers or only the entry tier; whether it
includes the first year's annual fee; discounts and promo codes; payment
methods and schedule; time to activation and to delivery; the Moscow office
address; legal entity, INN, OGRN, registered address; contact channels.

The service fee itself is confirmed: **29 000 ₽**.

## Confirmed facts

- **Multi-currency**: US dollars, euros, dirhams and rubles. Ruble support is
  what makes the card useful to Russians living abroad.
- **Russian citizens only.** The bank requires a recorded in-person meeting at
  its Moscow representative office.
- **Two documents**: Russian internal passport (registration and photo pages)
  and foreign passport (title page), plus a short form with contact details and
  occupation. Nothing else — no notarised paperwork.
- **One offline step**: the Moscow meeting. No trip to Kyrgyzstan.
- **The card works before the plastic arrives**, straight into Apple Pay or
  Google Pay.
- Apple Pay launched in Kyrgyzstan on **28 July 2026**; the issuing bank was in
  the first wave.

## How it is put together

```
src/
  config/placeholders.ts   every [TBD] and [VERIFY] in one place
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

**JavaScript is limited to two places**, neither a framework: the tier selector
and the mobile nav drawer. The FAQ uses native `<details>`, so it is genuinely
zero-JS and every answer is in the DOM for search engines. Both scripts are
small enough that Astro inlines them; the build ships no JS bundle.

**Fonts.** Inter is self-hosted as latin and cyrillic variable subsets with
`font-display: swap`. SF Pro is deliberately *not* shipped — it is licensed for
Apple-platform development only — but stays first in the CSS fallback stack so
Apple devices resolve it natively at no cost.

## Design

[`DESIGN.md`](DESIGN.md) is authoritative for colour, type, spacing, and
components. It now also records the two contrast and spacing decisions that
used to live only in the code, plus a third AA failure found while checking the
palette (`--color-success` was 4.40:1 on white and is now `#1e7a35`).

## Content rules

Hard constraints, not preferences:

- The issuing bank is never named — only "лицензированный банк Кыргызстана" /
  "a licensed Kyrgyz bank".
- No affiliation with or endorsement by any bank, payment network, or Apple is
  implied anywhere.
- getcard's visual identity is `DESIGN.md` and nothing else. It never imitates
  any bank's identity.
- No superlatives about the bank; verifiable facts only.
- The VISA and Apple Pay marks are never reproduced. Naming the services in
  body text is fine; logos are not.
- No stock photography, bridges, globes, flags, or maps. The card render is the
  only visual object.
- The card render carries no bank name, wordmark, or payment mark.
- **This repository is public. Internal cost, margin, and supplier pricing
  never appear in it** — not in the site, the README, comments, or commit
  messages.
