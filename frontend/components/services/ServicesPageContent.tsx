"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { servicesContent } from "../../content/services";
import { ServiceIcon } from "./ServiceIcons";

type ServicesPageContentProps = {
  locale: "en" | "ru";
};

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="opacity-50 transition-transform group-hover:translate-x-0.5"
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ServicesPageContent({ locale }: ServicesPageContentProps) {
  const [ready, setReady] = useState(false);
  const content = servicesContent[locale];

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <section className="relative premium-panel bg-noise-subtle rounded-2xl p-8 sm:p-12 lg:p-16 mb-10 sm:mb-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            {content.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-5 leading-[1.1]"
          >
            {content.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-white/50 leading-relaxed"
          >
            {content.description}
          </motion.p>
        </div>
      </section>

      <section aria-labelledby="services-catalog-heading">
        <span className="section-eyebrow">{content.catalogEyebrow}</span>
        <h2 id="services-catalog-heading" className="sr-only">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.services.map((service, index) => {
            const card = (
              <motion.article
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`group premium-service-card flex h-full flex-col rounded-xl p-5 sm:p-6 ${
                  service.comingSoon ? "premium-service-card--muted" : ""
                }`}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/80 transition-colors group-hover:border-white/10 group-hover:bg-white/[0.05]">
                  <ServiceIcon id={service.id} />
                </div>

                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold tracking-tight text-white">{service.title}</h3>
                  {service.comingSoon && (
                    <span className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wider text-white/40">
                      {content.soonBadge}
                    </span>
                  )}
                </div>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/55">{service.description}</p>

                <div className="mt-auto border-t border-white/[0.06] pt-4">
                  {service.comingSoon ? (
                    <span className="text-sm text-white/35">{content.unavailable}</span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors group-hover:text-white">
                      {content.learnMore}
                      <ArrowIcon />
                    </span>
                  )}
                </div>
              </motion.article>
            );

            if (service.comingSoon) {
              return <div key={service.id}>{card}</div>;
            }

            return (
              <Link key={service.id} href={service.href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl">
                {card}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
