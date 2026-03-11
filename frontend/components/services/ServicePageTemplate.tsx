"use client";

import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";
import { FAQItem } from "../motion/FAQItem";

interface ServicePageTemplateProps {
  hero: {
    heading: string;
    subheading?: string;
    summary: string;
    comingSoon?: boolean;
  };
  sections?: Array<{
    title: string;
    body: string;
    bullets?: string[];
  }>;
  steps?: Array<{
    title: string;
    description: string;
  }>;
  comparisonRows?: Array<{
    label: string;
    bulletproof: string;
    regular: string;
  }>;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  children?: ReactNode;
}

export function ServicePageTemplate({
  hero,
  sections = [],
  steps = [],
  comparisonRows = [],
  faqs = [],
  children
}: ServicePageTemplateProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Hero — same premium style as homepage; glows from root layout */}
      <section className="relative rounded-2xl border border-white/10 bg-surface/80 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden backdrop-blur-md mb-10 sm:mb-12">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="relative z-10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              {hero.heading}
            </h1>
            {hero.comingSoon && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={mounted ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-primary/20 text-primary border border-primary/30 whitespace-nowrap"
              >
                Coming Soon
              </motion.span>
            )}
          </div>
          {hero.subheading && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-white/70 mb-4"
            >
              {hero.subheading}
            </motion.p>
          )}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed"
          >
            {hero.summary}
          </motion.p>
        </div>
      </section>

      {/* Custom Content */}
      {children}

      {/* Steps Section */}
        {steps.length > 0 && (
          <div className="relative rounded-2xl border border-white/10 bg-surface/60 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-10 sm:mb-12">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07]" />
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
          <div className="relative rounded-2xl border border-white/10 bg-surface/60 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-10 sm:mb-12">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07]" />
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-white mb-2"
              >
                Comparison
              </motion.h2>
              <div className="overflow-auto rounded-xl border border-white/10 mt-6">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-4 font-semibold text-white">Factor</th>
                      <th className="px-6 py-4 font-semibold text-primary">Premium</th>
                      <th className="px-6 py-4 font-semibold text-white/60">Regular</th>
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
          <div className="relative rounded-2xl border border-white/10 bg-surface/60 p-8 shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07]" />
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
    </>
  );
}

