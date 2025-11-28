type ComparisonRow = { label: string; bulletproof: string; regular: string };

const hero = {
  heading: "Абузоустойчивый веб-хостинг",
  subheading: "Управляемые офшорные платформы с DMCA ignored политикой",
  summary:
    "Проще говоря, абузоустойчивый веб-хостинг — это управляемый стек, который продолжает работать даже при жалобах и DMCA, благодаря офшорным площадкам в США, Великобритании, Нидерландах, Германии и странах ЕС."
};

const steps = [
  {
    title: "Определите сайты и GEO",
    description:
      "Перечислите домены и страны, где нужна доступность."
  },
  {
    title: "Выберите режим хостинга",
    description:
      "Управляемые shared-планы, контейнеры или гибрид web + VDS."
  },
  {
    title: "Настройте домены и SSL",
    description:
      "Привяжите bulletproof-домены, загрузите сертификаты либо закажите выпуск."
  },
  {
    title: "Запустите и мониторьте",
    description:
      "Разверните проект, включите бэкапы и следите за тикетами."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Работа с DMCA",
    bulletproof: "Ручная медиация, игнор до решения.",
    regular: "Авто-блокировка."
  },
  {
    label: "Инфраструктура",
    bulletproof: "Офшорные кластеры, изоляция в VDS/DED.",
    regular: "Один дата-центр."
  },
  {
    label: "Приватность",
    bulletproof: "Crypto/банк, кастомные процессы KYC.",
    regular: "Жёсткий сбор документов."
  },
  {
    label: "Масштабирование",
    bulletproof: "Плавный апгрейд к VDS/DED.",
    regular: "Сложные миграции."
  },
  {
    label: "Поддержка",
    bulletproof: "24/7 NOC + abuse desk.",
    regular: "Общая очередь."
  }
];

const sections = [
  {
    title: "Что такое bulletproof web-hosting?",
    body: "Управляемые reverse-proxy, PHP/Node окружения и CDN, устойчивые к блокировкам.",
    bullets: [
      "DMCA игнорируется до завершения проверки.",
      "Встроенный WAF и CDN, поддержка кастомных SSL.",
      "Подходит для лендингов, медиа, VPN, аналитики."
    ]
  },
  {
    title: "Где находятся сервера?",
    body: "Кластеры в Амстердаме, Франкфурте и Нью-Йорке с Anycast маршрутизацией.",
    bullets: [
      "150+ Гбит/с и DDoS-миграция.",
      "Возможность изоляции в VDS/выделенные серверы.",
      "Панель и API для деплоя и бэкапов."
    ]
  },
  {
    title: "Как обрабатываются жалобы?",
    body: "Абуз-команда анализирует тикеты, связывается с клиентом и удерживает сервис онлайн.",
    bullets: [
      "Нулевая терпимость только к malware/CSA/terror.",
      "Документы требуются только по запросу.",
      "Персональные менеджеры для сложных кейсов."
    ]
  }
];

const faqs = [
  {
    question: "Что такое абузоустойчивый веб-хостинг?",
    answer:
      "Управляемый хостинг, который не падает от DMCA благодаря офшорным правилам."
  },
  {
    question: "Поддерживаются ли PHP/Node/Static?",
    answer:
      "Да, поддерживаем современные рантаймы, прокси и контейнеры."
  },
  {
    question: "Есть ли CDN/WAF?",
    answer:
      "Все тарифы включают CDN и WAF, возможны кастомные настройки."
  },
  {
    question: "Поможете переехать?",
    answer:
      "Да, переносим файлы, БД и SSL без даунтайма."
  },
  {
    question: "Как оплачивать?",
    answer:
      "Crypto, банковский перевод и счета для компаний; карты через партнёров."
  }
];

export default function BulletproofWebHostingPageRu() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)]">
        <h1 className="text-3xl font-bold">{hero.heading}</h1>
        <p className="mt-2 text-white/70">{hero.subheading}</p>
        <p className="mt-4 text-white/80">{hero.summary}</p>
      </section>

      {steps.length > 0 && (
        <section className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">
            Как запустить абузоустойчивый веб-хостинг
          </h2>
          <ol className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full border border-white/30 text-lg font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  {step.description && (
                    <p className="text-sm text-white/70">{step.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {comparisonRows.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">
            Абузоустойчивый web-hosting против обычного
          </h2>
          <p className="text-white/70 mt-2">Управляемый стек + устойчивость к жалобам.</p>
          <div className="mt-4 overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Критерий</th>
                  <th className="px-4 py-3">Bulletproof web-hosting</th>
                  <th className="px-4 py-3">Классический хостинг</th>
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

      {sections.length > 0 && (
        <section className="mt-8 grid gap-6 md:grid-cols-3">
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

      <section className="mt-6 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white/80">
        <p>
          Усильте хостинг защищёнными{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/ru/bulletproof/domains"
          >
            доменами
          </a>
          , резервными{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/ru/bulletproof/vds"
          >
            VDS
          </a>{" "}
          и{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/ru/bulletproof/dedicated"
          >
            выделенными серверами
          </a>{" "}
          .
        </p>
      </section>

      {faqs.length > 0 && (
        <section className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">FAQ по абузоустойчивому web-hosting</h2>
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


