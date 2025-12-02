type ComparisonRow = {
  label: string;
  bulletproof: string;
  regular: string;
};

type Tarif = {
  title: string;
  cpu: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Абузоустойчивые VDS (Bulletproof VPS)",
  subheading: "Виртуальный сервер созданный на физическом в оффшорном дата-центре с абузоустойчивостью и с DMCA ignored политикой"
};

const sections = [
  {
    title: "Что такое абузоустойчивый VDS и чем он отличается от обычного?",
    body: "Абузоустойчивый VDS — это сервер, который позволяет размещать контент с минимальными ограничениями и низкой реакцией на жалобы. Основные особенности:",
    bullets: [
      "Виртуальный выделенный сервер (VDS) с повышенной устойчивостью к жалобам.",
      "Провайдер игнорирует DMCA и другие жалобы на контент.",
      "Отличие от обычного VDS: свобода размещения спорного контента без риска мгновенного удаления."
    ]
  },
  {
    title: "Зачем нужен сервер, который игнорирует жалобы и DCMA?",
    body: "Такие серверы нужны для проектов, где обычные хостинги блокируют контент или ограничивают деятельность. Они позволяют:",
    bullets: [
      "Размещать проекты и контент, который могут заблокировать на обычных хостингах.",
      "Снизить риск внезапного удаления или блокировки.",
      "Работать с медиа, P2P или софтом, требующим «свободы» размещения."
    ]
  },
  {
    title: "Какие задачи чаще всего решают на таких серверах?",
    body: "Абузоустойчивые серверы подходят для разных целей, где важна стабильность и свобода размещения. Например:",
    bullets: [
      "Хостинг медиа-контента.",
      "Торрент-трекинги и P2P-сервисы.",
      "VPN, прокси и анонимные проекты.",
      "Тестирование софта и экспериментальные проекты."
    ]
  }
];

const steps = [
  {
    title: "Выберите конфигурацию",
    description:
      "Выберите подходящую конфигурацию сервера и нужную операционную систему."
  },
  {
    title: "Оплатите заказ",
    description:
      "Оплатите заказ любым удобным способом."
  },
  {
    title: "Дождитесь создания",
    description:
      "В течение 3–6 минут после подтверждения оплаты сервер будет создан, а данные появятся в биллинге."
  },
  {
    title: "Получите доступ",
    description:
      "Для доступа к панели управления сервером используйте кнопку «Перейти» в биллинге."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Работа с абузами",
    bulletproof: "Ручная обработка, без автоотключений.",
    regular: "Автоматическое отключение ресурса."
  },
  {
    label: "Юрисдикции",
    bulletproof: "Площадки с мягкой политикой по жалобам",
    regular: "Жёсткие правила одной страны/ЕС."
  },
  {
    label: "Приватность",
    bulletproof: "Нет KYC, приватная связь с оператором, никаких логов подключения.",
    regular: "Обязательный KYC/AML, стандартные каналы, возможны логи."
  },
  {
    label: "Сеть и защита",
    bulletproof: "150 - 1000mbit/s, фильтры, анти-DDoS, aurologic/ACL.",
    regular: "10 - 1000mbit/s, фильтры, анти-DDoS, но без абузоустойчивости 😝"
  },
  {
    label: "Масштабирование",
    bulletproof: "Расширение/кластеризация без простоя.",
    regular: "Долгая миграция, возможные даунтаймы."
  }
];

const tarifs: Tarif[] = [
  {
    title: "Lite 1",
    cpu: 1,
    ram: 1,
    ssd: 20,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 17.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=77&startform=v2.vds.order.param"
  },
  {
    title: "Lite 2",
    cpu: 2,
    ram: 2,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 32.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=83&startform=v2.vds.order.param"
  },
  {
    title: "Lite 3",
    cpu: 2,
    ram: 4,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 37.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=89&startform=v2.vds.order.param"
  },
  {
    title: "Lite 4",
    cpu: 2,
    ram: 6,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 57.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=95&startform=v2.vds.order.param"
  },
  {
    title: "Elite 1",
    cpu: 4,
    ram: 8,
    ssd: 80,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 66.66,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=101&startform=v2.vds.order.param"
  },
  {
    title: "Elite 2",
    cpu: 4,
    ram: 10,
    ssd: 100,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 76.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=107&startform=v2.vds.order.param"
  },
  {
    title: "Elite 3",
    cpu: 8,
    ram: 12,
    ssd: 150,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 95.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=113&startform=v2.vds.order.param"
  },
  {
    title: "Elite 4",
    cpu: 8,
    ram: 16,
    ssd: 200,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 115.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=119&startform=v2.vds.order.param"
  },
  {
    title: "Mega 1",
    cpu: 12,
    ram: 24,
    ssd: 300,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 145.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=125&startform=v2.vds.order.param"
  },
  {
    title: "Mega 2",
    cpu: 12,
    ram: 32,
    ssd: 320,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 175.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=131&startform=v2.vds.order.param"
  },
  {
    title: "Mega 3",
    cpu: 16,
    ram: 48,
    ssd: 320,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 199.99,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=137&startform=v2.vds.order.param"
  },
  {
    title: "Mega 4",
    cpu: 16,
    ram: 64,
    ssd: 1000,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 265.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=143&startform=v2.vds.order.param"
  }
];

const faqs = [
  {
    question: "Что такое абузоустойчивый VDS?",
    answer:
      "Это виртуальный сервер, который игнорирует жалобы и DCMA."
  },
  {
    question: "Какие задачи чаще всего решают на абузоустойчивом VDS?",
    answer:
      "Медиа-хостинг, P2P, VPN, прокси и тестирование софта."
  },
  {
    question: "Какие сетевые характеристики важны для абузоустойчивого VDS?",
    answer:
      "Стабильная сеть, высокая скорость и публичный IP."
  },
  {
    question: "Почему абузоустойчивый VDS привлекает клиентов из разных стран?",
    answer:
      "Он обеспечивает свободу размещения вне зависимости от законов страны клиента."
  },
  {
    question: "Стоит ли использовать абузоустойчивый VDS для долгосрочных проектов?",
    answer:
      "Да. Почему бы и нет? Никто ничего не блокирует =)"
  }
];

export default function BulletproofVdsPageRu() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)] hero-fade-in">
        <h1 className="text-3xl font-bold">{hero.heading}</h1>
        <p className="mt-2 text-white/70">{hero.subheading}</p>
      </section>

      <section className="mt-6 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white/80">
        <p>
          Нужен конфиг помощнее? Предлагаем{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/ru/bulletproof/dedicated"
          >
            абузоустойчивые выделенные серверы
          </a>{" "}
          и{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/ru/bulletproof/domains"
          >
            bulletproof-домены
          </a>{" "}
          для максимальной стабильности
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 p-2 bg-[#09131c]/40 sm:justify-center shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] rounded-lg">
        {tarifs.map((tarif) => (
          <div
            key={tarif.title}
            className="p-2 rounded-lg border flex-grow sm:min-w-[250px] sm:max-w-[287px] border-[#ffffff49] select-none service-card scroll-reveal revealed"
          >
            <div className="content">
              <div className="flex flex-col gap-2 !items-start !justify-start m-[20px]">
                <div className="flex flex-wrap gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="41"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="service-card-icon"
                  >
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                  </svg>
                  <h2 className="font-bold text-xl">{tarif.title}</h2>
                </div>
                <div className="mt-auto text-xs w-full">
                  <ul className="flex flex-col gap-2">
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">CPU</span>{" "}
                      {tarif.cpu} core
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">RAM</span>{" "}
                      {tarif.ram} gb
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">
                        SSD / NVME
                      </span>{" "}
                      {tarif.ssd} gb
                    </li>
                  </ul>
                  <ul className="mt-4 flex flex-col gap-2">
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        Network speed
                      </span>{" "}
                      {tarif.networkSpeed} mb/s
                    </li>
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        Bandwidth
                      </span>{" "}
                      {tarif.bandwidth}
                    </li>
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        OS
                      </span>{" "}
                      {tarif.os}
                    </li>
                  </ul>
                </div>
                <a
                  href={tarif.url}
                  className="p-2 bg-black/20 w-full rounded-lg border-[#ffffff44] mt-4 border hover:border-[#6e84e4] service-card-price"
                >
                  {tarif.price} $ / месяц (заказать)
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {steps.length > 0 && (
        <section className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Как оформить заказ:</h2>
          <ol className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 scroll-reveal revealed">
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
            Bulletproof VDS vs Классический VDS
          </h2>
          <p className="text-white/70 mt-2">
            Контроль, приватность и устойчивость.
          </p>
          <div className="mt-4 overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Критерий</th>
                  <th className="px-4 py-3">Bulletproof VDS</th>
                  <th className="px-4 py-3">Классический VDS</th>
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
          <h2 className="text-2xl font-semibold">FAQ по абузоустойчивым VDS</h2>
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


