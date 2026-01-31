"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
      "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D301%26period%3D1%26project%3D2",
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
      "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D307%26period%3D1%26project%3D2",
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
      "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D313%26period%3D1%26project%3D2",
    pps: "~450-800"
  }
];

export default function TurboVDSPageRu() {
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

        {/* Tariff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      </div>
    </main>
  );
}
