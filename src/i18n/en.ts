import type { Translations } from './types';
import { pricing, timeline, legal, specs, verify } from '../config/placeholders';

/**
 * English — translated from ru.ts, which is the source of truth for meaning.
 * Typed as `Translations`, so any key that exists in Russian and not here is
 * a build failure.
 */
export const en: Translations = {
  meta: {
    title: 'getcard — a VISA card for two documents: Netflix, ChatGPT, Steam and paying abroad',
    description:
      'A VISA card from a leading Kyrgyz bank for Russian citizens. Two documents and the card is yours. Pay for Netflix, Spotify, ChatGPT, Claude, Steam, the App Store and purchases abroad. Dollars, euros, dirhams and rubles. Works online before the plastic arrives.',
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
      transfers: verify('No cap on the amount'),
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
    loungeNote: 'Food included. Access is for the cardholder.',
    limitIncreaseNote: 'Subject to confirming the source of funds.',
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
    heading: 'The card and the accounts are two different things',
    intro:
      'You get both: a VISA card in dollars or euros, and four accounts of your own with bank details in your name.',
    columns: [
      {
        id: 'card',
        kicker: 'Paying by card',
        title: 'Dollars or euros — your choice',
        body: 'The card pays in shops and online anywhere VISA is accepted, and works in Apple\u00a0Pay and Google\u00a0Pay before the plastic arrives. Its daily limit depends on the plan: $6,000 to\u00a0$20,000.',
      },
      {
        id: 'transfers',
        kicker: 'Transfers by bank details',
        title: 'The details are in your name',
        body: `Money arrives as yours rather than into a shared service account. Incoming transfers come in four currencies, and your own accounts convert between themselves at the bank rate. ${verify('The limits here are not the card limits: there is no cap on the amount you transfer.')}`,
      },
    ],
    accountsLabel: 'Four accounts',
    cardTag: 'card',
    accountsNote:
      'The card draws on the dollar or the euro account. Dirhams and rubles are topped up and converted by bank details.',
    difference:
      'A virtual card from another service is a number on a shared account: no transfer can arrive there in your name. Here the accounts and the details are yours.',
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
        title: 'You send two documents',
        body: 'Your internal and foreign passports. It only takes ten minutes.',
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
        a: 'Russian citizens. The service is not yet available to citizens of other countries — write to us and we will let you know if that changes.',
      },
      {
        q: 'How many documents are needed?',
        a: 'Two. Your Russian internal passport — the photo page and the registration page. Your foreign passport — the title page. Plus a short form with your contact details and occupation. No proof of income, no proof of address, and no notarised paperwork.',
      },
      {
        q: 'Do I have to travel anywhere?',
        a: 'No. Not to Kyrgyzstan, not to a bank, not to a notary. The whole thing happens online: you send two documents, we file the application, the bank issues the card. There is no in-person meeting at any stage.',
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
          { label: 'Terms of service', href: '#' },
          { label: 'Data processing policy', href: '#' },
          { label: 'Company details', href: '#' },
        ],
      },
    ],
    legalLines: [
      `${legal.entityName} · INN ${legal.inn} · OGRNIP ${legal.ogrnip}`,
      `Account № ${legal.account} at ${legal.bankName} · BIC ${legal.bik} · Corr. account ${legal.corrAccount}`,
      `Average card issue time: ${timeline.toIssueEn}. The bank sets the actual timing.`,
      'Available to Russian citizens. Every stage happens online.',
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
