/**
 * Every unfinalised or unconfirmed value on the site, in one place.
 *
 * Two kinds of marker, both visible in the build and both greppable:
 *
 *   TBD    — not decided yet. Anywhere a price or a legal detail would go, the
 *            page renders a visible gap rather than a plausible-looking
 *            invention.
 *   VERIFY — a figure we are displaying but have not confirmed with the bank.
 *            These came from a third-party guide that has since proven wrong
 *            about currency support, so none of them can be presented as fact
 *            on a page that asks people for money.
 *
 * Replace the values and the markers disappear on their own — nothing is
 * hardcoded in a component.
 *
 * NOTE: this repository is public. Never put internal cost, margin, or
 * supplier pricing in this file or anywhere else in the tree.
 */

export const TBD = '[TBD]' as const;
export const VERIFY = '[VERIFY]' as const;

export type Placeholder = string;

/** True while a placeholder is still unfilled. */
export const isTbd = (value: Placeholder): boolean => value === TBD;

/** Wraps a figure that is displayed but not yet confirmed with the bank. */
export const verify = (value: string): string => `${value} ${VERIFY}`;

/* -------------------------------------------------------------------------
   Pricing — what the client pays getcard.
   ------------------------------------------------------------------------- */

export const pricing = {
  /**
   * Confirmed. Rubles are the primary currency for this audience, and the
   * default the page opens on; the other two are for the half of the market
   * living abroad.
   *
   * These are three separate prices, not conversions — they do not track an
   * exchange rate and should not be recalculated from the ruble figure.
   */
  serviceFee: '29 000 ₽',
  serviceFeeUsd: '$380',
  serviceFeeEur: '€350',
  serviceFeeAed: '1400 AED',

  /**
   * Our fee, per plan.
   *
   * It used to be one figure for all three. It is not any more: Infinite is
   * 35 000 ₽ while Gold and Platinum stay at 29 000 ₽, so every surface that
   * quotes a price has to know which plan it is quoting.
   *
   * The three non-ruble figures for Infinite are the ruble change carried
   * across at the rate the existing prices already imply — 35 000 / 29 000 =
   * 1.2069 — and rounded UP, the same rule the two-card deal uses:
   *
   *   usd   380 × 1.2069 =  458.62 → 460
   *   eur   350 × 1.2069 =  422.41 → 430
   *   aed  1400 × 1.2069 = 1689.66 → 1700
   *
   * They are still four separate prices, not conversions performed at runtime,
   * and must never be recalculated in a component.
   *
   * `amount` is the same figure with the sign split off, because the hero's
   * comparison row makes the currency sign itself the control.
   */
  serviceFeeByTier: {
    gold: {
      label: { rub: '29 000 ₽', usd: '$380', eur: '€350', aed: '1400 AED' },
      amount: { rub: '29 000', usd: '380', eur: '350', aed: '1400' },
    },
    platinum: {
      label: { rub: '29 000 ₽', usd: '$380', eur: '€350', aed: '1400 AED' },
      amount: { rub: '29 000', usd: '380', eur: '350', aed: '1400' },
    },
    infinite: {
      label: { rub: '35 000 ₽', usd: '$460', eur: '€430', aed: '1700 AED' },
      amount: { rub: '35 000', usd: '460', eur: '430', aed: '1700' },
    },
  },

  /**
   * The same three prices with the sign split off, so the comparison row can
   * make the currency sign itself the control that switches between them.
   * Amount then sign is the normal order in Russian typography, so "380 $"
   * reads correctly to this audience.
   */
  serviceFeeAmountRub: '29 000',
  serviceFeeAmountUsd: '380',
  serviceFeeAmountEur: '350',
  serviceFeeAmountAed: '1400',

  /**
   * Open question: does 29 000 ₽ include the first year's annual card fee,
   * or is that billed separately by the bank?
   */
  includesFirstYearFee: TBD,

  /** Promo codes and discounts are planned but out of scope for this pass. */
  discounts: TBD,
} as const;

/* -------------------------------------------------------------------------
   Payment
   ------------------------------------------------------------------------- */

export const payment = {
  /** e.g. 'Перевод на карту, СБП' — how the client actually pays us. */
  methods: TBD,
  /** Full amount upfront vs a split. */
  schedule: TBD,
} as const;

/* -------------------------------------------------------------------------
   Timing — a real promise, so it needs a real number behind it.
   ------------------------------------------------------------------------- */

export const timeline = {
  /**
   * Issue time as the business now quotes it.
   *
   * NOTE: the bank's own product deck says about three weeks. This shorter
   * figure is the operator's, not the bank's, and nothing in this repository
   * verifies it — if the deck is still the governing document, this is the
   * line that contradicts it.
   */
  toIssue: '1 неделя',
  toIssueEn: '1 week',
} as const;

/* -------------------------------------------------------------------------
   Legal entity
   ------------------------------------------------------------------------- */

export const legal = {
  entityName: 'ИП Томашевский Андрей Николаевич',
  inn: '772915840980',
  /** A sole trader has an ОГРНИП rather than an ОГРН — the label differs. */
  ogrnip: '307770000254807',
  /** Payment details, shown in the footer as реквизиты. */
  account: '40802810194000006730',
  bankName: '«ГПБ» (Открытое акционерное общество)',
  bik: '044525823',
  corrAccount: '30101810200000000823',
} as const;

/* -------------------------------------------------------------------------
   Contacts
   ------------------------------------------------------------------------- */

export const contacts = {
  telegram: TBD,
  email: TBD,
  phone: TBD,
} as const;

/* -------------------------------------------------------------------------
   Card specifications — structure is right, figures are not confirmed.
   Every numeric spec below is wrapped so it renders with a [VERIFY] marker.
   ------------------------------------------------------------------------- */

export const specs = {
  /**
   * Annual fees and the ATM withdrawal fee are CONFIRMED against the issuing
   * bank's published VISA tariff schedule for foreign citizens, effective
   * 26 November 2025 — read from the debit ("физические лица") columns, not
   * the revolving-credit ones, which are a separate group in the same table
   * and are priced in som only.
   *
   * Fees are identical in the first year and every year after. The schedule
   * also offers a five-year upfront option (Platinum $400, Infinite $600, not
   * available on Gold) which the site does not currently mention.
   *
   * Still unconfirmed, so still marked:
   *  - daily ATM limits: the schedule merges these cells across several card
   *    columns, so a per-tier figure cannot be read off it honestly
   *  - cross-currency fee: does not appear in that schedule at all
   *  - validity: not stated in that schedule
   */
  /**
   * Daily limits, annual fees and the premium benefits below are CONFIRMED
   * from the bank's own product deck. Note the label: the deck calls this the
   * daily limit ("суточный лимит"), not specifically an ATM withdrawal limit,
   * and the site now uses the same wording rather than narrowing it.
   *
   * Infinite is 20 000, not 12 000 — the earlier third-party figure was wrong.
   */
  gold: { annualFee: '$20', dailyLimit: '$6 000' },
  platinum: { annualFee: '$100', dailyLimit: '$12 000' },
  infinite: { annualFee: '$150', dailyLimit: '$20 000' },

  /** Premium benefits, confirmed from the same deck. */
  /**
   * An empty string means the tier does not carry this benefit, and the row is
   * omitted for that tier entirely — not rendered as "нет", and not as a dash.
   *
   * A list of blanks is an argument against the card carrying it: Gold is what
   * most people should buy, and a column of absences made it read as a
   * stripped-down version of something better. Each plan now lists only what
   * it actually gives you, and its own genuine advantages (cheapest annual
   * fee, no minimum balance) are marked positively.
   */
  lounge: {
    gold: '',
    platinum: '2 раза в год',
    platinumEn: '2 visits a year',
    infinite: '6 раз в год',
    infiniteEn: '6 visits a year',
  },
  personalManager: {
    gold: '',
    platinum: '',
    infinite: 'да',
    infiniteEn: 'yes',
  },
  limitIncrease: {
    gold: '',
    platinum: '',
    infinite: 'до $50 000',
    infiniteEn: 'up to $50,000',
  },
  /** Same on all three. */
  dailyTransactions: '20 в сутки',
  dailyTransactionsEn: '20 per day',

  /**
   * Also confirmed from the same schedule, both read from unambiguous
   * nine-cell rows: express issue (row 1.3) and the minimum balance the
   * account must keep (row 1.6). Only Infinite carries the balance
   * requirement — Gold and Platinum have none.
   */
  expressIssue: { gold: '$12', platinum: '$12', infinite: 'бесплатно', infiniteEn: 'free' },
  minBalance: {
    gold: 'нет',
    goldEn: 'none',
    platinum: 'нет',
    platinumEn: 'none',
    infinite: '$1 200',
  },
  shared: {
    atmFee: '1%, минимум $3',
    atmFeeEn: '1%, minimum $3',
    validity: verify('5 лет'),
    validityEn: verify('5 years'),
  },
} as const;
