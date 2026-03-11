"use client";

import { motion } from "framer-motion";
import { useState, useEffect, ReactNode } from "react";

export interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  /** Optional badge (e.g. "Coming Soon") */
  badge?: ReactNode;
  /** Centered layout like homepage hero */
  centered?: boolean;
  /** Optional class for the wrapper */
  className?: string;
}

/**
 * Shared hero section for inner pages — same premium look as homepage.
 * Uses layout background glows; no duplicate glows inside.
 */
export function PageHero({
  title,
  subtitle,
  description,
  badge,
  centered = true,
  className = ""
}: PageHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className={`relative z-10 ${centered ? "text-center" : ""}`}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight"
          >
            {title}
          </motion.h1>
          {badge}
        </div>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-base sm:text-lg text-white/70 mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className={`text-base sm:text-lg text-white/60 leading-relaxed ${centered ? "mx-auto max-w-2xl" : ""}`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </>
  );

  return (
    <section
      className={`relative rounded-2xl border border-white/10 bg-surface/80 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden backdrop-blur-md mb-10 sm:mb-12 ${className}`}
      aria-labelledby="page-hero-title"
    >
      <h1 id="page-hero-title" className="sr-only">
        {title}
      </h1>
      {content}
    </section>
  );
}
