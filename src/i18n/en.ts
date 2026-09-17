import type { Translations } from './types';
import { pricing, timeline, legal, specs, contacts } from '../config/placeholders';

/**
 * English — translated from ru.ts, which is the source of truth for meaning.
 * Typed as `Translations`, so any key that exists in Russian and not here is
 * a build failure.
 */
export const en: Translations = {
  meta: {
    title: 'getcard — a VISA card for two documents: Netflix, ChatGPT, Steam and paying abroad',
    description:
      'A VISA card from a leading Kyrgyz bank. Two passports and the card is yours. Pay for Netflix, Spotify, ChatGPT, Claude, Steam, the App Store and purchases abroad. Dollars, euros, dirhams and rubles. Works online before the plastic arrives.',
    ogImageAlt: 'getcard — a VISA card, captioned “Two documents and the card is yours”',
    localeName: 'English',
    localeShort: 'EN',
  },

  nav: {
    wordmark: 'getcard',
    track: 'Track my order',
    cta: 'Choose a plan',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Site language:',
  },

  hero: {
    headline: 'Two documents and the card is yours',
    tagline: 'A card from a leading Kyrgyz bank',
    issuer: 'The bank has been operating since 1998',

    sellingPoints: [
      {
        id: 'plastic',
        title: 'Real plastic',
        body: 'A physical card, not just a virtual number',
      },
      {
        id: 'currencies',
        title: 'A card in dollars or euros',
        body: 'Plus four separate accounts: dollars, euros, dirhams, rubles',
      },
      {
        id: 'transfers',
        title: 'Bank details of your own',
        body: 'Personal details for transfers, not a shared service account',
      },
      {
        id: 'rates',
        title: 'Good conversion',
        body: 'Attractive rates when exchanging currencies',
      },
    ],
    ctaPrimary: 'Choose a plan',
    ctaSecondary: 'How it works',
    cardAlt: 'Illustration of a VISA card',
  },

  comparison: {
    labels: {
      annualFee: 'Annual fee',
      dailyLimit: 'Daily card limit',
      lounge: 'Airport lounges',
      personalManager: 'Personal manager',
      limitIncrease: 'Limit increase on request',
      expressIssue: 'Express card issue',
      minBalance: 'Minimum balance',
      dailyTransactions: 'Transactions per day',
      atmFee: 'ATM withdrawal fee',
      currencies: 'Account currencies',
      wallets: 'Contactless payment',
      serviceFee: 'getcard service fee',
      transfers: 'Transfers by bank details',
    },
    shared: {
      dailyTransactions: specs.dailyTransactionsEn,
      atmFee: specs.shared.atmFeeEn,
      currencies: 'Dollars, euros, dirhams, rubles',
      transfers: 'No cap on the amount',
      wallets: 'Apple Pay, Google Pay',
      serviceFee: pricing.serviceFee,
    },
    serviceFeeBy: pricing.serviceFeeByTier.gold.label,
    serviceFeeAmountBy: pricing.serviceFeeByTier.gold.amount,
    currencyLabel: 'Payment currency',
    currencies: [
      { id: 'rub', label: '₽' },
      { id: 'usd', label: '$' },
      { id: 'eur', label: '€' },
      { id: 'aed', label: 'AED' },
    ],
    tiers: [
      {
        id: 'gold',
        name: 'Gold',
        serviceFeeBy: pricing.serviceFeeByTier.gold.label,
        serviceFeeAmountBy: pricing.serviceFeeByTier.gold.amount,
        annualFee: specs.gold.annualFee,
        dailyLimit: specs.gold.dailyLimit,
        lounge: specs.lounge.gold,
        personalManager: specs.personalManager.gold,
        limitIncrease: specs.limitIncrease.gold,
        expressIssue: specs.expressIssue.gold,
        minBalance: specs.minBalance.goldEn,
        advantages: ['annualFee', 'minBalance'],
      },
      {
        id: 'platinum',
        name: 'Platinum',
        serviceFeeBy: pricing.serviceFeeByTier.platinum.label,
        serviceFeeAmountBy: pricing.serviceFeeByTier.platinum.amount,
        annualFee: specs.platinum.annualFee,
        dailyLimit: specs.platinum.dailyLimit,
        lounge: specs.lounge.platinumEn,
        personalManager: specs.personalManager.platinum,
        limitIncrease: specs.limitIncrease.platinum,
        expressIssue: specs.expressIssue.platinum,
        minBalance: specs.minBalance.platinumEn,
        advantages: ['dailyLimit', 'lounge', 'minBalance'],
      },
      {
        id: 'infinite',
        name: 'Infinite',
        serviceFeeBy: pricing.serviceFeeByTier.infinite.label,
        serviceFeeAmountBy: pricing.serviceFeeByTier.infinite.amount,
        annualFee: specs.infinite.annualFee,
        dailyLimit: specs.infinite.dailyLimit,
        lounge: specs.lounge.infiniteEn,
        personalManager: specs.personalManager.infiniteEn,
        limitIncrease: specs.limitIncrease.infiniteEn,
        expressIssue: specs.expressIssue.infiniteEn,
        minBalance: specs.minBalance.infinite,
        advantages: ['dailyLimit', 'lounge', 'personalManager', 'limitIncrease', 'expressIssue'],
      },
    ],
  },

  accounts: {
    heading: 'The card is for paying. The accounts are for being paid',
    intro:
      'You get both at once: a VISA card you pay with, and four bank accounts opened in your own name — dollars, euros, dirhams and rubles.',
    columns: [
      {
        id: 'card',
        kicker: 'What you pay with',
        title: 'The card: dollars or euros',
        body: 'You pay with the card in shops and online — anywhere VISA is accepted. It works in Apple\u00a0Pay and Google\u00a0Pay straight away, before the plastic arrives. You choose which currency the card runs in: dollars or euros. You can spend $6,000 to\u00a0$20,000 a day with it — how much exactly depends on the plan.',
      },
      {
        id: 'transfers',
        kicker: 'Where money is sent to you',
        title: 'The accounts are in your own name',
        body: 'Every account has its own number — an address people send money to. The accounts are opened in your name and not the service’s, so a transfer made out to you arrives. You can be paid in four currencies, and swap one currency for another between your own accounts at the bank’s rate. There is no cap on how much you transfer.',
      },
    ],
    accountsLabel: 'Your four accounts',
    cardTag: 'card',
    accountsNote:
      'When you pay by card, the money leaves the dollar or the euro account — whichever one you chose. Dirhams and rubles are sent to your account, and you swap them for dollars or euros afterwards.',
  },

  bankRates: {
    trigger: 'Bank fees: transfers, exchange, documents',
    triggerHint: 'The bank\u2019s own, not ours',
    heading: 'What the bank charges on the accounts',
    intro:
      'These are the fees of the bank that issues the card, not getcard\u2019s. They are not part of our fee, and the bank may change them.',
    effective: 'The bank\u2019s schedule is effective from 22.06.2026',
    columns: { service: 'Operation', fee: 'Fee', limits: 'Minimum and maximum' },
    groups: [
      {
        title: 'The account',
        rows: [
          { service: 'Opening an account for a foreign citizen', fee: '200 som', limits: '' },
          { service: 'Running the account', fee: 'free', limits: '' },
          { service: 'Internet banking', fee: 'free', limits: '' },
          { service: 'Closing the account', fee: 'free', limits: '' },
          {
            service: 'Closing a dormant account',
            fee: '100 som',
            limits: 'after more than 12 months without a transaction',
          },
        ],
      },
      {
        title: 'When money arrives',
        rows: [
          {
            service: 'Crediting currency through the bank\u2019s correspondent accounts',
            fee: 'free',
            limits: '',
          },
          {
            service: 'Crediting euros through Zhejiang Chouzhou Commercial Bank',
            fee: '0.5% of the amount',
            limits: 'a separate correspondent, not the usual route',
          },
        ],
      },
      {
        title: 'When money leaves by bank details (SWIFT)',
        rows: [
          { service: 'Dollars and euros', fee: '0.2%', limits: '$30 to\u00a0$300 · €30 to\u00a0€300' },
          { service: 'Rubles', fee: '0.1%', limits: '500\u00a0₽ to\u00a03,000\u00a0₽' },
          { service: 'Dirhams', fee: '0.3%', limits: '120 to\u00a01,000\u00a0AED' },
          {
            service: 'Transfer at the payee\u2019s expense, dollars and euros',
            fee: '$20 · €20',
            limits: 'a flat fee instead of a percentage',
          },
        ],
      },
      {
        title: 'Exchanging currency',
        rows: [
          {
            service: 'Exchange between your own accounts',
            fee: 'at the bank\u2019s rate',
            limits: 'the bank sets the rate itself, on the day',
          },
        ],
      },
      {
        title: 'Account paperwork',
        rows: [
          { service: 'Statement by email', fee: '10 som', limits: 'per statement' },
          { service: 'Consolidated account statement', fee: '300 som', limits: '' },
          { service: 'Certificate of account opening, in Russian', fee: '300 som', limits: '' },
          {
            service: 'Certificate of account opening, in English',
            fee: '1,000 som',
            limits: 'or in two languages of your choice',
          },
        ],
      },
    ],
    notes: [
      'Fees quoted in a currency are charged in som at the National Bank of Kyrgyzstan rate on the day.',
      'Cash withdrawal with the card is a card fee rather than an account fee: 1%, minimum $3, the same on every plan.',
      'The bank may change its schedule unilaterally and publishes changes on its own site 10 days ahead.',
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
          'Four separate accounts: dollars, euros, dirhams and rubles.',
          'Ruble transfers — both sending and receiving.',
          'Paying for Russian services from abroad.',
          'One bank for both sides: a ruble account for Russia, a card for payments abroad.',
        ],
      },
    ],
  },

  tiers: {
    heading: 'Plans',
    intro: 'The plans differ in price and seven terms. Everything else is the same on all three.',
    sameHeading: 'The same on every plan',
    advantageLabel: 'Plan advantage',
    serviceFeeLabel: 'Our service fee',
    annualFeeNote: 'Annual fee to the bank',
    cta: 'Get this card',
    baselineLabel: 'Baseline plan',
  },

  process: {
    heading: 'How it works',
    steps: [
      {
        title: 'You send scans of your passports',
        body: 'Your internal and international passport — scans, not photographs. It takes ten minutes.',
      },
      {
        title: 'We handle it — the card already works online',
        body: `Issue takes ${timeline.toIssueEn} on average. After that you pay online and through Apple Pay or Google Pay without waiting for the plastic.`,
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
        a: 'We accept passports of any country, not only Russian ones. You need an internal passport and an international one. The bank takes the final decision on every application.',
      },
      {
        q: 'How many documents are needed?',
        a: 'Two passports, three scans. Your internal passport — the photo page and the registration page. Your international passport — the photo page. They must be scans rather than phone snapshots: the bank does not accept photographs. Plus a short form with your contact details and occupation. No proof of income, no proof of address, and no notarised paperwork.',
      },
      {
        q: 'Do I have to travel anywhere?',
        a: 'You do not fly to Kyrgyzstan, and you go to neither a bank nor a notary. One meeting in Moscow is needed: you meet our associate once. That is the only time you appear in person — you send the documents online, we file the application, and the bank issues the card.',
      },
      {
        q: 'When can I start paying with the card?',
        a: 'As soon as it is issued, without waiting for the plastic. The account and card are active, you have the details, and you can add the card to Apple Pay or Google Pay and pay from that moment.',
      },
      {
        q: 'Which currencies do the accounts work in?',
        a: 'Dollars, euros, dirhams and rubles — four separate accounts rather than one multi-currency one. You can hold and spend in any of them, and the ruble account is what makes the card useful to people living abroad who stay connected to Russia.',
      },
      {
        q: 'How is paying by card different from a transfer by bank details?',
        a: 'They are two different ways to move money, and you get both. The card pays in shops and online — it draws on the dollar or euro account, and the daily limit of the plan applies to it. Transfers by bank details move money from account to account: each account has details of its own, opened in your name, and the limits there are not the card limits.',
      },
      {
        q: 'What currency is the card itself in?',
        a: 'Dollars or euros — you choose when you apply. There are four accounts regardless: dollars, euros, dirhams and rubles. The card draws on the dollar or the euro account; the other two are topped up and converted by bank details.',
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
    ctaPrimary: 'Choose a plan',
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
          { label: 'Terms of service', href: '/oferta/' },
          { label: 'Personal data', href: '/oferta/#s12' },
          { label: 'Legal details', href: '/oferta/#requisites' },
        ],
      },
    ],
    legalLines: [
      `${legal.entityName} · INN ${legal.inn} · OGRNIP ${legal.ogrnip}`,
      `Account № ${legal.account} at ${legal.bankName} · BIC ${legal.bik} · Corr. account ${legal.corrAccount}`,
      `Average card issue time: ${timeline.toIssueEn}. The bank sets the actual timing.`,
      'We accept passports of any country. One meeting in Moscow is required; every other stage happens online.',
      `${contacts.phone} · ${contacts.email}`,
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
