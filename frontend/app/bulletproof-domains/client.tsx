"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FAQItem } from "../../components/motion/FAQItem";

type ComparisonRow = { label: string; bulletproof: string; regular: string };

type Zone = {
  title: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Bulletproof Domains & Offshore Registration",
  subheading: "DMCA-ignored registrars with resilient DNS",
  summary:
    "In simple terms, bulletproof domains are registered through offshore providers that keep DNS online even when DMCA notices or abuse complaints arrive, protecting SEO and email reputation. Servers located in Netherlands (more locations coming soon)."
};

const sections = [
  {
    title: "Why use bulletproof domains?",
    body: "Domains are the first asset takedown teams attack. Offshore registrars with mediation-first policies keep your brand reachable.",
    bullets: [
      "Manual review and dialogue before any suspension.",
      "WHOIS privacy enabled by default.",
      "Works for marketing, fintech, VPN, media and privacy projects."
    ]
  },
  {
    title: "Which TLDs are supported?",
    body: "Flat $80/year pricing (except .io) across .com, .net, .org, .io, .cc, .uk, .us, .link, .bz and more.",
    bullets: [
      "Instant activation plus API access.",
      "Assisted transfers and backorders.",
      "DNSSEC, vanity nameservers and custom glue records."
    ]
  },
  {
    title: "How are abuse tickets handled?",
    body: "Every notice is triaged manually. We notify you privately, define a remediation plan and ignore DMCA unless a court order appears.",
    bullets: [
      "Zero tolerance only for malware, CSA or terrorism.",
      "Compliance liaisons for EU/US regulators and partners.",
      "Dedicated channels for advertisers and PSPs."
    ]
  }
];

const steps = [
  {
    title: "Pick the jurisdiction & TLD",
    description:
      "Decide which GEO needs protection and choose between .com, .net, .io, .uk, .us or niche TLDs."
  },
  {
    title: "Plan term & DNS strategy",
    description:
      "Prepay multi-year registrations, configure DNSSEC and glue records if required."
  },
  {
    title: "Register or transfer",
    description:
      "Use the panel or API to register instantly or hand off EPP codes for zero-downtime transfers."
  },
  {
    title: "Monitor abuse inbox",
    description:
      "Keep abuse contacts active so we can coordinate remediation without escalation."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Abuse handling",
    bulletproof: "Manual review, DMCA ignored by default.",
    regular: "Automated suspension from registry."
  },
  {
    label: "Privacy",
    bulletproof: "WHOIS privacy included, offshore data handling.",
    regular: "Public WHOIS or costly add-ons."
  },
  {
    label: "DNS tooling",
    bulletproof: "API, DNSSEC, vanity NS, IPv4/IPv6 glue.",
    regular: "Basic DNS only."
  },
  {
    label: "Pricing",
    bulletproof: "Flat yearly pricing ($80 / $99 for .io).",
    regular: "Fluctuating renewals, hidden fees."
  },
  {
    label: "Use cases",
    bulletproof: "Affiliate, fintech, VPN, media, security research.",
    regular: "Low-risk brochure sites."
  }
];

const domainsPrices = {
  reg: 80,
  renew: 80,
  transfer: 80
};

const zones: Zone[] = [
  { title: ".com", price: 80, url: "https://my.dior.host" },
  { title: ".net", price: 80, url: "https://my.dior.host" },
  { title: ".org", price: 80, url: "https://my.dior.host" },
  { title: ".info", price: 80, url: "https://my.dior.host" },
  { title: ".biz", price: 80, url: "https://my.dior.host" },
  { title: ".club", price: 80, url: "https://my.dior.host" },
  { title: ".pro", price: 80, url: "https://my.dior.host" },
  { title: ".uk", price: 80, url: "https://my.dior.host" },
  { title: ".guru", price: 80, url: "https://my.dior.host" },
  { title: ".ca", price: 80, url: "https://my.dior.host" },
  { title: ".at", price: 80, url: "https://my.dior.host" },
  { title: ".io", price: 99, url: "https://my.dior.host" },
  { title: ".cc", price: 80, url: "https://my.dior.host" },
  { title: ".us", price: 80, url: "https://my.dior.host" },
  { title: ".link", price: 80, url: "https://my.dior.host" },
  { title: ".bz", price: 80, url: "https://my.dior.host" }
];

const faqs = [
  {
    question: "What is a bulletproof domain?",
    answer:
      "A domain registered via bulletproof offshore registrars that do not remove DNS delegation when DMCA arrives."
  },
  {
    question: "Can I transfer existing domains?",
    answer:
      "Yes. Provide the EPP code and we coordinate a zero-downtime cutover."
  },
  {
    question: "Do you hide WHOIS data?",
    answer: "WHOIS privacy is enabled by default at the registry level."
  },
  {
    question: "Are there content restrictions?",
    answer:
      "Only universal zero-tolerance content is banned. Everything else goes through mediation."
  },
  {
    question: "Do you support DNSSEC and vanity NS?",
    answer:
      "Yes, DNSSEC, custom glue, vanity nameservers and API automation are available."
  }
];

export default function BulletproofDomainsPageClient() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Registration", price: domainsPrices.reg, icon: "📝" },
            { label: "Renewal", price: domainsPrices.renew, icon: "🔄" },
            { label: "Transfer", price: domainsPrices.transfer, icon: "↔️" }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl border border-white/10 bg-card-gradient p-6 hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-3xl font-bold text-primary">${item.price}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.label}</h3>
            </motion.div>
          ))}
        </div>

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center"
            >
              Available Domain Zones
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {zones.map((zone, index) => (
                <motion.a
                  key={zone.title}
                  href={zone.url}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-xl border border-white/10 bg-card-gradient p-4 hover:border-primary/50 transition-all text-center group"
                >
                  <div className="text-2xl font-bold text-white mb-2">{zone.title}</div>
                  <div className="text-sm font-semibold text-primary">${zone.price}/yr</div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              How to secure a bulletproof domain
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

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-2"
            >
              Bulletproof domains vs regular domains
            </motion.h2>
            <p className="text-white/70 mb-6">Keep your DNS online during disputes.</p>
            <div className="overflow-auto rounded-xl border border-white/10">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-white">Factor</th>
                    <th className="px-6 py-4 font-semibold text-primary">Bulletproof domains</th>
                    <th className="px-6 py-4 font-semibold text-white/60">Regular domains</th>
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

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              Bulletproof domain FAQ
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
      </div>
    </main>
  );
}
