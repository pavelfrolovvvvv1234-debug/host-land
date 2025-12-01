import Link from "next/link";

const blogIntro = {
  title: "Блог об абузоустойчивом хостинге",
  summary:
    "Практические материалы про VPS, выделенные серверы, домены и работу с DMCA."
};

type BlogCard = {
  slug: string;
  title: string;
  summary: string;
};

const blogPosts: BlogCard[] = [
  {
    slug: "bulletproof-vds-blog",
    title: "Что такое абузоустойчивый VDS? Полный технический обзор, варианты использования и архитектура устойчивости к жалобам",
    summary:
      "Полное техническое погружение в архитектуру абузоустойчивого VDS, конфигурации гипервизоров, сетевую изоляцию, политики обработки жалоб и стратегии развертывания для высокорисковых рабочих нагрузок."
  },
  {
    slug: "bulletproof-domains-blog",
    title: "Абузоустойчивые домены: как работает офшорная и DMCA-устойчивая доменная инфраструктура",
    summary:
      "Техническое объяснение систем абузоустойчивых доменов, политик реестров, DNS-инфраструктуры, рабочих процессов обработки жалоб и стратегий развертывания для высокорисковых проектов."
  },
  {
    slug: "vds-vs-vps-vs-dedicated-blog",
    title: "VDS vs VPS vs Dedicated: глубокое техническое сравнение для высокорисковых и высоконагруженных проектов",
    summary:
      "Техническое сравнение архитектур VDS, VPS и выделенных серверов, технологий гипервизоров, сетевой изоляции, стеков хранения и стратегий развертывания."
  },
  {
    slug: "bulletproof-dedicated-servers-blog",
    title: "Абузоустойчивые выделенные серверы: архитектура, обработка жалоб, фильтрация трафика и IP-политики",
    summary:
      "Техническое погружение в архитектуру абузоустойчивых выделенных серверов, рабочие процессы обработки жалоб, системы фильтрации трафика, IP-политики и стратегии развертывания."
  },
  {
    slug: "dedicated-servers-blog",
    title: "Выделенные серверы: когда нужен bare-metal, производительность, изоляция и контроль IP",
    summary:
      "Руководство по инфраструктуре выделенных серверов, характеристикам производительности, преимуществам изоляции, стратегиям управления IP и лучшим практикам развертывания для высокопроизводительных рабочих нагрузок."
  },
  {
    slug: "turbovds-blog",
    title: "TurboVDS: высокопроизводительные виртуальные серверы с оптимизированным стеком CPU/RAM/IO",
    summary:
      "Технический обзор архитектуры TurboVDS, оптимизаций производительности, вариантов использования, результатов бенчмаркинга и стратегий развертывания для высокопроизводительных приложений."
  },
  {
    slug: "iphm-dedicated-servers-blog",
    title: "Выделенный сервер с IPHM: объяснение управления историей IP, преимущества, логика защиты от злоупотреблений",
    summary:
      "Полное руководство по управлению историей IP (IPHM), управлению репутацией, логике защиты от злоупотреблений, вариантам использования и стратегиям развертывания для рабочих нагрузок с высокой репутацией."
  },
  {
    slug: "offshore-hosting-blog",
    title: "Офшорный хостинг: юрисдикции, политики игнорирования DMCA, стабильность сети и риски",
    summary:
      "Техническое объяснение архитектуры офшорного хостинга, выбора юрисдикций, политик игнорирования DMCA, соображений стабильности сети, юридических рисков и стратегий развертывания."
  },
  {
    slug: "abuse-resistant-hosting-stack-blog",
    title: "Как построить абузоустойчивый хостинг-стек: DNS, L4/L7 файрволы, маршрутизация, репутация IP",
    summary:
      "Техническое руководство по построению абузоустойчивой хостинг-инфраструктуры, включая конфигурацию DNS, правила файрволов, BGP-маршрутизацию, мониторинг репутации IP и лучшие практики развертывания."
  },
  {
    slug: "dmca-ignored-hosting-blog",
    title: "DMCA-игнорируемый хостинг и DMCA-игнорируемый VDS: как это работает, кто использует, технические плюсы и минусы",
    summary:
      "Полное руководство по архитектуре DMCA-игнорируемого хостинга, рабочим процессам обработки жалоб, вариантам использования, техническим преимуществам, юридическим соображениям и стратегиям развертывания."
  },
  {
    slug: "abuse-resistant-dns-routing-guide",
    title: "Руководство по абузоустойчивому DNS и маршрутизации",
    summary:
      "Узнайте, как маршрутизировать трафик через офшорные сети и DNS-провайдеры, которые выдерживают жалобы на злоупотребления."
  },
  {
    slug: "best-bulletproof-hosting-locations-2025",
    title: "Лучшие локации для абузоустойчивого хостинга в 2025 году",
    summary:
      "Обзор топовых офшорных юрисдикций для абузоустойчивой инфраструктуры, включая NL, DE, RO и MD."
  },
  {
    slug: "bulletproof-dedicated-servers-guide",
    title: "Руководство по абузоустойчивым выделенным серверам",
    summary:
      "Когда переходить с VPS на выделенный bare metal и как проектировать абузоустойчивые аппаратные стеки."
  },
  {
    slug: "bulletproof-vds-complete-guide",
    title: "Полное руководство по абузоустойчивому VDS",
    summary:
      "Практический обзор абузоустойчивого VDS для маркетологов, приватных стартапов и security-лабораторий."
  }
];

export default function BlogIndexPageRu() {
  return (
    <div>
      <section className="bg-black/50 border border-white/10 rounded-2xl p-6">
        <h1 className="text-3xl font-bold">{blogIntro.title}</h1>
        <p className="mt-2 text-white/70">{blogIntro.summary}</p>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl font-semibold">Свежие статьи</h2>
          <div className="text-sm text-white/60 flex gap-2 items-center">
            <span>Теги:</span>
            <span className="uppercase tracking-wide text-white/80 text-xs">
              VPS · DMCA · DNS · Соответствие
            </span>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col gap-4"
            >
              <div className="text-xs uppercase tracking-wide text-white/50">
                Статья
              </div>
              <h3 className="text-xl font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-white/70">{post.summary}</p>
              <Link
                className="mt-auto inline-flex items-center gap-2 text-blue-300 hover:text-white transition"
                href={`/ru/blog/articles/${post.slug}`}
              >
                Читать статью
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}


