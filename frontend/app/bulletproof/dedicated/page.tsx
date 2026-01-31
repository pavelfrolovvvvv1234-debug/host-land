"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type ComparisonRow = { label: string; bulletproof: string; regular: string };

type DedicatedTarif = {
  title: string;
  cpu: number;
  threads: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Bulletproof Dedicated Servers",
  subheading: "bulletproof bare metal with offshore jurisdictions",
  summary:
    "In simple terms, bulletproof dedicated hosting keeps your bare-metal nodes online even when DMCA notices or abuse complaints arrive by placing hardware in offshore-friendly facilities across the USA, Netherlands, Germany and the EU."
};

const sections = [
  {
    title: "Who needs bulletproof dedicated servers?",
    body: "Privacy-focused SaaS, ad platforms, fintech rails, cybersecurity labs and streaming/media mirrors require hardware that resists false-positive takedowns.",
    bullets: [
      "Dedicated CPUs and RAM, zero noisy neighbours.",
      "Root-level customization for custom hypervisors, clusters and appliances.",
      "Optional IP announcements or BGP sessions for complex networks."
    ]
  },
  {
    title: "How does Dior Host harden the hardware?",
    body: "We deploy Tier III facilities in NL/DE/MD with redundant power, on-site stock, hot spares and 24/7 NOC escalation paths.",
    bullets: [
      "1–10 Gbps ports with burst and upgrade options.",
      "Hardware RAID, ECC RAM, AES-NI acceleration.",
      "Private backhaul to partner POPs in NYC, LON, AMS and FRA."
    ]
  },
  {
    title: "What about compliance?",
    body: "Abuse tickets trigger human review, mediation windows and DMCA-ignored handling until a legal mandate arrives.",
    bullets: [
      "Zero-tolerance only for malware, child abuse, terrorism.",
      "Optional contracts and documentation for regulated partners.",
      "Dedicated account managers for confidential escalations."
    ]
  }
];

const steps = [
  {
    title: "Define workloads and legal exposure",
    description:
      "Map services, traffic patterns, data sensitivity and potential complaint types."
  },
  {
    title: "Pick jurisdictions & IP strategy",
    description:
      "Choose NL/DE/MD/US-friendly racks, required subnets and routing preferences."
  },
  {
    title: "Select hardware tiers",
    description:
      "Match CPU generation, RAM, storage, bandwidth and mitigation add-ons to growth plans."
  },
  {
    title: "Launch & governance",
    description:
      "Schedule provisioning, import images, establish abuse contacts and monitoring."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Abuse workflow",
    bulletproof: "Manual mediation, DMCA ignored by default.",
    regular: "Automatic shutdown at first complaint."
  },
  {
    label: "Jurisdictions",
    bulletproof: "Offshore NL/DE/MD racks + US-friendly peers.",
    regular: "One domestic data center."
  },
  {
    label: "Privacy",
    bulletproof: "Crypto/wire, optional KYC, private tickets.",
    regular: "Strict AML/KYC and shared ticketing."
  },
  {
    label: "Network & mitigation",
    bulletproof: "10 Gbps uplinks, Anycast scrubbing, ACL automation.",
    regular: "Basic 1 Gbps port, minimal DDoS cover."
  },
  {
    label: "Scaling",
    bulletproof: "Burst, stack or hybridize with VDS/Turbo nodes.",
    regular: "Manual migrations, extra contracts."
  }
];

const tarifs: DedicatedTarif[] = [
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    threads: 8,
    ram: 16,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 189,
    url: "https://my.dior.host"
  },
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    threads: 8,
    ram: 32,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 215,
    url: "https://my.dior.host"
  },
  {
    title: "2x Intel Xeon X5670",
    cpu: 12,
    threads: 24,
    ram: 64,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 235,
    url: "https://my.dior.host"
  }
];

const faqs = [
  {
    question: "What is a bulletproof dedicated server?",
    answer:
      "A bare-metal server hosted in offshore-friendly facilities that stays online during DMCA or abuse disputes while our team mediates complaints."
  },
  {
    question: "Is bulletproof dedicated hosting legal?",
    answer:
      "Yes. We comply with criminal law while protecting legitimate customers, removing only zero-tolerance content."
  },
  {
    question: "Which locations do you offer?",
    answer:
      "Netherlands, Germany, Moldova and USA-friendly partners with routes into NA/EU."
  },
  {
    question: "Do I need to pass KYC?",
    answer:
      "Not by default. Documentation is optional unless your bank requires it."
  },
  {
    question: "Can you migrate existing infrastructure?",
    answer:
      "Yes, we assist with data transfer, rack planning and staged cutovers."
  }
];

export default function BulletproofDedicatedPage() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tarifs.map((tarif, index) => (
            <motion.div
              key={`${tarif.title}-${tarif.ram}-${tarif.ssd}`}
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
                      <span className="text-white font-semibold">{tarif.cpu} cores / {tarif.threads} threads</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">RAM</span>
                      <span className="text-white font-semibold">{tarif.ram} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Storage</span>
                      <span className="text-white font-semibold">{tarif.ssd} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Network</span>
                      <span className="text-white font-semibold">{tarif.networkSpeed} Gbps</span>
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

        {/* Steps Section */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              How to plan bulletproof dedicated capacity
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

        {/* Info Sections */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative rounded-xl border border-white/10 bg-card-gradient p-6 hover:border-primary/30 transition-all"
            >
              <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
              <p className="text-sm text-white/70 mb-4">{section.body}</p>
              {section.bullets && (
                <ul className="space-y-2">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-white/80 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-2"
            >
              Bulletproof dedicated vs regular dedicated
            </motion.h2>
            <p className="text-white/70 mb-6">Control, privacy and resilience for critical workloads.</p>
            <div className="overflow-auto rounded-xl border border-white/10">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-white">Factor</th>
                    <th className="px-6 py-4 font-semibold text-primary">Bulletproof dedicated</th>
                    <th className="px-6 py-4 font-semibold text-white/60">Traditional dedicated</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr key={row.label} className={`border-t border-white/10 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                      <th className="px-6 py-4 font-semibold text-white">{row.label}</th>
                      <td className="px-6 py-4 text-white/80">{row.bulletproof}</td>
                      <td className="px-6 py-4 text-white/60">{row.regular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              Bulletproof dedicated FAQ
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={mounted ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group border border-white/10 rounded-lg bg-black/40 hover:border-primary/30 transition-all"
                >
                  <summary className="cursor-pointer p-4 font-semibold text-white flex items-center justify-between hover:text-primary transition-colors">
                    <span>{faq.question}</span>
                    <span className="ml-2 transition-transform group-open:rotate-90">▶</span>
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-sm text-white/70">{faq.answer}</p>
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
