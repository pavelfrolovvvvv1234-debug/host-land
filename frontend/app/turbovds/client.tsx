"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FAQItem } from "../../components/motion/FAQItem";

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
  subheading: "High-performance servers for network-intensive tasks",
  summary:
    "Servers for parsing, mass-checking, SEO, security analysis, and other high-load network tasks. With up to 10 Gbps bandwidth, they deliver lightning-fast performance and stability. Ideal for port scanning, host availability checks, automation, and API-driven operations. Outperforms standard bulletproof VDS thanks to superior network throughput."
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
      "https://t.me/diorhost_bot",
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
      "https://t.me/diorhost_bot",
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
      "https://t.me/diorhost_bot",
    pps: "~450-800"
  }
];

const sections = [
  {
    title: "Ideal for parsing and mass operations",
    body: "TurboVDS servers with 10 Gbps bandwidth deliver the throughput needed for large-scale parsing, mass-checking, and automated data collection without bottlenecks.",
    bullets: [
      "10 Gbps dedicated port for high-speed operations.",
      "Optimized for concurrent connections and API requests.",
      "Low latency to major networks and exchanges."
    ]
  },
  {
    title: "Why choose TurboVDS over standard VDS?",
    body: "Standard VDS typically offers 1 Gbps or shared bandwidth. TurboVDS provides dedicated 10 Gbps with superior PPS for network-intensive workloads.",
    bullets: [
      "Up to 10× higher network throughput.",
      "Designed for port scanning and host checks.",
      "Stable performance under sustained load."
    ]
  },
  {
    title: "Use cases: SEO, security, automation",
    body: "From SEO monitoring and security analysis to load testing and API-driven automation—TurboVDS handles demanding network tasks reliably.",
    bullets: [
      "SEO tools and rank tracking at scale.",
      "Security research and penetration testing.",
      "Automation, bots, and API integrations."
    ]
  }
];

const steps = [
  { title: "Choose your plan", description: "Select TurboNet L, M, or S based on CPU, RAM, and NVMe needs for your workload." },
  { title: "Order and deploy", description: "Complete the order—server is provisioned within minutes with full root access." },
  { title: "Configure your environment", description: "Install parsing tools, scripts, or automation. Configure network settings and firewall." },
  { title: "Start operations", description: "Run parsing, mass-checking, SEO tools, or API automation with 10 Gbps bandwidth." }
];

const faqs = [
  { question: "What is TurboVDS?", answer: "TurboVDS is high-performance VDS with dedicated 10 Gbps bandwidth, optimized for parsing, mass-checking, SEO monitoring, security analysis, and network-intensive tasks. It outperforms standard VDS in throughput and PPS." },
  { question: "What bandwidth does TurboVDS provide?", answer: "TurboVDS provides dedicated 10 Gbps network speed with unlimited bandwidth. Plans include a 20 Gbit port and high PPS for concurrent connections." },
  { question: "What use cases is TurboVDS suitable for?", answer: "TurboVDS is ideal for parsing, mass-checking, SEO rank tracking, port scanning, host availability checks, security research, load testing, and API-driven automation that requires high network throughput." },
  { question: "How does TurboVDS differ from regular VDS?", answer: "Standard VDS typically offers 1 Gbps or shared bandwidth. TurboVDS provides dedicated 10 Gbps with superior PPS, designed for sustained network-intensive workloads." }
];

export default function TurboVDSPageClient() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
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
                      <span className="text-white font-semibold">{tarif.cpu} cores</span>
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
                      <span className="text-white/60">Network</span>
                      <span className="text-white font-semibold">{tarif.networkSpeed} Gbps</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Port</span>
                      <span className="text-white font-semibold">{tarif.port} Gbit</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">PPS</span>
                      <span className="text-white font-semibold">{tarif.pps}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Bandwidth</span>
                      <span className="text-white font-semibold">{tarif.bandwidth}</span>
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

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12 mt-12">
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
            <div className="grid gap-8 md:grid-cols-2">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-5"
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
              Why TurboVDS?
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-3">
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
            <div className="space-y-5">
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
