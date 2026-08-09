import { TBD, serviceFee, payment, timeline, legal, contacts } from '../config/placeholders';

/**
 * Russian copy — written first. English is translated from this file,
 * not the other way round. Russian is the actual market.
 *
 * Hard content rules enforced here:
 *  - the issuing bank is never named; it is "лицензированный банк Кыргызстана"
 *  - no superlatives about the bank; only verifiable facts
 *  - no third-party brand names in the use-case section
 *  - no claim of affiliation or endorsement by any bank, network, or Apple
 */
export const ru = {
  meta: {
    title: 'getcard — долларовая карта VISA удалённо',
    description:
      'Помогаем гражданам России удалённо оформить долларовую карту VISA в лицензированном банке Кыргызстана. Apple Pay и Google Pay. Годовая плата от $20.',
    localeName: 'Русский',
    localeShort: 'RU',
  },

  header: {
    // Two audiences, two different reasons to want this card, so two slogans
    // rather than one. Residents of Russia are working around payment
    // limitations; Russians living abroad have no such limitation locally and
    // want the opposite direction — keeping a financial link to Russia.
    //
    // A static site cannot detect which visitor it has, so both are shown and
    // each is labelled. Kept factual rather than promotional: DESIGN.md §9 is
    // plain and unhurried, and this audience is comparison-shopping.
    audiences: [
      { label: 'Если вы в России', slogan: 'Снова платить за границей' },
      { label: 'Если вы за границей', slogan: 'Не терять связь с Россией' },
    ],
  },

  nav: {
    wordmark: 'getcard',
    links: [
      { label: 'Что умеет карта', href: '#uses' },
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
    headline: 'Долларовая карта VISA, оформленная удалённо',
    tagline: 'Выпускает лицензированный банк Кыргызстана. Ехать никуда не нужно.',
    ctaPrimary: 'Оформить карту',
    ctaSecondary: 'Как это работает',
    tierSelectorLabel: 'Выберите тариф',
    cardAlt: 'Изображение долларовой карты VISA',
    specs: {
      annualFee: 'Годовая плата',
      dailyAtm: 'Лимит снятия в сутки',
      validity: 'Срок действия',
    },
  },

  disclosure: {
    homepage:
      'getcard — независимый посредник. Мы не банк и не выпускаем карты. Мы готовим документы и подаём заявление в лицензированный банк Кыргызстана от вашего имени по нотариальной доверенности.',
    footer:
      'getcard — независимый посредник. Мы не банк, не выпускаем карты и не связаны партнёрскими отношениями ни с одним банком или платёжной системой.',
  },

  applePay: {
    heading: 'Apple Pay работает с 28 июля 2026 года',
    body: [
      'Apple Pay запустился в Кыргызстане 28 июля 2026 года. Банк, который выпускает карту, вошёл в первую волну — карта добавляется в Wallet и работает с первого дня.',
      'Счёт и карта начинают работать до того, как вы получите пластик. Добавить карту в Apple Pay или Google Pay и платить ею можно сразу после открытия счёта — не дожидаясь доставки.',
      'Visa не берёт дополнительную комиссию за оплату через Apple Pay. Комиссии и курс те же, что при оплате пластиковой картой.',
      'Google Pay тоже поддерживается.',
    ],
  },

  uses: {
    heading: 'Что умеет карта',
    items: [
      {
        title: 'Платежи и снятие наличных за границей',
        body: 'Оплата в магазинах, кафе и терминалах везде, где принимают VISA. Снятие наличных в банкоматах — комиссия 1%, минимум $3.',
      },
      {
        title: 'Зарубежные подписки и сервисы',
        body: 'Оплата зарубежных подписок и онлайн-сервисов, которые не принимают карты, выпущенные в России.',
      },
      {
        title: 'SWIFT-переводы в дирхамах',
        body: 'Входящие и исходящие переводы по SWIFT. Только в дирхамах ОАЭ (AED) — переводы в долларах и евро недоступны.',
      },
    ],
  },

  tiers: {
    heading: 'Тарифы',
    intro:
      'Три варианта карты. Все — долларовые, VISA, со сроком действия 5 лет. Отличаются годовой платой и суточным лимитом снятия.',
    recommendedLabel: 'Рекомендуем',
    annualFeeLabel: 'в год',
    ctaRecommended: 'Оформить Platinum',
    cta: 'Оформить',
    specLabels: {
      dailyAtm: 'Лимит снятия в сутки',
      atmFee: 'Комиссия за снятие',
      crossCurrency: 'Кросс-курсовая комиссия',
      validity: 'Срок действия',
      currency: 'Валюта счёта',
      wallets: 'Бесконтактная оплата',
      serviceFee: 'Стоимость услуги getcard',
    },
    shared: {
      atmFee: '1%, минимум $3',
      crossCurrency: '1,5%',
      validity: '5 лет',
      currency: 'Только доллары США',
      wallets: 'Apple Pay, Google Pay',
    },
    list: [
      {
        id: 'gold',
        name: 'Gold',
        annualFee: '$20',
        dailyAtm: '$6 000',
        serviceFee: serviceFee.gold,
        recommended: false,
      },
      {
        id: 'platinum',
        name: 'Platinum',
        annualFee: '$100',
        dailyAtm: '$12 000',
        serviceFee: serviceFee.platinum,
        recommended: true,
      },
      {
        id: 'infinite',
        name: 'Infinite',
        annualFee: '$150',
        dailyAtm: '$12 000',
        serviceFee: serviceFee.infinite,
        recommended: false,
      },
    ],
    currencyNote:
      'Счёт долларовый и только долларовый — это не мультивалютная карта. Покупки в других валютах конвертируются по кросс-курсовой комиссии 1,5%.',
  },

  process: {
    heading: 'Как это работает',
    intro: `Пять шагов от документов до карты в руках. Весь срок — ${timeline.total}.`,
    steps: [
      {
        title: 'Отправьте документы',
        body: 'Скан загранпаспорта и внутреннего паспорта. Мы проверяем комплект и говорим, если чего-то не хватает.',
      },
      {
        title: 'Подпишите договор',
        body: 'Договор с getcard и нотариальная доверенность на подачу заявления от вашего имени. Доверенность оформляется у нотариуса в вашем городе.',
      },
      {
        title: 'Оплатите',
        body: `Способы оплаты: ${payment.methods}. Порядок оплаты: ${payment.schedule}.`,
      },
      {
        title: 'Мы подаём заявление в банк',
        body: 'Наш представитель подаёт документы в отделение лицензированного банка Кыргызстана и открывает счёт по доверенности.',
      },
      {
        title: 'Карта доставлена',
        body: 'Карта и реквизиты счёта передаются вам. Дальше вы распоряжаетесь счётом сами — getcard не имеет к нему доступа.',
      },
    ],
    routeNote: `Сейчас описан один маршрут — подача по нотариальной доверенности. Наличие маршрута без доверенности: ${TBD}.`,
    taxNotice: {
      title: 'Об уведомлении налоговой',
      body: 'Об открытии счёта в иностранном банке нужно уведомить ФНС в течение месяца, а затем ежегодно подавать отчёт о движении средств. Это обязанность владельца счёта, а не наша, — но лучше узнать о ней сейчас, чем через год.',
    },
  },

  faq: {
    heading: 'Вопросы',
    items: [
      {
        q: 'Нужно ли ехать в Кыргызстан?',
        a: 'Нет. Заявление подаёт наш представитель по нотариальной доверенности. Вам нужно один раз сходить к нотариусу в своём городе — больше никаких поездок.',
      },
      {
        q: 'Зачем нужна доверенность?',
        a: 'Банк открывает счёт только при личном обращении — самого клиента или его представителя. Нотариальная доверенность даёт нашему представителю право подать заявление от вашего имени. Она ограничена подачей документов и открытием счёта: распоряжаться деньгами по ней нельзя.',
      },
      {
        q: 'Сколько это занимает?',
        a: `Полный срок от отправки документов до получения карты — ${timeline.total}. Точный срок зависит от того, как быстро вы оформите доверенность.`,
      },
      {
        q: 'Какие документы нужны?',
        a: 'Загранпаспорт, внутренний паспорт и нотариальная доверенность. Справки о доходах и подтверждение места жительства не требуются.',
      },
      {
        q: 'Как пополнять карту?',
        a: `Счёт долларовый, пополняется переводом. Доступные способы: ${payment.methods}. Пополнение — ваша операция со счётом напрямую, getcard в ней не участвует.`,
      },
      {
        q: 'Работает ли карта в России?',
        a: 'Нет. Это карта иностранного банка, а платёжные системы VISA и Mastercard не обрабатывают операции внутри России с 2022 года. Карта предназначена для платежей за границей и в интернете.',
      },
    ],
  },

  closing: {
    heading: 'Начните с документов',
    body: 'Первый шаг — скан загранпаспорта. Мы посмотрим комплект и скажем, что дальше, до всякой оплаты.',
    ctaPrimary: 'Оформить карту',
    ctaSecondary: 'Задать вопрос',
  },

  footer: {
    columns: [
      {
        title: 'Карта',
        links: [
          { label: 'Что умеет карта', href: '#uses' },
          { label: 'Тарифы', href: '#tiers' },
          { label: 'Apple Pay', href: '#apple-pay' },
        ],
      },
      {
        title: 'Оформление',
        links: [
          { label: 'Как это работает', href: '#process' },
          { label: 'Вопросы', href: '#faq' },
          { label: 'Документы', href: '#process' },
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
    ],
    copyright: '© 2026 getcard',
    visaNote:
      'VISA — платёжная система, в которой обслуживается карта. getcard не связан с VISA и не действует от её имени. Apple Pay и Google Pay — сервисы соответствующих компаний; getcard не является их партнёром.',
  },

  a11y: {
    skipToContent: 'Перейти к содержанию',
    mainLabel: 'Основное содержание',
  },
} as const;

export type Translations = typeof ru;
