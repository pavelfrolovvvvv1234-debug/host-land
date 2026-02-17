"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FAQItem } from "../../../components/motion/FAQItem";

type Tarif = {
  title: string;
  cpu: number;
  threads: number;
  port: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  dNet: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
  pps: string;
};

const hero = {
  heading: "TurboVDS",
  subheading: "Высокопроизводительные серверы для сетевых задач",
  summary:
    "Серверы для парсинга, mass-check, SEO, анализа безопасности и других задач с высокой сетевой активностью. Скорость до 10 Гбит/сек обеспечивает молниеносную работу без потерь в стабильности. Подходят для порт-сканирования, проверки доступности хостов, автоматизации и API-запросов. Лучше стандартных абузоустойчивых VDS за счёт высокой пропускной способности."
};

const tarifs: Tarif[] = [
  {
    title: "TurboNet L",
    cpu: 4,
    threads: 0,
    port: 20,
    ram: 8,
    ssd: 50,
    networkSpeed: 10,
    dNet: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 99,
    url:
      "https://t.me/diorhost_bot",
    pps: "~450-800"
  },
  {
    title: "TurboNet M",
    cpu: 8,
    threads: 0,
    port: 20,
    ram: 16,
    ssd: 100,
    networkSpeed: 10,
    dNet: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 159,
    url:
      "https://t.me/diorhost_bot",
    pps: "~450-800"
  },
  {
    title: "TurboNet S",
    cpu: 16,
    threads: 0,
    port: 20,
    ram: 32,
    ssd: 150,
    networkSpeed: 10,
    dNet: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 199,
    url:
      "https://t.me/diorhost_bot",
    pps: "~450-800"
  }
];

const sections = [
  {
    title: "Идеально для парсинга и массовых операций",
    body: "Серверы TurboVDS с каналом 10 Гбит/с обеспечивают пропускную способность для масштабного парсинга, mass-check и автоматизированного сбора данных без ограничений.",
    bullets: [
      "Выделенный порт 10 Гбит/с для высокоскоростных операций.",
      "Оптимизация для множественных соединений и API-запросов.",
      "Низкая задержка до основных сетей и точек обмена."
    ]
  },
  {
    title: "Почему TurboVDS лучше обычного VDS?",
    body: "Стандартный VDS обычно даёт 1 Гбит/с или разделённый канал. TurboVDS обеспечивает выделенные 10 Гбит/с с высокой PPS для сетевых задач.",
    bullets: [
      "До 10× выше пропускная способность сети.",
      "Подходит для порт-сканирования и проверки хостов.",
      "Стабильная работа при постоянной нагрузке."
    ]
  },
  {
    title: "Применение: SEO, безопасность, автоматизация",
    body: "От мониторинга SEO и анализа безопасности до нагрузочного тестирования и API-автоматизации—TurboVDS надёжно справляется с сетевыми задачами.",
    bullets: [
      "SEO-инструменты и отслеживание позиций в масштабе.",
      "Исследования в области безопасности и тестирование.",
      "Автоматизация, боты и API-интеграции."
    ]
  }
];

const steps = [
  { title: "Выберите тариф", description: "Выберите TurboNet L, M или S по потребностям в CPU, RAM и NVMe для ваших задач." },
  { title: "Оформите заказ", description: "Заполните форму — сервер будет развёрнут за минуты с полным root-доступом." },
  { title: "Настройте окружение", description: "Установите инструменты для парсинга, скрипты или автоматизацию. Настройте сеть и фаервол." },
  { title: "Запустите операции", description: "Выполняйте парсинг, mass-check, SEO-инструменты или API-автоматизацию с каналом 10 Гбит/с." }
];

const faqs = [
  { question: "Что такое TurboVDS?", answer: "TurboVDS — высокопроизводительный VDS с выделенным каналом 10 Гбит/с, оптимизированный для парсинга, mass-check, SEO-мониторинга, анализа безопасности и других сетевых задач. Превосходит стандартный VDS по пропускной способности и PPS." },
  { question: "Какой канал у TurboVDS?", answer: "TurboVDS даёт выделенную скорость 10 Гбит/с с безлимитным трафиком. Тарифы включают порт 20 Гбит и высокий PPS для множества одновременных соединений." },
  { question: "Для каких задач подходит TurboVDS?", answer: "TurboVDS подходит для парсинга, mass-check, отслеживания SEO-позиций, порт-сканирования, проверки доступности хостов, исследований в области безопасности, нагрузочного тестирования и API-автоматизации с высокой пропускной способностью сети." },
  { question: "Чем TurboVDS отличается от обычного VDS?", answer: "Обычный VDS обычно даёт 1 Гбит/с или shared-канал. TurboVDS обеспечивает выделенные 10 Гбит/с с высоким PPS, рассчитанными на постоянную сетевую нагрузку." }
];

export default function TurboVDSPageClientRu() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-hero-glow blur-[100px] pointer-events-none opacity-50"></div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
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
              className="text-base sm:text-lg text-white/70 mb-4"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
          {tarifs.map((tarif, index) => (
            <motion.div
              key={tarif.title}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-white">{tarif.title}</h2>
                  </div>
                  <div className="flex-1 space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">CPU</span>
                      <span className="text-white font-semibold">{tarif.cpu} ядер</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">RAM (DDR5)</span>
                      <span className="text-white font-semibold">{tarif.ram} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">NVMe</span>
                      <span className="text-white font-semibold">{tarif.ssd} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Сеть</span>
                      <span className="text-white font-semibold">{tarif.networkSpeed} Gbps</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Порт</span>
                      <span className="text-white font-semibold">{tarif.port} Gbit</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Kpps</span>
                      <span className="text-white font-semibold">{tarif.pps}</span>
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

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12 mt-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              С чего начать
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-5"
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

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              Почему TurboVDS?
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-3">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group relative"
              >
                <div className="relative rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                  <div className="relative flex flex-col h-full rounded-lg bg-black/40 p-6 hover:bg-black/60 transition-all">
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-4">{section.title}</h3>
                    <p className="text-sm text-white/70 mb-4 flex-1">{section.body}</p>
                    {section.bullets && (
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, idx) => (
                          <li key={idx} className="text-sm text-white/80 flex items-start gap-2">
                            <span className="text-primary mt-1 flex-shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              FAQ
            </motion.h2>
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
