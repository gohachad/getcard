import type { Translations } from './types';
import { TBD, serviceFee, payment, timeline, legal, contacts } from '../config/placeholders';

/**
 * English — translated from ru.ts, which is the source of truth for meaning.
 * Typed as `Translations`, so any key that exists in Russian and not here is
 * a build failure.
 */
export const en: Translations = {
  meta: {
    title: 'getcard — a USD VISA card, arranged remotely',
    description:
      'We help Russian residents remotely obtain a USD VISA debit card issued by a licensed Kyrgyz bank. Apple Pay and Google Pay. Annual fee from $20.',
    localeName: 'English',
    localeShort: 'EN',
  },

  nav: {
    wordmark: 'getcard',
    links: [
      { label: 'What the card does', href: '#uses' },
      { label: 'Plans', href: '#tiers' },
      { label: 'How it works', href: '#process' },
      { label: 'Questions', href: '#faq' },
    ],
    signIn: 'Sign in',
    cta: 'Get a card',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Site language',
  },

  hero: {
    headline: 'A USD VISA card, arranged remotely',
    tagline: 'Issued by a licensed Kyrgyz bank. You do not travel anywhere.',
    ctaPrimary: 'Get a card',
    ctaSecondary: 'How it works',
    tierSelectorLabel: 'Choose a plan',
    cardAlt: 'Illustration of a USD VISA card',
    specs: {
      annualFee: 'Annual fee',
      dailyAtm: 'Daily ATM limit',
      validity: 'Valid for',
    },
  },

  disclosure: {
    homepage:
      'getcard is an independent intermediary. We are not a bank and we do not issue cards. We prepare the documents and file the application with a licensed Kyrgyz bank on your behalf, under a notarised power of attorney.',
    footer:
      'getcard is an independent intermediary. We are not a bank, we do not issue cards, and we are not affiliated with any bank or payment network.',
  },

  applePay: {
    heading: 'Apple Pay has worked since 28 July 2026',
    body: [
      'Apple Pay launched in Kyrgyzstan on 28 July 2026. The issuing bank was in the first wave, so the card adds to Wallet and works from day one.',
      'Visa charges no extra fee for paying via Apple Pay. The fees and the exchange rate are the same as paying with the physical card.',
      'Google Pay is supported as well.',
    ],
  },

  uses: {
    heading: 'What the card does',
    items: [
      {
        title: 'Payments and cash withdrawals abroad',
        body: 'Pay in shops, cafés and terminals anywhere VISA is accepted. ATM withdrawals cost 1%, minimum $3.',
      },
      {
        title: 'Foreign subscriptions and online services',
        body: 'Pay for foreign subscriptions and online services that no longer accept cards issued in Russia.',
      },
      {
        title: 'SWIFT transfers in dirhams',
        body: 'Incoming and outgoing SWIFT transfers. In UAE dirhams (AED) only — transfers in dollars or euros are not available.',
      },
    ],
  },

  tiers: {
    heading: 'Plans',
    intro:
      'Three versions of the card. All are USD, VISA, and valid for 5 years. They differ in the annual fee and the daily ATM limit.',
    recommendedLabel: 'Recommended',
    annualFeeLabel: 'per year',
    ctaRecommended: 'Get Platinum',
    cta: 'Get this card',
    specLabels: {
      dailyAtm: 'Daily ATM limit',
      atmFee: 'ATM withdrawal fee',
      crossCurrency: 'Cross-currency fee',
      validity: 'Valid for',
      currency: 'Account currency',
      wallets: 'Contactless payment',
      serviceFee: 'getcard service fee',
    },
    shared: {
      atmFee: '1%, minimum $3',
      crossCurrency: '1.5%',
      validity: '5 years',
      currency: 'US dollars only',
      wallets: 'Apple Pay, Google Pay',
    },
    list: [
      {
        id: 'gold',
        name: 'Gold',
        annualFee: '$20',
        dailyAtm: '$6,000',
        serviceFee: serviceFee.gold,
        recommended: false,
      },
      {
        id: 'platinum',
        name: 'Platinum',
        annualFee: '$100',
        dailyAtm: '$12,000',
        serviceFee: serviceFee.platinum,
        recommended: true,
      },
      {
        id: 'infinite',
        name: 'Infinite',
        annualFee: '$150',
        dailyAtm: '$12,000',
        serviceFee: serviceFee.infinite,
        recommended: false,
      },
    ],
    currencyNote:
      'The account is dollars and dollars only — this is not a multi-currency card. Purchases in other currencies are converted at a 1.5% cross-currency fee.',
  },

  process: {
    heading: 'How it works',
    intro: `Five steps from documents to the card in your hand. Start to finish: ${timeline.total}.`,
    steps: [
      {
        title: 'Send your documents',
        body: 'Scans of your international and internal passports. We check the set and tell you if anything is missing.',
      },
      {
        title: 'Sign the contract',
        body: 'A contract with getcard and a notarised power of attorney to file the application on your behalf. The power of attorney is signed at a notary in your own city.',
      },
      {
        title: 'Pay',
        body: `Payment methods: ${payment.methods}. Payment schedule: ${payment.schedule}.`,
      },
      {
        title: 'We file the application',
        body: 'Our representative submits the documents at a branch of a licensed Kyrgyz bank and opens the account under the power of attorney.',
      },
      {
        title: 'The card is delivered',
        body: 'The card and the account details are handed over to you. From there the account is yours alone — getcard has no access to it.',
      },
    ],
    routeNote: `One route is described here: filing under a notarised power of attorney. Whether a route without a power of attorney is offered: ${TBD}.`,
    taxNotice: {
      title: 'On notifying the tax authority',
      body: 'Opening an account with a foreign bank must be reported to the Russian tax authority within one month, and an annual statement of account activity is due after that. This is the account holder’s obligation rather than ours — but it is better to know now than in a year.',
    },
  },

  faq: {
    heading: 'Questions',
    items: [
      {
        q: 'Do I have to travel to Kyrgyzstan?',
        a: 'No. Our representative files the application under a notarised power of attorney. You visit a notary in your own city once, and that is the only trip involved.',
      },
      {
        q: 'Why is a power of attorney needed?',
        a: 'The bank opens an account only in person — either the client or their representative. A notarised power of attorney lets our representative file the application on your behalf. It is limited to submitting the documents and opening the account: it does not allow anyone to move your money.',
      },
      {
        q: 'How long does it take?',
        a: `From sending your documents to receiving the card: ${timeline.total}. The exact time depends on how quickly you arrange the power of attorney.`,
      },
      {
        q: 'Which documents are required?',
        a: 'An international passport, an internal passport, and a notarised power of attorney. Proof of income and proof of address are not required.',
      },
      {
        q: 'How do I add money to the card?',
        a: `The account is in dollars and is topped up by transfer. Available methods: ${payment.methods}. Topping up is an operation you carry out with the account directly; getcard is not involved in it.`,
      },
      {
        q: 'Does the card work inside Russia?',
        a: 'No. It is a foreign bank’s card, and VISA and Mastercard have not processed transactions inside Russia since 2022. The card is for payments abroad and online.',
      },
    ],
  },

  closing: {
    heading: 'Start with the documents',
    body: 'The first step is a scan of your international passport. We will look at the set and tell you what comes next, before any payment.',
    ctaPrimary: 'Get a card',
    ctaSecondary: 'Ask a question',
  },

  footer: {
    columns: [
      {
        title: 'The card',
        links: [
          { label: 'What the card does', href: '#uses' },
          { label: 'Plans', href: '#tiers' },
          { label: 'Apple Pay', href: '#apple-pay' },
        ],
      },
      {
        title: 'Applying',
        links: [
          { label: 'How it works', href: '#process' },
          { label: 'Questions', href: '#faq' },
          { label: 'Documents', href: '#process' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'Terms of service', href: '#' },
          { label: 'Data processing policy', href: '#' },
          { label: 'Company details', href: '#' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: `Telegram: ${contacts.telegram}`, href: '#' },
          { label: `Email: ${contacts.email}`, href: '#' },
          { label: `Phone: ${contacts.phone}`, href: '#' },
        ],
      },
    ],
    legalLines: [
      `${legal.entityName} · INN ${legal.inn} · OGRN ${legal.ogrn}`,
      `Registered address: ${legal.registeredAddress}`,
    ],
    copyright: '© 2026 getcard',
    visaNote:
      'VISA is the payment network the card runs on. getcard is not affiliated with VISA and does not act on its behalf. Apple Pay and Google Pay are services of their respective companies; getcard is not their partner.',
  },

  a11y: {
    skipToContent: 'Skip to content',
    mainLabel: 'Main content',
  },
};
