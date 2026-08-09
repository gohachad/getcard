# getcard — Design System

> A white room with a single blue switch.

**Stack:** Astro + Tailwind v4
**Theme:** light only (no dark mode)
**Languages:** Russian (default) + English
**Base:** derived from an Apple-style reference system, corrected and extended for financial services

---

## 0. What this product is

getcard is an **independent intermediary service**. It helps Russian citizens obtain a multi-currency VISA debit card — US dollars, euros, dirhams and rubles — issued by a licensed Kyrgyz bank, for use abroad, for online payments, and for ruble transfers by Russians living abroad.

The visual job of the site: make a stranger comfortable enough to send passport scans and a payment to a company they found through search. Every design decision serves that. Restraint reads as competence here; ornament reads as a scam.

The page has one argument — getting the card is fast and takes almost no effort: two documents, one meeting, and the card is working. Design choices that add friction to reading are working against the message.

### Brand constraints — these are hard rules

1. **Never name the issuing bank** anywhere in the UI, copy, alt text, metadata, filenames, or code comments. Refer to it as "лицензированный банк Кыргызстана" / "a licensed Kyrgyz bank."
2. **Never imitate any bank's visual identity.** No borrowed logos, wordmarks, colour schemes, or layouts. getcard's identity is its own — that is the entire point of this file.
3. **Never imply affiliation, partnership, or endorsement** by any bank or payment network. getcard is an intermediary that files applications on the client's behalf.
4. **State the intermediary relationship plainly** on the homepage and in the footer. See §8, Disclosure Band.
5. **No superlatives about the bank.** Not "the biggest," not "the best." Verifiable facts only: licensed, operating since 1998, 127 branches.
6. **VISA is a payment network the card runs on**, not a partner. Mention acceptance, never endorsement. Do not reproduce the VISA logo without a licence.

---

## 1. Corrections applied to the source reference

The source file was scraped and carried defects. Fixed here — do not reintroduce them:

| Issue | Source value | Corrected |
|---|---|---|
| Line heights on large text | 2.12 / 2.41 | 1.12 / 1.07 — scraped from padded elements |
| Letter-spacing at large sizes | positive (+0.196 / +0.44 / +0.616px) | negative, scaling with size — the source contradicted its own stated philosophy |
| `#d2d2d7` | used in 5 components, never defined | promoted to `--color-hairline` |
| `--radius-lg-2: 11px`, `--radius-full-2: 999px` | orphan duplicates | deleted |
| Spacing scale | jumped 24 → 40 | added 32 |
| Semantic state colours | absent | added error / success / warning |
| Body-sm line height | 1.29 | 1.43 — too tight for Cyrillic |
| Filled button text: `--color-wash` on `--color-action` | 4.40:1 — fails AA | `--color-white` (4.70:1). Contrast measured during the first build; §11 makes AA non-negotiable, so §6 was wrong |
| `--color-success` `#248a3d` | 4.40:1 on white — fails AA, though §2 claimed it cleared 4.5:1 | `#1e7a35` (5.40:1 on white, 5.07:1 on `--color-success-bg`) |

**The Type Scale table (§3) is authoritative.** Ignore the per-font size/line-height lists from the source.

---

## 2. Colour tokens

### Core

| Token | Value | Role |
|---|---|---|
| `--color-action` | `#0071e3` | Filled button backgrounds and selected states. **Fill only.** Never text, never borders, never decoration. |
| `--color-link` | `#0066cc` | Outlined button borders and text, inline links. Deeper saturation for use on light surfaces. |
| `--color-signal` | `#2997ff` | Decorative borders, icon strokes, accent underlines. Never interactive. |
| `--color-ink` | `#1d1d1f` | Primary text, headings. Near-black, faintly warm. |
| `--color-canvas` | `#f5f5f7` | Page background, default section surface. |
| `--color-wash` | `#f4f8fb` | Elevated section wash, button text on dark surfaces. |
| `--color-smoke` | `#333333` | Secondary text, dark nav fills, strong borders. |
| `--color-graphite` | `#474747` | Tertiary text, nav links. |
| `--color-ash` | `#707070` | Muted body text, footer links, captions. |
| `--color-mist` | `#858585` | Lightest functional grey, hairline rules on light surfaces. |
| `--color-hairline` | `#d2d2d7` | **Default divider and panel border.** The most-used border in this system. |
| `--color-onyx` | `#000000` | Dark section backgrounds, maximum-contrast headings. |
| `--color-pebble` | `#e2e2e5` | Neutral button fills, disabled surfaces. |
| `--color-white` | `#ffffff` | Panel surfaces on canvas. See §5. |

### Semantic states — new, required for forms

| Token | Value | Role |
|---|---|---|
| `--color-error` | `#d70015` | Validation errors, destructive confirmations, failed upload. |
| `--color-error-bg` | `#fff2f2` | Error message background. |
| `--color-success` | `#1e7a35` | Successful upload, completed step, confirmed payment. |
| `--color-success-bg` | `#f1faf3` | Success message background. |
| `--color-warning` | `#b25000` | Tax-notice callouts, deadline reminders, required-action notices. |
| `--color-warning-bg` | `#fff8f0` | Warning message background. |

These are the accessible light-mode variants of the Apple system palette, so they sit coherently beside `--color-action` while clearing 4.5:1 contrast on white and on canvas.

`--color-success` was `#248a3d`, which measured 4.40:1 on white and did not clear that bar despite the claim above. It is now `#1e7a35`. Error and warning were checked at the same time and both pass: `#d70015` is 5.38:1 on white and 4.93:1 on `--color-error-bg`; `#b25000` is 5.24:1 on white and 4.97:1 on `--color-warning-bg`.

`--color-mist` is 3.5:1 on white and must never be used for text — its role is hairline rules, and it fails AA as a text colour.

---

## 3. Typography

**Display face:** Inter (variable), fallback stack leads with SF Pro Display
**Body face:** Inter (variable), fallback stack leads with SF Pro Text

### Licensing — important

**Do not ship SF Pro webfont files.** SF Pro is licensed for Apple-platform development only; self-hosting it on a website violates the licence. Self-host **Inter** (Latin + Cyrillic subsets, woff2, `font-display: swap`). Keep SF Pro first in the CSS fallback stack so Apple devices resolve it natively at zero cost — that is permitted and free.

### Type scale — authoritative

| Role | Size | Line height | Tracking | Token |
|---|---|---|---|---|
| caption | 12px | 1.33 | -0.26px | `--text-caption` |
| body-sm | 14px | 1.43 | -0.22px | `--text-body-sm` |
| body | 17px | 1.47 | -0.27px | `--text-body` |
| subheading | 21px | 1.24 | -0.11px | `--text-subheading` |
| heading-sm | 28px | 1.18 | -0.40px | `--text-heading-sm` |
| heading | 40px | 1.14 | -0.80px | `--text-heading` |
| heading-lg | 44px | 1.12 | -0.99px | `--text-heading-lg` |
| display | 56px | 1.07 | -1.34px | `--text-display` |

### Weights

- **300** — subheads, taglines, editorial descriptors. The whisper voice.
- **400** — body copy, most UI text.
- **600** — nav items, button labels, headings, table headers.
- **700** — reserved. Promotional lockups only. Never product or page headings.

### Cyrillic handling — required

Cyrillic letterforms are denser and more uniform than Latin; the tracking above was tuned for Latin and goes claustrophobic in Russian, especially in long lowercase runs.

Ease negative tracking by ~30% for Russian text:

```css
:lang(ru) {
  letter-spacing: calc(var(--tracking-current) * 0.7);
}
```

Implement per-scale-step rather than globally. Russian UI strings also run 15–30% longer than English — buttons, nav items, and table headers must not have fixed widths. Test the RU build first; if it fits in Russian it fits in English.

### Mobile scale

Below 768px, step display sizes down one rung: display 56 → 40, heading-lg 44 → 34, heading 40 → 28. Body and below stay fixed. Never let `body` drop under 17px — this audience skews 30–55 and reads on phones.

---

## 4. Spacing, radius, layout

**Base unit:** 4px · **Density:** comfortable

**Scale:** 4, 8, 12, 16, 20, 24, **32**, 40, 48, 56, 64, 80

**Tailwind base unit is 1px**, set as `--spacing: 1px` in the `@theme` block. Numeric utilities therefore map 1:1 onto the scale above — `p-24` is 24px, `gap-12` is 12px, `mt-64` is 64px — instead of Tailwind's default 4× multiplier, where `p-24` would mean 96px. This keeps the utilities and this document reading as the same system.

**Radius — only two values exist:**
- `--radius-full: 980px` — every button, pill, tag, badge
- `--radius-card: 8px` — every card, panel, image, input

Nothing between. Nothing above.

**Layout:**
- Page: full-bleed, no global max-width container
- Text blocks: centre internally at 980px
- Tables and forms: centre at 720px
- Section gap: 64px desktop, 40px mobile
- Panel padding: 24px
- Element gap: 12px

**Shadow:** exactly one, `--shadow-xl: rgba(0,0,0,0.22) 3px 5px 30px 0px`, used **only** on the floating card render in the hero. Never on panels, buttons, nav, or inputs.

---

## 5. Elevation philosophy — amended

The source system builds hierarchy from surface shifts and hairline borders, never shadows. Keep that.

**Amendment, per project decision:** panels *are* permitted inside canvas sections, because tier comparison and form grouping genuinely require containment. The rule becomes:

> A panel is `--color-white` fill, `1px solid --color-hairline` border, `--radius-card`, **no shadow**. Containment comes from the border and the fill shift against `--color-canvas` — never from elevation.

This is the one bent rule in the system. Do not extend it into shadowed cards, nested panels, or panels-inside-panels.

---

## 6. Core components

### Filled Pill Button — primary action
`--radius-full`, `--color-action` fill, **`--color-white` text**, 17px/400, padding 11px 15px, no border, no shadow. Hover: darken fill 8%. The only filled interactive element in the system.

Text is `--color-white`, not `--color-wash`. Wash on the action fill measures 4.40:1, under the 4.5:1 floor §11 sets; white measures 4.70:1. Do not change this back — the fill colour is fixed brand, so the text colour is the only free variable.

### Outlined Pill Button — secondary action
`--radius-full`, `1px solid --color-link`, `--color-link` text, 17px/400, transparent fill, padding 11px 15px. Always paired to the right of a filled primary. **Never stack two filled buttons.**

### Ghost Link — tertiary
No background, no border, `--color-link` text at inherited size, underline on hover only, weight 400.

### Global Nav
Full-width, white fill, 8px vertical padding, `1px solid --color-hairline` bottom border. getcard wordmark left. Links centred at 14px/400 `--color-ink` (raised from the source's 12px — 12px nav is unreadable in Cyrillic). Language switcher (RU/EN) and one filled pill CTA right. Sticky on scroll.

### Form Input
`--radius-card`, `1px solid --color-hairline`, 17px text, white fill, padding 12px 16px. Label above at 14px/400 `--color-ash`. Focus: `2px solid --color-action` ring, never removed. Error: border `--color-error`, message below at 14px in `--color-error`.

### Footer
`--color-canvas` fill, four-column link grid at 14px/400 `--color-ash`, column headers 14px/600 `--color-ink`, `1px solid --color-hairline` divider above fine print, fine print at 12px `--color-ash`. Flat and typographic — no panels.

---

## 7. New components — required for getcard

### Card Hero — the signature element

The source system's thesis is *the product is the hero, isolated and lit*. getcard's product is a physical card, so it takes that role literally.

Full-bleed `--color-canvas`. Headline at `display`/600 `--color-ink`, one-line tagline at 21px/300, filled + outlined pill pair centred beneath. Below: a **large card render, angled ~15°, floating with `--shadow-xl`** — the only shadow on the page.

The tier selector (Gold / Platinum / Infinite) sits under the render as a pill segmented control. Selecting a tier **cross-fades the card render and updates the spec figures inline.** This is the one animated moment on the site: 300ms, `ease-out`, and fully disabled under `prefers-reduced-motion` (swap instantly instead).

Everything else on the page stays still. Spend the boldness here and nowhere else.

### Tier Comparison Table
Three panels (per §5) side by side on desktop, stacked on mobile. Each: tier name 28px/600, annual fee 40px/600, then a hairline-divided spec list at 17px/400 — daily ATM limit, ATM withdrawal fee, cross-currency fee, validity, wallet support. Rows must align across all three panels. One outlined pill per panel; the recommended tier gets the filled variant. Exactly one filled button in the row.

### Process Stepper
The application is a genuine ordered sequence, so numbering is meaningful here — use it. Vertical on mobile, horizontal on desktop. Each step: number in a 32px circle (`--color-action` fill, white numeral, when active or complete; `--color-pebble` fill, `--color-ash` numeral, when pending), title at 17px/600, description at 17px/400 `--color-graphite`. `1px solid --color-hairline` connector between steps.

### Accordion — FAQ
Full-width rows on canvas, `1px solid --color-hairline` between rows, no panel fill. Question 21px/400 `--color-ink`, chevron right in `--color-ash`, rotating 180° on open. Answer 17px/400 `--color-graphite`, revealed with a 200ms height transition. First item open by default. Render all answers in the DOM for SEO — never lazy-load FAQ content.

### File Upload
Dashed `1px --color-hairline` border, `--radius-card`, `--color-wash` fill, 32px padding, centred. Idle: "Перетащите файл или выберите" at 17px/400 with accepted formats and size cap at 14px `--color-ash`. Uploading: determinate progress bar in `--color-action`. Success: filename, file size, `--color-success` check, remove button. Error: `--color-error` border and a message that says what to fix.

State the retention policy directly beneath the dropzone at 14px `--color-ash`. People are uploading passports; do not make them hunt for it.

### Notice Callout
`--radius-card`, semantic background fill, `1px solid` in the matching semantic colour, 20px padding, 17px/400 text. Three variants: warning (tax obligations, deadlines), success (confirmations), error (failures). Icon left at 20px in the semantic colour. Use warning for the Russian tax-declaration notice — it is a legal obligation for the client, not a footnote.

### Disclosure Band
Full-width `--color-wash`, 24px vertical padding, `1px solid --color-hairline` top and bottom. Centred text at 17px/400 `--color-graphite`, max-width 720px. States that getcard is an independent intermediary, not a bank, and does not issue cards. Appears once on the homepage below the hero and again in the footer at 14px.

This is not fine print. Set it at full body size on the homepage. A service that states its own limits reads as more trustworthy, not less.

---

## 8. Do / Don't

### Do
- Use `--color-action` only as a button fill — one colour, one job
- Pair every filled button with an outlined secondary
- Set body at 17px and keep negative tracking; ease it 30% for Cyrillic
- Use `--radius-full` for every button and `--radius-card` for every panel — no other values
- Let sections run full-bleed and centre text internally
- Use weight 300 for taglines, 400 for body, 600 for nav and headings
- Give the card render the page's only shadow
- Keep visible focus rings on every interactive element

### Don't
- Never use `--color-action` for text, borders, or decoration
- Never shadow a panel, button, nav, or input
- Never set a heading at 700
- Never nest a panel inside a panel
- Never fix the width of a button or nav item — Russian strings overflow
- Never mix the three blues in one element: `#0071e3` fills, `#0066cc` outlines, `#2997ff` decorates
- Never name the issuing bank
- Never use stock photography of handshakes, skylines, or people pointing at laptops

---

## 9. Copy voice

Plain, specific, unhurried. Active voice. Sentence case throughout — no Title Case headings in either language.

Name things by what the person controls: "Загрузить паспорт," not "Инициировать верификацию." Buttons say what happens: "Оформить карту," and the confirmation says "Карта оформлена." Keep an action's name identical through the whole flow.

Be concrete about numbers. "$6,000 в сутки" beats "высокие лимиты." This audience is comparison-shopping across services and will trust the site that states figures plainly.

Errors explain what happened and how to fix it. They do not apologise and they are never vague. Empty states invite an action.

Write Russian first, then translate to English. Russian is the primary market; English copy translated from Russian reads better here than the reverse.

---

## 10. Quick start

```css
:root {
  /* Core colour */
  --color-action:    #0071e3;
  --color-link:      #0066cc;
  --color-signal:    #2997ff;
  --color-ink:       #1d1d1f;
  --color-canvas:    #f5f5f7;
  --color-wash:      #f4f8fb;
  --color-smoke:     #333333;
  --color-graphite:  #474747;
  --color-ash:       #707070;
  --color-mist:      #858585;
  --color-hairline:  #d2d2d7;
  --color-onyx:      #000000;
  --color-pebble:    #e2e2e5;
  --color-white:     #ffffff;

  /* Semantic state */
  --color-error:      #d70015;
  --color-error-bg:   #fff2f2;
  --color-success:    #1e7a35;
  --color-success-bg: #f1faf3;
  --color-warning:    #b25000;
  --color-warning-bg: #fff8f0;

  /* Font families — Inter self-hosted, SF Pro resolved natively on Apple */
  --font-display: 'SF Pro Display', 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-text:    'SF Pro Text', 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;

  /* Type scale */
  --text-caption: 12px;     --leading-caption: 1.33;     --tracking-caption: -0.26px;
  --text-body-sm: 14px;     --leading-body-sm: 1.43;     --tracking-body-sm: -0.22px;
  --text-body: 17px;        --leading-body: 1.47;        --tracking-body: -0.27px;
  --text-subheading: 21px;  --leading-subheading: 1.24;  --tracking-subheading: -0.11px;
  --text-heading-sm: 28px;  --leading-heading-sm: 1.18;  --tracking-heading-sm: -0.40px;
  --text-heading: 40px;     --leading-heading: 1.14;     --tracking-heading: -0.80px;
  --text-heading-lg: 44px;  --leading-heading-lg: 1.12;  --tracking-heading-lg: -0.99px;
  --text-display: 56px;     --leading-display: 1.07;     --tracking-display: -1.34px;

  /* Weights */
  --weight-light: 300;
  --weight-regular: 400;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;    --spacing-8: 8px;    --spacing-12: 12px;
  --spacing-16: 16px;  --spacing-20: 20px;  --spacing-24: 24px;
  --spacing-32: 32px;  --spacing-40: 40px;  --spacing-48: 48px;
  --spacing-56: 56px;  --spacing-64: 64px;  --spacing-80: 80px;

  /* Radius — only two */
  --radius-card: 8px;
  --radius-full: 980px;

  /* Layout */
  --text-measure: 980px;
  --form-measure: 720px;
  --section-gap: 64px;
  --panel-padding: 24px;
  --element-gap: 12px;

  /* Shadow — card render only */
  --shadow-xl: rgba(0, 0, 0, 0.22) 3px 5px 30px 0px;
}
```

### Tailwind v4

Paste the same custom properties into an `@theme { }` block in your global stylesheet. Tailwind v4 generates utilities directly from them — `--color-action` becomes `bg-action`, `--text-body` becomes `text-body`, `--radius-full` becomes `rounded-full`. No `tailwind.config.js` needed.

---

## 11. Quality floor

Non-negotiable, and not worth announcing in the UI:

- Responsive to 360px width
- Visible keyboard focus on every interactive element, never `outline: none` without a replacement
- `prefers-reduced-motion` respected — the tier cross-fade becomes an instant swap
- All text clears WCAG AA (4.5:1); large text clears 3:1
- Forms are keyboard-navigable with correct `label`/`for` pairing
- Both language trees fully translated — no English fallback strings leaking into the RU build
- `lang` attribute set correctly per route for screen readers and search engines
