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
  subheading: "DMCA ignored, офшорные площадки и мгновенная выдача",
  summary:
    "Проще говоря, абузоустойчивый VPS — это сервис, который сохраняет виртуальные серверы онлайн даже при жалобах, DMCA и иных обращениях благодаря офшорным юрисдикциям (США, Великобритания, Нидерланды, Германия и ЕС) и ручной модерации."
};

const sections = [
  {
    title: "Зачем выбирать абузоустойчивые VDS?",
    body: "Такие серверы нужны, когда проект сталкивается с агрессивными абузами, но должен продолжать работу и соблюдать приватность.",
    bullets: [
      "DMCA игнорируется по умолчанию, решения принимаются после диалога.",
      "Сетевые каналы NL/DE/MD и дружественные США маршруты с запасом 150+ Гбит/с.",
      "Оплата криптовалютой, банковским переводом или анонимными тикетами без обязательного KYC."
    ]
  },
  {
    title: "Где расположены серверы?",
    body: "Узлы размещены в Амстердаме, Франкфурте, Кишинёве с прямыми маршрутами в Нью-Йорк, Лондон и Варшаву.",
    bullets: [
      "Резервирование ASN и проактивная DDoS-фильтрация.",
      "Пулы IP для США, Великобритании, Нидерландов и Германии.",
      "Частные пиринги с рекламными сетями и финтех-провайдерами."
    ]
  },
  {
    title: "Какие проекты подходят?",
    body: "Маркетинг, приватные SaaS, финтех, security-лаборатории, зеркала контента и DMCA-чувствительные медиа.",
    bullets: [
      "Полный root-доступ для контейнеров, VPN и кастомных стеков.",
      "Снапшоты, reinstall и rescue режим через панель или API.",
      "Бесшовное масштабирование до Turbo VDS или выделенных серверов."
    ]
  }
];

const steps = [
  {
    title: "Опишите нагрузки",
    description:
      "Выпишите приложения, источники трафика и риски, которые могут спровоцировать жалобы."
  },
  {
    title: "Подберите юрисдикции",
    description:
      "Выберите NL/DE/MD или гибридные США-дружественные узлы согласно аудитории."
  },
  {
    title: "Сопоставьте ресурсы",
    description:
      "Расчитайте CPU, RAM, NVMe и канал с запасом под пики."
  },
  {
    title: "Разверните и отслеживайте",
    description:
      "Закажите серверы, импортируйте образы, включите снапшоты и мониторьте тикеты с нашей NOC."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Работа с жалобами",
    bulletproof: "Ручная проверка и медиация, DMCA игнорируется по умолчанию.",
    regular: "Автоотключение после первой жалобы."
  },
  {
    label: "Юрисдикции и IP",
    bulletproof: "NL/DE/MD/US-friendly пулы, несколько ASN и чистые диапазоны.",
    regular: "Один дата-центр и предсказуемые IP."
  },
  {
    label: "Приватность и оплата",
    bulletproof: "Crypto/банк/анонимные тикеты, KYC по запросу.",
    regular: "Жёсткий AML/KYC и хранение паспортов."
  },
  {
    label: "Сетевые меры",
    bulletproof: "150+ Гбит/с, Anycast-скрабберы, ACL-автоматизация.",
    regular: "Базовый firewall без аплинкового фильтра."
  },
  {
    label: "Масштабирование",
    bulletproof: "Переход к Turbo VDS/выделенным серверам без даунтайма.",
    regular: "Требуется миграция к другому провайдеру."
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
  }
];

const faqs = [
  {
    question: "Что такое bulletproof VPS?",
    answer:
      "Это VPS, которые продолжают работу во время DMCA/abuse споров благодаря офшорному праву и ручной модерации."
  },
  {
    question: "Законны ли такие VDS?",
    answer:
      "Да, пока проект не нарушает уголовные нормы. Мы блокируем только запрещённый законом контент."
  },
  {
    question: "Где стоят ваши VDS?",
    answer:
      "Амстердам, Франкфурт, Кишинёв и маршруты в США/Великобританию."
  },
  {
    question: "Нужны ли документы для заказа?",
    answer:
      "Нет. KYC предоставляется только по запросу клиента либо его банка."
  },
  {
    question: "Можно ли переехать с обычного VPS?",
    answer:
      "Да. Импортируйте образ, согласуйте окно миграции и сохраните IP-пул."
  }
];

export default function BulletproofVdsPageRu() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)] hero-fade-in">
        <h1 className="text-3xl font-bold">{hero.heading}</h1>
        <p className="mt-2 text-white/70">{hero.subheading}</p>
        <p className="mt-4 text-white/80">{hero.summary}</p>
      </section>

      <section className="mt-6 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white/80">
        <p>
          Готовы к апгрейду? Изучите{" "}
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
          , чтобы закрепить инфраструктуру целиком.
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
          <h2 className="text-2xl font-semibold">Как запустить абузоустойчивый VDS</h2>
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
            Абузоустойчивые VDS против обычных VPS
          </h2>
          <p className="text-white/70 mt-2">
            Продолжайте работу дольше за счёт офшорной инфраструктуры.
          </p>
          <div className="mt-4 overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Критерий</th>
                  <th className="px-4 py-3">Bulletproof VDS</th>
                  <th className="px-4 py-3">Обычный VPS</th>
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


