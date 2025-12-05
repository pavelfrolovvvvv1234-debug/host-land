"use client";

import { ServicePageTemplate } from "../../../../components/services/ServicePageTemplate";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const hero = {
  heading: "Хостинг Minecraft",
  summary: "Высокопроизводительный хостинг для серверов Minecraft с оптимизированной Java-средой, поддержкой модов и автоматическими бэкапами. Идеально для выживания, креатива и кастомных режимов игры."
};

const sections = [
  {
    title: "Оптимизированная производительность",
    body: "Выделенные ресурсы и оптимизированная Java-среда обеспечивают плавный геймплей даже при большом количестве игроков и тяжёлых модах.",
    bullets: [
      "Высокопроизводительное выделение CPU",
      "Оптимизированная Java-среда",
      "SSD-хранилище для быстрой загрузки миров"
    ]
  },
  {
    title: "Поддержка модов и плагинов",
    body: "Полная поддержка популярного серверного ПО, включая Paper, Spigot, Purpur и модпаки.",
    bullets: [
      "Поддержка Paper, Spigot, Purpur",
      "Модпаки Forge и Fabric",
      "Установка плагинов в один клик"
    ]
  },
  {
    title: "Автоматические бэкапы",
    body: "Автоматические ежедневные бэкапы гарантируют безопасность вашего мира. Ручные бэкапы доступны по запросу.",
    bullets: [
      "Ежедневные автоматические бэкапы",
      "Хранение бэкапов 7 дней",
      "Восстановление в один клик"
    ]
  }
];

const steps = [
  {
    title: "Выберите план",
    description: "Выберите план хостинга на основе ожидаемого количества игроков и требований к модам."
  },
  {
    title: "Выберите тип сервера",
    description: "Выберите между Vanilla, Paper, Spigot или модифицированными типами серверов."
  },
  {
    title: "Настройте сервер",
    description: "Установите настройки сервера, плагины и параметры мира."
  },
  {
    title: "Пригласите игроков",
    description: "Поделитесь IP-адресом сервера и начните играть с друзьями."
  }
];

const faqs = [
  {
    question: "Какие типы серверов поддерживаются?",
    answer: "Мы поддерживаем Vanilla, Paper, Spigot, Purpur и модифицированные серверы, включая модпаки Forge и Fabric. Доступно большинство популярного серверного ПО."
  },
  {
    question: "Могу ли я загрузить существующий мир?",
    answer: "Да, вы можете загрузить существующие файлы мира через FTP или наш файловый менеджер. Мы поможем вам беспрепятственно перенести ваш сервер."
  },
  {
    question: "Сколько игроков может поддерживать мой сервер?",
    answer: "Вместимость игроков зависит от ресурсов вашего плана. Наши планы варьируются от малых серверов (10-20 игроков) до больших сетей (100+ игроков)."
  },
  {
    question: "Включены ли бэкапы?",
    answer: "Да, все планы включают ежедневные автоматические бэкапы с хранением 7 дней. Ручные бэкапы можно создать в любое время."
  }
];

export default function MinecraftHostingPageRu() {
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Планы хостинга Minecraft</h2>
          <p className="text-white/70 mb-6">
            Наш сервис хостинга Minecraft находится в разработке. Свяжитесь с нами по адресу{" "}
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





