import type { Translations } from './types';
import { pricing, payment, timeline, legal, contacts, specs } from '../config/placeholders';

/**
 * English — translated from ru.ts, which is the source of truth for meaning.
 * Typed as `Translations`, so any key that exists in Russian and not here is
 * a build failure.
 */
export const en: Translations = {
  meta: {
    title: 'getcard — a VISA card for two documents: Netflix, ChatGPT, Steam and paying abroad',
    description:
      'A VISA card from a licensed Kyrgyz bank for Russian citizens. Two documents and the card is yours. Pay for Netflix, Spotify, ChatGPT, Claude, Steam, the App Store and purchases abroad. Dollars, euros, dirhams and rubles. Works online before the plastic arrives.',
    localeName: 'English',
    localeShort: 'EN',
  },

  nav: {
    wordmark: 'getcard',
    signIn: 'Sign in',
    cta: 'Get a card',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Site language:',
  },

  hero: {
    headline: 'Two documents and the card is yours',
    audiences: [
      { label: "If you're in Russia", slogan: 'Paying abroad works again' },
      { label: "If you're abroad", slogan: 'Keep your link to Russia' },
    ],
    ctaPrimary: 'Get a card',
    ctaSecondary: 'How it works',
    tierSelectorLabel: 'Choose a plan',
    cardAlt: 'Illustration of a VISA card',
    comparisonLabel: 'Terms on this plan',
    upgradeLabel: 'More than Gold',
  },

  comparison: {
    labels: {
      annualFee: 'Annual fee',
      dailyLimit: 'Daily limit',
      lounge: 'Airport lounges',
      personalManager: 'Personal manager',
      limitIncrease: 'Limit increase on request',
      expressIssue: 'Express card issue',
      minBalance: 'Minimum balance',
      dailyTransactions: 'Transactions per day',
      atmFee: 'ATM withdrawal fee',
      crossCurrency: 'Cross-currency fee',
      currencies: 'Account currencies',
      wallets: 'Contactless payment',
      serviceFee: 'getcard service fee',
    },
    shared: {
      dailyTransactions: specs.dailyTransactionsEn,
      atmFee: specs.shared.atmFeeEn,
      crossCurrency: specs.shared.crossCurrencyEn,
      currencies: 'Dollars, euros, dirhams, rubles',
      wallets: 'Apple Pay, Google Pay',
      serviceFee: pricing.serviceFee,
    },
    loungeNote: 'Food included. Access is for the cardholder.',
    limitIncreaseNote: 'Subject to confirming the source of funds.',
    tiers: [
      {
        id: 'gold',
        name: 'Gold',
        annualFee: specs.gold.annualFee,
        dailyLimit: specs.gold.dailyLimit,
        lounge: specs.lounge.goldEn,
        personalManager: specs.personalManager.goldEn,
        limitIncrease: specs.limitIncrease.goldEn,
        expressIssue: specs.expressIssue.gold,
        minBalance: specs.minBalance.goldEn,
        upgrades: [],
      },
      {
        id: 'platinum',
        name: 'Platinum',
        annualFee: specs.platinum.annualFee,
        dailyLimit: specs.platinum.dailyLimit,
        lounge: specs.lounge.platinumEn,
        personalManager: specs.personalManager.platinumEn,
        limitIncrease: specs.limitIncrease.platinumEn,
        expressIssue: specs.expressIssue.platinum,
        minBalance: specs.minBalance.platinumEn,
        upgrades: ['dailyLimit', 'lounge'],
      },
      {
        id: 'infinite',
        name: 'Infinite',
        annualFee: specs.infinite.annualFee,
        dailyLimit: specs.infinite.dailyLimit,
        lounge: specs.lounge.infiniteEn,
        personalManager: specs.personalManager.infiniteEn,
        limitIncrease: specs.limitIncrease.infiniteEn,
        expressIssue: specs.expressIssue.infiniteEn,
        minBalance: specs.minBalance.infinite,
        upgrades: ['dailyLimit', 'lounge', 'personalManager', 'limitIncrease', 'expressIssue'],
      },
    ],
  },

  benefits: {
    columns: [
      {
        title: 'You live in Russia',
        items: [
          'Netflix, Spotify, YouTube Premium — subscriptions go through again.',
          'ChatGPT, Claude, Midjourney and other subscription services.',
          'Steam, PlayStation Store, the App Store and Google Play.',
          'Booking, flights and car hire abroad.',
          'Paying for things and withdrawing cash while travelling — anywhere VISA is accepted.',
          'Top-ups by transfer from any Russian bank.',
        ],
      },
      {
        title: 'You live abroad and stay connected to Russia',
        items: [
          'An account in several currencies: dollars, euros, dirhams and rubles.',
          'Ruble transfers — both sending and receiving.',
          'Paying for Russian services from abroad.',
          'One card that works on both sides.',
        ],
      },
    ],
  },

  tiers: {
    heading: 'Plans',
    intro:
      'Three versions of the card. All are multi-currency and all work with Apple Pay and Google Pay. Gold covers most needs; the higher plans raise the limits.',
    unverifiedTitle: 'Some figures are not confirmed with the bank yet',
    unverifiedNotice:
      "The annual fee, withdrawal fee, express issue and minimum balance are confirmed against the bank's current published tariffs. Figures marked [VERIFY] are still being checked — we confirm the terms of your plan before you pay anything.",
    cta: 'Get this card',
    baselineLabel: 'Baseline plan',
  },

  process: {
    heading: 'How it works',
    steps: [
      {
        title: 'You send two documents',
        body: 'Your internal and foreign passports. Ten minutes.',
      },
      {
        title: 'We handle it — the card already works online',
        body: `Issue takes ${timeline.toIssueEn}. After that you pay online and through Apple Pay or Google Pay without waiting for the plastic.`,
      },
      {
        title: 'You get the plastic',
        body: 'The physical card reaches you later.',
      },
    ],
  },

  faq: {
    heading: 'Questions',
    items: [
      {
        q: 'Who can apply for the card?',
        a: 'Russian citizens only. The bank requires an in-person meeting with the client, and it takes place at the bank’s representative office in Moscow — which is why we can only arrange this for Russian citizens. The service is not yet available to citizens of other countries: write to us and we will let you know if that changes.',
      },
      {
        q: 'How many documents are needed?',
        a: 'Two. Your Russian internal passport — the photo page and the registration page. Your foreign passport — the title page. Plus a short form with your contact details and occupation. No proof of income, no proof of address, and no notarised paperwork.',
      },
      {
        q: 'Do I have to travel to Kyrgyzstan?',
        a: 'No. The bank requires one in-person meeting, and it happens at its representative office in Moscow. Everything else — the application, document checks, issuing — happens online.',
      },
      {
        q: 'When can I start paying with the card?',
        a: 'As soon as it is issued, without waiting for the plastic. The account and card are active, you have the details, and you can add the card to Apple Pay or Google Pay and pay from that moment.',
      },
      {
        q: 'Which currencies does the account work in?',
        a: 'Dollars, euros, dirhams and rubles. The account is multi-currency: you can hold and spend in any of them, and the ruble support is what makes the card useful to people living abroad who stay connected to Russia.',
      },
      {
        q: 'Does the card work inside Russia?',
        a: 'It is a foreign bank’s card, and VISA and Mastercard have not processed transactions inside Russia since 2022. It does not work domestically; it is for payments abroad, online, and for operations in the account currencies.',
      },
    ],
  },

  closing: {
    heading: 'Start with two documents',
    body: 'Uploading them takes about ten minutes. We check the set and tell you what comes next, before any payment.',
    ctaPrimary: 'Get a card',
    ctaSecondary: 'Ask a question',
  },

  footer: {
    columns: [
      {
        title: 'The card',
        links: [
          { label: 'What it does', href: '#benefits' },
          { label: 'Plans', href: '#tiers' },
          { label: 'How it works', href: '#process' },
        ],
      },
      {
        title: 'Applying',
        links: [
          { label: 'Documents', href: '#process' },
          { label: 'Questions', href: '#faq' },
          { label: 'Who can apply', href: '#faq' },
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
      `Payment methods: ${payment.methods}. Payment schedule: ${payment.schedule}.`,
      `Card issue time: ${timeline.toIssueEn}. Plastic delivery time: ${timeline.toDelivery}.`,
      `Meeting at the bank's Moscow representative office: ${contacts.moscowOffice}. Available to Russian citizens.`,
    ],
    copyright: '© 2026 getcard · getcard.kg',
    visaNote:
      'VISA is the payment network the card runs on. Apple Pay and Google Pay are services of their respective companies. Service names are given to describe what the card can pay for.',
  },

  a11y: {
    skipToContent: 'Skip to content',
    mainLabel: 'Main content',
  },
};
