"use client";

import type { ReactNode } from "react";

import { LegalLayout } from "../../../components/LegalLayout";
import { motion } from "framer-motion";
import { fadeInUp } from "../../../lib/motion";
import { StaggerContainer } from "../../../components/motion/StaggerContainer";
import Link from "next/link";
import { PRIMARY_ORIGIN } from "../../../lib/canonical";
import { homeContent } from "../../../content/home";

const whoWeAre =
  "Dior Host — офшорный хостинг-провайдер, специализирующийся на отказоустойчивой серверной инфраструктуре, высокой степени конфиденциальности и политике индивидуального рассмотрения обращений третьих лиц.";

const hero = {
  heading: "О компании Dior Host",
  subheading: whoWeAre,
};

const history =
  "Компания была основана 24 августа 2024 года. В марте 2026 года инфраструктура была полностью переработана и проект был перезапущен, после чего началось активное развитие.";

const teamSupport =
  "Команда состоит из технических специалистов, инженеров инфраструктуры, маркетолога и операторов поддержки. Мы стремимся обеспечивать помощь практически 24/7.";

const mission =
  "Мы создаём инфраструктуру для пользователей, которым важны независимость, стабильность и приватность.";

const philosophy =
  "Свобода инфраструктуры, независимость, отказоустойчивость и нейтральный подход к размещению проектов являются основой работы Dior Host.";

const technology =
  "Intel Xeon E5-2699 v4, DDR4 ECC, NVMe SSD, виртуализация Proxmox VE, автоматическое развёртывание VPS, полный root-доступ и современная панель управления.";

const architecture =
  "Распределённая международная инфраструктура, отсутствие зависимости от одной юрисдикции, приоритет конфиденциальности и устойчивости сервисов.";

const whyUs =
  "Быстрое развёртывание, высокая устойчивость к жалобам, независимая инфраструктура и поддержка 24/7.";

const infrastructure =
  "Intel Xeon E5-2699 v4, DDR4 ECC, NVMe SSD, сеть 2×5 Gbps.";

const locations = ["Нидерланды", "США", "Германия", "Турция"];

const services = [
  {
    title: "Bulletproof VPS/VDS",
    description: "Виртуальные серверы с устойчивостью к жалобам и гибкой политикой обработки обращений",
    link: "/ru/bulletproof/vds",
  },
  {
    title: "Dedicated Server",
    description: "Выделенные физические серверы для ресурсоёмких и критичных проектов",
    link: "/ru/bulletproof/dedicated",
  },
  {
    title: "Регистрация доменов",
    description: "Bulletproof-домены с политикой регистрации, устойчивой к жалобам",
    link: "/ru/bulletproof/domains",
  },
];

const { faqs, faqTitle } = homeContent.ru;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dior Host",
  url: PRIMARY_ORIGIN,
  logo: `${PRIMARY_ORIGIN}/favicon.png`,
  foundingDate: "2024-08-24",
  description: hero.subheading,
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@dior.host",
    contactType: "Customer Support",
  },
  sameAs: [],
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.section id={id} variants={fadeInUp} className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">{title}</h2>
      {children}
    </motion.section>
  );
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LegalLayout title={hero.heading} description={hero.subheading}>
        <StaggerContainer>
          <Section id="company-history" title="История компании">
            <p className="text-white/80 leading-relaxed">{history}</p>
          </Section>

          <Section id="team-support" title="Команда и поддержка">
            <p className="text-white/80 leading-relaxed">{teamSupport}</p>
          </Section>

          <Section id="company-mission" title="Миссия">
            <p className="text-white/80 leading-relaxed">{mission}</p>
          </Section>

          <Section id="philosophy" title="Философия">
            <p className="text-white/80 leading-relaxed">{philosophy}</p>
          </Section>

          <Section id="technology-stack" title="Технологический стек">
            <p className="text-white/80 leading-relaxed">{technology}</p>
          </Section>

          <Section id="architecture" title="Архитектура">
            <p className="text-white/80 leading-relaxed">{architecture}</p>
          </Section>

          <Section id="our-services" title="Услуги">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 border border-white/10 rounded-lg p-4"
                >
                  <h3 className="font-semibold mb-2 text-white">
                    <Link href={service.link} className="text-blue-300 hover:text-white">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-white/80">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section id="why-us" title="Почему Dior Host">
            <p className="text-white/80 leading-relaxed">{whyUs}</p>
          </Section>

          <Section id="infrastructure" title="Инфраструктура">
            <p className="text-white/80 leading-relaxed mb-4">{infrastructure}</p>
            <p className="text-sm text-white/60 mb-3">Локации:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.08 }}
                  className="bg-black/30 border border-white/10 rounded-lg p-4 text-center"
                >
                  <p className="font-medium text-white">{location}</p>
                </motion.div>
              ))}
            </div>
          </Section>

          {faqs.length > 0 && (
            <Section id="faqs" title={faqTitle}>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={faq.question}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.05 }}
                    className="group border border-white/10 rounded-lg p-4 bg-black/30"
                  >
                    <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between text-white">
                      <span>{faq.question}</span>
                      <span className="faq-arrow ml-2">▶</span>
                    </summary>
                    <div className="accordion-content">
                      <p className="mt-2 text-sm text-white/70">{faq.answer}</p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </Section>
          )}

          <motion.section id="related-pages" variants={fadeInUp} className="mt-12 pt-8 border-t border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Связанные страницы</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/ru/sla" className="text-blue-300 hover:text-white underline">
                Соглашение об уровне обслуживания
              </Link>
              <Link href="/ru/abuse-flow" className="text-blue-300 hover:text-white underline">
                Процесс обработки жалоб
              </Link>
              <Link href="/ru/dmca-policy" className="text-blue-300 hover:text-white underline">
                Политика DMCA
              </Link>
            </div>
          </motion.section>
        </StaggerContainer>
      </LegalLayout>
    </>
  );
}
