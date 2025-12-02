type ComparisonRow = { label: string; bulletproof: string; regular: string };

type DedicatedTarif = {
  title: string;
  cpu: number;
  threads: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Абузоустойчивые выделенные серверы",
  subheading: "Физический сервер в оффшорном дата-центре с абузоустойчивостью и с DMCA ignored политикой"
};

const sections = [
  {
    title: "Кому нужны такие серверы?",
    body: "Маркетинговые агентства, арбитраж трафика, криптопроекты, телеграм-инфраструктура, игровые платформы и высоконагруженные сервисы, подверженные жалобам и атакам.",
    bullets: [
      "Устойчивость к абузам и высокая толерантность к трафику любого типа.",
      "Максимальная стабильность под нагрузкой и при DDoS-атаках.",
      "Подходит для размещения ботов, лендингов, API-сервисов, крипто- и финтех-проектов."
    ]
  },
  {
    title: "Как DiorHost обеспечивает защиту?",
    body: "Абузоустойчивые дата-центры, расширенная фильтрация трафика и политика толерантности к жалобам для стабильной работы ваших сервисов.",
    bullets: [
      "Реальная DDoS-фильтрация и защитные сетевые экраны, отсекающие вредоносный трафик.",
      "Изоляция ресурсов: выделенные CPU/RAM/диски без «соседей» и просадок по мощности.",
      "Кастомные настройки безопасности: VPN, Firewall, собственные подсети и BGP-анонс."
    ]
  },
  {
    title: "Что происходит при получении абузы?",
    body: "Жалоба фиксируется в системе и обрабатывается без автоматического отключения сервиса.",
    bullets: [
      "Оператор изучает абузу и проверяет её значимость и техническую корректность.",
      "Клиенту отправляется уведомление через тикет без остановки сервера.",
      "При необходимости даётся время для корректировки контента или настроек."
    ]
  }
];

const steps = [
  {
    title: "Вы выбираете и оформляете заказ",
    description:
      "Вы выбираете и оформляете заказ на необходимую конфигурацию выделенного сервера под вашу задачу."
  },
  {
    title: "Оператор свяжется с вами",
    description:
      "В течение часа оператор свяжется с вами через тикет в биллинге и уточнит, какую операционную систему нужно установить."
  },
  {
    title: "Установка сервера",
    description:
      "В течение 6–18 часов проводится установка сервера в стойку и установка ОС."
  },
  {
    title: "Готово к использованию",
    description:
      "После завершения работ в биллинге будут доступны данные для доступа и использования сервера."
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
    bulletproof: "1-10 Gbps, фильтры, анти-DDoS, aurologic/ACL.",
    regular: "1-10 Gbps, фильтры, анти-DDoS, но без абузоустойчивости 😝"
  },
  {
    label: "Масштабирование",
    bulletproof: "Расширение/кластеризация без простоя.",
    regular: "Долгая миграция, возможные даунтаймы."
  }
];

const tarifs: DedicatedTarif[] = [
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    threads: 8,
    ram: 16,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 189,
    url: "https://my.diorhost.com/billmgr?datacenter=1&fperiod=null&period_240=1&period_242=1&period_244=1&period_246=1&period_248=1&period_250=1&period_252=1&period_254=1&period_256=1&pricelist=240&startform=v2.dedic.order.param"
  },
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    threads: 8,
    ram: 32,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 215,
    url: "https://my.diorhost.com/billmgr?datacenter=1&fperiod=null&period_240=1&period_242=1&period_244=1&period_246=1&period_248=1&period_250=1&period_252=1&period_254=1&period_256=1&pricelist=242&startform=v2.dedic.order.param"
  },
  {
    title: "2x Intel Xeon X5670",
    cpu: 12,
    threads: 24,
    ram: 64,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 235,
    url: "https://my.diorhost.com/billmgr?datacenter=1&fperiod=null&period_240=1&period_242=1&period_244=1&period_246=1&period_248=1&period_250=1&period_252=1&period_254=1&period_256=1&pricelist=244&startform=v2.dedic.order.param"
  },
  {
    title: "2x Intel Xeon X5670",
    cpu: 12,
    threads: 24,
    ram: 144,
    ssd: 500,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 265,
    url: "https://my.diorhost.com/billmgr?datacenter=1&fperiod=null&period_240=1&period_242=1&period_244=1&period_246=1&period_248=1&period_250=1&period_252=1&period_254=1&period_256=1&pricelist=246&startform=v2.dedic.order.param"
  },
  {
    title: "2x Intel Xeon 2699v4",
    cpu: 44,
    threads: 88,
    ram: 256,
    ssd: 1000,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 435,
    url: "https://my.diorhost.com/billmgr?datacenter=1&fperiod=null&period_240=1&period_242=1&period_244=1&period_246=1&period_248=1&period_250=1&period_252=1&period_254=1&period_256=1&pricelist=248&startform=v2.dedic.order.param"
  },
  {
    title: "2x Intel Xeon 2699v4",
    cpu: 44,
    threads: 88,
    ram: 512,
    ssd: 2000,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 520,
    url: "https://my.diorhost.com/billmgr?datacenter=1&fperiod=null&period_240=1&period_242=1&period_244=1&period_246=1&period_248=1&period_250=1&period_252=1&period_254=1&period_256=1&pricelist=250&startform=v2.dedic.order.param"
  },
  {
    title: "2x Intel Xeon 2699v4",
    cpu: 44,
    threads: 88,
    ram: 768,
    ssd: 4000,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 620,
    url: "https://my.diorhost.com/billmgr?datacenter=1&fperiod=null&period_240=1&period_242=1&period_244=1&period_246=1&period_248=1&period_250=1&period_252=1&period_254=1&period_256=1&pricelist=252&startform=v2.dedic.order.param"
  },
  {
    title: "2x Intel Gold 6138",
    cpu: 32,
    threads: 64,
    ram: 128,
    ssd: 500,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 345,
    url: "https://my.diorhost.com/billmgr?datacenter=1&fperiod=null&period_240=1&period_242=1&period_244=1&period_246=1&period_248=1&period_250=1&period_252=1&period_254=1&period_256=1&pricelist=254&startform=v2.dedic.order.param"
  },
  {
    title: "2x Intel Gold 6138",
    cpu: 32,
    threads: 64,
    ram: 256,
    ssd: 500,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 429,
    url: "https://my.diorhost.com/billmgr?datacenter=1&fperiod=null&period_240=1&period_242=1&period_244=1&period_246=1&period_248=1&period_250=1&period_252=1&period_254=1&period_256=1&pricelist=256&startform=v2.dedic.order.param"
  }
];

const faqs = [
  {
    question: "Что такое bulletproof dedicated?",
    answer:
      "Это выделенный сервер в офшорном дата-центре, который не отключают при DMCA и абузах"
  },
  {
    question: "Можно ли использовать свои подсети/IP?",
    answer:
      "Да. Поддерживаем BGP и анонс собственных сетей."
  },
  {
    question: "Разрешены ли маркетинг/арбитраж/Telegram-боты?",
    answer:
      "Да, если деятельность не относится к запрещённому контенту."
  },
  {
    question: "Требуется ли KYC?",
    answer:
      "Нет."
  },
  {
    question: "Можно ли использовать сервер под высокие нагрузки?",
    answer:
      "Да. Выделенные CPU/RAM/диски без соседей обеспечивают стабильность под пиками."
  }
];

export default function BulletproofDedicatedPageRu() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)] hero-fade-in">
        <h1 className="text-3xl font-bold">{hero.heading}</h1>
        <p className="mt-2 text-white/70">{hero.subheading}</p>
      </section>

      <section className="mt-6 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white/80">
        <p>
          Объедините bare metal с{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/ru/bulletproof/vds"
          >
            абузоустойчивыми VDS
          </a>{" "}
          и{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/ru/bulletproof/domains"
          >
            bulletproof-доменами
          </a>{" "}
          для полного стека.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 p-2 bg-[#09131c]/40 sm:justify-center shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] rounded-lg">
        {tarifs.map((tarif) => (
          <div
            key={tarif.title + tarif.ram}
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
                    <circle cx="12" cy="12" r="3" />
                    <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
                    <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
                    <path d="M6 6h.01" />
                  </svg>
                  <h2 className="font-bold text-xl">{tarif.title}</h2>
                </div>
                <div className="mt-auto text-xs w-full">
                  <ul className="flex flex-col gap-2">
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">CPU</span>{" "}
                      {tarif.cpu} core {tarif.threads} threads
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
                      {tarif.networkSpeed} gb/s
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
          <h2 className="text-2xl font-semibold">Как проходит процесс заказа?</h2>
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
            Абузоустойчивые выделенные vs обычные
          </h2>
          <p className="text-white/70 mt-2">
            Контроль, приватность и устойчивость.
          </p>
          <div className="mt-4 overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Критерий</th>
                  <th className="px-4 py-3">Bulletproof dedicated</th>
                  <th className="px-4 py-3">Классический dedicated</th>
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
          <h2 className="text-2xl font-semibold">FAQ по абузоустойчивым выделенным серверам</h2>
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


