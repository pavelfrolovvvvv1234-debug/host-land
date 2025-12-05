"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  icon: JSX.Element;
};

const wikiCategories: WikiCategory[] = [
  {
    title: "Для чего?",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
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
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    articles: [
      { slug: "fastpanel-on-server", title: "FastPanel на сервере" },
      { slug: "site-on-the-server", title: "Сайт на сервере" },
      { slug: "ispmanager-on-the-server", title: "ISPmanager на сервере" }
    ]
  }
];

export default function WikiIndexPageRu() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-hero-glow blur-[100px] pointer-events-none opacity-50"></div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-20 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"></div>

          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight"
            >
              {wikiIntro.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed"
            >
              {wikiIntro.intro}
            </motion.p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {wikiCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative flex flex-col rounded-xl border border-white/10 bg-card-gradient p-1"
            >
              <div className="relative flex h-full flex-col rounded-lg bg-black/40 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg p-2 bg-primary/10 border border-primary/20 text-primary">
                    {category.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                </div>
                <ul className="space-y-3 flex-1">
                  {category.articles.map((article, articleIndex) => (
                    <motion.li
                      key={article.slug}
                      initial={{ opacity: 0, x: -10 }}
                      animate={mounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + articleIndex * 0.05 }}
                    >
                      <Link
                        href={`/ru/wiki/articles/${article.slug}`}
                        className="group flex items-start gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300"
                      >
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                        <span className="flex-1 leading-relaxed">{article.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mt-0.5"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}


