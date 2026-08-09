"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { dedicatedServersContent } from "../../content/dedicated-servers";
import { FAQItem } from "../motion/FAQItem";
import { localizePath, type Locale } from "../../lib/localization";

type DedicatedServersPageClientProps = {
  locale: Locale;
};

export function DedicatedServersPageClient({ locale }: DedicatedServersPageClientProps) {
  const [mounted, setMounted] = useState(false);
  const content = dedicatedServersContent[locale];
  const bulletproofDedicatedHref = localizePath("/bulletproof-dedicated", locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-hero-glow blur-[100px] pointer-events-none opacity-50" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        {/* Hero */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-20 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30" />

          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight"
            >
              {content.hero.heading}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-white/70 mb-4"
            >
              {content.hero.subheading}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed bg-black/40 p-6 rounded-xl border border-white/5 backdrop-blur-sm shadow-xl"
            >
              {content.hero.summary}
            </motion.p>
          </div>
        </div>

        {/* Tariffs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {content.tariffs.map((tarif, index) => (
            <motion.div
              key={`${tarif.title}-${tarif.ram}`}
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative"
            >
              <div className="relative rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
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
                        aria-hidden
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" />
                        <rect width="20" height="8" x="2" y="14" rx="2" />
                        <line x1="6" x2="6.01" y1="6" y2="6" />
                        <line x1="6" x2="6.01" y1="18" y2="18" />
                      </svg>
                    </div>
                    <h2 className="text-lg font-semibold text-white">{tarif.title}</h2>
                  </div>
                  <div className="flex-1 space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">{content.labels.cpu}</span>
                      <span className="text-white font-semibold">
                        {tarif.cpu} {content.labels.coresUnit}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">{content.labels.ram}</span>
                      <span className="text-white font-semibold">{tarif.ram} GB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">{content.labels.storage}</span>
                      <span className="text-white font-semibold text-right max-w-[55%]">{tarif.storage}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">{content.labels.network}</span>
                      <span className="text-white font-semibold">{tarif.networkSpeed} Gbps</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">{content.labels.bandwidth}</span>
                      <span className="text-white font-semibold">{tarif.bandwidth}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">{content.labels.os}</span>
                      <span className="text-white font-semibold">{tarif.os}</span>
                    </div>
                  </div>
                  <a
                    href={tarif.url}
                    className="w-full rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-center text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    ${tarif.price}
                    {content.labels.priceSuffix}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Steps */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              {content.stepsTitle}
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              {content.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0 }}
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

        {/* Info sections */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {content.sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative rounded-xl border border-white/10 bg-card-gradient p-6 hover:border-primary/30 transition-all"
            >
              <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
              <p className="text-sm text-white/70 mb-4">{section.body}</p>
              <ul className="space-y-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm text-white/80 flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Comparison */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-2"
            >
              {content.comparisonTitle}
            </motion.h2>
            <p className="text-white/70 mb-6">{content.comparisonSubtitle}</p>
            <div className="overflow-auto rounded-xl border border-white/10">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-white">{content.comparisonHeaders.factor}</th>
                    <th className="px-6 py-4 font-semibold text-primary">{content.comparisonHeaders.regular}</th>
                    <th className="px-6 py-4 font-semibold text-white/60">{content.comparisonHeaders.bulletproof}</th>
                  </tr>
                </thead>
                <tbody>
                  {content.comparisonRows.map((row, idx) => (
                    <tr key={row.label} className={`border-t border-white/10 ${idx % 2 === 0 ? "bg-white/5" : ""}`}>
                      <th className="px-6 py-4 font-semibold text-white">{row.label}</th>
                      <td className="px-6 py-4 text-white/80">{row.regular}</td>
                      <td className="px-6 py-4 text-white/60">{row.bulletproof}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-white/60">
              {locale === "ru" ? (
                <>
                  Нужен bare metal с игнорированием DMCA?{" "}
                  <Link href={bulletproofDedicatedHref} className="text-primary hover:text-primary/80 underline underline-offset-4">
                    Абузоустойчивые выделенные серверы
                  </Link>
                </>
              ) : (
                <>
                  Need DMCA-ignored bare metal?{" "}
                  <Link href={bulletproofDedicatedHref} className="text-primary hover:text-primary/80 underline underline-offset-4">
                    Bulletproof dedicated servers
                  </Link>
                </>
              )}
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold text-white mb-8"
            >
              {content.faqTitle}
            </motion.h2>
            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
