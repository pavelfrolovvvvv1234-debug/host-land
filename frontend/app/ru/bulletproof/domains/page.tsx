type ComparisonRow = { label: string; bulletproof: string; regular: string };

type Zone = {
  title: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Абузоустойчивые домены",
  subheading: "Регистраторы с DMCA ignored политикой",
  summary:
    "Проще говоря, абузоустойчивый домен — это домен, зарегистрированный в офшорной юрисдикции, который остаётся онлайн даже при жалобах и DMCA для рынков США, Великобритании, Нидерландов, Германии и всего ЕС."
};

const sections = [
  {
    title: "Зачем нужны bulletproof-домены?",
    body: "Домены блокируют первыми. Офшорные регистраторы защищают бренд, SEO и почтовые репутации.",
    bullets: [
      "DMCA обрабатывается вручную, без мгновенного снятия делегирования.",
      "WHOIS privacy включён по умолчанию.",
      "Подходит для маркетинга, финтеха, VPN и медиа."
    ]
  },
  {
    title: "Какие зоны доступны?",
    body: ".com, .net, .org, .io, .cc, .uk, .us, .link и десятки других TLD по фиксированной цене.",
    bullets: [
      "Мгновенная регистрация и API.",
      "Переносы и backorder.",
      "DNSSEC, кастомные NS и glue-записи."
    ]
  },
  {
    title: "Как обрабатываются жалобы?",
    body: "Каждая абуза разбирается вручную, клиент получает уведомление и время на решение.",
    bullets: [
      "Запрет только для malware/CSA/terror.",
      "Команда комплаенса для EU/US регуляторов.",
      "Закрытые каналы для банков и рекламных сетей."
    ]
  }
];

const steps = [
  {
    title: "Определите GEO",
    description:
      "Решите, где домен будет ранжироваться и какие законы применяются."
  },
  {
    title: "Выберите TLD и срок",
    description:
      "Подберите зону и длительность регистрации/продления."
  },
  {
    title: "Настройте DNS",
    description:
      "Используйте NS Dior Host либо собственные, включите DNSSEC при необходимости."
  },
  {
    title: "Следите за контактами",
    description:
      "Держите abuse-email актуальным, чтобы отвечать на запросы NOC."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Работа с DMCA",
    bulletproof: "Ручная проверка, игнор до финального решения.",
    regular: "Мгновенная блокировка регистратором."
  },
  {
    label: "WHOIS и приватность",
    bulletproof: "Приватность включена, данные хранит офшорный оператор.",
    regular: "Открытый WHOIS или платные опции."
  },
  {
    label: "Стоимость",
    bulletproof: "Фиксированная цена $70/год (99$ для .io).",
    regular: "Плавающие тарифы и дорогие продления."
  },
  {
    label: "DNS-возможности",
    bulletproof: "DNSSEC, glue, vanity NS, API.",
    regular: "Базовый DNS."
  },
  {
    label: "Сценарии",
    bulletproof: "Маркетинг, VPN, финтех, медиа.",
    regular: "Низкорисковые корпоративные сайты."
  }
];

const domainsPrices = {
  reg: 70,
  renew: 70,
  transfer: 70
};

const zones: Zone[] = [
  { title: ".com", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".net", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".org", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".info", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".biz", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".club", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".pro", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".uk", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".guru", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".ca", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".at", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".io", price: 99, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".cc", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".us", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".link", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" },
  { title: ".bz", price: 80, url: "https://my.diorhost.com/billmgr?startform=domain" }
];

const faqs = [
  {
    question: "Что такое абузоустойчивый домен?",
    answer:
      "Домен в офшорном регистраторе, который не снимают с делегирования при первой жалобе."
  },
  {
    question: "Можно ли перенести существующий домен?",
    answer:
      "Да, поможем с EPP-кодами и окном переключения."
  },
  {
    question: "Прячете ли вы WHOIS?",
    answer: "Да, privacy включена по умолчанию и данные не передаются третьим лицам."
  },
  {
    question: "Есть ли ограничения по контенту?",
    answer:
      "Только универсальные запреты (malware, CSA, terror). Остальное обсуждается."
  },
  {
    question: "Поддерживаете ли DNSSEC?",
    answer:
      "Да, доступны DNSSEC, свои NS, IPv4/v6 glue и API."
  }
];

export default function BulletproofDomainsPageRu() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)]">
        <h1 className="text-3xl font-bold">{hero.heading}</h1>
        <p className="mt-2 text-white/70">{hero.subheading}</p>
        <p className="mt-4 text-white/80">{hero.summary}</p>
      </section>

      <section className="mt-6 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white/80">
        <p>
          Закрепите инфраструктуру: подключите{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/ru/bulletproof/vds"
          >
            абузоустойчивые VDS
          </a>{" "}
          и{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/ru/bulletproof/dedicated"
          >
            выделенные серверы
          </a>{" "}
          , чтобы домен и хостинг были под одной защитой.
        </p>
      </section>

      <div className="mt-4 bg-[#00000079] rounded-lg">
        <div className="p-4">
          <ul className="flex flex-col gap-4 mt-4 select-none sm:w-2/3 mx-auto">
            <li className="border border-[#ffffff54] hover:border-[#ffffffcc] p-2 rounded flex gap-4 justify-between items-center font-semibold pl-4">
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="m9 9.5 2 2 4-4" />
                </svg>{" "}
                Регистрация
              </div>
              <span className="bg-gradient-to-tr from-orange-700 via-pink-600 to-orange-600 p-2 rounded-lg inline-block vibrate-1-normal">
                <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-teal-100 to-green-500 bg-clip-text text-transparent font-bold">
                  {domainsPrices.reg} $
                </span>
              </span>
            </li>
            <li className="border border-[#ffffff54] hover:border-[#ffffffcc] p-2 rounded flex gap-4 justify-between items-center font-semibold pl-4">
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 2h4" />
                  <path d="M12 14v-4" />
                  <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
                  <path d="M9 17H4v5" />
                </svg>{" "}
                Продление
              </div>
              <span className="bg-gradient-to-tr from-orange-700 via-pink-600 to-orange-600 p-2 rounded-lg inline-block vibrate-1-normal">
                <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-teal-100 to-green-500 bg-clip-text text-transparent font-bold">
                  {domainsPrices.renew} $
                </span>
              </span>
            </li>
            <li className="border border-[#ffffff54] hover:border-[#ffffffcc] p-2 rounded flex gap-4 justify-between items-center font-semibold pl-4">
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3 4 7l4 4" />
                  <path d="M4 7h16" />
                  <path d="m16 21 4-4-4-4" />
                  <path d="M20 17H4" />
                </svg>{" "}
                Передача
              </div>
              <span className="bg-gradient-to-tr from-orange-700 via-pink-600 to-orange-600 p-2 rounded-lg inline-block vibrate-1-normal">
                <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-teal-100 to-green-500 bg-clip-text text-transparent font-bold">
                  {domainsPrices.transfer} $
                </span>
              </span>
            </li>
          </ul>

          <div className="mx-auto mt-4">
            <div className="inline-flex items-center justify-center w-full relative">
              <hr className="w-64 h-px my-8 bg-transparent border-0 dark:bg-white/40" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-[#040404] left-1/2 dark:text-white">
                Доступные зоны
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              {zones.map((zone) => (
                <a
                  key={zone.title}
                  href={zone.url}
                  className="w-1/2 md:w-1/4 flex-grow select-none cursor-pointer p-4 flex flex-col items-start gap-4 border border-white/40 rounded-lg hover:border-white"
                >
                  <div className="flex flex-col gap-2 items-start">
                    <h3 className="text-3xl font-bold">{zone.title}</h3>
                    <span className="bg-gradient-to-tr from-orange-700 via-pink-600 to-orange-600 p-2 rounded-lg inline-block">
                      <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-teal-100 to-green-500 bg-clip-text text-transparent font-bold">
                        {zone.price} $
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {steps.length > 0 && (
        <section className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">
            Как оформить абузоустойчивый домен
          </h2>
          <ol className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full border border-white/30 text-lg font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {sections.length > 0 && (
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.title}
              className="bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col gap-3"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="text-sm text-white/70">{section.body}</p>
              {section.bullets && (
                <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}

      {comparisonRows.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            Абузоустойчивые vs обычные домены
          </h2>
          <p className="text-white/70 mt-2">Домен остаётся онлайн даже при спорах.</p>
          <div className="mt-4 overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Критерий</th>
                  <th className="px-4 py-3">Bulletproof-домены</th>
                  <th className="px-4 py-3">Обычные домены</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-white/10">
                    <th className="px-4 py-3 font-semibold">{row.label}</th>
                    <td className="px-4 py-3 text-white/80">{row.bulletproof}</td>
                    <td className="px-4 py-3 text-white/60">{row.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">FAQ по абузоустойчивым доменам</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-white/10 rounded-lg p-4 bg-black/30"
              >
                <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="faq-arrow ml-2">▶</span>
                </summary>
                <div className="accordion-content">
                  <p className="mt-2 text-sm text-white/70">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
