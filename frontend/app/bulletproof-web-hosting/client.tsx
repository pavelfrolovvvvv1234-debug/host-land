"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FAQItem } from "../../components/motion/FAQItem";

type ComparisonRow = { label: string; bulletproof: string; regular: string };

const hero = {
  heading: "Bulletproof Web Hosting",
  subheading:
    "Offshore shared and managed stacks with DMCA-resistant policies",
  summary:
    "In simple terms, bulletproof web hosting keeps your websites online even if DMCA or abuse complaints arrive by placing them on offshore infrastructure in the USA, UK, NL, DE and EU, combining managed services with abuse mediation."
};

const steps = [
  {
    title: "Map your sites and GEOs",
    description:
      "List domains, traffic sources and countries you must reach."
  },
  {
    title: "Pick the hosting mode",
    description:
      "Choose managed shared stacks, isolated containers or hybrid web + VDS nodes."
  },
  {
    title: "Configure domains & SSL",
    description:
      "Point bulletproof domains, upload SSL/TLS certificates or request managed issuance."
  },
  {
    title: "Launch & monitor",
    description:
      "Deploy via panel, enable backups and watch abuse tickets in the dashboard."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Abuse handling",
    bulletproof: "Manual mediation, DMCA ignored.",
    regular: "Auto suspension by the host."
  },
  {
    label: "Infrastructure",
    bulletproof: "Offshore multi-region clusters with isolation options.",
    regular: "Single datacenter shared servers."
  },
  {
    label: "Privacy & KYC",
    bulletproof: "Crypto/wire, optional paperwork.",
    regular: "Mandatory ID for every account."
  },
  {
    label: "Scaling",
    bulletproof: "Seamless upgrade to VDS/dedicated nodes.",
    regular: "Limited upgrade paths, forced migrations."
  },
  {
    label: "Support",
    bulletproof: "24/7 abuse liaison + NOC.",
    regular: "Standard ticket queue."
  }
];

const sections = [
  {
    title: "What is bulletproof web hosting?",
    body: "Managed reverse proxies, PHP/Node stacks and static/CDN layers that continue to serve pages despite takedown attempts.",
    bullets: [
      "DMCA ignored by default, human review before action.",
      "Managed WAF/CDN shielding plus optional custom SSL.",
      "Ideal for landing pages, marketing funnels, media mirrors."
    ]
  },
  {
    title: "Where is it hosted?",
    body: "Multi-region clusters in Amsterdam, Frankfurt and New York with Anycast routing toward EU/US eyeballs.",
    bullets: [
      "150+ Gbps bandwidth and DDoS mitigation.",
      "On-demand isolation to VDS/dedicated nodes.",
      "Panel/API to manage deployments and backups."
    ]
  },
  {
    title: "How are abuses handled?",
    body: "Tickets reach our compliance desk first. We coordinate remediation privately, log outcomes and keep workloads online unless courts require removal.",
    bullets: [
      "Zero tolerance only for malware/CSA/terror.",
      "Optional KYC for regulated partners.",
      "Escalation to account managers when needed."
    ]
  }
];

const faqs = [
  {
    question: "What is bulletproof web hosting?",
    answer:
      "Managed web infrastructure that stays online during DMCA disputes via offshore policies."
  },
  {
    question: "Can I run PHP, Node and static sites?",
    answer:
      "Yes, we support modern runtimes, reverse proxies and custom containers."
  },
  {
    question: "Do you provide CDN or WAF?",
    answer:
      "Each plan includes CDN caching, WAF rules and optional custom configurations."
  },
  {
    question: "Is migration assisted?",
    answer:
      "Yes, we migrate files, databases and SSL with zero downtime."
  },
  {
    question: "How do you bill?",
    answer:
      "Crypto, wire and card (via partners) with optional invoices for corporate clients."
  }
];

export default function BulletproofWebHostingPageClient() {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
            >
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
                {hero.heading}
              </h1>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-primary/20 text-primary border border-primary/30 whitespace-nowrap"
              >
                Coming Soon
              </motion.span>
            </motion.div>
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

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              How to deploy bulletproof web hosting
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
              Bulletproof web hosting vs traditional hosting
            </motion.h2>
            <p className="text-white/70 mb-6">Managed stack plus abuse resistance.</p>
            <div className="overflow-auto rounded-xl border border-white/10">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-white">Key factor</th>
                    <th className="px-6 py-4 font-semibold text-primary">Bulletproof web hosting</th>
                    <th className="px-6 py-4 font-semibold text-white/60">Traditional hosting</th>
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

        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-6 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <p className="text-sm text-white/80">
              Pair your web stack with{" "}
              <Link
                href="/bulletproof-domains"
                className="text-primary hover:text-white transition-colors"
              >
                bulletproof domains
              </Link>
              ,{" "}
              <Link
                href="/bulletproof-vds"
                className="text-primary hover:text-white transition-colors"
              >
                VDS
              </Link>{" "}
              and{" "}
              <Link
                href="/bulletproof-dedicated"
                className="text-primary hover:text-white transition-colors"
              >
                dedicated servers
              </Link>{" "}
              for full coverage.
            </p>
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
              Bulletproof web hosting FAQ
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
