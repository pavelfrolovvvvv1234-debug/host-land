"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "../../../components/motion/ScrollReveal";
import { StaggerContainer } from "../../../components/motion/StaggerContainer";
import { fadeInUp, scaleOnHover, cardHover, iconRotate } from "../../../lib/motion";

// Content configuration (easy to localize)
const content = {
  hero: {
    title: "Партнёрская программа для bulletproof хостинга",
    subheading: "До 15% revshare с bulletproof VDS, IPHM и доменов. Пожизненные комиссии.",
    ctaPrimary: "Зарегистрироваться как партнёр",
    ctaSecondary: "Войти в партнёрскую панель"
  },
  howItWorks: {
    title: "Как это работает",
    steps: [
      {
        number: 1,
        title: "Поделитесь ссылкой",
        description: "Поделитесь вашей реферальной ссылкой или промокодом.",
        icon: "link"
      },
      {
        number: 2,
        title: "Дождитесь регистрации",
        description: "Новые клиенты регистрируются, используя вашу ссылку или промокод.",
        icon: "user"
      },
      {
        number: 3,
        title: "Получайте прибыль",
        description: "Вы получаете процент с каждого их заказа.",
        icon: "dollar"
      }
    ]
  },
  partnerLevels: {
    title: "Уровни партнёров",
    tiers: [
      {
        name: "Bronze",
        monthlyTurnover: "$0 - $1,000",
        revshare: "5%",
        bonuses: "Стандартная поддержка",
        recommended: false
      },
      {
        name: "Silver",
        monthlyTurnover: "$1,000 - $5,000",
        revshare: "8%",
        bonuses: "Приоритетная поддержка + Дополнительно $10 CPA за сервер",
        recommended: false
      },
      {
        name: "Gold",
        monthlyTurnover: "$5,000 - $15,000",
        revshare: "12%",
        bonuses: "Выделенный менеджер + Дополнительно $20 CPA за клиента IPHM",
        recommended: true
      },
      {
        name: "Platinum",
        monthlyTurnover: "$15,000+",
        revshare: "15%",
        bonuses: "VIP менеджер + Индивидуальные CPA сделки + Маркетинговые материалы",
        recommended: false
      }
    ]
  },
  whatWeTrack: {
    title: "Что мы отслеживаем",
    features: [
      { name: "Клики", description: "Отслеживание каждого клика по вашим реферальным ссылкам" },
      { name: "Регистрации", description: "Мониторинг новых регистраций клиентов" },
      { name: "Активные услуги", description: "Отслеживание статуса услуг в реальном времени" },
      { name: "Выплаты", description: "Автоматический расчёт выплат" }
    ],
    additional: [
      "Панель в реальном времени",
      "Поддержка Postback / webhook / API"
    ]
  },
  faq: {
    title: "Часто задаваемые вопросы",
    items: [
      {
        question: "Как производятся выплаты?",
        answer: "Выплаты автоматически переводятся на ваш счёт первого числа каждого месяца. Вы можете вывести средства через криптовалюту (Bitcoin, USDT), банковский перевод или использовать средства для оплаты собственных услуг."
      },
      {
        question: "Какой срок жизни cookie?",
        answer: "Наше реферальное отслеживание использует срок жизни cookie 90 дней. Если посетитель кликнет по вашей реферальной ссылке и зарегистрируется в течение 90 дней, вы получите кредит за этого клиента."
      },
      {
        question: "Разрешаете ли вы брендовый SEO трафик?",
        answer: "Да, мы разрешаем брендовый SEO трафик. Вы можете продвигать наши услуги через SEO, контент-маркетинг и органический поисковый трафик. Однако мы не разрешаем ставки на наши брендовые ключевые слова в платной рекламе."
      },
      {
        question: "Разрешён ли стимулированный трафик?",
        answer: "Стимулированный трафик (предложение вознаграждений за регистрации) разрешён в индивидуальном порядке. Пожалуйста, свяжитесь с нами, чтобы обсудить ваш источник трафика и обеспечить соответствие нашим условиям."
      },
      {
        question: "Как отслеживать моих рефералов?",
        answer: "После регистрации вы получите доступ к партнёрской панели с статистикой в реальном времени, включая клики, регистрации, активные услуги, заработок и историю выплат. Поддержка API и webhook доступна для продвинутой интеграции."
      },
      {
        question: "Могу ли я использовать мою реферальную ссылку на нескольких сайтах?",
        answer: "Да, вы можете использовать вашу реферальную ссылку или промокод на нескольких сайтах, в социальных сетях, email-кампаниях или любых других маркетинговых каналах. Нет ограничений на количество сайтов или каналов, которые вы можете использовать."
      }
    ]
  },
  finalCta: {
    title: "Готовы зарабатывать на bulletproof инфраструктуре?",
    subtitle: "Мы уже работаем с партнёрами в ЕС, США и СНГ в высокорисковых вертикалях.",
    cta: "Стать партнёром",
    termsLink: "Посмотреть условия программы"
  }
};

// Icon components
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

type IconComponentType = React.FC<IconProps>;

const LinkIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const UserIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const DollarIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ChartIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);

const iconMap: Record<string, IconComponentType> = {
  link: LinkIcon,
  user: UserIcon,
  dollar: DollarIcon,
  chart: ChartIcon
};

// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [heights, setHeights] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    // Измеряем высоту всех контентов после монтирования
    const measureHeights = () => {
      const newHeights: { [key: number]: number } = {};
      content.faq.items.forEach((_, index) => {
        const element = document.getElementById(`faq-content-${index}`);
        if (element) {
          newHeights[index] = element.scrollHeight;
        }
      });
      setHeights(newHeights);
    };
    
    // Небольшая задержка для гарантии, что DOM готов
    setTimeout(measureHeights, 100);
    measureHeights();
  }, []);

  return (
    <ScrollReveal>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-white text-center">
          {content.faq.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon: IconComponentType = (index % 2 === 0 ? LinkIcon : ChartIcon) as IconComponentType;
            const contentHeight = heights[index] || 0;
            
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="border border-white/10 rounded-lg overflow-hidden bg-black/30"
                animate={{
                  backgroundColor: isOpen ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.3)",
                  borderColor: isOpen ? "rgba(66, 104, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="font-semibold text-white">{item.question}</span>
                  </div>
                  <motion.span
                    animate={{ 
                      rotate: isOpen ? 90 : 0,
                      scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.4, 0, 0.2, 1],
                      scale: { duration: 0.2 }
                    }}
                    className="text-blue-400 flex-shrink-0 ml-4"
                  >
                    ▶
                  </motion.span>
                </button>
                <motion.div
                  id={`faq-answer-${index}`}
                  animate={{
                    height: isOpen ? contentHeight : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ 
                    height: {
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    },
                    opacity: {
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div 
                    id={`faq-content-${index}`}
                    className="px-6 pb-4 pt-0 text-white/70 text-sm leading-relaxed"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: isOpen ? 1 : 0,
                        y: isOpen ? 0 : -10,
                      }}
                      transition={{ 
                        delay: isOpen ? 0.15 : 0,
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      {item.answer}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default function AffiliateProgramPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black/60 border border-white/10 rounded-2xl mb-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-ru" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(66, 104, 255, 0.3)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-ru)" />
          </svg>
          {/* Network nodes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-500/30 rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-500/30 rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-500/30 rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <StaggerContainer>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              {content.hero.subheading}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="https://t.me/diorhost_bot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                {content.hero.ctaPrimary}
              </motion.a>
              <motion.a
                href="https://t.me/diorhost_bot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors"
              >
                {content.hero.ctaSecondary}
              </motion.a>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works Stepper */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-12 text-white text-center">
            {content.howItWorks.title}
          </h2>
          <div className="flex flex-col gap-6 max-w-2xl mx-auto relative">
            <StaggerContainer>
              {content.howItWorks.steps.map((step, index) => {
                return (
                  <motion.div
                    key={step.number}
                    variants={fadeInUp}
                    className="relative z-10"
                  >
                    <motion.div
                      variants={cardHover}
                      initial="rest"
                      whileHover="hover"
                      className="bg-black/40 border border-blue-500/30 rounded-xl p-6 relative flex items-center gap-6"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center">
                          <span className="text-2xl font-bold text-blue-400">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                        <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Partner Levels */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-12 text-white text-center">
            {content.partnerLevels.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.partnerLevels.tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`bg-black/40 border rounded-xl p-6 relative ${
                  tier.recommended
                    ? "border-blue-500/50 shadow-[0_0_30px_rgba(66,104,255,0.2)]"
                    : "border-white/10"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    Рекомендуется
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-white text-center">{tier.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-white/60 mb-1">Месячный оборот</p>
                    <p className="text-white font-semibold">{tier.monthlyTurnover}</p>
                  </div>
                  <div>
                    <p className="text-white/60 mb-1">Revshare</p>
                    <p className="text-2xl font-bold text-green-400">{tier.revshare}</p>
                  </div>
                  <div>
                    <p className="text-white/60 mb-1">Бонусы</p>
                    <p className="text-white/80 text-xs">{tier.bonuses}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* What We Track */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-12 text-white text-center">
            {content.whatWeTrack.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              {content.whatWeTrack.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/40 border border-white/10 rounded-lg p-4"
                >
                  <h3 className="font-semibold mb-1 text-white">{feature.name}</h3>
                  <p className="text-white/70 text-xs">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-white">Дополнительные возможности</h3>
              <ul className="space-y-2">
                {content.whatWeTrack.additional.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/80">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Mockup dashboard visual */}
              <div className="mt-6 bg-black/50 rounded-lg p-4 border border-white/5">
                <div className="space-y-2">
                  <div className="h-3 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/10 rounded w-1/2" />
                  <div className="h-3 bg-white/10 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <FAQAccordion />

      {/* Final CTA */}
      <ScrollReveal>
        <section className="relative bg-black/60 border border-white/10 rounded-2xl p-12 text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid-ru" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(66, 104, 255, 0.3)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid-ru)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              {content.finalCta.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 mb-8"
            >
              {content.finalCta.subtitle}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://t.me/diorhost_bot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                {content.finalCta.cta}
              </motion.a>
              <Link
                href="/ru/public-offer"
                className="text-blue-300 hover:text-white underline text-sm"
              >
                {content.finalCta.termsLink}
              </Link>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}


