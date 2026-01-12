"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
      "Привяжите абузоустойчивые домены, загрузите сертификаты либо закажите выпуск."
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
    title: "Что такое абузоустойчивый веб-хостинг?",
    body: "Управляемые reverse-proxy, PHP/Node окружения и CDN, устойчивые к блокировкам.",
    bullets: [
      "DMCA игнорируется до завершения проверки.",
      "Встроенный WAF и CDN, поддержка кастомных SSL.",
      "Подходит для лендингов, медиа, VPN, аналитики."
    ]
  },
  {
    title: "Где находятся сервера?",
    body: "Кластеры в Нидерландах (скоро будут другие локации) с Anycast маршрутизацией.",
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

export default function BulletproofWebHostingPageClient() {
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
              {hero.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed mb-4"
            >
              {hero.subheading}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed bg-black/40 p-6 rounded-xl border border-white/5 backdrop-blur-sm shadow-xl"
            >
              {hero.summary}
            </motion.p>
          </div>
        </div>

        {/* Steps Section */}
        {steps.length > 0 && (
          <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-8"
              >
                Как запустить абузоустойчивый веб-хостинг
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-lg font-bold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-white/70">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table */}
        {comparisonRows.length > 0 && (
          <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-2"
              >
                Абузоустойчивый web-hosting против обычного
              </motion.h2>
              <p className="text-white/70 mb-6">Управляемый стек + устойчивость к жалобам.</p>
              <div className="overflow-auto rounded-xl border border-white/10">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-white">Критерий</th>
                      <th className="px-6 py-4 font-semibold text-primary">Абузоустойчивый веб-хостинг</th>
                      <th className="px-6 py-4 font-semibold text-white/60">Классический хостинг</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, idx) => (
                      <tr key={row.label} className={`border-t border-white/10 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                        <th className="px-6 py-4 font-semibold text-white">{row.label}</th>
                        <td className="px-6 py-4 text-white/80">{row.bulletproof}</td>
                        <td className="px-6 py-4 text-white/60">{row.regular}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Info Sections */}
        {sections.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative rounded-xl border border-white/10 bg-card-gradient p-6 hover:border-primary/30 transition-all"
              >
                <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                <p className="text-sm text-white/70 mb-4">{section.body}</p>
                {section.bullets && (
                  <ul className="space-y-2">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-white/80 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Quick Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-xl border border-white/10 bg-black/40 p-4 text-center text-sm text-white/70 mb-12"
        >
          Усильте хостинг защищёнными{" "}
          <a href="/ru/bulletproof-domains" className="text-primary hover:text-primary/80 underline">
            доменами
          </a>
          , резервными{" "}
          <a href="/ru/bulletproof-vds" className="text-primary hover:text-primary/80 underline">
            VDS
          </a>{" "}
          и{" "}
          <a href="/ru/bulletproof-dedicated" className="text-primary hover:text-primary/80 underline">
            выделенными серверами
          </a>
          .
        </motion.div>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-8"
              >
                FAQ по абузоустойчивому web-hosting
              </motion.h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="group border border-white/10 rounded-lg bg-black/40 hover:border-primary/30 transition-all"
                  >
                    <summary className="cursor-pointer p-4 font-semibold text-white flex items-center justify-between hover:text-primary transition-colors">
                      <span>{faq.question}</span>
                      <span className="ml-2 transition-transform group-open:rotate-90">▶</span>
                    </summary>
                    <div className="px-4 pb-4">
                      <p className="text-sm text-white/70">{faq.answer}</p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
