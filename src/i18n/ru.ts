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
 * Russian copy — written first. English is translated from this file,
 * not the other way round. Russian is the actual market.
 *
 * The page has one argument: getting the card through us is fast and takes
 * almost no effort. Two documents, one meeting, and the card is working.
 * Everything else is supporting evidence.
 *
 * Hard content rules enforced here:
 *  - the issuing bank is never named; it is "лицензированный банк Кыргызстана"
 *  - no superlatives about the bank; only verifiable facts
 *  - no third-party brand names in the use-case copy
 *  - no claim of affiliation or endorsement by any bank, network, or Apple
 *  - no internal cost or margin figures, ever — this repository is public
 */
export const ru = {
  meta: {
    title: 'getcard — карта VISA от банка Кыргызстана: два документа и одна встреча',
    description:
      'Помогаем гражданам России оформить карту VISA в лицензированном банке Кыргызстана. Доллары, евро, дирхамы и рубли. Два документа, одна встреча в Москве. Карта работает до доставки пластика — сразу в Apple Pay и Google Pay.',
    localeName: 'Русский',
    localeShort: 'RU',
  },

  header: {
    // Two audiences, two different reasons to want this card. A static site
    // cannot detect which visitor it has, so both are shown and labelled.
    audiences: [
      { label: 'Если вы в России', slogan: 'Снова платить за границей' },
      { label: 'Если вы за границей', slogan: 'Не терять связь с Россией' },
    ],
  },

  nav: {
    wordmark: 'getcard',
    links: [
      { label: 'Кому подходит', href: '#audiences' },
      { label: 'Тарифы', href: '#tiers' },
      { label: 'Как это работает', href: '#process' },
      { label: 'Вопросы', href: '#faq' },
    ],
    signIn: 'Войти',
    cta: 'Оформить карту',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    languageLabel: 'Язык сайта',
  },

  hero: {
    // The outcome and the effort it costs, in one line. No metaphor to decode.
    headline: 'Два документа, одна встреча — и карта работает',
    // Carries the fact that makes the promise credible rather than generic.
    tagline:
      'Счёт и карта начинают работать сразу после выпуска — добавьте карту в Apple Pay или Google Pay и платите, не дожидаясь пластика.',
    ctaPrimary: 'Оформить карту',
    ctaSecondary: 'Как это работает',
    tierSelectorLabel: 'Выберите тариф',
    cardAlt: 'Изображение карты VISA',
    specs: {
      annualFee: 'Годовая плата',
      dailyAtm: 'Лимит снятия в сутки',
      currencies: 'Валюты счёта',
      serviceFee: 'Стоимость услуги',
    },
    currencies: '$ € AED ₽',
  },

  disclosure: {
    homepage:
      'getcard — независимый посредник. Мы не банк и не выпускаем карты. Мы помогаем собрать документы и подать заявление в лицензированный банк Кыргызстана, который принимает решение о выпуске карты самостоятельно.',
    footer:
      'getcard — независимый посредник. Мы не банк, не выпускаем карты и не связаны партнёрскими отношениями ни с одним банком или платёжной системой.',
  },

  audiences: {
    heading: 'Кому подходит карта',
    columns: [
      {
        title: 'Вы живёте в России',
        items: [
          'Оплата покупок и снятие наличных в поездках — везде, где принимают VISA.',
          'Зарубежные подписки и онлайн-сервисы, которые больше не принимают карты, выпущенные в России.',
          'Карта работает в терминалах за границей — там, где российская перестала.',
          'Пополнение переводом из крупных российских банков.',
        ],
      },
      {
        title: 'Вы живёте за границей и связаны с Россией',
        items: [
          'Счёт в нескольких валютах: доллары, евро, дирхамы и рубли.',
          'Переводы в рублях — и отправить, и получить.',
          'Оплата российских сервисов из-за границы.',
          'Одна карта, которая работает по обе стороны.',
        ],
      },
    ],
  },

  applePay: {
    heading: 'Apple Pay работает с 28 июля 2026 года',
    body: [
      'Apple Pay запустился в Кыргызстане 28 июля 2026 года. Банк, который выпускает карту, вошёл в первую волну — карта добавляется в Wallet и работает с первого дня.',
      'Карту можно добавить в Apple Pay или Google Pay сразу после выпуска, ещё до того, как пластик окажется у вас на руках. Платить можно с этого момента.',
      'Visa не берёт дополнительную комиссию за оплату через Apple Pay. Комиссии и курс те же, что при оплате пластиковой картой.',
    ],
  },

  eligibility: {
    heading: 'Кто может оформить',
    body: 'Только граждане России. Банк требует личной встречи с клиентом, и она проходит в представительстве банка в Москве — поэтому оформить карту через нас могут только граждане РФ. Для граждан других стран услуга пока недоступна.',
  },

  tiers: {
    heading: 'Тарифы',
    intro:
      'Три варианта карты. Все — многовалютные и работают в Apple Pay и Google Pay. Отличаются годовой платой и суточным лимитом снятия.',
    unverifiedTitle: 'Цифры ещё не подтверждены банком',
    unverifiedNotice:
      'Цифры, отмеченные [VERIFY], мы ещё не подтвердили в банке — они взяты из сторонних материалов, которые уже оказались неточными в части валют. Не принимайте их за окончательные: перед оплатой мы подтвердим условия вашего тарифа.',
    recommendedLabel: 'Рекомендуем',
    annualFeeLabel: 'в год',
    ctaRecommended: 'Оформить Platinum',
    cta: 'Оформить',
    specLabels: {
      dailyAtm: 'Лимит снятия в сутки',
      atmFee: 'Комиссия за снятие',
      crossCurrency: 'Кросс-курсовая комиссия',
      validity: 'Срок действия',
      currencies: 'Валюты счёта',
      wallets: 'Бесконтактная оплата',
      serviceFee: 'Стоимость услуги getcard',
    },
    shared: {
      atmFee: specs.shared.atmFee,
      crossCurrency: specs.shared.crossCurrency,
      validity: specs.shared.validity,
      currencies: 'Доллары, евро, дирхамы, рубли',
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
    priceNote: `Стоимость услуги getcard — ${pricing.serviceFee}. Распространяется ли эта цена на все три тарифа: ${TBD}. Входит ли в неё годовая плата за первый год: ${TBD}.`,
  },

  process: {
    heading: 'Как это работает',
    intro: 'Пять шагов. Из них офлайн только один — встреча в Москве.',
    steps: [
      {
        title: 'Заполните форму и загрузите два документа',
        body: 'Российский паспорт — страница с фотографией и страница с регистрацией. Загранпаспорт — только титульная страница. Плюс короткая форма: контакты и профессия. Больше ничего не нужно.',
      },
      {
        title: 'Автоматическая проверка',
        body: 'Система проверяет документы и данные из формы. Если чего-то не хватает или данные не сходятся, мы сразу говорим, что поправить.',
      },
      {
        title: 'Встреча в представительстве банка в Москве',
        body: `Единственный офлайн-шаг: банк должен зафиксировать личную встречу с клиентом. Это одна встреча в Москве — лететь в Бишкек не нужно. Адрес: ${contacts.moscowOffice}.`,
      },
      {
        title: 'Карта выпущена — и уже работает',
        body: 'Счёт и карта активны сразу после выпуска. Реквизиты у вас, карта добавляется в Apple Pay или Google Pay, платить можно с этого момента — пластик ещё в пути.',
      },
      {
        title: 'Пластик доставлен',
        body: 'Физическую карту передаём вам. К этому моменту вы уже пользуетесь счётом, так что доставка ничего не задерживает.',
      },
    ],
    highlightLabel: 'Здесь карта начинает работать',
    taxNotice: {
      title: 'Об уведомлении налоговой',
      body: 'Об открытии счёта в иностранном банке нужно уведомить ФНС в течение месяца, а затем ежегодно подавать отчёт о движении средств. Это обязанность владельца счёта, а не наша, — но лучше узнать о ней сейчас, чем через год.',
    },
  },

  faq: {
    heading: 'Вопросы',
    items: [
      {
        q: 'Сколько документов нужно?',
        a: 'Два. Российский паспорт — страница с фотографией и страница с регистрацией. Загранпаспорт — титульная страница. Ещё короткая форма с контактами и профессией. Справки о доходах, подтверждение адреса и нотариальные документы не требуются.',
      },
      {
        q: 'Нужно ли ехать в Кыргызстан?',
        a: 'Нет. Банк требует одной личной встречи, и она проходит в его представительстве в Москве. Всё остальное — заявление, проверка документов, выпуск — происходит онлайн.',
      },
      {
        q: 'Когда картой можно начать платить?',
        a: 'Сразу после выпуска, не дожидаясь пластика. Счёт и карта активны, реквизиты у вас, карту можно добавить в Apple Pay или Google Pay и платить с этого момента. Физическая карта приходит позже и ничего не задерживает.',
      },
      {
        q: 'В каких валютах работает счёт?',
        a: 'Доллары, евро, дирхамы и рубли. Счёт многовалютный: можно хранить и тратить в любой из этих валют, а рубли делают карту рабочей и для тех, кто живёт за границей и сохраняет связь с Россией.',
      },
      {
        q: 'Я не гражданин России. Можно оформить?',
        a: 'Сейчас — нет. Банк фиксирует личную встречу в представительстве в Москве, и требования банка ограничивают услугу гражданами России. Мы собираем запросы от граждан других стран: напишите нам, и мы сообщим, если это изменится.',
      },
      {
        q: 'Работает ли карта в России?',
        a: 'Это карта иностранного банка, и платёжные системы VISA и Mastercard не обрабатывают операции внутри России с 2022 года. Внутри страны карта не работает; она предназначена для платежей за границей, в интернете и для операций в валютах счёта.',
      },
    ],
  },

  closing: {
    heading: 'Начните с формы',
    body: 'Заполнить форму и загрузить два документа — минут десять. Мы проверим комплект и скажем, что дальше, до всякой оплаты.',
    ctaPrimary: 'Оформить карту',
    ctaSecondary: 'Задать вопрос',
  },

  footer: {
    columns: [
      {
        title: 'Карта',
        links: [
          { label: 'Кому подходит', href: '#audiences' },
          { label: 'Тарифы', href: '#tiers' },
          { label: 'Apple Pay', href: '#apple-pay' },
        ],
      },
      {
        title: 'Оформление',
        links: [
          { label: 'Как это работает', href: '#process' },
          { label: 'Документы', href: '#process' },
          { label: 'Вопросы', href: '#faq' },
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
      `${legal.entityName} · ИНН ${legal.inn} · ОГРН ${legal.ogrn}`,
      `Адрес: ${legal.registeredAddress}`,
      `Способы оплаты: ${payment.methods}. Порядок оплаты: ${payment.schedule}.`,
      `Срок до активации счёта: ${timeline.toActivation}. Срок доставки пластика: ${timeline.toDelivery}.`,
    ],
    copyright: '© 2026 getcard · getcard.kg',
    visaNote:
      'VISA — платёжная система, в которой обслуживается карта. getcard не связан с VISA и не действует от её имени. Apple Pay и Google Pay — сервисы соответствующих компаний; getcard не является их партнёром.',
  },

  a11y: {
    skipToContent: 'Перейти к содержанию',
    mainLabel: 'Основное содержание',
  },
} as const;

export type Translations = typeof ru;
