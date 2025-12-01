import Link from "next/link";

const wikiIntro = {
  title: "Вики (База знаний)",
  intro:
    "На этой странице вы найдёте полезные статьи, инструкции и ответы на частые вопросы, связанные с управлением серверов, доменами, настройкой серверов и другими услугами. Мы собрали всё необходимое, чтобы вы могли быстро решать возникающие вопросы и максимально эффективно использовать наши сервисы."
};

type WikiLink = {
  slug: string;
  title: string;
};

type WikiCategory = {
  title: string;
  articles: WikiLink[];
};

const wikiCategories: WikiCategory[] = [
  {
    title: "Для чего?",
    articles: [
      { slug: "bulletproof-vds", title: "Абузоустойчивые виртуальные серверы" },
      { slug: "bulletproof-dedicated-server", title: "Абузоустойчивые выделенные серверы" },
      { slug: "bulletproof-domains", title: "Абузоустойчивые домены" },
      { slug: "turbonet-virtual-servers", title: "TurboNet виртуальные серверы" },
      { slug: "virtual-servers", title: "Виртуальные серверы" },
      { slug: "dedicated-servers-with-iphm", title: "Выделенные серверы с IPHM" },
      { slug: "dedicated-servers", title: "Выделенные серверы" }
    ]
  },
  {
    title: "Как исправить?",
    articles: [
      {
        slug: "the-error-fatal-glibc-error-cpu-does-not-support-on-centos-9",
        title: 'Фатальная ошибка glibc "CPU does not support" на CentOS 9'
      },
      {
        slug: "problem-with-session-lockout-on-windows-after-multiple-failed-login-attempts-to-server",
        title: "Проблема с блокировкой сессии на Windows после множественных неудачных попыток входа на сервер"
      }
    ]
  },
  {
    title: "Как установить?",
    articles: [
      { slug: "fastpanel-on-server", title: "FastPanel на сервере" },
      { slug: "site-on-the-server", title: "Сайт на сервере" },
      { slug: "ispmanager-on-the-server", title: "ISPmanager на сервере" }
    ]
  }
];

export default function WikiIndexPageRu() {
  return (
    <div className="wiki-index-content">
      <div className="prose prose-invert max-w-none">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{wikiIntro.title}</h1>
          <p className="mt-4 text-white/80">
            <strong>{wikiIntro.intro}</strong>
          </p>
        </div>

        {wikiCategories.map((category) => (
          <div key={category.title} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">{category.title}</h2>
            <ul className="list-none space-y-2">
              {category.articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    href={`/ru/wiki/articles/${article.slug}`}
                    className="text-blue-300 hover:text-white transition"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


