/**
 * The public offer — the contract a client accepts by paying.
 *
 * Kept out of ru.ts / en.ts because it is a different kind of text: those files
 * are marketing copy that changes whenever the page does, this one is a binding
 * document with a revision date, and mixing the two invites someone to reword a
 * clause while tidying a headline.
 *
 * Structure rather than prose-with-markup: a clause knows its own number, so
 * the numbering on screen cannot drift out of step with the cross-references
 * inside the text ("в порядке раздела 9").
 *
 * The Russian text is the operative one. The English is a courtesy translation
 * and says so — a bilingual contract with no stated precedence is a dispute
 * waiting to be had.
 *
 * Anything still marked with the TBD sentinel is a value nobody has decided
 * yet, and it renders as a visible [TBD] rather than a plausible invention.
 * Grep for it before publishing: a public offer with a hole in its payment
 * terms is worse than no published offer at all.
 */
import { TBD, legal, contacts } from '../config/placeholders';
import type { Locale } from './types';

export interface OfertaClause {
  /** e.g. '1.1' — printed, and the anchor other clauses refer to. */
  id?: string;
  text?: string;
  items?: string[];
}

export interface OfertaSection {
  n: string;
  title: string;
  clauses: OfertaClause[];
}

export interface OfertaDoc {
  title: string;
  subtitle: string;
  revision: string;
  canonicalLabel: string;
  intro: string;
  sections: OfertaSection[];
  requisitesHeading: string;
  requisites: { label: string; value: string }[];
  contactsHeading: string;
  contacts: { label: string; value: string }[];
  published: string;
  /** Shown only on the English page. */
  translationNote?: string;
  backToSite: string;
}

const ru: OfertaDoc = {
  title: 'Публичная оферта на оказание информационно-консультационных услуг',
  subtitle: 'Сервис getcard',
  revision: `Редакция от ${TBD}`,
  canonicalLabel: 'Актуальная версия: getcard.kg/ru/oferta/',
  intro:
    'Это договор. Оплатив услугу, вы соглашаетесь с тем, что написано ниже, целиком и без изменений. Прочитайте его до оплаты.',
  sections: [
    {
      n: '1',
      title: 'Общие положения',
      clauses: [
        {
          id: '1.1',
          text: `Настоящий документ является публичной офертой (ст. 435, п. 2 ст. 437 ГК РФ) индивидуального предпринимателя Томашевского Андрея Николаевича, ОГРНИП ${legal.ogrnip}, ИНН ${legal.inn} (далее — «Исполнитель»), адресованной любому дееспособному физическому лицу (далее — «Клиент»).`,
        },
        {
          id: '1.2',
          text: 'Акцептом оферты является оплата услуг на Сайте (п. 3 ст. 438 ГК РФ). С момента акцепта договор считается заключённым на условиях настоящей оферты.',
        },
        {
          id: '1.3',
          text: 'Исполнитель вправе изменять оферту, публикуя новую редакцию на Сайте. Изменения вступают в силу через 5 (пять) рабочих дней после публикации и не распространяются на уже оплаченные заказы.',
        },
        {
          id: '1.4',
          text: 'Переписка через электронную почту, страницу оформления заказа и страницу отслеживания, указанные в разделе 13, признаётся Сторонами надлежащим способом обмена юридически значимыми сообщениями (ст. 165.1 ГК РФ).',
        },
      ],
    },
    {
      n: '2',
      title: 'Термины',
      clauses: [
        {
          items: [
            '**Сайт** — сайт getcard.kg, а также связанные с ним страница оформления заказа и страница отслеживания статуса заявки на app.getcard.kg.',
            '**Банк-эмитент** — кредитная организация Кыргызской Республики, выпускающая банковские карты. Банк-эмитент не является стороной договора, а Исполнитель не является его представителем, агентом или аффилированным лицом.',
            '**Карта** — платёжная карта, выпущенная Банком-эмитентом на имя Клиента.',
            '**Заявка** — комплекс данных и документов, передаваемый Клиентом для оказания услуг: фотографии страниц паспорта РФ и заграничного паспорта, заполненная анкета Банка-эмитента, контактные данные и адрес доставки.',
            '**Тариф** — пакет услуг и его стоимость, опубликованные на Сайте в разделе «Тарифы».',
            '**Номер заявки** — код вида GC-XXXXX-XXXXX, который Клиент получает после оформления. Учётная запись и пароль не создаются: номер заявки — единственный доступ к её статусу, и его сохранность обеспечивает Клиент.',
          ],
        },
      ],
    },
    {
      n: '3',
      title: 'Предмет договора',
      clauses: [
        {
          id: '3.1',
          text: 'Исполнитель оказывает Клиенту информационно-консультационные и организационные услуги, связанные с подготовкой к открытию счёта и выпуску Карты в Банке-эмитенте, в объёме выбранного Тарифа, в том числе:',
          items: [
            'консультирование по требованиям Банка-эмитента и порядку оформления;',
            'проверку комплектности и корректности документов Клиента, включая автоматическую проверку читаемости загруженных фотографий;',
            'помощь в заполнении анкет и форм Банка-эмитента;',
            'организацию одной очной встречи Клиента с представителем Исполнителя в г. Москве для подписания документов Банка-эмитента;',
            'организационное сопровождение Заявки и, если это предусмотрено Тарифом, доставку Карты.',
          ],
        },
        {
          id: '3.2',
          text: '**Исполнитель не является кредитной организацией и не оказывает банковских услуг.** Исполнитель не открывает счета, не выпускает Карты, не принимает денежные средства во вклады и не проводит операции по счетам Клиента.',
        },
        {
          id: '3.3',
          text: '**Решение об открытии счёта и выпуске Карты принимает исключительно Банк-эмитент.** Исполнитель не гарантирует положительное решение, сроки рассмотрения Заявки банком, а также возможность использования Карты в конкретных странах, магазинах или сервисах.',
        },
        {
          id: '3.4',
          text: 'Исполнитель не оказывает юридических и налоговых консультаций по законодательству РФ и иностранных государств. Упоминание таких вопросов в материалах Сайта носит справочный характер.',
        },
        {
          id: '3.5',
          text: 'Комиссии и тарифы Банка-эмитента по счёту и Карте устанавливаются Банком-эмитентом самостоятельно, могут им изменяться в одностороннем порядке и в стоимость услуг Исполнителя не входят. Выдержки из тарифов Банка-эмитента, опубликованные на Сайте, носят справочный характер и не являются офертой Банка-эмитента.',
        },
      ],
    },
    {
      n: '4',
      title: 'Порядок и сроки оказания услуг',
      clauses: [
        {
          id: '4.1',
          text: 'Услуги оказываются в течение 30 (тридцати) рабочих дней с момента получения Исполнителем оплаты и полного комплекта корректных документов. Средний срок выпуска Карты, указанный на Сайте, является ориентировочным: фактический срок определяет Банк-эмитент.',
        },
        {
          id: '4.2',
          text: 'Срок может быть увеличен, но не более чем до 90 календарных дней, в случае дополнительных проверок со стороны Банка-эмитента, праздничных дней в РФ или Кыргызской Республике, задержек служб доставки или обстоятельств непреодолимой силы. Исполнитель уведомляет Клиента о таких задержках, как только узнаёт о них.',
        },
        {
          id: '4.3',
          text: 'Течение срока приостанавливается на время, пока Клиент предоставляет запрошенные дополнительные сведения, исправляет документы или согласовывает дату очной встречи.',
        },
        {
          id: '4.4',
          text: 'Услуги считаются оказанными с момента совершения Исполнителем действий, предусмотренных Тарифом, включая уведомление Клиента о готовности Карты или передачу реквизитов счёта, либо передачу Заявки в Банк-эмитент — в зависимости от Тарифа.',
        },
        {
          id: '4.5',
          text: 'Если Клиент не направил мотивированных возражений в течение 5 (пяти) рабочих дней после уведомления об оказании услуг, услуги считаются принятыми без замечаний. Подписание отдельного акта не требуется.',
        },
        {
          id: '4.6',
          text: 'Если доставка Карты невозможна по вине Клиента (неверный адрес, отказ от получения), Исполнитель уведомляет Клиента. Повторная доставка оплачивается Клиентом. Карта хранится у Исполнителя не более 90 календарных дней с даты уведомления.',
        },
      ],
    },
    {
      n: '5',
      title: 'Права и обязанности Исполнителя',
      clauses: [
        {
          id: '5.1',
          text: 'Исполнитель обязуется:',
          items: [
            'оказывать услуги качественно и в согласованные сроки;',
            'использовать данные Клиента только для исполнения договора;',
            'не сохранять фотографии документов Клиента в файловом хранилище Сайта: они передаются специалисту и в Банк-эмитент и удаляются из памяти сервера после передачи;',
            'предоставлять Клиенту инструкции и информацию о статусе Заявки по её номеру и по запросу;',
            'не совершать никаких операций по счёту и Карте Клиента от его имени;',
            'если Банк-эмитент прекратил выпуск Карт после оплаты, но до передачи Заявки, — предложить равноценную альтернативу или вернуть оплату полностью.',
          ],
        },
        {
          id: '5.2',
          text: 'Исполнитель вправе:',
          items: [
            'самостоятельно определять способы оказания услуг и привлекать третьих лиц, оставаясь ответственным за их действия перед Клиентом;',
            'запрашивать у Клиента сведения и документы, необходимые для оказания услуг;',
            'приостановить оказание услуг при выявлении недостоверных или противоречивых данных;',
            'отказаться от исполнения договора, если Клиент предоставил заведомо ложные сведения или намерен использовать Карту в противоправных целях, с возвратом средств по правилам раздела 9;',
            'изменять Тарифы с уведомлением на Сайте не менее чем за 5 рабочих дней; изменения не затрагивают оплаченные заказы.',
          ],
        },
      ],
    },
    {
      n: '6',
      title: 'Права и обязанности Клиента',
      clauses: [
        {
          id: '6.1',
          text: 'Клиент обязуется:',
          items: [
            'ознакомиться с офертой и Тарифом до оплаты;',
            'предоставить достоверные, полные и актуальные сведения и документы;',
            'один раз явиться на очную встречу с представителем Исполнителя в г. Москве в согласованные дату и время и лично подписать документы Банка-эмитента;',
            'своевременно выполнять инструкции Исполнителя и Банка-эмитента;',
            'сохранить номер заявки: восстановление доступа к статусу Заявки иным способом не предусмотрено;',
            'сообщать об изменении контактных данных и адреса доставки;',
            'использовать для связи только официальные каналы, указанные в разделе 13;',
            'не использовать Карту для легализации доходов, полученных преступным путём, финансирования терроризма, передачи Карты третьим лицам, сокрытия выгодоприобретателя и иных противоправных целей.',
          ],
        },
        {
          id: '6.2',
          text: 'Клиент вправе:',
          items: [
            'получать информацию об Исполнителе, Тарифах и статусе Заявки;',
            'требовать надлежащего оказания услуг;',
            'отказаться от договора в любое время в порядке раздела 9.',
          ],
        },
        {
          id: '6.3',
          text: 'Если Клиент в течение 30 календарных дней не предоставил запрошенные документы, не явился на очную встречу и не отвечает на сообщения, Исполнитель вправе расторгнуть договор с возвратом средств за вычетом фактически понесённых расходов (раздел 9).',
        },
      ],
    },
    {
      n: '7',
      title: 'Заверения Клиента и обязательства перед государственными органами',
      clauses: [
        {
          id: '7.1',
          text: 'Акцептуя оферту, Клиент заверяет, что:',
          items: [
            'является дееспособным и действует в собственных интересах;',
            'все предоставленные сведения достоверны;',
            'денежные средства, которые будут проходить по Карте, имеют законное происхождение;',
            'не является публичным должностным лицом либо сообщил об этом Исполнителю.',
          ],
        },
        {
          id: '7.2',
          text: 'Клиент уведомлён, что как налоговый резидент РФ он может быть обязан:',
          items: [
            'уведомить налоговый орган об открытии, изменении реквизитов и закрытии счёта в иностранном банке в установленный законом срок;',
            'ежегодно представлять отчёт о движении средств по зарубежному счёту;',
            'соблюдать требования валютного законодательства РФ и Кыргызской Республики.',
          ],
        },
        {
          id: '7.3',
          text: 'Клиент самостоятельно исполняет указанные обязанности и несёт ответственность за их неисполнение. При необходимости Клиент самостоятельно обращается за юридической или налоговой консультацией.',
        },
      ],
    },
    {
      n: '8',
      title: 'Стоимость и порядок оплаты',
      clauses: [
        {
          id: '8.1',
          text: `Стоимость услуг определяется Тарифом, действующим на дату оплаты, и опубликована на Сайте в разделе «Тарифы». Расчёты ведутся в рублях. Цены, показанные на Сайте в долларах США, евро и дирхамах ОАЭ, являются самостоятельными ценами, а не конвертацией рублёвой, и приведены для удобства. ${TBD} — система налогообложения Исполнителя и порядок обложения НДС.`,
        },
        {
          id: '8.2',
          text: `Оплата производится ${TBD} (порядок: предоплата полностью либо частями) способом ${TBD} (например, СБП или банковской картой на Сайте). Датой оплаты считается дата поступления средств на счёт Исполнителя. Клиенту направляется кассовый чек в соответствии с 54-ФЗ.`,
        },
        {
          id: '8.3',
          text: 'В стоимость услуг **не входят**, если иное прямо не указано в Тарифе: комиссии и тарифы Банка-эмитента за открытие и обслуживание счёта и Карты, годовая плата за Карту, стоимость пополнения Карты, комиссии за переводы и конвертацию, стоимость доставки, иные платежи третьим лицам.',
        },
        {
          id: '8.4',
          text: 'Если Клиент в рамках одной Заявки оформляет вторую Карту на другую валюту, стоимость определяется акционной ценой, указанной на Сайте на дату оплаты.',
        },
      ],
    },
    {
      n: '9',
      title: 'Отказ от услуг и возврат средств',
      clauses: [
        {
          id: '9.1',
          text: 'Клиент вправе отказаться от договора в любой момент, оплатив Исполнителю фактически понесённые расходы (ст. 32 Закона РФ «О защите прав потребителей», ст. 782 ГК РФ).',
        },
        {
          id: '9.2',
          text: '**Полный возврат** производится, если:',
          items: [
            'Клиент отказался от услуг до начала их оказания (до консультации, проверки документов или передачи Заявки);',
            'услуги не оказаны по вине Исполнителя;',
            'Банк-эмитент прекратил выпуск Карт после оплаты, но до передачи Заявки (последний пункт п. 5.1).',
          ],
        },
        {
          id: '9.3',
          text: `**Частичный возврат** производится, если услуги начаты, но не завершены, в том числе при отказе Банка-эмитента. Из суммы возврата удерживается стоимость фактически оказанных этапов согласно расценкам Тарифа на Сайте (${TBD} — стоимость этапов «консультация и проверка документов» и «сопровождение Заявки») и документально подтверждённые расходы, понесённые в интересах Клиента.`,
        },
        {
          id: '9.4',
          text: 'Если услуги оказаны в полном объёме в соответствии с Тарифом (п. 4.4), отказ Банка-эмитента в выпуске Карты, последующая блокировка счёта или ограничение операций не являются основанием для возврата.',
        },
        {
          id: '9.5',
          text: `Для возврата Клиент направляет заявление на ${contacts.email} с адреса, указанного при заказе, указав ФИО, дату и сумму платежа с приложением чека, номер заявки и причину отказа.`,
        },
        {
          id: '9.6',
          text: 'Исполнитель рассматривает заявление в течение 10 календарных дней и возвращает средства тем же способом, которым была произведена оплата, в течение 10 календарных дней после принятия решения.',
        },
        {
          id: '9.7',
          text: 'Комиссии платёжных систем и банков, удержанные третьими лицами и не поступившие Исполнителю, не возвращаются, если отказ не связан с нарушением со стороны Исполнителя.',
        },
      ],
    },
    {
      n: '10',
      title: 'Ответственность',
      clauses: [
        {
          id: '10.1',
          text: 'Исполнитель не является стороной отношений между Клиентом и Банком-эмитентом и не отвечает за:',
          items: [
            'решения Банка-эмитента (отказ в открытии счёта, блокировка, закрытие, изменение тарифов и условий);',
            'действия платёжных систем, служб доставки, государственных органов и регуляторов;',
            'операции Клиента по Карте и их последствия;',
            'невозможность оказания услуг вследствие недостоверных, неполных или несвоевременно предоставленных Клиентом сведений, а также неявки Клиента на очную встречу.',
          ],
        },
        {
          id: '10.2',
          text: 'Совокупная ответственность Исполнителя ограничена суммой, фактически уплаченной Клиентом по соответствующему заказу.',
        },
        {
          id: '10.3',
          text: 'Ограничения настоящего раздела не применяются в случаях умысла или грубой неосторожности Исполнителя, а также в случаях, когда ограничение ответственности не допускается законодательством РФ, в том числе законодательством о защите прав потребителей.',
        },
      ],
    },
    {
      n: '11',
      title: 'Обстоятельства непреодолимой силы',
      clauses: [
        {
          id: '11.1',
          text: 'Стороны освобождаются от ответственности за неисполнение обязательств вследствие обстоятельств непреодолимой силы, в том числе: военных действий, санкционных и иных ограничений на международные расчёты, решений государственных органов и центральных банков, изменения законодательства, сбоев платёжных систем и банков, кибератак, стихийных бедствий.',
        },
        {
          id: '11.2',
          text: 'Сторона, для которой наступили такие обстоятельства, уведомляет другую сторону в разумный срок. Исполнение обязательств приостанавливается на время их действия.',
        },
        {
          id: '11.3',
          text: 'Если обстоятельства длятся более 30 календарных дней, любая Сторона вправе расторгнуть договор; возврат средств производится по правилам раздела 9.',
        },
      ],
    },
    {
      n: '12',
      title: 'Персональные данные',
      clauses: [
        {
          id: '12.1',
          text: `Акцептуя оферту, Клиент даёт согласие на обработку своих персональных данных в соответствии с Федеральным законом № 152-ФЗ и Политикой обработки персональных данных (${TBD} — адрес страницы политики), включая их передачу Банку-эмитенту на территории Кыргызской Республики в объёме, необходимом для оформления Карты.`,
        },
        {
          id: '12.2',
          text: 'Фотографии документов не сохраняются в файловом хранилище Сайта. Они передаются специалисту и в Банк-эмитент и удаляются из памяти сервера после передачи; на диске Сайта изображение документа не хранится ни в какой момент.',
        },
        {
          id: '12.3',
          text: 'Исполнитель принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, изменения и распространения.',
        },
        {
          id: '12.4',
          text: `Данные хранятся в течение срока действия договора и сроков, установленных законодательством, после чего уничтожаются или обезличиваются. Клиент вправе отозвать согласие, направив заявление на ${contacts.email}.`,
        },
      ],
    },
    {
      n: '13',
      title: 'Разрешение споров и заключительные положения',
      clauses: [
        { id: '13.1', text: 'Договор регулируется законодательством Российской Федерации.' },
        {
          id: '13.2',
          text: `Стороны разрешают споры путём переговоров. Претензия направляется на ${contacts.email} с описанием требований и подтверждающими документами. Срок ответа — 10 рабочих дней.`,
        },
        {
          id: '13.3',
          text: 'При недостижении согласия спор передаётся в суд в соответствии с законодательством РФ, с учётом права потребителя на выбор подсудности (ст. 17 Закона РФ «О защите прав потребителей»).',
        },
        { id: '13.4', text: 'Договор действует до полного исполнения Сторонами обязательств.' },
      ],
    },
  ],
  requisitesHeading: 'Реквизиты Исполнителя',
  requisites: [
    { label: 'Исполнитель', value: legal.entityName },
    { label: 'ОГРНИП', value: legal.ogrnip },
    { label: 'ИНН', value: legal.inn },
    { label: 'Адрес', value: legal.address },
    { label: 'Расчётный счёт', value: legal.account },
    { label: 'Банк', value: legal.bankName },
    { label: 'БИК', value: legal.bik },
    { label: 'Корреспондентский счёт', value: legal.corrAccount },
  ],
  contactsHeading: 'Контакты',
  contacts: [
    { label: 'Сайт', value: 'getcard.kg' },
    { label: 'Оформление и статус заявки', value: 'app.getcard.kg' },
    { label: 'Электронная почта', value: contacts.email },
    { label: 'Поддержка', value: contacts.supportEmail },
  ],
  published: `Дата публикации: ${TBD}`,
  backToSite: '← Вернуться на сайт',
};

const en: OfertaDoc = {
  title: 'Public offer for information and consulting services',
  subtitle: 'The getcard service',
  revision: `Revision of ${TBD}`,
  canonicalLabel: 'Current version: getcard.kg/en/oferta/',
  intro:
    'This is a contract. By paying for the service you accept everything below, in full and unamended. Read it before you pay.',
  translationNote:
    'This is a courtesy translation. The contract is concluded in Russian, and the Russian text at getcard.kg/ru/oferta/ prevails in any discrepancy.',
  sections: [
    {
      n: '1',
      title: 'General provisions',
      clauses: [
        {
          id: '1.1',
          text: `This document is a public offer (art. 435 and art. 437(2) of the Civil Code of the Russian Federation) made by sole trader Andrey Nikolaevich Tomashevsky, OGRNIP ${legal.ogrnip}, INN ${legal.inn} (the “Contractor”), addressed to any natural person with legal capacity (the “Client”).`,
        },
        {
          id: '1.2',
          text: 'Payment for the services on the Site constitutes acceptance of this offer (art. 438(3) of the Civil Code). From the moment of acceptance the contract is concluded on the terms of this offer.',
        },
        {
          id: '1.3',
          text: 'The Contractor may amend this offer by publishing a new revision on the Site. Amendments take effect 5 (five) business days after publication and do not apply to orders already paid for.',
        },
        {
          id: '1.4',
          text: 'Correspondence by email and through the order and tracking pages named in section 13 is recognised by the Parties as a proper means of exchanging legally significant messages (art. 165.1 of the Civil Code).',
        },
      ],
    },
    {
      n: '2',
      title: 'Definitions',
      clauses: [
        {
          items: [
            '**Site** — getcard.kg, together with the order page and the application-tracking page at app.getcard.kg.',
            '**Issuing bank** — a credit institution of the Kyrgyz Republic that issues bank cards. The issuing bank is not a party to this contract, and the Contractor is not its representative, agent or affiliate.',
            '**Card** — a payment card issued by the issuing bank in the Client’s name.',
            '**Application** — the set of data and documents the Client submits for the services: photographs of the pages of the Russian internal passport and of the international passport, the completed form of the issuing bank, contact details and a delivery address.',
            '**Plan** — a package of services and its price, published on the Site under “Plans”.',
            '**Order number** — a code in the form GC-XXXXX-XXXXX issued to the Client after ordering. No account or password is created: the order number is the only access to the status of the Application, and keeping it safe is the Client’s responsibility.',
          ],
        },
      ],
    },
    {
      n: '3',
      title: 'Subject of the contract',
      clauses: [
        {
          id: '3.1',
          text: 'The Contractor provides the Client with information, consulting and organisational services relating to preparation for the opening of an account and the issue of a Card at the issuing bank, to the extent of the chosen Plan, including:',
          items: [
            'advice on the issuing bank’s requirements and on the application procedure;',
            'checking that the Client’s documents are complete and correct, including an automated check that the uploaded photographs are legible;',
            'help completing the issuing bank’s forms;',
            'arranging one in-person meeting between the Client and the Contractor’s representative in Moscow for the signing of the issuing bank’s documents;',
            'organisational support of the Application and, where the Plan provides for it, delivery of the Card.',
          ],
        },
        {
          id: '3.2',
          text: '**The Contractor is not a credit institution and does not provide banking services.** The Contractor does not open accounts, does not issue Cards, does not take deposits and does not carry out transactions on the Client’s accounts.',
        },
        {
          id: '3.3',
          text: '**The decision to open an account and issue a Card is taken solely by the issuing bank.** The Contractor does not guarantee a positive decision, the bank’s processing times, or that the Card will work in any particular country, shop or service.',
        },
        {
          id: '3.4',
          text: 'The Contractor does not provide legal or tax advice under the law of the Russian Federation or of any other state. Any mention of such matters in the Site’s materials is for reference only.',
        },
        {
          id: '3.5',
          text: 'The issuing bank’s fees and tariffs for the account and the Card are set by the issuing bank itself, may be changed by it unilaterally, and are not included in the price of the Contractor’s services. Extracts from the issuing bank’s tariffs published on the Site are for reference and are not an offer by the issuing bank.',
        },
      ],
    },
    {
      n: '4',
      title: 'Procedure and timing',
      clauses: [
        {
          id: '4.1',
          text: 'The services are provided within 30 (thirty) business days of the Contractor receiving payment and a complete set of correct documents. The average issue time stated on the Site is indicative: the actual timing is determined by the issuing bank.',
        },
        {
          id: '4.2',
          text: 'The period may be extended, but by no more than 90 calendar days in total, in the event of additional checks by the issuing bank, public holidays in Russia or the Kyrgyz Republic, delays by delivery services, or force majeure. The Contractor notifies the Client of such delays as soon as it learns of them.',
        },
        {
          id: '4.3',
          text: 'The period is suspended while the Client is providing requested additional information, correcting documents, or agreeing a date for the in-person meeting.',
        },
        {
          id: '4.4',
          text: 'The services are deemed provided once the Contractor has performed the actions covered by the Plan, including notifying the Client that the Card is ready or passing on the account details, or submitting the Application to the issuing bank — depending on the Plan.',
        },
        {
          id: '4.5',
          text: 'If the Client raises no reasoned objection within 5 (five) business days of being notified that the services have been provided, the services are deemed accepted without remark. No separate acceptance certificate is required.',
        },
        {
          id: '4.6',
          text: 'If delivery of the Card is impossible through the Client’s fault (wrong address, refusal to accept), the Contractor notifies the Client. Redelivery is paid for by the Client. The Contractor holds the Card for no more than 90 calendar days from the date of notification.',
        },
      ],
    },
    {
      n: '5',
      title: 'Rights and obligations of the Contractor',
      clauses: [
        {
          id: '5.1',
          text: 'The Contractor undertakes to:',
          items: [
            'provide the services to a proper standard and within the agreed time;',
            'use the Client’s data only to perform this contract;',
            'not store photographs of the Client’s documents in the Site’s file storage: they are passed to the specialist and to the issuing bank and are dropped from server memory after being sent;',
            'give the Client instructions and information about the status of the Application on request and by its order number;',
            'carry out no transactions on the Client’s account or Card on the Client’s behalf;',
            'if the issuing bank has stopped issuing Cards after payment but before the Application was submitted — offer an equivalent alternative or refund the payment in full.',
          ],
        },
        {
          id: '5.2',
          text: 'The Contractor is entitled to:',
          items: [
            'determine the means of providing the services and engage third parties, remaining liable to the Client for their actions;',
            'request from the Client any information and documents needed to provide the services;',
            'suspend the services where inaccurate or contradictory data is found;',
            'refuse to perform the contract where the Client has knowingly provided false information or intends to use the Card for unlawful purposes, with a refund under section 9;',
            'change the Plans on not less than 5 business days’ notice on the Site; changes do not affect orders already paid for.',
          ],
        },
      ],
    },
    {
      n: '6',
      title: 'Rights and obligations of the Client',
      clauses: [
        {
          id: '6.1',
          text: 'The Client undertakes to:',
          items: [
            'read this offer and the Plan before paying;',
            'provide accurate, complete and current information and documents;',
            'attend one in-person meeting with the Contractor’s representative in Moscow at the agreed date and time and sign the issuing bank’s documents personally;',
            'follow the instructions of the Contractor and the issuing bank in good time;',
            'keep the order number: there is no other way to recover access to the status of the Application;',
            'report any change of contact details or delivery address;',
            'use only the official channels named in section 13 for contact;',
            'not use the Card for laundering the proceeds of crime, financing terrorism, passing the Card to third parties, concealing the beneficial owner, or any other unlawful purpose.',
          ],
        },
        {
          id: '6.2',
          text: 'The Client is entitled to:',
          items: [
            'receive information about the Contractor, the Plans and the status of the Application;',
            'require the services to be provided properly;',
            'withdraw from the contract at any time under section 9.',
          ],
        },
        {
          id: '6.3',
          text: 'If for 30 calendar days the Client has not provided the requested documents, has not attended the in-person meeting and does not answer messages, the Contractor may terminate the contract, refunding the payment less costs actually incurred (section 9).',
        },
      ],
    },
    {
      n: '7',
      title: 'Client’s representations and obligations towards public authorities',
      clauses: [
        {
          id: '7.1',
          text: 'By accepting this offer the Client represents that they:',
          items: [
            'have legal capacity and act in their own interest;',
            'have provided accurate information throughout;',
            'will pass only funds of lawful origin through the Card;',
            'are not a politically exposed person, or have told the Contractor that they are.',
          ],
        },
        {
          id: '7.2',
          text: 'The Client is aware that, as a Russian tax resident, they may be obliged to:',
          items: [
            'notify the tax authority of the opening of, change of details of, and closing of an account with a foreign bank, within the statutory period;',
            'file an annual report on the movement of funds through the foreign account;',
            'comply with the currency-control law of Russia and of the Kyrgyz Republic.',
          ],
        },
        {
          id: '7.3',
          text: 'The Client performs these obligations themselves and is liable for failing to do so. Where necessary, the Client obtains legal or tax advice on their own account.',
        },
      ],
    },
    {
      n: '8',
      title: 'Price and payment',
      clauses: [
        {
          id: '8.1',
          text: `The price is set by the Plan in force on the date of payment and is published on the Site under “Plans”. Settlement is in rubles. Prices shown on the Site in US dollars, euros and UAE dirhams are separate prices rather than a conversion of the ruble price, and are given for convenience. ${TBD} — the Contractor’s tax regime and VAT treatment.`,
        },
        {
          id: '8.2',
          text: `Payment is made ${TBD} (in full in advance, or in instalments) by ${TBD} (for example SBP or bank card on the Site). The date of payment is the date the funds reach the Contractor’s account. A fiscal receipt is sent to the Client in accordance with Federal Law 54-FZ.`,
        },
        {
          id: '8.3',
          text: 'The price **does not include**, unless the Plan expressly says otherwise: the issuing bank’s fees for opening and running the account and the Card, the annual card fee, the cost of topping up the Card, transfer and conversion fees, delivery costs, and any other payments to third parties.',
        },
        {
          id: '8.4',
          text: 'Where the Client orders a second Card in another currency on the same Application, the price is the promotional price shown on the Site on the date of payment.',
        },
      ],
    },
    {
      n: '9',
      title: 'Withdrawal and refunds',
      clauses: [
        {
          id: '9.1',
          text: 'The Client may withdraw from the contract at any time, paying the Contractor the costs actually incurred (art. 32 of the Russian Consumer Rights Protection Act, art. 782 of the Civil Code).',
        },
        {
          id: '9.2',
          text: 'A **full refund** is made where:',
          items: [
            'the Client withdrew before the services began (before the consultation, the document check or the submission of the Application);',
            'the services were not provided through the Contractor’s fault;',
            'the issuing bank stopped issuing Cards after payment but before the Application was submitted (final bullet of clause 5.1).',
          ],
        },
        {
          id: '9.3',
          text: `A **partial refund** is made where the services have begun but are not complete, including where the issuing bank refuses. Deducted from the refund are the cost of the stages actually performed, at the rates published with the Plan on the Site (${TBD} — the price of the “consultation and document check” and “application support” stages), and documented costs incurred in the Client’s interest.`,
        },
        {
          id: '9.4',
          text: 'Where the services have been provided in full in accordance with the Plan (clause 4.4), a refusal by the issuing bank to issue the Card, or a later block on the account or restriction of transactions, is not a ground for a refund.',
        },
        {
          id: '9.5',
          text: `To request a refund the Client sends an application to ${contacts.email} from the address given when ordering, stating their full name, the date and amount of the payment with the receipt attached, the order number, and the reason for withdrawing.`,
        },
        {
          id: '9.6',
          text: 'The Contractor considers the application within 10 calendar days and refunds the money by the same means it was paid, within 10 calendar days of the decision.',
        },
        {
          id: '9.7',
          text: 'Fees of payment systems and banks withheld by third parties and never received by the Contractor are not refunded, unless the withdrawal is due to a breach by the Contractor.',
        },
      ],
    },
    {
      n: '10',
      title: 'Liability',
      clauses: [
        {
          id: '10.1',
          text: 'The Contractor is not a party to the relationship between the Client and the issuing bank and is not liable for:',
          items: [
            'decisions of the issuing bank (refusal to open an account, a block, closure, changes to tariffs and conditions);',
            'the acts of payment systems, delivery services, public authorities and regulators;',
            'the Client’s transactions with the Card and their consequences;',
            'an inability to provide the services caused by information that the Client supplied inaccurately, incompletely or late, or by the Client failing to attend the in-person meeting.',
          ],
        },
        {
          id: '10.2',
          text: 'The Contractor’s aggregate liability is limited to the amount actually paid by the Client for the order concerned.',
        },
        {
          id: '10.3',
          text: 'The limits in this section do not apply in cases of the Contractor’s intent or gross negligence, nor where limiting liability is not permitted by Russian law, including consumer protection law.',
        },
      ],
    },
    {
      n: '11',
      title: 'Force majeure',
      clauses: [
        {
          id: '11.1',
          text: 'The Parties are released from liability for non-performance caused by force majeure, including: military action, sanctions and other restrictions on international settlement, decisions of public authorities and central banks, changes in legislation, failures of payment systems and banks, cyberattacks, and natural disasters.',
        },
        {
          id: '11.2',
          text: 'The Party affected notifies the other within a reasonable time. Performance is suspended for as long as the circumstances last.',
        },
        {
          id: '11.3',
          text: 'If the circumstances last more than 30 calendar days, either Party may terminate the contract; refunds are made under section 9.',
        },
      ],
    },
    {
      n: '12',
      title: 'Personal data',
      clauses: [
        {
          id: '12.1',
          text: `By accepting this offer the Client consents to the processing of their personal data in accordance with Federal Law 152-FZ and the Personal Data Processing Policy (${TBD} — the address of the policy page), including its transfer to the issuing bank in the Kyrgyz Republic to the extent needed to arrange the Card.`,
        },
        {
          id: '12.2',
          text: 'Photographs of documents are not kept in the Site’s file storage. They are passed to the specialist and to the issuing bank and dropped from server memory after being sent; at no point is an image of a document held on the Site’s disk.',
        },
        {
          id: '12.3',
          text: 'The Contractor takes the legal, organisational and technical measures needed to protect personal data against unlawful access, alteration and disclosure.',
        },
        {
          id: '12.4',
          text: `Data is kept for the term of the contract and for the periods set by law, after which it is destroyed or anonymised. The Client may withdraw consent by sending a request to ${contacts.email}.`,
        },
      ],
    },
    {
      n: '13',
      title: 'Disputes and final provisions',
      clauses: [
        { id: '13.1', text: 'This contract is governed by the law of the Russian Federation.' },
        {
          id: '13.2',
          text: `The Parties settle disputes by negotiation. A claim is sent to ${contacts.email} setting out the demands with supporting documents. The time for a reply is 10 business days.`,
        },
        {
          id: '13.3',
          text: 'Failing agreement, the dispute goes to court under Russian law, subject to the consumer’s right to choose the forum (art. 17 of the Consumer Rights Protection Act).',
        },
        { id: '13.4', text: 'The contract remains in force until the Parties have performed in full.' },
      ],
    },
  ],
  requisitesHeading: 'Contractor’s details',
  requisites: [
    { label: 'Contractor', value: 'Sole trader Andrey Nikolaevich Tomashevsky' },
    { label: 'OGRNIP', value: legal.ogrnip },
    { label: 'INN', value: legal.inn },
    { label: 'Address', value: legal.address },
    { label: 'Account', value: legal.account },
    { label: 'Bank', value: legal.bankName },
    { label: 'BIC', value: legal.bik },
    { label: 'Correspondent account', value: legal.corrAccount },
  ],
  contactsHeading: 'Contacts',
  contacts: [
    { label: 'Site', value: 'getcard.kg' },
    { label: 'Ordering and order status', value: 'app.getcard.kg' },
    { label: 'Email', value: contacts.email },
    { label: 'Support', value: contacts.supportEmail },
  ],
  published: `Published: ${TBD}`,
  backToSite: '← Back to the site',
};

export const oferta: Record<Locale, OfertaDoc> = { ru, en };
