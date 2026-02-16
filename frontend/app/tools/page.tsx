"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ScrollReveal } from "../../components/motion/ScrollReveal";
import { fadeInUp, staggerContainer } from "../../lib/motion";

const toolsIntro = {
  title: "Professional Tools & Services",
  summary:
    "Comprehensive collection of advanced tools, services, and utilities for crypto operations, verification, privacy, and digital infrastructure management."
};

type ToolCard = {
  title: string;
  description: string;
  href?: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
};

const tools: ToolCard[] = [
  {
    title: "Tron Energy Rent",
    description:
      "Purchase TRON network energy and bandwidth resources for smart contract execution and transaction processing at competitive rates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "Web Development Agency",
    description:
      "Full-stack web development services including custom applications, API integration, frontend/backend development, and ongoing maintenance for businesses of all sizes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "Advanced OSINT Platform",
    description:
      "Professional open-source intelligence gathering tool similar to GB/Sherlock for comprehensive data collection, cross-platform search, and digital footprint analysis.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "Community Forums Directory",
    description:
      "Curated directory of active forums, communities, and discussion platforms with categorized links, activity metrics, and verified access information.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "URL Shortener Service",
    description:
      "Professional link shortening service with custom domains, analytics tracking, QR code generation, and advanced redirect management for marketing campaigns.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "Residential & Static Proxy Network",
    description:
      "Premium proxy service offering both residential IPs and static datacenter proxies with high anonymity, geo-targeting, and unlimited bandwidth for various use cases.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "Credit Card Checker",
    description:
      "Real-time credit card verification service with BIN lookup, card type detection, and validation checks for secure payment processing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "Identity Verification Suite",
    description:
      "Comprehensive identity verification service for SSN, DOB, and Driver's License validation with multi-source data cross-referencing and accuracy verification.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "SMS & Email Flood Bot",
    description:
      "Powerful and functional SMS & email flood bot. Available 24/7.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "Cryptocurrency Exchange Bot",
    description:
      "Automated Telegram-based cryptocurrency exchange service with instant swaps, competitive rates, and support for major digital assets.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 2v4M12 18v4M6 12h.01M18 12h.01" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "Virtual Card Platform",
    description:
      "FlexCard-style virtual card service with instant issuance, multi-currency support, spending controls, and integration with major payment processors for secure online transactions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    comingSoon: true
  },
  {
    title: "SMS Verification Service",
    description:
      "Advanced SMS verification and messaging service with multi-carrier support, global coverage, and instant delivery for account verification and notifications.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    comingSoon: true
  }
];

export default function ToolsPage() {
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
        <ScrollReveal>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-12 shadow-2xl overflow-hidden backdrop-blur-sm mb-12"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"></div>
            
            <div className="relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4"
              >
                {toolsIntro.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-white/70 leading-relaxed"
              >
                {toolsIntro.summary}
              </motion.p>
            </div>
          </motion.section>
        </ScrollReveal>

        {/* Tools Section */}
        <ScrollReveal delay={0.2}>
          <section className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between flex-wrap gap-4 mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Available Tools</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {tools.map((tool, index) => (
                    <motion.div
                      key={tool.title}
                      variants={fadeInUp}
                      custom={index}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="group relative flex flex-col rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                      <div className="relative flex h-full flex-col justify-between rounded-lg bg-black/40 p-6 hover:bg-black/60 transition-all">
                        <div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="text-primary">
                              {tool.icon}
                            </div>
                            {tool.comingSoon && (
                              <span className="text-xs uppercase tracking-wide text-primary/80 bg-primary/10 px-2 py-1 rounded">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                            {tool.title}
                          </h3>
                          <p className="text-sm text-white/70 leading-relaxed mb-4">
                            {tool.description}
                          </p>
                        </div>
                        {tool.href && (
                          <Link
                            className="mt-auto inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors group/link"
                            href={tool.href}
                          >
                            Use tool
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-4 transition-transform group-hover/link:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12l-7.5 7.5M21 12H3"
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </motion.div>
              ))}
            </motion.div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
