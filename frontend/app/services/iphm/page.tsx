"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Prop = {
  name: string;
  value: string;
};

type Tarif = {
  title: string;
  cpu: number;
  ssd: number;
  ram: number;
  props: Prop[];
  price: number;
  url: string;
};

const hero = {
  heading: "Dedicated Servers IPHM",
  summary:
    "IPHM servers allow users to hide their real IP address by masking it with another. This can be useful for privacy protection, bypassing geographical restrictions, or conducting network security testing. Bandwidth up to 10 Gbps."
};

const tarifs: Tarif[] = [
  {
    title: "1X E5 2673 V3",
    cpu: 12,
    ssd: 1000,
    ram: 64,
    props: [
      { name: "IPs", value: "1 IPv4 - Upgradable" },
      { name: "OS", value: "Linux, Windows" },
      { name: "Bandwidth", value: "UNMETERED" },
      { name: "Network Speed", value: "1 gbit/s" }
    ],
    price: 1935,
    url:
      "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D286%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 1000,
    ram: 64,
    props: [
      { name: "IPs", value: "1 IPv4 - Upgradable" },
      { name: "OS", value: "Linux, Windows" },
      { name: "Bandwidth", value: "UNMETERED" },
      { name: "Network Speed", value: "1 gbit/s" }
    ],
    price: 2275,
    url:
      "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D288%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 2000,
    ram: 128,
    props: [
      { name: "IPs", value: "1 IPv4 - Upgradable" },
      { name: "OS", value: "Linux, Windows" },
      { name: "Bandwidth", value: "UNMETERED" },
      { name: "Network Speed", value: "1 gbit/s" }
    ],
    price: 3189,
    url:
      "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D290%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 1000,
    ram: 64,
    props: [
      { name: "IPs", value: "1 IPv4 - Upgradable" },
      { name: "OS", value: "Linux, Windows" },
      { name: "Bandwidth", value: "500TB" },
      { name: "Network Speed", value: "10 gbit/s" }
    ],
    price: 4785,
    url:
      "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D292%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 1000,
    ram: 128,
    props: [
      { name: "IPs", value: "1 IPv4 - Upgradable" },
      { name: "OS", value: "Linux, Windows" },
      { name: "Bandwidth", value: "500TB" },
      { name: "Network Speed", value: "10 gbit/s" }
    ],
    price: 7745,
    url:
      "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D296%26period%3D1%26project%3D2"
  }
];

export default function IPHMPage() {
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
              key={`${tarif.title}-${tarif.ram}-${tarif.ssd}-${index}`}
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
                        <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
                        <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                        <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
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
                      <span className="text-white font-semibold">{tarif.ssd} GB</span>
                    </div>
                    {tarif.props.map((prop) => (
                      <div key={prop.name} className="flex justify-between text-sm">
                        <span className="text-white/60">{prop.name}</span>
                        <span className="text-white font-semibold">{prop.value}</span>
                      </div>
                    ))}
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