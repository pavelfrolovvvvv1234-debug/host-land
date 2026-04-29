"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Tarif = {
  title: string;
  cpu: number;
  ram: number;
  storage: string;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Dedicated Servers",
  summary: 'Dedicated servers for "white" or "gray" operation. Complaints are not ignored! The ability to install any OS.'
};

const tarifs: Tarif[] = [
  {
    title: "Intel Core i7-6700",
    cpu: 4,
    ram: 64,
    storage: "500 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 90,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "Intel Core i7-8700",
    cpu: 6,
    ram: 64,
    storage: "SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 110,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    ram: 64,
    storage: "500 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 120,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "Ryzen 7 3700X",
    cpu: 8,
    ram: 64,
    storage: "2000 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 140,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "Ryzen 9 3900",
    cpu: 12,
    ram: 64,
    storage: "2000 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 150,
    url:
      "https://t.me/diorhost_bot"
  },
  {
    title: "Ryzen 9 5950X",
    cpu: 16,
    ram: 256,
    storage: "2000 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 190,
    url:
      "https://t.me/diorhost_bot"
  }
];

export default function DedicatedServersPage() {
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed bg-black/40 p-6 rounded-xl border border-white/5 backdrop-blur-sm shadow-xl"
            >
              {hero.summary}
            </motion.p>
          </div>
        </div>

        {/* Tariff Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tarifs.map((tarif, index) => (
            <motion.div
              key={`${tarif.title}-${tarif.ram}-${tarif.storage}`}
              initial={{ opacity: 0 }}
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
                        <circle cx="12" cy="12" r="3" />
                        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
                        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
                        <path d="M6 6h.01" />
                        <path d="M6 18h.01" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-white">{tarif.title}</h2>
                  </div>
                  <div className="flex-1 space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">CPU</span>
                      <span className="text-white font-semibold">{tarif.cpu} cores</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">RAM</span>
                      <span className="text-white font-semibold">{tarif.ram} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Storage</span>
                      <span className="text-white font-semibold">{tarif.storage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Network</span>
                      <span className="text-white font-semibold">{tarif.networkSpeed} Gbps</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Bandwidth</span>
                      <span className="text-white font-semibold">{tarif.bandwidth}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">OS</span>
                      <span className="text-white font-semibold">{tarif.os}</span>
                    </div>
                  </div>
                  <a
                    href={tarif.url}
                    className="w-full rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-center text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    ${tarif.price}/mo
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
