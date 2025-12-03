"use client";

import { ServicePageTemplate } from "../../../../components/services/ServicePageTemplate";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const hero = {
  heading: "VPN сервис",
  summary: "Виртуальная частная сеть для безопасного и приватного доступа в интернет. Обходите географические блокировки, защищайте свои данные и серфите анонимно с нашей VPN-инфраструктурой."
};

const sections = [
  {
    title: "Безопасность и приватность",
    body: "Военное шифрование защищает ваши данные и онлайн-активность от посторонних глаз и хакеров.",
    bullets: [
      "Шифрование AES-256",
      "Политика нулевого логирования",
      "Защита Kill Switch"
    ]
  },
  {
    title: "Глобальная сеть серверов",
    body: "Получайте доступ к контенту из любой точки мира с нашей сетью серверов, охватывающей множество стран.",
    bullets: [
      "Серверы в 50+ странах",
      "Высокоскоростные соединения",
      "Безлимитный трафик"
    ]
  },
  {
    title: "Множество протоколов",
    body: "Поддержка нескольких VPN-протоколов, включая WireGuard, OpenVPN и IKEv2 для максимальной совместимости.",
    bullets: [
      "Поддержка протокола WireGuard",
      "Совместимость с OpenVPN",
      "Поддержка нескольких устройств"
    ]
  }
];

const steps = [
  {
    title: "Зарегистрируйтесь",
    description: "Создайте аккаунт и выберите ваш VPN-план."
  },
  {
    title: "Скачайте клиент",
    description: "Скачайте и установите VPN-клиент для вашего устройства (Windows, macOS, Linux, мобильные)."
  },
  {
    title: "Подключитесь к серверу",
    description: "Выберите локацию сервера и подключитесь, чтобы начать безопасный сёрфинг."
  },
  {
    title: "Серфите анонимно",
    description: "Ваш трафик теперь зашифрован, а IP-адрес скрыт."
  }
];

const faqs = [
  {
    question: "Что такое VPN?",
    answer: "VPN (Virtual Private Network) создаёт защищённое зашифрованное соединение между вашим устройством и интернетом, защищая вашу приватность и позволяя получать доступ к гео-ограниченному контенту."
  },
  {
    question: "Ведёте ли вы логи?",
    answer: "Нет, мы придерживаемся строгой политики нулевого логирования. Мы не отслеживаем, не собираем и не храним вашу онлайн-активность, историю просмотров или логи подключений."
  },
  {
    question: "На скольких устройствах можно использовать?",
    answer: "VPN-планы поддерживают множественные одновременные подключения. Точное количество зависит от выбранного плана, обычно от 3 до неограниченного количества устройств."
  },
  {
    question: "Замедлит ли VPN интернет?",
    answer: "Хотя VPN добавляет минимальные накладные расходы, наши высокоскоростные серверы оптимизированы для минимизации влияния. Большинство пользователей не замечают значительной разницы в скорости."
  }
];

export default function VPNPageRu() {
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">VPN планы</h2>
          <p className="text-white/70 mb-6">
            Наш VPN-сервис находится в разработке. Свяжитесь с нами по адресу{" "}
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



