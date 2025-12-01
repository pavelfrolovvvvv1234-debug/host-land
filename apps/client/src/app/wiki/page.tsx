import Link from "next/link";

const wikiIntro = {
  title: "Wiki (Knowledge Base)",
  intro:
    "On this page, you'll find helpful articles, guides, and answers to frequently asked questions related to server management, domains, server setup, and other services. We've gathered everything you need to quickly resolve issues and make the most of our services."
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
    title: "For what?",
    articles: [
      { slug: "bulletproof-vds", title: "Bulletproof Virtual Servers" },
      { slug: "bulletproof-dedicated-server", title: "Bulletproof Dedicated Servers" },
      { slug: "bulletproof-domains", title: "Bulletproof Domains" },
      { slug: "turbonet-virtual-servers", title: "TurboNet Virtual Servers" },
      { slug: "virtual-servers", title: "Virtual Servers" },
      { slug: "dedicated-servers-with-iphm", title: "Dedicated Servers with IPHM" },
      { slug: "dedicated-servers", title: "Dedicated Servers" }
    ]
  },
  {
    title: "How to fix?",
    articles: [
      {
        slug: "the-error-fatal-glibc-error-cpu-does-not-support-on-centos-9",
        title: 'Fatal glibc error "CPU does not support" on CentOS 9'
      },
      {
        slug: "problem-with-session-lockout-on-windows-after-multiple-failed-login-attempts-to-server",
        title: "Session lock issue on Windows after multiple failed login attempts"
      }
    ]
  },
  {
    title: "How to install?",
    articles: [
      { slug: "fastpanel-on-server", title: "FastPanel on the server" },
      { slug: "site-on-the-server", title: "Website on the server" },
      { slug: "ispmanager-on-the-server", title: "ISPmanager on the server" }
    ]
  }
];

export default function WikiIndexPage() {
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
                    href={`/wiki/articles/${article.slug}`}
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


