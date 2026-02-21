"use client";

import { LegalLayout } from "../../../components/LegalLayout";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../../lib/motion";
import { StaggerContainer } from "../../../components/motion/StaggerContainer";
import Link from "next/link";
import { PRIMARY_ORIGIN } from "../../../lib/canonical";

const hero = {
  heading: "О компании Dior Host",
  subheading: "Офшорный провайдер инфраструктуры с политикой устойчивости к жалобам"
};

const companyInfo = {
  founded: "2020",
  uptime: "99.99%",
  sla: "Гарантия 99.9% аптайма",
  networkCapacity: "150+ Gbps",
  asn: "Несколько ASN в NL, DE, RO",
  peering: ["NL-IX", "AMS-IX", "DE-CIX", "RO-IX"],
  datacenters: [
    { name: "Амстердам", tier: "Tier III", country: "Нидерланды" },
    { name: "Франкфурт", tier: "Tier III", country: "Германия" },
    { name: "Бухарест", tier: "Tier III", country: "Румыния" },
    { name: "Кишинёв", tier: "Tier III", country: "Молдова" }
  ]
};

const history =
  "Dior Host был основан для обслуживания высокорисковых рабочих нагрузок, требующих офшорной инфраструктуры с гибкой политикой обработки жалоб. Мы управляем объектами Tier III в Нидерландах, Германии, Румынии и Молдове, поддерживая 99.99% аптайма благодаря резервному питанию, сетевым путям и круглосуточному покрытию NOC.";

const operators =
  "Наш центр сетевых операций (NOC) работает круглосуточно, обслуживается инженерами из Амстердама и Франкфурта. Жалобы обрабатываются вручную с приоритетом медиации, обеспечивая работу легитимных проектов во время споров.";

const jurisdictions =
  "Мы поддерживаем физическое присутствие и юридические лица в Нидерландах, Германии и Румынии, что позволяет нам балансировать между офшорной защитой и готовностью к соответствию требованиям ЕС/США для регулируемых партнёров.";

const mission =
  "Наша миссия — предоставлять надёжную инфраструктуру, устойчивую к жалобам, для легитимного бизнеса, маркетинговых команд, исследователей безопасности и приложений, ориентированных на конфиденциальность. Мы верим в надлежащий процесс, ручную проверку и медиацию вместо автоматических приостановок.";

const technology =
  "Dior Host использует корпоративное оборудование, включая ECC RAM, шифрование AES-NI, хранилище NVMe и резервные сетевые пути. Наша инфраструктура поддерживает мгновенное развёртывание, зашифрованные снимки и автоматизированные резервные копии в нескольких объектах Tier III.";

const compliance =
  "Работая с гибкой политикой обработки жалоб, мы поддерживаем готовность к соответствию требованиям ЕС/США. Мы работаем с регулируемыми партнёрами, финансовыми учреждениями и рекламными сетями, требующими документированных процессов.";

const services = [
  {
    title: "Bulletproof VDS",
    description: "Виртуальные серверы, устойчивые к жалобам, с гибкой политикой обработки жалоб",
    link: "/ru/bulletproof/vds"
  },
  {
    title: "Выделенные серверы",
    description: "Физические серверы с IPHM и опциями bulletproof",
    link: "/ru/bulletproof/dedicated"
  },
  {
    title: "Регистрация доменов",
    description: "Bulletproof домены с политикой регистрации, устойчивой к жалобам",
    link: "/ru/bulletproof/domains"
  },
  {
    title: "Веб-хостинг",
    description: "Офшорный веб-хостинг с политикой игнорирования DMCA",
    link: "/ru/bulletproof/web-hosting"
  }
];

const whyUs = [
  {
    title: "99.99% Аптайм",
    description: "Фактическая производительность аптайма превышает нашу гарантию SLA 99.9%"
  },
  {
    title: "Технология IPHM",
    description: "Управление историей IP для чистой репутации IP и доставляемости"
  },
  {
    title: "Устойчивость к жалобам",
    description: "Рабочие процессы с приоритетом медиации обеспечивают работу легитимных проектов"
  },
  {
    title: "Поддержка NOC 24/7",
    description: "Центр сетевых операций работает круглосуточно"
  }
];

const faqs = [
  {
    question: "Когда был основан Dior Host?",
    answer:
      "Dior Host был основан в 2020 году для обслуживания высокорисковых рабочих нагрузок, требующих офшорной инфраструктуры с гибкой политикой обработки жалоб."
  },
  {
    question: "Где расположены дата-центры Dior Host?",
    answer:
      "Мы управляем объектами Tier III в Амстердаме (Нидерланды), Франкфурте (Германия), Бухаресте (Румыния) и Кишинёве (Молдова)."
  },
  {
    question: "Какой аптайм гарантирует Dior Host?",
    answer:
      "Мы гарантируем 99.9% аптайма с фактической производительностью 99.99% во всех дата-центрах, поддерживаемой резервным питанием и сетевыми путями."
  },
  {
    question: "Какие пиринговые биржи используются?",
    answer:
      "Мы участвуем в пиринге на NL-IX, AMS-IX, DE-CIX и RO-IX, предоставляя 150+ Gbps с маршрутизацией Anycast и сообществами BGP."
  },
  {
    question: "Требует ли Dior Host документы KYC/AML?",
    answer:
      "Обязательный KYC не требуется. Мы принимаем криптовалюту, переводы SEPA и предоставляем анонимные тикеты для клиентов, ориентированных на конфиденциальность."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dior Host",
  "url": PRIMARY_ORIGIN,
  "logo": `${PRIMARY_ORIGIN}/favicon.png`,
  "foundingDate": "2020",
  "description": "Офшорный провайдер инфраструктуры с политикой устойчивости к жалобам",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@dior.host",
    "contactType": "Customer Support"
  },
  "sameAs": []
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout title={hero.heading} description={hero.subheading}>
        <StaggerContainer>
          <motion.section
            id="company-history"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              История компании
            </h2>
            <p className="text-white/80 leading-relaxed">{history}</p>
          </motion.section>

          <motion.section
            id="operators-support"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Операторы и поддержка
            </h2>
            <p className="text-white/80 leading-relaxed">{operators}</p>
          </motion.section>

          <motion.section
            id="company-mission"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Миссия компании
            </h2>
            <p className="text-white/80 leading-relaxed">{mission}</p>
          </motion.section>

          <motion.section
            id="philosophy"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Философия
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Bulletproof инфраструктура</h3>
                <p className="text-white/80 leading-relaxed">
                  Мы предоставляем инфраструктуру, которая остаётся онлайн, несмотря на уведомления DMCA, жалобы и претензии. Наш подход с приоритетом медиации обеспечивает продолжение работы легитимных проектов во время споров.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Офшорная защита</h3>
                <p className="text-white/80 leading-relaxed">
                  Работа из нескольких юрисдикций (Нидерланды, Германия, Румыния, Молдова) обеспечивает правовую гибкость и защиту для высокорисковых рабочих нагрузок.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Приоритет конфиденциальности</h3>
                <p className="text-white/80 leading-relaxed">
                  Мы уважаем конфиденциальность пользователей и не требуем обязательного KYC/AML. Доступны анонимные методы оплаты и системы тикетов, ориентированные на конфиденциальность.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="technology-stack"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Технологический стек
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">{technology}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>ECC RAM для защиты от ошибок памяти</li>
              <li>Аппаратное шифрование AES-NI</li>
              <li>Хранилище NVMe SSD с высоким IOPS</li>
              <li>Автоматизированные снимки и резервные копии</li>
              <li>Мгновенное развёртывание VPS</li>
            </ul>
          </motion.section>

          <motion.section
            id="compliance-regulation"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Соответствие и регулирование
            </h2>
            <p className="text-white/80 leading-relaxed">{compliance}</p>
          </motion.section>

          <motion.section
            id="jurisdictions"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Юрисдикции
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">{jurisdictions}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { name: "Нидерланды", desc: "Главный офис и NOC в Амстердаме. Юрисдикция ЕС с гибкими правилами." },
                { name: "Германия", desc: "Дата-центр во Франкфурте. Готовность к соответствию требованиям ЕС." },
                { name: "Румыния", desc: "Объект Tier III в Бухаресте. Офшорная защита в рамках ЕС." },
                { name: "Молдова", desc: "Дополнительное местоположение в Кишинёве. Расширенная офшорная защита." }
              ].map((jurisdiction, index) => (
                <motion.div
                  key={jurisdiction.name}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 p-4 rounded-lg"
                >
                  <h3 className="font-semibold mb-2 text-white">{jurisdiction.name}</h3>
                  <p className="text-sm text-white/80">{jurisdiction.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="our-services"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Наши услуги
            </h2>
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
          </motion.section>

          <motion.section
            id="why-us"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Почему мы?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 border border-white/10 rounded-lg p-4"
                >
                  <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="infrastructure"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Инфраструктура
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <motion.div
                variants={fadeInUp}
                className="bg-black/30 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-2 text-white">Аптайм</h3>
                <p className="text-2xl font-bold text-green-400">{companyInfo.uptime}</p>
                <p className="text-sm text-white/70 mt-1">{companyInfo.sla}</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-black/30 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-2 text-white">Сетевая ёмкость</h3>
                <p className="text-2xl font-bold text-blue-400">
                  {companyInfo.networkCapacity}
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-black/30 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-2 text-white">ASN</h3>
                <p className="text-white/80">{companyInfo.asn}</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-black/30 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-2 text-white">Пиринг</h3>
                <p className="text-white/80">{companyInfo.peering.join(", ")}</p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="datacenters"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Дата-центры
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {companyInfo.datacenters.map((dc, index) => (
                <motion.div
                  key={dc.name}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 p-4 rounded-lg"
                >
                  <h3 className="font-semibold text-lg text-white">{dc.name}</h3>
                  <p className="text-sm text-white/70 mt-1">{dc.country}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                    {dc.tier}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {faqs.length > 0 && (
            <motion.section
              id="faqs"
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
                Часто задаваемые вопросы
              </h2>
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
            </motion.section>
          )}

          <motion.section
            id="related-pages"
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">Связанные страницы</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/ru/sla"
                className="text-blue-300 hover:text-white underline"
              >
                Соглашение об уровне обслуживания
              </Link>
              <Link
                href="/ru/abuse-flow"
                className="text-blue-300 hover:text-white underline"
              >
                Процесс обработки жалоб
              </Link>
              <Link
                href="/ru/dmca-policy"
                className="text-blue-300 hover:text-white underline"
              >
                Политика DMCA
              </Link>
            </div>
          </motion.section>
        </StaggerContainer>
      </LegalLayout>
    </>
  );
}


