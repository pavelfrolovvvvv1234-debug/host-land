"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ScrollReveal } from "../../../components/motion/ScrollReveal";
import { fadeInUp, staggerContainer, cardHover } from "../../../lib/motion";

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
    slug: "bulletproof-hosting-stack-blog",
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
    slug: "cdn-complete-guide",
    title: "CDN: Полное руководство по ускорению сайтов через глобальные сети доставки контента",
    summary:
      "Глубокий технический разбор архитектуры CDN, edge-кэширования, geo-маршрутизации, smart-роутинга, DNS-балансировки и примеры конфигураций для Cloudflare, Fastly и Akamai."
  },
  {
    slug: "vpn-infrastructure-guide",
    title: "VPN: Инфраструктурный разбор, как выбрать VPN-поставщика и запустить корпоративный VPN стек",
    summary:
      "Технический разбор VPN-протоколов (WireGuard, OpenVPN, IPSec), архитектур развёртки, шифрования, контроля доступа, случаев использования и стратегий монетизации."
  },
  {
    slug: "minecraft-hosting-architecture",
    title: "Minecraft Hosting: Архитектура, оптимизация, нагрузка, безопасность и масштабируемость",
    summary:
      "Полное техническое руководство по хостингу серверов Minecraft, оптимизации производительности Java, конфигурации Paper/Spigot/Purpur, масштабированию BungeeCord/Velocity и стратегиям production-деплоя."
  },
  {
    slug: "bulletproof-vps-complete-guide",
    title: "Абузоустойчивый VPS/VDS: Как работают абузоустойчивые дата-центры и кому они реально нужны",
    summary:
      "Полное техническое руководство по абузоустойчивому хостингу, механике обработки abuse-запросов, IPHM, SLA политикам, policy-friendly юрисдикциям и случаям использования для высокорисковых проектов."
  }
];

export default function BlogIndexPageRu() {
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
        <ScrollReveal>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"></div>
            
            <div className="relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4"
              >
                {blogIntro.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-white/70 leading-relaxed"
              >
                {blogIntro.summary}
              </motion.p>
            </div>
          </motion.section>
        </ScrollReveal>

        {/* Articles Section */}
        <ScrollReveal delay={0.2}>
          <section className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between flex-wrap gap-4 mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Свежие статьи</h2>
              <div className="text-sm text-white/60 flex gap-2 items-center">
                <span>Теги:</span>
                <span className="uppercase tracking-wide text-white/80 text-xs">
                  VPS · DMCA · DNS · Соответствие
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative flex flex-col rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                  <div className="relative flex h-full flex-col justify-between rounded-lg bg-black/40 p-6 hover:bg-black/60 transition-all">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/50 mb-3">
                        Статья
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        {post.summary}
                      </p>
                    </div>
                    <Link
                      className="mt-auto inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors group/link"
                      href={`/ru/blog/articles/${post.slug}`}
                    >
                      Читать статью
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 transition-transform group-hover/link:translate-x-1"
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
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}


