"use client";

import Link from "next/link";
import { Fragment, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { homeContent, type HomeContent, type ParagraphSegment } from "../../content/home";
import { localizePath, type Locale } from "../../lib/localization";
import { HomePreloader } from "./HomePreloader";
import { FAQItem } from "../motion/FAQItem";
import { fadeInUp } from "../../lib/motion";

interface HomePageModernProps {
  locale: Locale;
  content?: HomeContent;
}

/**
 * Modern landing page - HTML design with old content
 */
export function HomePageModern({ locale, content = homeContent[locale] }: HomePageModernProps) {
  const [ready, setReady] = useState(false);
  const handlePreloaderDone = useCallback(() => setReady(true), []);

  useEffect(() => {
    setReady(false);
    const fallback = window.setTimeout(() => setReady(true), 4500);
    return () => window.clearTimeout(fallback);
  }, [locale]);
  const trustedByTitle = locale === "ru" ? "Нам доверяют" : "Trusted by";
  const trustedPartners = [
    {
      name: "FB-Killa",
      url: "https://fb-killa.pro/tools/diorhost/",
      logo: "/partners/fbkill-horizontal.svg",
      logoClassName: "h-10 w-auto max-w-full object-contain brightness-0 invert opacity-90",
    },
    {
      name: "TheJavaSea",
      url: "https://thejavasea.me/threads/%E2%9C%85-diorhost-%E2%80%94-bulletproof-rdp-vps-ignoring-spamhaus-etc-all-black-things-allowed.250264/",
      logo: "/partners/thejavasea.png",
      logoClassName: "h-12 w-12 object-contain opacity-95",
    },
  ] as const;

  const localizeHref = (href: string) => localizePath(href, locale);
  
  const planParagraph = (segments: ReadonlyArray<ParagraphSegment>) =>
    segments.map((segment, index) =>
      segment.type === "text" ? (
        <Fragment key={`text-${index}`}>{segment.value}</Fragment>
      ) : (
        <Link
          key={`link-${segment.href}-${segment.label}`}
          className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 underline-offset-4"
          href={localizeHref(segment.href)}
        >
          {segment.label}
        </Link>
      )
    );
  
  const formatPrice = (price: number) => content.pricingOrderLabel.replace("{price}", `${price}`);

  return (
    <>
      <HomePreloader key={locale} onDone={handlePreloaderDone} />

      <motion.main
        className="relative z-10 overflow-hidden min-h-screen"
        initial={false}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="relative z-10">
        
        {/* Hero Section */}
        <div className="premium-panel rounded-2xl p-8 sm:p-12 lg:p-16 overflow-hidden">
          <div className="relative z-10 text-center">
            <span className="section-eyebrow">
              {locale === "ru" ? "Bulletproof инфраструктура" : "Bulletproof infrastructure"}
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
              {content.hero.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-white/65 mb-6 font-medium">
              {content.hero.subtitle}
            </p>
            <p className="mx-auto max-w-2xl text-base text-white/50 mb-10 leading-relaxed">
              {content.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {content.quickBenefits.map((text, index) => {
                let icon: JSX.Element;
                if (text.includes("AML") || text.includes("KYC") || text.includes("CFT")) {
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  );
                } else if (text.includes("delivery") || text.includes("выдача") || text.includes("Instant")) {
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  );
                } else if (text.includes("encryption") || text.includes("шифрование") || text.includes("Data")) {
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  );
                } else {
                  icon = (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" x2="7.01" y1="7" y2="7" />
                    </svg>
                  );
                }
                return (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80"
                  >
                    {icon}
                    {text}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-6 rounded-xl border border-white/5 bg-surface/30 p-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.statusCards.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/20 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">{card.name}</h3>
                {card.locations && card.locations.length > 0 ? (
                  <div className="flex items-start gap-2 text-green-400 text-sm font-medium">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                    <p>{card.locations.join(", ")}</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    {card.description}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features / Benefits */}
        {content.whyUsCards && content.whyUsCards.length > 0 && (
          <section className="mt-16 home-section" aria-labelledby="features-heading">
            <span className="section-eyebrow">{locale === "ru" ? "Преимущества" : "Features"}</span>
            <h2 id="features-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-8">
              {content.whyUsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {content.whyUsCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0 }}
                  animate={ready ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative premium-panel rounded-2xl p-6 sm:p-8 hover:border-primary/25 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 border border-primary/20 text-primary">
                      {index === 0 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                      <p className="text-sm text-white/65 leading-relaxed">{card.description}</p>
                      <span className="mt-3 inline-block rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/50">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* Quick links — ready plans */}
        <div className="mt-6 rounded-xl border border-white/10 bg-surface/40 p-4 text-center text-sm text-white/70">
          {planParagraph(content.readyPlansSegments)}
        </div>

        {/* Performance / Reliability */}
        <section className="mt-12 home-section" aria-labelledby="performance-heading">
          <span className="section-eyebrow">{locale === "ru" ? "Надёжность" : "Infrastructure"}</span>
          <h2 id="performance-heading" className="sr-only">Performance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="premium-stat text-center sm:text-left">
              <span className="premium-stat__label">Uptime</span>
              <div className="premium-stat__value">99.98%</div>
              <span className="premium-stat__hint">SLA availability</span>
            </div>
            <div className="premium-stat text-center sm:text-left">
              <span className="premium-stat__label">Bandwidth</span>
              <div className="premium-stat__value">150 Mbit/s</div>
              <span className="premium-stat__hint">Standard network</span>
            </div>
            <div className="premium-stat text-center sm:text-left">
              <span className="premium-stat__label">Support</span>
              <div className="premium-stat__value">24/7</div>
              <span className="premium-stat__hint">NOC & engineering</span>
            </div>
          </div>
        </section>

        {/* Domains Section */}
        <div id="services-section" className="mt-12 home-section">
          <div className="rounded-2xl border border-white/10 bg-surface/50 p-8 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-6">{content.domainSectionTitle}</h2>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {content.domainZones.map((zone, index) => (
                <motion.a
                  key={zone.title}
                  href="https://my.dior.host"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={ready ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <span>{zone.title}</span>
                  <span className="text-primary">{zone.price}$</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* VDS Section — Pricing overview */}
        <section id="pricing" className="mt-16 home-section" aria-labelledby="pricing-heading">
          <span className="section-eyebrow">{locale === "ru" ? "Тарифы" : "Pricing"}</span>
          <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-semibold text-white mb-2">
            {content.vdsSectionTitle}
          </h2>
          <p className="text-white/50 text-sm mb-8 max-w-lg">
            From VDS to dedicated — choose the right plan. All plans include manual abuse review and offshore routing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.vdsTariffs.map((tariff, index) => (
              <motion.div
                key={tariff.title}
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group premium-plan-card rounded-xl p-5 flex flex-col"
              >
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="rounded-lg p-2 bg-white/[0.04] border border-white/[0.06] group-hover:border-primary/25 transition-colors">
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
                        className="h-6 w-6 text-white"
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                        <line x1="6" x2="6.01" y1="6" y2="6" />
                        <line x1="6" x2="6.01" y1="18" y2="18" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white">{tariff.title}</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-white/60 mb-8">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span>{content.specLabels.cpu}</span> <span className="text-white font-medium">{tariff.cpu} core</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span>{content.specLabels.ram}</span> <span className="text-white font-medium">{tariff.ram} GB</span>
                    </li>
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span>{content.specLabels.storage}</span> <span className="text-white font-medium">{tariff.ssd} GB</span>
                    </li>
                    <li className="flex items-center gap-2 pt-2">
                      <span className="rounded bg-white/10 px-1.5 py-0.5 text-xs font-bold text-white">{content.specLabels.networkSpeed}</span>
                      <span className="text-xs">{tariff.networkSpeed} mb/s</span>
                    </li>
                  </ul>
                  <a
                    href={tariff.url}
                    className="block w-full rounded-lg border border-white/10 bg-white/[0.04] py-2.5 text-center text-sm font-medium text-white hover:bg-primary hover:border-primary transition-all"
                  >
                    {formatPrice(tariff.price)}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href={localizeHref("/bulletproof/vds")} className="text-sm text-primary hover:text-primary/80 underline underline-offset-4">
              {content.vdsShowMoreLabel}
            </Link>
          </p>
        </section>

        {/* Bulletproof dedicated servers */}
        {content.iphmTariffs && content.iphmTariffs.length > 0 && (
          <div className="mt-16 text-center">
            <div className="relative mb-8">
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
              <h2 className="inline-block bg-[#030304] px-6 text-2xl font-semibold tracking-tight text-white">
                {content.iphmSectionTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.iphmTariffs.map((tariff, index) => (
                <motion.div
                  key={`${tariff.title}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={ready ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                  <div className="relative flex h-full flex-col justify-between rounded-lg bg-black/40 p-5">
                    <div className="flex items-center gap-3 mb-4">
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
                        className="h-6 w-6 text-white/80"
                      >
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                        <line x1="6" x2="6.01" y1="6" y2="6" />
                        <line x1="6" x2="6.01" y1="18" y2="18" />
                      </svg>
                      <h3 className="text-lg font-semibold text-white">{tariff.title}</h3>
                    </div>
                    <div className="mb-6 space-y-1">
                      <div className="flex justify-between text-xs text-white/50">
                        <span>{content.specLabels.cpu}</span>
                        <span className="text-white">{tariff.cpu} core</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-white/10">
                        <div
                          className="h-1 rounded-full bg-primary/50"
                          style={{ width: `${Math.min((tariff.cpu / 48) * 100, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    <ul className="space-y-3 text-xs text-white/60 mb-6 text-left">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary"></span> {content.specLabels.ram}: {tariff.ram} GB
                      </li>
                      {tariff.ssd > 0 && (
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary"></span> {content.specLabels.storage}: {tariff.ssd} GB
                        </li>
                      )}
                      {tariff.props.map((prop, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary"></span> {prop.name}: {prop.value}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={tariff.url}
                      className="block w-full rounded-lg border border-white/10 bg-white/5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary hover:border-primary transition-all"
                    >
                      {formatPrice(tariff.price)}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href={localizeHref("/bulletproof/dedicated")}
                className="inline-flex items-center text-sm text-white/70 hover:text-white hover:border-b border-white transition-all"
              >
                {content.iphmShowMoreLabel}
              </Link>
            </div>
          </div>
        )}

        {/* Why Us Section — removed (content moved to Features above) */}

        {/* Informational Articles */}
        {content.sections && content.sections.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 rounded-xl border border-white/10 bg-black/60 p-6 shadow-lg hover:border-white/20 transition-all"
              >
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                <p className="text-xs leading-relaxed text-white/70">{section.body}</p>
                <ul className="list-disc list-inside text-xs text-white/60 space-y-1 mt-auto">
                  {section.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        )}

        {/* Trusted by */}
        <section className="mt-16 home-section rounded-2xl border border-white/10 bg-surface/30 p-8" aria-labelledby="trusted-by-heading">
          <h2 id="trusted-by-heading" className="text-2xl sm:text-3xl font-semibold text-center text-white mb-8">
            {trustedByTitle}
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {trustedPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[4.5rem] items-center justify-center rounded-xl border border-white/10 bg-black/40 p-6 transition-colors hover:border-white/20 hover:bg-black/55"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={partner.logoClassName}
                  loading="lazy"
                />
              </a>
            ))}
          </motion.div>
        </section>

        {/* Steps Section */}
        {content.steps && content.steps.length > 0 && (
          <section className="mt-16 rounded-2xl border border-white/10 bg-black/50 p-8">
            <h2 className="text-2xl font-semibold text-white mb-2">{content.stepsTitle}</h2>
            <p className="text-white/70 text-sm mb-8">{content.stepsSubtitle}</p>
            <div className="space-y-6">
              {content.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={ready ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/30 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Comparison Table */}
        {content.comparisonRows && content.comparisonRows.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-white mb-2">{content.comparisonTitle}</h2>
            <p className="text-sm text-white/60 mb-6">{content.comparisonSubtitle}</p>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-surface/30">
              <table className="w-full text-left text-sm text-white/70">
                <thead className="bg-white/5 text-xs uppercase tracking-wider text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold">{content.comparisonHeaders.keyFactor}</th>
                    <th className="px-6 py-4 font-semibold text-primary">{content.comparisonHeaders.bulletproof}</th>
                    <th className="px-6 py-4 font-semibold">{content.comparisonHeaders.regular}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {content.comparisonRows.map((row, index) => (
                    <motion.tr
                      key={row.label}
                      initial={{ opacity: 0 }}
                      animate={ready ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <th className="px-6 py-4 font-medium text-white">{row.label}</th>
                      <td className="px-6 py-4 text-white">{row.bulletproof}</td>
                      <td className="px-6 py-4 opacity-60">{row.regular}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* FAQ */}
        {content.faqs && content.faqs.length > 0 && (
          <section className="mt-12 home-section bg-black/20 rounded-2xl border border-white/10 px-6 py-6 sm:px-8 sm:py-7" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center">
              {content.faqTitle}
            </h2>
            <div className="space-y-3 w-full max-w-4xl mx-auto">
              {content.faqs.map((item, index) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="mt-10 home-section" aria-labelledby="final-cta-heading">
          <div className="premium-panel relative rounded-2xl border-primary/20 p-10 sm:p-14 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.07] to-transparent pointer-events-none" />
            <span className="section-eyebrow relative">{locale === "ru" ? "Старт" : "Start"}</span>
            <h2 id="final-cta-heading" className="relative text-2xl sm:text-3xl font-semibold text-white mb-4">
              {locale === "ru"
                ? "Разверните bulletproof-инфраструктуру"
                : "Ready to deploy on bulletproof infrastructure?"}
            </h2>
            <p className="relative text-white/70 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Get VPS, VDS, or dedicated servers with manual abuse review, offshore routing, and 24/7 support.
            </p>
            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://my.dior.host"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all"
              >
                {content.hero.ctaPrimary ?? "Get started"}
              </a>
              <Link
                href={localizeHref("/bulletproof/vds")}
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-base font-medium text-white hover:bg-white/15 transition-all"
              >
                {content.hero.ctaSecondary ?? "View plans"}
              </Link>
            </div>
          </div>
        </section>

      </div>
      </motion.main>
    </>
  );
}
