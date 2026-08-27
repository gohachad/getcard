import { pricing, timeline, legal, specs, verify } from '../config/placeholders';

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
    cta: 'Выбрать тариф',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    languageLabel: 'Язык сайта:',
  },

  hero: {
    headline: 'Два документа и карта у вас',
    // One line, straight under the headline. The two "если вы…" pairs made
    // the reader sort themselves into a bucket before being told what the
    // product even was; this just says what it is.
    tagline: 'Карта от ведущего киргизского банка',
    // The tagline now carries who issues it, so the fine print is only the
    // part it does not say.
    issuer: 'Банк работает с 1998 года',

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
        title: 'Карта в долларах или евро',
        body: 'И четыре отдельных счёта: доллары, евро, дирхамы, рубли',
      },
      {
        id: 'transfers',
        title: 'Свои реквизиты',
        body: 'Личные реквизиты для переводов, а не общий счёт сервиса',
      },
      {
        id: 'rates',
        title: 'Выгодная конвертация',
        body: 'Привлекательные курсы при обмене валют',
      },
    ],
    ctaPrimary: 'Выбрать тариф',
    ctaSecondary: 'Как это работает',
    cardAlt: 'Изображение карты VISA',
  },

  // Shared by the hero comparison and the plans section, so a tier's terms are
  // written once and cannot drift between the two.
  comparison: {
    labels: {
      annualFee: 'Годовая плата',
      dailyLimit: 'Суточный лимит по карте',
      lounge: 'Бизнес-залы в аэропортах',
      personalManager: 'Персональный менеджер',
      limitIncrease: 'Увеличение лимита по запросу',
      expressIssue: 'Срочный выпуск карты',
      minBalance: 'Неснижаемый остаток',
      dailyTransactions: 'Операций в сутки',
      atmFee: 'Комиссия за снятие',
      currencies: 'Валюты счетов',
      wallets: 'Бесконтактная оплата',
      serviceFee: 'Стоимость услуги getcard',
      transfers: 'Переводы по реквизитам',
    },
    shared: {
      dailyTransactions: specs.dailyTransactions,
      atmFee: specs.shared.atmFee,
      currencies: 'Доллары, евро, дирхамы, рубли',
      // Stated with the plans as well: the daily limit above it is the card's,
      // and people read the two as one number.
      transfers: verify('Без лимита по сумме'),
      wallets: 'Apple Pay, Google Pay',
      serviceFee: pricing.serviceFee,
    },
    // Four separate prices, not conversions from the ruble figure — and now
    // per plan as well, since Infinite is no longer the same price as Gold.
    // Kept as the Gold figure for anything that still needs one fee without a
    // plan in hand; every surface that knows its plan reads tier.serviceFeeBy.
    serviceFeeBy: pricing.serviceFeeByTier.gold.label,
    serviceFeeAmountBy: pricing.serviceFeeByTier.gold.amount,
    currencyLabel: 'Валюта оплаты',
    currencies: [
      { id: 'rub', label: '₽' },
      { id: 'usd', label: '$' },
      { id: 'eur', label: '€' },
      // The dirham has no single glyph in common use, so the code carries it.
      { id: 'aed', label: 'AED' },
    ],
    loungeNote: 'Включая питание. Доступ предоставляется держателю карты.',
    limitIncreaseNote: 'При подтверждении происхождения средств.',
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
        minBalance: specs.minBalance.gold,
        // Gold's own advantages, not an empty list. It is the cheapest to keep
        // and the only tier besides Platinum with no balance locked up — both
        // real reasons to choose it over the tiers above.
        advantages: ['annualFee', 'minBalance'] as string[],
      },
      {
        id: 'platinum',
        name: 'Platinum',
        serviceFeeBy: pricing.serviceFeeByTier.platinum.label,
        serviceFeeAmountBy: pricing.serviceFeeByTier.platinum.amount,
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
        serviceFeeBy: pricing.serviceFeeByTier.infinite.label,
        serviceFeeAmountBy: pricing.serviceFeeByTier.infinite.amount,
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

  // Paying with the card and moving money by bank details are two different
  // things, and the page let them blur into one. This section is the one place
  // that separates them, says which currency the card itself runs in, and
  // states that the account details belong to the client rather than to a
  // shared pool — which is the difference from a virtual-card service.
  accounts: {
    heading: 'Карта и счета — это разные вещи',
    intro:
      'У вас будет и то, и другое: карта VISA в долларах или евро и четыре собственных счёта с личными реквизитами.',
    columns: [
      {
        id: 'card',
        kicker: 'Оплата картой',
        title: 'Карта в долларах или евро',
        items: [
          'Валюта карты — доллар или евро, на выбор при оформлении.',
          'Оплата в интернете и в магазинах везде, где принимают VISA.',
          'Apple Pay и Google Pay — сразу после выпуска, до пластика.',
          'Суточный лимит по карте зависит от тарифа: от\u00a0$6\u00a0000 до\u00a0$20\u00a0000.',
        ],
      },
      {
        id: 'transfers',
        kicker: 'Переводы по реквизитам',
        title: 'Свои реквизиты, а не общий счёт',
        items: [
          'Реквизиты открыты на вас — деньги приходят на ваше имя.',
          'Входящие переводы в четырёх валютах: доллары, евро, дирхамы, рубли.',
          verify('Исходящие переводы по реквизитам — без лимита по сумме.'),
          'Конвертация между своими счетами по курсу банка.',
        ],
      },
    ],
    accountsLabel: 'Четыре счёта',
    cardTag: 'карта',
    accountsNote:
      'Карта списывает с долларового или еврового счёта. Дирхамы и рубли лежат на своих счетах: их пополняют и конвертируют по реквизитам.',
    differenceLabel: 'Чем это отличается от виртуальной карты',
    difference:
      'Сервисы с виртуальными картами выдают номер на общем счёте, и принять перевод на своё имя нельзя. Здесь счета и реквизиты ваши.',
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
          'Один банк для двух сторон: рублёвый счёт для России, карта для платежей за границей.',
        ],
      },
    ],
  },

  tiers: {
    heading: 'Тарифы',
    // Says what there is to choose between rather than where to look for
    // it: the plans differ in seven terms and match in everything else.
    intro: 'Тарифы отличаются ценой и семью условиями. Всё остальное во всех трёх одинаково.',
    // Heads the strip under the panels, where everything the three plans
    // share is stated once for the whole page.
    sameHeading: 'Одинаково во всех тарифах',
    // Read out in place of the green check, which is the only thing marking a
    // plan's own advantages for a sighted reader.
    advantageLabel: 'Преимущество тарифа',
    serviceFeeLabel: 'Стоимость нашей услуги',
    annualFeeNote: 'Годовая плата банку',
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
        body: `Средний срок выпуска — ${timeline.toIssue}. Дальше платите в интернете и через Apple Pay или Google Pay, не дожидаясь пластика.`,
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
        q: 'Чем оплата картой отличается от перевода по реквизитам?',
        a: 'Это два разных способа двигать деньги, и вы получаете оба. Картой платят в магазинах и в интернете — она списывает с долларового или еврового счёта, и по ней действует суточный лимит тарифа. По реквизитам деньги переводят со счёта на счёт: у каждого счёта свои реквизиты, открытые на вас, и лимиты здесь другие, чем по карте.',
      },
      {
        q: 'В какой валюте сама карта?',
        a: 'Доллар или евро — вы выбираете при оформлении. Счетов при этом четыре: доллары, евро, дирхамы и рубли. Карта списывает с долларового или еврового, остальные два счёта пополняются и конвертируются по реквизитам.',
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
    ctaPrimary: 'Выбрать тариф',
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
    ],
    legalLines: [
      `${legal.entityName} · ИНН ${legal.inn} · ОГРНИП ${legal.ogrnip}`,
      `р/с № ${legal.account} в ${legal.bankName} · БИК ${legal.bik} · Корсчёт ${legal.corrAccount}`,
      `Средний срок выпуска карты: ${timeline.toIssue}. Фактический срок определяет банк.`,
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
