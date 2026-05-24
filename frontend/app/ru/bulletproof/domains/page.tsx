"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type ComparisonRow = { label: string; bulletproof: string; regular: string };

type Zone = {
  title: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Абузоустойчивые домены",
  subheading: "Регистраторы с DMCA ignored политикой"
};

const sections = [
  {
    title: "Для чего нужны абузоустойчивые домены?",
    body: "Абузоустойчивый домен используется, чтобы сайт продолжал работу при внешних жалобах.",
    bullets: [
      "Позволяет сайту оставаться доступным.",
      "Снижает риск мгновенной блокировки.",
      "Защищает контент от удаления."
    ]
  },
  {
    title: "В каких случаях стоит использовать такие домены?",
    body: "Абузоустойчивые домены применяются для проектов с контентом, который часто вызывает претензии.",
    bullets: [
      "Для сайтов с спорным или рискованным контентом.",
      "Для файлообменников и торрент‑трекеров.",
      "Для ресурсов, часто получающих жалобы."
    ]
  },
  {
    title: "Как домен становится абузоустойчивым?",
    body: "Устойчивость обеспечивается сочетанием факторов со стороны регистратора и юрисдикции.",
    bullets: [
      "Регистрация у определённого регистратора.",
      "Использование юрисдикции, где жалобы игнорируются.",
      "Предоставление приватности владельца."
    ]
  }
];

const steps = [
  {
    title: "Проверьте доступность",
    description:
      "Проверьте доступность нужной доменной зоны в нашем биллинге."
  },
  {
    title: "Укажите NameServer",
    description:
      "Укажите NameServer, к которому будет привязан домен."
  },
  {
    title: "Дождитесь регистрации",
    description:
      "В течение примерно 8–16 часов домен будет зарегистрирован."
  },
  {
    title: "Управляйте NS",
    description:
      "В любой момент есть возможность сменить NS через панель."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Устойчивость к жалобам",
    bulletproof: "Высокая, сайт редко блокируют при жалобах",
    regular: "Низкая, сайт может быть заблокирован или удалён при жалобах"
  },
  {
    label: "Тип контента",
    bulletproof: "Допускаются спорные, рискованные или «серые» материалы",
    regular: "Только легальный контент, строгие правила провайдера"
  },
  {
    label: "WHOIS-приватность",
    bulletproof: "Обычно доступна или обязательна, скрывает данные владельца",
    regular: "Может быть доступна, но часто оплачивается отдельно"
  },
  {
    label: "Юрисдикция регистратора",
    bulletproof: "Часто «офшорная» или слабо регулируемая",
    regular: "Строго регулируемая юрисдикция"
  },
  {
    label: "Репутация домена",
    bulletproof: "Может быть низкой из-за ассоциаций с рисковым контентом",
    regular: "Обычно высокая, не вызывает подозрений у пользователей"
  },
  {
    label: "Стоимость",
    bulletproof: "Чаще выше из-за специфики обслуживания",
    regular: "Стандартная цена регистрации домена"
  },
  {
    label: "Применение",
    bulletproof: "Файлообменники, торрент-трекеры, спам-сайты, взрослый контент",
    regular: "Корпоративные сайты, блоги, магазины, личные проекты"
  }
];

const domainsPrices = {
  reg: 80,
  renew: 80,
  transfer: 80
};

const zones: Zone[] = [
  { title: ".com", price: 80, url: "https://my.dior.host" },
  { title: ".net", price: 80, url: "https://my.dior.host" },
  { title: ".org", price: 80, url: "https://my.dior.host" },
  { title: ".info", price: 80, url: "https://my.dior.host" },
  { title: ".biz", price: 80, url: "https://my.dior.host" },
  { title: ".club", price: 80, url: "https://my.dior.host" },
  { title: ".pro", price: 80, url: "https://my.dior.host" },
  { title: ".uk", price: 80, url: "https://my.dior.host" },
  { title: ".guru", price: 80, url: "https://my.dior.host" },
  { title: ".ca", price: 80, url: "https://my.dior.host" },
  { title: ".at", price: 80, url: "https://my.dior.host" },
  { title: ".io", price: 99, url: "https://my.dior.host" },
  { title: ".cc", price: 80, url: "https://my.dior.host" },
  { title: ".us", price: 80, url: "https://my.dior.host" },
  { title: ".link", price: 80, url: "https://my.dior.host" },
  { title: ".bz", price: 80, url: "https://my.dior.host" }
];

const faqs = [
  {
    question: "Что такое абузоустойчивый домен?",
    answer:
      "Домен в офшорном регистраторе, который не снимают с делегирования при первой жалобе."
  },
  {
    question: "Можно ли перенести существующий домен?",
    answer:
      "Да, поможем с EPP-кодами и окном переключения."
  },
  {
    question: "Прячете ли вы WHOIS?",
    answer: "Да, privacy включена по умолчанию и данные не передаются третьим лицам."
  },
  {
    question: "Есть ли ограничения по контенту?",
    answer:
      "Только универсальные запреты (malware, CSA, terror). Остальное обсуждается."
  },
  {
    question: "Насколько часто злоупотребляют такими доменами?",
    answer:
      "Абузоустойчивые домены популярны среди злоумышленников, но это не единственное их применение."
  }
];

export default function BulletproofDomainsPageRu() {
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
          Закрепите инфраструктуру: привяжите ваш домен к{" "}
          <a href="/ru/bulletproof/vds" className="text-primary hover:text-primary/80 underline">
            абузоустойчивому VDS
          </a>{" "}
          или{" "}
          <a href="/ru/bulletproof/dedicated" className="text-primary hover:text-primary/80 underline">
            выделенному серверу
          </a>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Регистрация", price: domainsPrices.reg, icon: "📝" },
            { label: "Продление", price: domainsPrices.renew, icon: "🔄" },
            { label: "Передача", price: domainsPrices.transfer, icon: "↔️" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl border border-white/10 bg-card-gradient p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-3xl font-bold text-primary">${item.price}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.label}</h3>
            </motion.div>
          ))}
        </div>

        {/* Domain Zones Grid */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center"
            >
              Доступные зоны
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {zones.map((zone, index) => (
                <motion.a
                  key={zone.title}
                  href={zone.url}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-xl border border-white/10 bg-card-gradient p-4 hover:border-primary/50 transition-all text-center group"
                >
                  <div className="text-2xl font-bold text-white mb-2">{zone.title}</div>
                  <div className="text-sm font-semibold text-primary">${zone.price}/год</div>
                </motion.a>
              ))}
            </div>
          </div>
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
                Процесс оформления абузоустойчивого домена:
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
                Bulletproof-домены vs обычные домены
              </motion.h2>
              <p className="text-white/70 mb-6">Сравнение ключевых характеристик.</p>
              <div className="overflow-auto rounded-xl border border-white/10">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-white">Критерий</th>
                      <th className="px-6 py-4 font-semibold text-primary">Bulletproof-домены</th>
                      <th className="px-6 py-4 font-semibold text-white/60">Обычные домены</th>
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
                FAQ по абузоустойчивым доменам
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
