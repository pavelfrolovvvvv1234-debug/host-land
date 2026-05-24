"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
    url: "https://my.dior.host"
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
          Объедините bare metal с{" "}
          <a href="/ru/bulletproof/vds" className="text-primary hover:text-primary/80 underline">
            абузоустойчивыми VDS
          </a>{" "}
          и{" "}
          <a href="/ru/bulletproof/domains" className="text-primary hover:text-primary/80 underline">
            bulletproof-доменами
          </a>{" "}
          для полного стека.
        </motion.div>

        {/* Tariff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tarifs.map((tarif, index) => (
            <motion.div
              key={`${tarif.title}-${tarif.ram}`}
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
                        <circle cx="12" cy="12" r="3" />
                        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
                        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
                        <path d="M6 6h.01" />
                        <path d="M6 18h.01" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-white">{tarif.title}</h2>
                  </div>
                  <div className="flex-1 space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">CPU</span>
                      <span className="text-white font-semibold">{tarif.cpu} cores / {tarif.threads} threads</span>
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
                      <span className="text-white font-semibold">{tarif.networkSpeed} Gbps</span>
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
                Как проходит процесс заказа?
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
                Абузоустойчивые выделенные vs обычные
              </motion.h2>
              <p className="text-white/70 mb-6">Контроль, приватность и устойчивость.</p>
              <div className="overflow-auto rounded-xl border border-white/10">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-white">Критерий</th>
                      <th className="px-6 py-4 font-semibold text-primary">Bulletproof dedicated</th>
                      <th className="px-6 py-4 font-semibold text-white/60">Классический dedicated</th>
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
                FAQ по абузоустойчивым выделенным серверам
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
