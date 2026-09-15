import { pricing, timeline, legal, specs } from '../config/placeholders';

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
      transfers: 'Без лимита по сумме',
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

  // Paying with the card and being sent money are two different things, and
  // people arrive believing they are one. This is the place that separates
  // them, in the plainest words the page has: what the card is for, what the
  // accounts are for, and which of the four the card actually spends from.
  // No banking vocabulary survives here on purpose — «реквизиты»,
  // «конвертация» and «суточный лимит» each cost a reader who does not
  // already know what they mean.
  accounts: {
    heading: 'Карта — чтобы платить. Счета — чтобы получать деньги',
    intro:
      'Вы получаете сразу и то, и другое: карту VISA, которой вы платите, и четыре счёта в банке, открытых на ваше имя — доллары, евро, дирхамы и рубли.',
    columns: [
      {
        id: 'card',
        kicker: 'Чем платить',
        title: 'Карта: доллары или евро',
        body: 'Картой вы платите в магазинах и в интернете — везде, где принимают VISA. Она работает в Apple\u00a0Pay и Google\u00a0Pay сразу, ещё до того как приедет пластик. Вы сами выбираете, в какой валюте будет карта: в долларах или в евро. В день картой можно потратить от\u00a0$6\u00a0000 до\u00a0$20\u00a0000 — сколько именно, зависит от тарифа.',
      },
      {
        id: 'transfers',
        kicker: 'Куда вам присылают деньги',
        title: 'Счета открыты лично на вас',
        body: 'У каждого счёта свой номер — это как адрес, по которому вам присылают деньги. Счета оформлены на ваше имя, а не на сервис, поэтому перевод, отправленный вам, дойдёт. Получать деньги можно в четырёх валютах, а между своими счетами — менять одну валюту на другую по курсу банка. Сумма перевода ничем не ограничена.',
      },
    ],
    accountsLabel: 'Ваши четыре счёта',
    cardTag: 'карта',
    accountsNote:
      'Когда вы платите картой, деньги уходят с долларового или с еврового счёта — с того, который вы выбрали. Дирхамы и рубли вам присылают на счёт, а потом вы меняете их на доллары или евро.',
  },

  /**
   * The issuing bank's own schedule, for the fees a getcard client will
   * actually meet.
   *
   * Only those: the schedule runs to nine sections and most of it — safe
   * deposit boxes in Bishkek, bullion, cash at the counter — belongs to
   * someone standing in a branch in Kyrgyzstan, which is not this client.
   * What is here is what happens to money arriving, leaving, or being
   * converted on an account held from Russia, plus the papers the RF tax
   * office asks for.
   *
   * These are the BANK's commissions and not ours, which the copy says
   * outright: they are not in the getcard fee and the bank may change them.
   */
  bankRates: {
    trigger: 'Тарифы банка: переводы, конвертация, документы',
    triggerHint: 'Комиссии банка, не наши',
    heading: 'Что банк берёт по счетам',
    intro:
      'Это комиссии банка, который выпускает карту, а не плата getcard. В стоимость нашей услуги они не входят, и банк вправе их менять.',
    effective: 'Тарифы банка действуют с 22.06.2026',
    columns: { service: 'Операция', fee: 'Комиссия', limits: 'Минимум и максимум' },
    groups: [
      {
        title: 'Счёт',
        rows: [
          { service: 'Открытие счёта для иностранных граждан', fee: '200 сом', limits: '' },
          { service: 'Ведение счёта', fee: 'бесплатно', limits: '' },
          { service: 'Интернет-банк', fee: 'бесплатно', limits: '' },
          { service: 'Закрытие счёта', fee: 'бесплатно', limits: '' },
          {
            service: 'Закрытие неактивного счёта',
            fee: '100 сом',
            limits: 'если операций не было больше 12 месяцев',
          },
        ],
      },
      {
        title: 'Когда деньги приходят',
        rows: [
          {
            service: 'Зачисление валюты через корреспондентские счета банка',
            fee: 'бесплатно',
            limits: '',
          },
          {
            service: 'Зачисление евро через Zhejiang Chouzhou Commercial Bank',
            fee: '0,5% от суммы',
            limits: 'отдельный корреспондент, не основной путь',
          },
        ],
      },
      {
        title: 'Когда деньги уходят по реквизитам (SWIFT)',
        rows: [
          { service: 'Доллары и евро', fee: '0,2%', limits: 'от\u00a0$30 до\u00a0$300 · от\u00a0€30 до\u00a0€300' },
          { service: 'Рубли', fee: '0,1%', limits: 'от\u00a0500\u00a0₽ до\u00a03\u00a0000\u00a0₽' },
          { service: 'Дирхамы', fee: '0,3%', limits: 'от\u00a0120 до\u00a01\u00a0000\u00a0AED' },
          {
            service: 'Перевод за счёт получателя, доллары и евро',
            fee: '$20 · €20',
            limits: 'фиксированно, вместо процента',
          },
        ],
      },
      {
        title: 'Обмен валюты',
        rows: [
          {
            service: 'Обмен между своими счетами',
            fee: 'по курсу банка',
            limits: 'курс банк устанавливает сам, на день операции',
          },
        ],
      },
      {
        title: 'Документы по счёту',
        rows: [
          { service: 'Выписка по электронной почте', fee: '10 сом', limits: 'за каждую выписку' },
          { service: 'Сводная выписка по счёту', fee: '300 сом', limits: '' },
          { service: 'Справка об открытии счёта, на русском', fee: '300 сом', limits: '' },
          {
            service: 'Справка об открытии счёта, на английском',
            fee: '1\u00a0000 сом',
            limits: 'или на двух языках на выбор',
          },
        ],
      },
    ],
    notes: [
      'Комиссии, названные в валюте, банк списывает в сомах по курсу Нацбанка Кыргызстана на день операции.',
      'Снятие наличных картой — это не тариф счёта, а тариф карты: 1%, минимум $3, одинаково во всех тарифах.',
      'Банк вправе менять тарифы в одностороннем порядке и публикует изменения на своём сайте за 10 дней.',
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
        a: 'В Кыргызстан лететь не нужно, в банк и к нотариусу — тоже. Понадобится одна встреча в Москве: вы один раз встречаетесь с нашим представителем. Это единственный очный шаг — документы вы присылаете онлайн, заявление подаём мы, карту выпускает банк.',
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
          // A leading slash means "a page of this locale" — Footer resolves it
          // through localePath(), so the GitHub Pages base path is carried and
          // the link is not written twice for two deploy targets.
          { label: 'Договор оферты', href: '/oferta/' },
          { label: 'Обработка персональных данных', href: '/oferta/#s12' },
          { label: 'Реквизиты', href: '/oferta/#requisites' },
        ],
      },
    ],
    legalLines: [
      `${legal.entityName} · ИНН ${legal.inn} · ОГРНИП ${legal.ogrnip}`,
      `р/с № ${legal.account} в ${legal.bankName} · БИК ${legal.bik} · Корсчёт ${legal.corrAccount}`,
      `Средний срок выпуска карты: ${timeline.toIssue}. Фактический срок определяет банк.`,
      'Оформление доступно гражданам РФ. Нужна одна личная встреча в Москве, остальные этапы проходят онлайн.',
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
