"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FAQItem } from "../../components/motion/FAQItem";

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
      "https://t.me/diorhost_bot"
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
      "https://t.me/diorhost_bot"
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
      "https://t.me/diorhost_bot"
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
      "https://t.me/diorhost_bot"
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
      "https://t.me/diorhost_bot"
  }
];

const sections = [
  {
    title: "What is IP spoofing on a server for?",
    body: "Allows sending network traffic from a spoofed IP address, used for network security testing, distributed load scenarios, or developing network solutions.",
    bullets: [
      "High speed and stability under intensive traffic.",
      "Full control over network settings and IP addresses.",
      "Safe testing of your own services and networks"
    ]
  },
  {
    title: "Why choose a dedicated server for IPHM?",
    body: "A dedicated server gives full control over resources and network settings, which is impossible on standard VPS.",
    bullets: [
      "Unlimited network interface configuration options.",
      "High bandwidth for load testing.",
      "Dedicated IP for traffic reputation management."
    ]
  },
  {
    title: "Can the server be used for anonymization and geo-block bypass?",
    body: "Yes, a dedicated IPHM server allows changing outgoing IPs and connecting through different locations worldwide.",
    bullets: [
      "Access to resources from different locations.",
      "Reduced risk of IP-based blocking.",
      "Support for custom network protocols."
    ]
  }
];

const steps = [
  { title: "Choose configuration", description: "Select a server model (E5 2673 V3) based on CPU, RAM, storage, and network speed (1 or 10 Gbps)." },
  { title: "Order and deploy", description: "Complete the order—server is provisioned with full root access and IPHM support." },
  { title: "Configure IP spoofing", description: "Set up IPHM tools, configure network interfaces, and configure outgoing IP spoofing for your use case." },
  { title: "Start your operations", description: "Run security testing, load testing, anonymization, or geo-bypass with dedicated IP and full control." }
];

const faqs = [
  { question: "What is IPHM?", answer: "IPHM (IP Header Manipulation) allows you to send traffic with a spoofed source IP. On a dedicated server, this enables network security testing, distributed load scenarios, and development of network solutions with full control." },
  { question: "Why use a dedicated server for IPHM instead of VPS?", answer: "A dedicated server provides full control over network interfaces, unlimited configuration options, and dedicated resources. VPS typically restricts raw socket access and network configuration required for IP spoofing." },
  { question: "What can I use the IPHM server for?", answer: "Typical uses include network security testing, load testing, anonymization, bypassing geo-restrictions, and development of distributed systems or custom network protocols." },
  { question: "What bandwidth is available?", answer: "Plans include either UNMETERED (1 Gbps) or 500TB (10 Gbps) options. Bandwidth and network speed depend on the chosen configuration." }
];

export default function IPHMPageClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-hero-glow blur-[100px] pointer-events-none opacity-50"></div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
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

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              How to get started
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-lg font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-white/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              Why dedicated IPHM?
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-3">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative"
                >
                  <div className="relative rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300 h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                    <div className="relative flex flex-col h-full rounded-lg bg-black/40 p-6 hover:bg-black/60 transition-all">
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors mb-4">{section.title}</h3>
                      <p className="text-sm text-white/70 mb-4 flex-1">{section.body}</p>
                      {section.bullets && (
                        <ul className="space-y-2">
                          {section.bullets.map((bullet, idx) => (
                            <li key={idx} className="text-sm text-white/80 flex items-start gap-2">
                              <span className="text-primary mt-1 flex-shrink-0">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              FAQ
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
