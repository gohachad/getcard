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
  /** Confirmed. Rubles are the primary currency for this audience. */
  serviceFee: '29 000 ₽',

  /**
   * Open question: does 29 000 ₽ apply to all three tiers, or only to the
   * entry tier with the others priced above it?
   */
  tierCoverage: TBD,

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
  /** From submitting the form to the accounts going live. */
  toActivation: TBD,
  /** From the accounts going live to the physical card arriving. */
  toDelivery: TBD,
} as const;

/* -------------------------------------------------------------------------
   Legal entity
   ------------------------------------------------------------------------- */

export const legal = {
  entityName: TBD,
  inn: TBD,
  ogrn: TBD,
  registeredAddress: TBD,
} as const;

/* -------------------------------------------------------------------------
   Contacts
   ------------------------------------------------------------------------- */

export const contacts = {
  telegram: TBD,
  email: TBD,
  phone: TBD,
  /** Address of the Moscow representative office where the meeting happens. */
  moscowOffice: TBD,
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
  gold: { annualFee: '$20', dailyAtm: verify('$6 000') },
  platinum: { annualFee: '$100', dailyAtm: verify('$12 000') },
  infinite: { annualFee: '$150', dailyAtm: verify('$12 000') },

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
    crossCurrency: verify('1,5%'),
    crossCurrencyEn: verify('1.5%'),
    validity: verify('5 лет'),
    validityEn: verify('5 years'),
  },
} as const;
