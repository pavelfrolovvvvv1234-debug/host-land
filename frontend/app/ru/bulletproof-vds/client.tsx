"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  heading: "Абузоустойчивые VDS",
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
  { title: "Lite 1", cpu: 1, ram: 1, ssd: 10, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 25, url: "https://t.me/diorhost_bot" },
  { title: "Lite 2", cpu: 2, ram: 2, ssd: 40, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 27, url: "https://t.me/diorhost_bot" },
  { title: "Lite 3", cpu: 2, ram: 4, ssd: 50, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 39, url: "https://t.me/diorhost_bot" },
  { title: "Elite 1", cpu: 4, ram: 8, ssd: 80, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 65, url: "https://t.me/diorhost_bot" },
  { title: "Elite 2", cpu: 8, ram: 16, ssd: 150, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 99, url: "https://t.me/diorhost_bot" },
  { title: "Elite 3", cpu: 8, ram: 24, ssd: 200, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 115, url: "https://t.me/diorhost_bot" },
  { title: "Mega 1", cpu: 12, ram: 32, ssd: 250, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 159, url: "https://t.me/diorhost_bot" },
  { title: "Mega 2", cpu: 16, ram: 64, ssd: 300, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 199, url: "https://t.me/diorhost_bot" },
  { title: "Mega 3", cpu: 24, ram: 96, ssd: 500, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 285, url: "https://t.me/diorhost_bot" },
  { title: "Mega 4", cpu: 24, ram: 128, ssd: 700, networkSpeed: 150, bandwidth: "Unlimited", os: "Linux, Windows", price: 340, url: "https://t.me/diorhost_bot" }
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

export default function BulletproofVdsPageClient() {
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
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight"
            >
              {hero.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed"
            >
              {hero.subheading}
            </motion.p>
          </div>
        </div>

        {/* Quick Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-xl border border-white/10 bg-black/40 p-4 text-center text-sm text-white/70 mb-12"
        >
          Нужен конфиг помощнее? Предлагаем{" "}
          <a href="/ru/bulletproof-dedicated" className="text-primary hover:text-primary/80 underline">
            абузоустойчивые выделенные серверы
          </a>{" "}
          и{" "}
          <a href="/ru/bulletproof-domains" className="text-primary hover:text-primary/80 underline">
            абузоустойчивые домены
          </a>{" "}
          для максимальной стабильности
        </motion.div>

        {/* Tariff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tarifs.map((tarif, index) => (
            <motion.div
              key={tarif.title}
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative"
            >
              <div className="relative rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                <div className="relative flex flex-col h-full rounded-lg bg-black/40 p-6 hover:bg-black/60 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-lg p-2 bg-primary/10 border border-primary/20 text-primary">
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
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                        <line x1="6" x2="6.01" y1="6" y2="6" />
                        <line x1="6" x2="6.01" y1="18" y2="18" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-white">{tarif.title}</h2>
                  </div>
                  <div className="flex-1 space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">CPU</span>
                      <span className="text-white font-semibold">{tarif.cpu} core</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">RAM</span>
                      <span className="text-white font-semibold">{tarif.ram} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">SSD</span>
                      <span className="text-white font-semibold">{tarif.ssd} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Сеть</span>
                      <span className="text-white font-semibold">{tarif.networkSpeed} Mbps</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Трафик</span>
                      <span className="text-white font-semibold">{tarif.bandwidth}</span>
                    </div>
                  </div>
                  <a
                    href={tarif.url}
                    className="w-full rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-center text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    ${tarif.price}/мес
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Steps Section */}
        {steps.length > 0 && (
          <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-8"
              >
                Как оформить заказ:
              </motion.h2>
              <div className="grid gap-6 md:grid-cols-2">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0 }}
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

        {/* Info Sections */}
        {sections.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0 }}
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

        {/* Comparison Table */}
        {comparisonRows.length > 0 && (
          <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-2"
              >
                Абузоустойчивые VDS vs Классический VDS
              </motion.h2>
              <p className="text-white/70 mb-6">Контроль, приватность и устойчивость.</p>
              <div className="overflow-auto rounded-xl border border-white/10">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-white">Критерий</th>
                      <th className="px-6 py-4 font-semibold text-primary">Абузоустойчивые VDS</th>
                      <th className="px-6 py-4 font-semibold text-white/60">Классический VDS</th>
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

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-8"
              >
                FAQ по абузоустойчивым VDS
              </motion.h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={faq.question}
                    initial={{ opacity: 0 }}
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
