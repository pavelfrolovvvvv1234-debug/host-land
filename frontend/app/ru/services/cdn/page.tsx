"use client";

import { ServicePageTemplate } from "../../../../components/services/ServicePageTemplate";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const hero = {
  heading: "CDN сервис",
  summary: "Сеть доставки контента для быстрой и надёжной доставки контента по всему миру. Уменьшите задержки, улучшите производительность и повысьте качество пользовательского опыта с нашей глобальной CDN-инфраструктурой."
};

const sections = [
  {
    title: "Глобальная сеть серверов",
    body: "Наш CDN охватывает несколько континентов с серверами, стратегически размещёнными для минимизации задержек и максимизации производительности.",
    bullets: [
      "Мировые точки присутствия",
      "Низкая задержка доставки контента",
      "Автоматическое резервирование и избыточность"
    ]
  },
  {
    title: "Оптимизация производительности",
    body: "Продвинутые технологии кеширования, сжатия и оптимизации обеспечивают быструю загрузку контента для всех пользователей.",
    bullets: [
      "Умные алгоритмы кеширования",
      "Оптимизация изображений и ресурсов",
      "Экономия трафика до 70%"
    ]
  },
  {
    title: "Безопасность и защита от DDoS",
    body: "Встроенные функции безопасности защищают ваш контент и инфраструктуру от угроз и атак.",
    bullets: [
      "Защита от DDoS",
      "SSL/TLS шифрование",
      "Контроль доступа и аутентификация"
    ]
  }
];

const steps = [
  {
    title: "Настройте домен",
    description: "Направьте DNS вашего домена на наши CDN-серверы или используйте наш DNS-сервис."
  },
  {
    title: "Загрузите контент",
    description: "Загрузите ваши статические ресурсы, изображения, видео и файлы на CDN."
  },
  {
    title: "Оптимизируйте настройки",
    description: "Настройте правила кеширования, сжатие и параметры безопасности."
  },
  {
    title: "Запустите",
    description: "Ваш контент теперь распространяется глобально с улучшенной производительностью."
  }
];

const faqs = [
  {
    question: "Что такое CDN?",
    answer: "CDN (Content Delivery Network) — это распределённая сеть серверов, которая доставляет веб-контент пользователям на основе их географического местоположения, уменьшая задержки и улучшая производительность."
  },
  {
    question: "Какие типы контента можно доставлять?",
    answer: "Наш CDN поддерживает статические файлы, изображения, видео, JavaScript, CSS, шрифты и ответы API. Динамический контент также может кешироваться в зависимости от вашей конфигурации."
  },
  {
    question: "Как это улучшает производительность?",
    answer: "Кешируя контент на пограничных серверах ближе к пользователям, CDN сокращает расстояние передачи данных, что приводит к более быстрой загрузке и лучшему пользовательскому опыту."
  },
  {
    question: "Включён ли SSL/TLS?",
    answer: "Да, бесплатные SSL/TLS сертификаты включены во все CDN-планы для безопасной доставки контента."
  }
];

export default function CDNPageRu() {
  return (
    <ServicePageTemplate
      hero={hero}
      sections={sections}
      steps={steps}
      faqs={faqs}
    >
      <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Функции CDN</h2>
          <p className="text-white/70 mb-6">
            Наш CDN-сервис находится в разработке. Свяжитесь с нами по адресу{" "}
            <a href="mailto:support@dior.host" className="text-primary hover:underline">
              support@dior.host
            </a>{" "}
            для раннего доступа и информации о ценах.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}




