import type { Translations } from './types';
import {
  TBD,
  pricing,
  payment,
  timeline,
  legal,
  contacts,
  specs,
} from '../config/placeholders';

/**
 * English — translated from ru.ts, which is the source of truth for meaning.
 * Typed as `Translations`, so any key that exists in Russian and not here is
 * a build failure.
 */
export const en: Translations = {
  meta: {
    title: 'getcard — a VISA card from a Kyrgyz bank: two documents and one meeting',
    description:
      'We help Russian citizens obtain a VISA card issued by a licensed Kyrgyz bank. Dollars, euros, dirhams and rubles. Two documents, one meeting in Moscow. The card works before the plastic arrives — straight into Apple Pay and Google Pay.',
    localeName: 'English',
    localeShort: 'EN',
  },

  header: {
    audiences: [
      { label: "If you're in Russia", slogan: 'Paying abroad works again' },
      { label: "If you're abroad", slogan: 'Keep your link to Russia' },
    ],
  },

  nav: {
    wordmark: 'getcard',
    links: [
      { label: 'Who it suits', href: '#audiences' },
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
    headline: 'Two documents, one meeting — and the card works',
    tagline:
      'The account and the card go live the moment the card is issued — add it to Apple Pay or Google Pay and start paying without waiting for the plastic.',
    ctaPrimary: 'Get a card',
    ctaSecondary: 'How it works',
    tierSelectorLabel: 'Choose a plan',
    cardAlt: 'Illustration of a VISA card',
    specs: {
      annualFee: 'Annual fee',
      dailyAtm: 'Daily ATM limit',
      currencies: 'Account currencies',
      serviceFee: 'Service fee',
    },
    currencies: '$ € AED ₽',
  },

  disclosure: {
    homepage:
      'getcard is an independent intermediary. We are not a bank and we do not issue cards. We help you assemble the documents and file the application with a licensed Kyrgyz bank, which decides whether to issue the card on its own.',
    footer:
      'getcard is an independent intermediary. We are not a bank, we do not issue cards, and we are not affiliated with any bank or payment network.',
  },

  audiences: {
    heading: 'Who the card suits',
    columns: [
      {
        title: 'You live in Russia',
        items: [
          'Paying for things and withdrawing cash while travelling — anywhere VISA is accepted.',
          'Foreign subscriptions and online services that no longer accept cards issued in Russia.',
          'A card that works at terminals abroad, where a Russian one stopped.',
          'Top-ups by transfer from major Russian banks.',
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

  applePay: {
    heading: 'Apple Pay has worked since 28 July 2026',
    body: [
      'Apple Pay launched in Kyrgyzstan on 28 July 2026. The issuing bank was in the first wave, so the card adds to Wallet and works from day one.',
      'You can add the card to Apple Pay or Google Pay as soon as it is issued, before the plastic reaches you. From that moment you can pay with it.',
      'Visa charges no extra fee for paying via Apple Pay. The fees and the exchange rate are the same as paying with the physical card.',
    ],
  },

  eligibility: {
    heading: 'Who can apply',
    body: 'Russian citizens only. The bank requires an in-person meeting with the client, and it takes place at the bank’s representative office in Moscow — which is why we can only arrange this for Russian citizens. The service is not yet available to citizens of other countries.',
  },

  tiers: {
    heading: 'Plans',
    intro:
      'Three versions of the card. All are multi-currency and all work with Apple Pay and Google Pay. They differ in the annual fee and the daily ATM limit.',
    unverifiedTitle: 'These figures are not confirmed with the bank yet',
    unverifiedNotice:
      'Figures marked [VERIFY] have not been confirmed with the bank yet — they come from third-party material that has already proven inaccurate about currency support. Do not treat them as final: we confirm the terms of your plan before you pay anything.',
    recommendedLabel: 'Recommended',
    annualFeeLabel: 'per year',
    ctaRecommended: 'Get Platinum',
    cta: 'Get this card',
    specLabels: {
      dailyAtm: 'Daily ATM limit',
      atmFee: 'ATM withdrawal fee',
      crossCurrency: 'Cross-currency fee',
      validity: 'Valid for',
      currencies: 'Account currencies',
      wallets: 'Contactless payment',
      serviceFee: 'getcard service fee',
    },
    shared: {
      atmFee: specs.shared.atmFeeEn,
      crossCurrency: specs.shared.crossCurrencyEn,
      validity: specs.shared.validityEn,
      currencies: 'Dollars, euros, dirhams, rubles',
      wallets: 'Apple Pay, Google Pay',
      serviceFee: pricing.serviceFee,
    },
    list: [
      {
        id: 'gold',
        name: 'Gold',
        annualFee: specs.gold.annualFee,
        dailyAtm: specs.gold.dailyAtm,
        recommended: false,
      },
      {
        id: 'platinum',
        name: 'Platinum',
        annualFee: specs.platinum.annualFee,
        dailyAtm: specs.platinum.dailyAtm,
        recommended: true,
      },
      {
        id: 'infinite',
        name: 'Infinite',
        annualFee: specs.infinite.annualFee,
        dailyAtm: specs.infinite.dailyAtm,
        recommended: false,
      },
    ],
    priceNote: `The getcard service fee is ${pricing.serviceFee}. Whether that price covers all three plans: ${TBD}. Whether it includes the first year's annual fee: ${TBD}.`,
  },

  process: {
    heading: 'How it works',
    intro: 'Five steps. Only one of them is offline — the meeting in Moscow.',
    steps: [
      {
        title: 'Fill in the form and upload two documents',
        body: 'Your Russian internal passport — the photo page and the registration page. Your foreign passport — the title page only. Plus a short form: contact details and occupation. Nothing else is needed.',
      },
      {
        title: 'Automatic verification',
        body: 'The system checks the documents against the form. If something is missing or does not match, we tell you what to fix straight away.',
      },
      {
        title: "Meeting at the bank's Moscow representative office",
        body: `The one offline step: the bank has to record an in-person meeting with the client. That is a single meeting in Moscow — there is no flight to Bishkek. Address: ${contacts.moscowOffice}.`,
      },
      {
        title: 'Card issued — and already working',
        body: 'The account and the card are active as soon as the card is issued. You have the account details, the card goes into Apple Pay or Google Pay, and you can pay from that moment — while the plastic is still in transit.',
      },
      {
        title: 'The plastic is delivered',
        body: 'The physical card is handed over to you. By then you are already using the account, so delivery holds nothing up.',
      },
    ],
    highlightLabel: 'This is where the card starts working',
    taxNotice: {
      title: 'On notifying the tax authority',
      body: 'Opening an account with a foreign bank must be reported to the Russian tax authority within one month, and an annual statement of account activity is due after that. This is the account holder’s obligation rather than ours — but it is better to know now than in a year.',
    },
  },

  faq: {
    heading: 'Questions',
    items: [
      {
        q: 'How many documents are needed?',
        a: 'Two. Your Russian internal passport — the photo page and the registration page. Your foreign passport — the title page. Plus a short form with your contact details and occupation. No proof of income, no proof of address, and no notarised paperwork.',
      },
      {
        q: 'Do I have to travel to Kyrgyzstan?',
        a: "No. The bank requires one in-person meeting, and it happens at its representative office in Moscow. Everything else — the application, document checks, issuing — happens online.",
      },
      {
        q: 'When can I start paying with the card?',
        a: 'As soon as it is issued, without waiting for the plastic. The account and card are active, you have the details, and you can add the card to Apple Pay or Google Pay and pay from that moment. The physical card arrives later and holds nothing up.',
      },
      {
        q: 'Which currencies does the account work in?',
        a: 'Dollars, euros, dirhams and rubles. The account is multi-currency: you can hold and spend in any of them, and the ruble support is what makes the card useful to people living abroad who stay connected to Russia.',
      },
      {
        q: 'I am not a Russian citizen. Can I apply?',
        a: 'Not at the moment. The bank records an in-person meeting at its Moscow representative office, and the bank’s requirements limit the service to Russian citizens. We are collecting interest from citizens of other countries — write to us and we will let you know if that changes.',
      },
      {
        q: 'Does the card work inside Russia?',
        a: 'It is a foreign bank’s card, and VISA and Mastercard have not processed transactions inside Russia since 2022. It does not work domestically; it is for payments abroad, online, and for operations in the account currencies.',
      },
    ],
  },

  closing: {
    heading: 'Start with the form',
    body: 'Filling in the form and uploading two documents takes about ten minutes. We check the set and tell you what comes next, before any payment.',
    ctaPrimary: 'Get a card',
    ctaSecondary: 'Ask a question',
  },

  footer: {
    columns: [
      {
        title: 'The card',
        links: [
          { label: 'Who it suits', href: '#audiences' },
          { label: 'Plans', href: '#tiers' },
          { label: 'Apple Pay', href: '#apple-pay' },
        ],
      },
      {
        title: 'Applying',
        links: [
          { label: 'How it works', href: '#process' },
          { label: 'Documents', href: '#process' },
          { label: 'Questions', href: '#faq' },
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
      `Time to account activation: ${timeline.toActivation}. Plastic delivery time: ${timeline.toDelivery}.`,
    ],
    copyright: '© 2026 getcard · getcard.kg',
    visaNote:
      'VISA is the payment network the card runs on. getcard is not affiliated with VISA and does not act on its behalf. Apple Pay and Google Pay are services of their respective companies; getcard is not their partner.',
  },

  a11y: {
    skipToContent: 'Skip to content',
    mainLabel: 'Main content',
  },
};
