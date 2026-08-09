/**
 * Every unfinalised value on the site, in one place.
 *
 * Rule: anywhere a price or a legal detail would go, the page renders a
 * visible [TBD] rather than a plausible-looking invention. Replace the values
 * below and the whole site updates — nothing is hardcoded in a component.
 *
 * `TBD` is the sentinel. `<Tbd />` renders it visibly. A value is considered
 * filled in once it is no longer strictly equal to TBD.
 */

export const TBD = '[TBD]' as const;

export type Placeholder = string;

/** True while a placeholder is still unfilled. */
export const isTbd = (value: Placeholder): boolean => value === TBD;

/* -------------------------------------------------------------------------
   Pricing — getcard's own service fee, charged on top of the bank's annual
   card fee. The annual fees ($20 / $100 / $150) are real and live in the
   locale files; these are ours and are not decided yet.
   ------------------------------------------------------------------------- */

export const serviceFee = {
  gold: TBD,
  platinum: TBD,
  infinite: TBD,
} as const;

/* -------------------------------------------------------------------------
   Payment
   ------------------------------------------------------------------------- */

export const payment = {
  /** e.g. 'Перевод на карту, СБП' — how the client actually pays us. */
  methods: TBD,
  /** e.g. '50% предоплата, 50% по факту доставки' vs full upfront. */
  schedule: TBD,
} as const;

/* -------------------------------------------------------------------------
   Timing — how long the whole process takes end to end. Not invented:
   this is a real promise and needs a real number behind it.
   ------------------------------------------------------------------------- */

export const timeline = {
  /** e.g. '10–14 дней' */
  total: TBD,
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
} as const;

/* -------------------------------------------------------------------------
   Offering
   ------------------------------------------------------------------------- */

export const offering = {
  /**
   * The site currently describes a single route: application filed by
   * notarised power of attorney. If a without-PoA route is also offered,
   * set this to a description of it and the process section gains a second
   * variant. Until then the stepper carries a visible [TBD] note.
   */
  withoutPoaRoute: TBD,
} as const;
