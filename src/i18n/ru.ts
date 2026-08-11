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
      'Карта VISA от лицензированного банка Кыргызстана для граждан России. Два документа — и карта ваша. Оплата Netflix, Spotify, ChatGPT, Claude, Steam, App Store и покупок за границей. Доллары, евро, дирхамы и рубли. Работает онлайн ещё до доставки пластика.',
    localeName: 'Русский',
    localeShort: 'RU',
  },

  nav: {
    wordmark: 'getcard',
    signIn: 'Войти',
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
    ctaPrimary: 'Оформить карту',
    ctaSecondary: 'Как это работает',
    tierSelectorLabel: 'Выберите тариф',
    cardAlt: 'Изображение карты VISA',
    comparisonLabel: 'Условия по тарифу',
    upgradeLabel: 'Больше, чем в Gold',
  },

  // Shared by the hero comparison and the plans section, so a tier's terms are
  // written once and cannot drift between the two.
  comparison: {
    labels: {
      annualFee: 'Годовая плата',
      dailyAtm: 'Лимит снятия в сутки',
      expressIssue: 'Срочный выпуск карты',
      minBalance: 'Неснижаемый остаток',
      atmFee: 'Комиссия за снятие',
      crossCurrency: 'Кросс-курсовая комиссия',
      currencies: 'Валюты счёта',
      wallets: 'Бесконтактная оплата',
      serviceFee: 'Стоимость услуги getcard',
    },
    shared: {
      atmFee: specs.shared.atmFee,
      crossCurrency: specs.shared.crossCurrency,
      currencies: 'Доллары, евро, дирхамы, рубли',
      wallets: 'Apple Pay, Google Pay',
      serviceFee: pricing.serviceFee,
    },
    tiers: [
      {
        id: 'gold',
        name: 'Gold',
        annualFee: specs.gold.annualFee,
        dailyAtm: specs.gold.dailyAtm,
        expressIssue: specs.expressIssue.gold,
        minBalance: specs.minBalance.gold,
        // Gold is the baseline every other tier is measured against.
        upgrades: [] as string[],
      },
      {
        id: 'platinum',
        name: 'Platinum',
        annualFee: specs.platinum.annualFee,
        dailyAtm: specs.platinum.dailyAtm,
        expressIssue: specs.expressIssue.platinum,
        minBalance: specs.minBalance.platinum,
        upgrades: ['dailyAtm'] as string[],
      },
      {
        id: 'infinite',
        name: 'Infinite',
        annualFee: specs.infinite.annualFee,
        dailyAtm: specs.infinite.dailyAtm,
        expressIssue: specs.expressIssue.infinite,
        minBalance: specs.minBalance.infinite,
        upgrades: ['dailyAtm', 'expressIssue'] as string[],
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
          'Счёт в нескольких валютах: доллары, евро, дирхамы и рубли.',
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
      'Три варианта карты. Все — многовалютные и работают в Apple Pay и Google Pay. Gold закрывает большинство задач; выше — больше лимиты.',
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
        body: 'Российский и загранпаспорт. Десять минут.',
      },
      {
        title: 'Мы оформляем — карта уже работает онлайн',
        body: 'Платите в интернете и через Apple Pay или Google Pay, не дожидаясь пластика.',
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
        a: 'Только граждане России. Банк требует личной встречи с клиентом, и она проходит в представительстве банка в Москве — поэтому оформить карту через нас могут только граждане РФ. Для граждан других стран услуга пока недоступна: напишите нам, и мы сообщим, если это изменится.',
      },
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
        a: 'Сразу после выпуска, не дожидаясь пластика. Счёт и карта активны, реквизиты у вас, карту можно добавить в Apple Pay или Google Pay и платить с этого момента.',
      },
      {
        q: 'В каких валютах работает счёт?',
        a: 'Доллары, евро, дирхамы и рубли. Счёт многовалютный: можно хранить и тратить в любой из этих валют, а рубли делают карту рабочей и для тех, кто живёт за границей и сохраняет связь с Россией.',
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
      `${legal.entityName} · ИНН ${legal.inn} · ОГРН ${legal.ogrn}`,
      `Адрес: ${legal.registeredAddress}`,
      `Способы оплаты: ${payment.methods}. Порядок оплаты: ${payment.schedule}.`,
      `Срок до активации счёта: ${timeline.toActivation}. Срок доставки пластика: ${timeline.toDelivery}.`,
      `Встреча в представительстве банка в Москве: ${contacts.moscowOffice}. Оформление доступно гражданам РФ.`,
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
