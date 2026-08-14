import { pricing, payment, timeline, legal, contacts, specs } from '../config/placeholders';

/**
 * Russian copy — written first. English is translated from this file.
 *
 * The page makes one argument: two documents and the card is yours. Everything
 * else is evidence for that.
 *
 * Hard content rules still enforced here:
 *  - the issuing bank is never named
 *  - no superlatives about the bank; verifiable facts only
 *  - no claim of affiliation or endorsement by any bank, network, or Apple
 *  - third-party services are named in plain body text only, never as logos
 *  - no internal cost or margin figures — this repository is public
 */
export const ru = {
  meta: {
    title: 'getcard — карта VISA за два документа: Netflix, ChatGPT, Steam и оплата за границей',
    description:
      'Карта VISA от ведущего киргизского банка для граждан России. Два документа — и карта ваша. Оплата Netflix, Spotify, ChatGPT, Claude, Steam, App Store и покупок за границей. Доллары, евро, дирхамы и рубли. Работает онлайн ещё до доставки пластика.',
    ogImageAlt: 'getcard — долларовая карта VISA и надпись «Два документа и карта у вас»',
    localeName: 'Русский',
    localeShort: 'RU',
  },

  nav: {
    wordmark: 'getcard',
    track: 'Отследить заказ',
    cta: 'Оформить карту',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    languageLabel: 'Язык сайта:',
  },

  hero: {
    headline: 'Два документа и карта у вас',
    // The two audiences, moved out of the old header band and set directly
    // under the headline where they qualify the promise instead of floating
    // above the page unattached to anything.
    audiences: [
      { label: 'Если вы в России', slogan: 'Снова платить за границей' },
      { label: 'Если вы за границей', slogan: 'Не терять связь с Россией' },
    ],
    issuer: 'Карту выпускает ведущий киргизский банк, работающий с 1998 года',

    // The four reasons to keep reading, shown before anything else. Each one
    // is a claim the visitor can check against the plans further down, which
    // is what stops a colourful row of tiles reading as noise.
    sellingPoints: [
      {
        id: 'plastic',
        title: 'Настоящий пластик',
        body: 'Физическая карта, а не только виртуальный номер',
      },
      {
        id: 'currencies',
        title: 'Четыре валюты',
        body: 'Евро, рубли, доллары и дирхамы — четыре отдельных счёта',
      },
      {
        id: 'transfers',
        title: 'Переводы по реквизитам',
        body: 'Отправляйте и принимайте деньги на банковские реквизиты',
      },
      {
        id: 'rates',
        title: 'Выгодная конвертация',
        body: 'Привлекательные курсы при обмене валют',
      },
    ],
    ctaPrimary: 'Оформить карту',
    ctaSecondary: 'Как это работает',
    tierSelectorLabel: 'Выберите тариф',
    cardAlt: 'Изображение карты VISA',
    comparisonLabel: 'Условия по тарифу',
    advantageLabel: 'Преимущество тарифа',
  },

  // Shared by the hero comparison and the plans section, so a tier's terms are
  // written once and cannot drift between the two.
  comparison: {
    labels: {
      annualFee: 'Годовая плата',
      dailyLimit: 'Суточный лимит',
      lounge: 'Бизнес-залы в аэропортах',
      personalManager: 'Персональный менеджер',
      limitIncrease: 'Увеличение лимита по запросу',
      expressIssue: 'Срочный выпуск карты',
      minBalance: 'Неснижаемый остаток',
      dailyTransactions: 'Операций в сутки',
      atmFee: 'Комиссия за снятие',
      crossCurrency: 'Кросс-курсовая комиссия',
      currencies: 'Валюты счетов',
      wallets: 'Бесконтактная оплата',
      serviceFee: 'Стоимость услуги getcard',
    },
    shared: {
      dailyTransactions: specs.dailyTransactions,
      atmFee: specs.shared.atmFee,
      crossCurrency: specs.shared.crossCurrency,
      currencies: 'Доллары, евро, дирхамы, рубли',
      wallets: 'Apple Pay, Google Pay',
      serviceFee: pricing.serviceFee,
    },
    // Three separate prices, not conversions from the ruble figure.
    serviceFeeBy: {
      rub: pricing.serviceFee,
      usd: pricing.serviceFeeUsd,
      eur: pricing.serviceFeeEur,
    },
    serviceFeeAmountBy: {
      rub: pricing.serviceFeeAmountRub,
      usd: pricing.serviceFeeAmountUsd,
      eur: pricing.serviceFeeAmountEur,
    },
    currencyLabel: 'Валюта оплаты',
    currencyToggleLabel: 'Сменить валюту оплаты',
    currencies: [
      { id: 'rub', label: '₽' },
      { id: 'usd', label: '$' },
      { id: 'eur', label: '€' },
    ],
    loungeNote: 'Включая питание. Доступ предоставляется держателю карты.',
    limitIncreaseNote: 'При подтверждении происхождения средств.',
    tiers: [
      {
        id: 'gold',
        name: 'Gold',
        annualFee: specs.gold.annualFee,
        dailyLimit: specs.gold.dailyLimit,
        lounge: specs.lounge.gold,
        personalManager: specs.personalManager.gold,
        limitIncrease: specs.limitIncrease.gold,
        expressIssue: specs.expressIssue.gold,
        minBalance: specs.minBalance.gold,
        // Gold's own advantages, not an empty list. It is the cheapest to keep
        // and the only tier besides Platinum with no balance locked up — both
        // real reasons to choose it over the tiers above.
        advantages: ['annualFee', 'minBalance'] as string[],
      },
      {
        id: 'platinum',
        name: 'Platinum',
        annualFee: specs.platinum.annualFee,
        dailyLimit: specs.platinum.dailyLimit,
        lounge: specs.lounge.platinum,
        personalManager: specs.personalManager.platinum,
        limitIncrease: specs.limitIncrease.platinum,
        expressIssue: specs.expressIssue.platinum,
        minBalance: specs.minBalance.platinum,
        advantages: ['dailyLimit', 'lounge', 'minBalance'] as string[],
      },
      {
        id: 'infinite',
        name: 'Infinite',
        annualFee: specs.infinite.annualFee,
        dailyLimit: specs.infinite.dailyLimit,
        lounge: specs.lounge.infinite,
        personalManager: specs.personalManager.infinite,
        limitIncrease: specs.limitIncrease.infinite,
        expressIssue: specs.expressIssue.infinite,
        minBalance: specs.minBalance.infinite,
        advantages: [
          'dailyLimit',
          'lounge',
          'personalManager',
          'limitIncrease',
          'expressIssue',
        ] as string[],
      },
    ],
  },

  benefits: {
    columns: [
      {
        title: 'Вы живёте в России',
        items: [
          'Netflix, Spotify, YouTube Premium — подписки снова оплачиваются.',
          'ChatGPT, Claude, Midjourney и другие сервисы по подписке.',
          'Steam, PlayStation Store, App Store и Google Play.',
          'Booking, авиабилеты и аренда авто за границей.',
          'Оплата покупок и снятие наличных в поездках — везде, где принимают VISA.',
          'Пополнение переводом из любого российского банка.',
        ],
      },
      {
        title: 'Вы живёте за границей и связаны с Россией',
        items: [
          'Четыре отдельных счёта: доллары, евро, дирхамы и рубли.',
          'Переводы в рублях — и отправить, и получить.',
          'Оплата российских сервисов из-за границы.',
          'Одна карта, которая работает по обе стороны.',
        ],
      },
    ],
  },

  tiers: {
    heading: 'Тарифы',
    intro:
      'Три варианта карты от ведущего киргизского банка, работающего с 1998 года. Все — многовалютные и работают в Apple Pay и Google Pay. Gold закрывает большинство задач; выше — больше лимиты.',
    serviceFeeLabel: 'Стоимость нашей услуги',
    annualFeeNote: 'Годовая плата банку',
    unverifiedTitle: 'Часть цифр ещё не подтверждена банком',
    unverifiedNotice:
      'Годовая плата, комиссия за снятие, срочный выпуск и неснижаемый остаток подтверждены по действующим тарифам банка. Цифры, отмеченные [VERIFY], мы ещё уточняем — перед оплатой мы подтвердим условия вашего тарифа.',
    cta: 'Оформить',
    baselineLabel: 'Базовый тариф',
  },

  process: {
    heading: 'Как это работает',
    steps: [
      {
        title: 'Вы присылаете два документа',
        body: 'Российский и загранпаспорт. Займет всего десять минут.',
      },
      {
        title: 'Мы оформляем — карта уже работает онлайн',
        body: `Выпуск занимает ${timeline.toIssue}. Дальше платите в интернете и через Apple Pay или Google Pay, не дожидаясь пластика.`,
      },
      {
        title: 'Вы получаете пластик',
        body: 'Физическая карта приезжает к вам позже.',
      },
    ],
  },

  faq: {
    heading: 'Вопросы',
    items: [
      {
        q: 'Кто может оформить карту?',
        a: 'Граждане России. Для граждан других стран услуга пока недоступна — напишите нам, и мы сообщим, если это изменится.',
      },
      {
        q: 'Сколько документов нужно?',
        a: 'Два. Российский паспорт — страница с фотографией и страница с регистрацией. Загранпаспорт — титульная страница. Ещё короткая форма с контактами и профессией. Справки о доходах, подтверждение адреса и нотариальные документы не требуются.',
      },
      {
        q: 'Нужно ли куда-то ехать?',
        a: 'Нет. Ни в Кыргызстан, ни в банк, ни к нотариусу. Всё оформление проходит онлайн: вы присылаете два документа, мы подаём заявление, банк выпускает карту. Личная встреча не нужна ни на одном этапе.',
      },
      {
        q: 'Когда картой можно начать платить?',
        a: 'Сразу после выпуска, не дожидаясь пластика. Счёт и карта активны, реквизиты у вас, карту можно добавить в Apple Pay или Google Pay и платить с этого момента.',
      },
      {
        q: 'В каких валютах работают счета?',
        a: 'Доллары, евро, дирхамы и рубли — это четыре отдельных счёта, а не один мультивалютный. Хранить и тратить можно в любой из этих валют, а рублёвый счёт делает карту рабочей и для тех, кто живёт за границей и сохраняет связь с Россией.',
      },
      {
        q: 'Работает ли карта в России?',
        a: 'Это карта иностранного банка, и платёжные системы VISA и Mastercard не обрабатывают операции внутри России с 2022 года. Внутри страны карта не работает; она предназначена для платежей за границей, в интернете и для операций в валютах счёта.',
      },
    ],
  },

  closing: {
    heading: 'Начните с двух документов',
    body: 'Загрузить документы — минут десять. Мы проверим комплект и скажем, что дальше, до всякой оплаты.',
    ctaPrimary: 'Оформить карту',
    ctaSecondary: 'Задать вопрос',
  },

  footer: {
    columns: [
      {
        title: 'Карта',
        links: [
          { label: 'Возможности', href: '#benefits' },
          { label: 'Тарифы', href: '#tiers' },
          { label: 'Как это работает', href: '#process' },
        ],
      },
      {
        title: 'Оформление',
        links: [
          { label: 'Документы', href: '#process' },
          { label: 'Вопросы', href: '#faq' },
          { label: 'Кто может оформить', href: '#faq' },
        ],
      },
      {
        title: 'Компания',
        links: [
          { label: 'Договор оферты', href: '#' },
          { label: 'Политика обработки данных', href: '#' },
          { label: 'Реквизиты', href: '#' },
        ],
      },
      {
        title: 'Контакты',
        links: [
          { label: `Telegram: ${contacts.telegram}`, href: '#' },
          { label: `Почта: ${contacts.email}`, href: '#' },
          { label: `Телефон: ${contacts.phone}`, href: '#' },
        ],
      },
    ],
    legalLines: [
      `${legal.entityName} · ИНН ${legal.inn} · ОГРНИП ${legal.ogrnip}`,
      `р/с № ${legal.account} в ${legal.bankName} · БИК ${legal.bik} · Корсчёт ${legal.corrAccount}`,
      `Способы оплаты: ${payment.methods}. Порядок оплаты: ${payment.schedule}.`,
      `Срок выпуска карты: ${timeline.toIssue}. Срок доставки пластика: ${timeline.toDelivery}.`,
      'Оформление доступно гражданам РФ. Все этапы проходят онлайн.',
    ],
    copyright: '© 2026 getcard · getcard.kg',
    visaNote:
      'VISA — платёжная система, в которой обслуживается карта. Apple Pay и Google Pay — сервисы соответствующих компаний. Названия сервисов приведены для описания возможностей оплаты.',
  },

  a11y: {
    skipToContent: 'Перейти к содержанию',
    mainLabel: 'Основное содержание',
  },
} as const;

export type Translations = typeof ru;
