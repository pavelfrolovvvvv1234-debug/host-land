"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FAQItem } from "../../components/motion/FAQItem";

type ComparisonRow = {
  label: string;
  bulletproof: string;
  regular: string;
};

type Tarif = {
  title: string;
  cpu: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Bulletproof VPS/VDS Hosting",
  subheading: "Offshore VPS/VDS with DMCA-ignored policies and instant delivery",
  summary:
    "In simple terms, bulletproof VPS hosting is a service that keeps your virtual servers online even when complaints, DMCA notices or abuse reports are filed against your content thanks to offshore-friendly networks in the USA, Netherlands, Germany and the wider EU."
};

const sections = [
  {
    title: "Why choose bulletproof VDS?",
    body: "Bulletproof VDS nodes prioritise uptime, privacy and flexible acceptable use so growth campaigns, privacy tools and security labs survive aggressive takedown attempts.",
    bullets: [
      "DMCA ignored by default with manual review and mediation.",
      "Offshore routing in Netherlands (more locations coming soon) with 150+ Gbps capacity.",
      "Crypto, wire and anonymous support channels without forced KYC."
    ]
  },
  {
    title: "Where are the servers located?",
    body: "Dior Host maintains multi-homed VPS clusters in Netherlands (more locations coming soon) with excellent connectivity.",
    bullets: [
      "Redundant AS paths and proactive DDoS filtering.",
      "Localised IP pools for Netherlands (more locations coming soon).",
      "Private peering to ad networks, affiliate trackers and fintech APIs."
    ]
  },
  {
    title: "What workloads fit bulletproof VDS?",
    body: "Privacy SaaS, affiliate marketing, fintech gateways, cybersecurity labs, streaming mirrors and DMCA-heavy media benefit from bulletproof VPS.",
    bullets: [
      "Full root access for custom stacks, containers and tunnelling.",
      "Snapshot, reinstall and rescue modes via panel or API.",
      "Upgrade paths into Turbo VDS or dedicated nodes without downtime."
    ]
  }
];

const steps = [
  {
    title: "Map your workloads",
    description:
      "List applications, traffic sources and compliance risks that may trigger DMCA or abuse tickets."
  },
  {
    title: "Choose jurisdictions",
    description:
      "Select NL/DE/MD or hybrid USA-friendly nodes depending on latency to your audience."
  },
  {
    title: "Right-size resources",
    description:
      "Match CPU, RAM, NVMe and bandwidth to workloads, reserving burst headroom for peak campaigns."
  },
  {
    title: "Launch & monitor",
    description:
      "Order via panel or API, import images, enable snapshots and monitor tickets with our NOC."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Abuse workflow",
    bulletproof: "Manual review, evidence exchange, DMCA ignored by default.",
    regular: "Auto-suspension after the first complaint."
  },
  {
    label: "Jurisdictions & IPs",
    bulletproof: "NL/DE/MD/US-friendly pools, multiple ASNs and clean ranges.",
    regular: "Single-country IPs exposed to local takedowns."
  },
  {
    label: "Privacy & billing",
    bulletproof: "Crypto + wire + optional paperwork, no forced AML/KYC.",
    regular: "ID checks and rigid billing data."
  },
  {
    label: "Network safeguards",
    bulletproof: "150+ Gbps capacity, Anycast scrubbing, ACL automation.",
    regular: "Basic firewall with limited mitigation."
  },
  {
    label: "Migration path",
    bulletproof: "Upgrade to dedicated or Turbo VDS seamlessly.",
    regular: "Requires new provider or downtime during moves."
  }
];

const tarifs: Tarif[] = [
  {
    title: "Lite 1",
    cpu: 1,
    ram: 1,
    ssd: 20,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 17.29,
    url: "https://my.dior.host"
  },
  {
    title: "Lite 2",
    cpu: 2,
    ram: 2,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 32.29,
    url: "https://my.dior.host"
  },
  {
    title: "Lite 3",
    cpu: 2,
    ram: 4,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 37.29,
    url: "https://my.dior.host"
  },
  {
    title: "Lite 4",
    cpu: 2,
    ram: 6,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 57.29,
    url: "https://my.dior.host"
  }
];

const faqs = [
  {
    question: "What is bulletproof VPS hosting?",
    answer:
      "Bulletproof VPS hosting keeps workloads online during DMCA or abuse disputes by relying on offshore rules, flexible policies and manual mediation."
  },
  {
    question: "Is bulletproof VDS legal in the USA or EU?",
    answer:
      "Yes—using bulletproof VPS is legal when your project avoids criminal content. Dior Host only blocks zero-tolerance abuse."
  },
  {
    question: "Which locations power Dior Host VDS?",
    answer:
      "Amsterdam, Frankfurt, Chisinau and USA-friendly peers with direct routes to New York, London and Frankfurt IX."
  },
  {
    question: "Do you require KYC for bulletproof VPS?",
    answer:
      "No mandatory KYC. Provide documents only if your bank or partner requests them."
  },
  {
    question: "Can I migrate from a regular VPS?",
    answer:
      "Yes. Import images or snapshots, schedule cutover with support and keep the same IPv4 pools."
  }
];

export default function BulletproofVdsPageClient() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                        <line x1="6" x2="6.01" y1="6" y2="6" />
                        <line x1="6" x2="6.01" y1="18" y2="18" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-white">{tarif.title}</h2>
                  </div>
                  <div className="flex-1 space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">CPU</span>
                      <span className="text-white font-semibold">{tarif.cpu} core</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">RAM</span>
                      <span className="text-white font-semibold">{tarif.ram} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">SSD</span>
                      <span className="text-white font-semibold">{tarif.ssd} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Network</span>
                      <span className="text-white font-semibold">{tarif.networkSpeed} Mbps</span>
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
        {steps.length > 0 && (
          <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-8"
              >
                How to deploy bulletproof VDS
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
        )}

        {/* Info Sections */}
        {sections.length > 0 && (
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
        )}

        {/* Comparison Table */}
        {comparisonRows.length > 0 && (
          <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-2"
              >
                Bulletproof VDS vs regular VPS
              </motion.h2>
              <p className="text-white/70 mb-6">Stay online longer with offshore bulletproof infrastructure.</p>
              <div className="overflow-auto rounded-xl border border-white/10">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-white">Factor</th>
                      <th className="px-6 py-4 font-semibold text-primary">Bulletproof VDS</th>
                      <th className="px-6 py-4 font-semibold text-white/60">Regular VPS</th>
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
        )}

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-8"
              >
                Bulletproof VDS FAQ
              </motion.h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
