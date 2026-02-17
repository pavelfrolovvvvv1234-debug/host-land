                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "use client";

import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { homeContent, type HomeContent, type ParagraphSegment } from "../../content/home";
import { localizePath, type Locale } from "../../lib/localization";
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

  useEffect(() => {
    if (typeof window === 'undefined') {
      setReady(true);
      return;
    }

    const currentPath = window.location.pathname;
    const isHomePage = currentPath === '/' || currentPath === '/ru' || currentPath === '/en';
    
    if (!isHomePage) {
      setReady(true);
      return;
    }

    const preloaderElement = document.getElementById("preloader");
    if (!preloaderElement) {
      setReady(true);
      return;
    }

    // Preloader is already visible in DOM, just ensure it's shown and content is hidden
    preloaderElement.classList.add("preloader-visible");
    preloaderElement.classList.remove("preloader-removed");
    preloaderElement.style.cssText = "display: flex !important; visibility: visible !important; opacity: 1 !important; pointer-events: auto !important; z-index: 9999 !important;";
    
    // Content is hidden via style prop until ready=true

    // Small delay to let NavigationTracker update sessionStorage
    let preloaderTimer: NodeJS.Timeout | null = null;
    let isTimerSet = false;
    
    const checkPreloader = () => {
      // Prevent multiple timer setups
      if (isTimerSet) return;
      isTimerSet = true;
      
      // Get previous path from sessionStorage (set by NavigationTracker)
      const previousPath = sessionStorage.getItem('previous_path');
      const currentPathInStorage = sessionStorage.getItem('current_path');
      const navigationType = sessionStorage.getItem('navigation_type');
    
      // Check if this is a navigation from another page (not a refresh)
      const shouldShowPreloader = (() => {
        // Don't show for refresh
        if (navigationType === 'reload') {
          sessionStorage.removeItem('navigation_type');
          return false;
        }
        
        // Check previous_path from NavigationTracker (most reliable)
        const isPreviousHomepage = previousPath === '/' || previousPath === '/ru' || previousPath === '/en';
        if (previousPath && !isPreviousHomepage) {
          return true;
        }
        
        // Check current_path - if it was set and different from current, we navigated
        if (currentPathInStorage && currentPathInStorage !== currentPath) {
          const isCurrentPathHomepage = currentPathInStorage === '/' || currentPathInStorage === '/ru' || currentPathInStorage === '/en';
          if (!isCurrentPathHomepage) {
            return true;
          }
        }
        
        // Check document.referrer as fallback (works for external links or browser navigation)
        const referrer = document.referrer;
        if (referrer && referrer.startsWith(window.location.origin)) {
          try {
            const referrerUrl = new URL(referrer);
            const referrerPath = referrerUrl.pathname;
            const isReferrerHomepage = referrerPath === '/' || referrerPath === '/ru' || referrerPath === '/en';
            // If referrer exists and is NOT a homepage, show preloader
            if (referrerPath && !isReferrerHomepage && referrerPath !== currentPath) {
              return true;
            }
          } catch (e) {
            // Invalid URL, skip
          }
        }
        
        return false;
      })();

      // If we shouldn't show preloader, hide it immediately and show content
      if (!shouldShowPreloader) {
        preloaderElement.classList.remove("preloader-visible");
        preloaderElement.classList.add("preloader-removed");
        preloaderElement.style.cssText =
          "display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;";
        // Content will fade in via Framer Motion when ready=true
        setReady(true);
        return;
      }

      // Preloader is already shown, just set up the hide timer
      const hidePreloader = () => {
        preloaderElement.classList.add("preloader-fadeout");
        setTimeout(() => {
          preloaderElement.classList.remove("preloader-visible", "preloader-fadeout");
          preloaderElement.classList.add("preloader-removed");
          preloaderElement.style.cssText =
            "display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;";
          // Content will fade in via Framer Motion when ready=true
          setReady(true);
        }, 500);
      };

      preloaderTimer = setTimeout(hidePreloader, 1800);
    };

    // Check immediately and also after small delay (for NavigationTracker)
    checkPreloader();
    const timeoutId = setTimeout(checkPreloader, 50);
    
    return () => {
      clearTimeout(timeoutId);
      if (preloaderTimer) {
        clearTimeout(preloaderTimer);
      }
    };
  }, []);

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
      <div
        id="preloader"
        className="preloader preloader-visible"
        style={{ display: "flex", visibility: "visible", opacity: 1 }}
      >
        <div className="preloader-content">
          <div className="logo-animation-group">
            <div className="preloader-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="109" height="21" viewBox="0 0 106 21">
                <g>
                  <path
                    className="logo-path"
                    style={{
                      fillRule: "evenodd",
                      fill: "rgb(66,104,255)"
                    }}
                    d="M 10.992188 20.992188 L 19.496094 20.992188 L 13.476562 13.105469 L 22.140625 13.105469 L 28.050781 5.585938 L 23.59375 0 L 3.472656 0 L 8.65625 6.789062 L 0 6.789062 Z M 18.523438 6.773438 L 13.480469 13.105469 L 8.644531 6.773438 Z"
                  />
                  <path
                    className="logo-path"
                    style={{ fillRule: "nonzero", fill: "#ffffff" }}
                    d="M 57.769531 10.472656 C 57.769531 12.03125 57.386719 13.429688 56.621094 14.675781 C 55.871094 15.917969 54.789062 16.898438 53.378906 17.609375 C 51.980469 18.320312 50.355469 18.675781 48.5 18.675781 L 40.382812 18.675781 L 40.382812 2.226562 L 48.480469 2.226562 C 50.347656 2.226562 51.980469 2.582031 53.378906 3.292969 C 54.789062 3.988281 55.871094 4.96875 56.621094 6.226562 C 57.386719 7.472656 57.769531 8.886719 57.769531 10.472656 Z M 48.789062 15.410156 C 50.347656 15.410156 51.621094 14.984375 52.605469 14.140625 C 53.589844 13.28125 54.082031 12.058594 54.082031 10.472656 C 54.082031 9.585938 53.847656 8.761719 53.378906 8.007812 C 52.921875 7.234375 52.289062 6.628906 51.480469 6.183594 C 50.671875 5.738281 49.773438 5.515625 48.789062 5.515625 L 44.109375 5.515625 L 44.109375 15.410156 Z"
                  />
                  <path
                    className="logo-path"
                    style={{ fillRule: "nonzero", fill: "#ffffff" }}
                    d="M 63.4375 18.675781 L 59.710938 18.675781 L 59.710938 2.226562 L 63.4375 2.226562 Z"
                  />
                  <path
                    className="logo-path"
                    style={{ fillRule: "nonzero", fill: "#ffffff" }}
                    d="M 75.449219 1.871094 C 77.363281 1.871094 79.082031 2.242188 80.613281 2.980469 C 82.15625 3.722656 83.363281 4.753906 84.230469 6.070312 C 85.097656 7.390625 85.535156 8.875 85.535156 10.519531 C 85.535156 12.148438 85.097656 13.617188 84.230469 14.917969 C 83.363281 16.222656 82.164062 17.253906 80.636719 18.007812 C 79.105469 18.75 77.382812 19.121094 75.472656 19.121094 C 73.617188 19.121094 71.914062 18.75 70.351562 18.007812 C 68.792969 17.253906 67.558594 16.222656 66.644531 14.917969 C 65.734375 13.601562 65.277344 12.132812 65.277344 10.519531 C 65.277344 8.886719 65.734375 7.414062 66.644531 6.09375 C 67.558594 4.777344 68.785156 3.746094 70.332031 3.003906 C 71.890625 2.25 73.597656 1.871094 75.449219 1.871094 Z M 75.449219 16.054688 C 76.523438 16.054688 77.539062 15.839844 78.496094 15.410156 C 79.449219 14.980469 80.222656 14.347656 80.8125 13.519531 C 81.398438 12.675781 81.695312 11.675781 81.695312 10.519531 C 81.695312 9.378906 81.394531 8.382812 80.789062 7.539062 C 80.203125 6.695312 79.421875 6.050781 78.449219 5.605469 C 77.496094 5.160156 76.480469 4.9375 75.40625 4.9375 C 74.257812 4.9375 73.207031 5.160156 72.25 5.605469 C 71.308594 6.050781 70.558594 6.6875 70 7.515625 C 69.441406 8.347656 69.160156 9.332031 69.160156 10.472656 C 69.160156 11.644531 69.449219 12.652344 70.023438 13.496094 C 70.609375 14.328125 71.382812 14.964844 72.339844 15.410156 C 73.296875 15.839844 74.332031 16.054688 75.449219 16.054688 Z"
                  />
                  <path
                    className="logo-path"
                    style={{ fillRule: "nonzero", fill: "#ffffff" }}
                    d="M 101.410156 18.632812 L 96.886719 13.320312 L 91.039062 13.320312 L 91.039062 18.632812 L 87.375 18.632812 L 87.375 2.183594 L 98.917969 2.183594 C 100.285156 2.183594 101.492188 2.410156 102.535156 2.871094 C 103.59375 3.332031 104.410156 3.976562 104.984375 4.804688 C 105.574219 5.621094 105.867188 6.570312 105.867188 7.652344 L 105.867188 7.738281 C 105.867188 9.148438 105.457031 10.3125 104.632812 11.230469 C 103.824219 12.148438 102.699219 12.761719 101.257812 13.074219 L 106 18.632812 Z M 102.117188 7.828125 C 102.117188 6.984375 101.953125 6.367188 101.632812 5.984375 C 101.320312 5.597656 100.925781 5.359375 100.4375 5.273438 C 99.953125 5.183594 99.269531 5.136719 98.386719 5.136719 C 97.988281 5.136719 97.652344 5.144531 97.371094 5.160156 C 95.386719 5.207031 93.277344 5.226562 91.039062 5.226562 L 91.039062 10.363281 L 98.386719 10.363281 C 99.269531 10.363281 99.953125 10.324219 100.4375 10.25 C 100.925781 10.164062 101.320312 9.941406 101.632812 9.585938 C 101.953125 9.214844 102.117188 8.628906 102.117188 7.828125 Z"
                  />
                </g>
              </svg>
              <div className="logo-glow" />
            </div>
          </div>
        </div>
      </div>

      <motion.main
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        style={{ display: ready ? "block" : "none", visibility: ready ? "visible" : "hidden", pointerEvents: ready ? "auto" : "none" }}
      >
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-hero-glow blur-[100px] pointer-events-none opacity-50"></div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section - NO IMAGE */}
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-20 shadow-2xl overflow-hidden backdrop-blur-sm">
          {/* Inner decoration */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"></div>

          <div className="relative z-10 text-center">
            <h1 className="mx-auto max-w-4xl text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
              {content.hero.title}
            </h1>
            
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-sm text-white/80 backdrop-blur-md shadow-lg">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                {content.hero.subtitle}
              </span>
            </div>

            <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 mb-10 leading-relaxed bg-black/40 p-6 rounded-xl border border-white/5 backdrop-blur-sm shadow-xl">
              {content.hero.description}
            </p>

            <div className="animate-float mt-8">
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
                className="mx-auto h-6 w-6 text-white/30"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

            {/* Quick Benefits Pills */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
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
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-blue-200"
                  >
                    {icon}
                    <span>{text}</span>
                  </div>
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
                initial={{ opacity: 0, y: 20 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/20 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">{card.name}</h3>
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  {card.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 rounded-xl border border-white/10 bg-surface/50 p-4 text-center text-sm text-white/70">
          {planParagraph(content.readyPlansSegments)}
        </div>

        {/* Domains Section */}
        <div id="services-section" className="mt-12">
          <div className="rounded-xl border border-white/10 bg-black/60 p-8 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">{content.domainSectionTitle}</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {content.domainZones.map((zone, index) => (
                <motion.a
                  key={zone.title}
                  href="https://t.me/diorhost_bot"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={ready ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group flex items-center gap-2 rounded border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all"
                >
                  <span className="text-white">{zone.title}</span>{" "}
                  <span className="text-red-400 group-hover:text-red-300">{zone.price} $</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* VDS Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-8">{content.vdsSectionTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {content.vdsTariffs.map((tariff, index) => (
              <motion.div
                key={tariff.title}
                initial={{ opacity: 0, y: 20 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                <div className="relative flex h-full flex-col justify-between rounded-lg bg-black/40 p-5">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="rounded p-2 bg-white/5 border border-white/5 group-hover:border-primary/30 transition-colors">
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
              href={localizeHref("/bulletproof/vds")}
              className="inline-flex items-center text-sm text-white/70 hover:text-white hover:border-b border-white transition-all"
            >
              {content.vdsShowMoreLabel}
            </Link>
          </div>
        </div>

        {/* IPHM Section */}
        {content.iphmTariffs && content.iphmTariffs.length > 0 && (
          <div className="mt-16 text-center">
            <div className="relative mb-8">
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
              <h2 className="inline-block bg-[#080808] px-6 text-2xl font-semibold tracking-tight text-white">
                {content.iphmSectionTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.iphmTariffs.map((tariff, index) => (
                <motion.div
                  key={`${tariff.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
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
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary"></span> NVME: {tariff.ssd} GB
                      </li>
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
                href={localizeHref("/services/iphm")}
                className="inline-flex items-center text-sm text-white/70 hover:text-white hover:border-b border-white transition-all"
              >
                {content.iphmShowMoreLabel}
              </Link>
            </div>
          </div>
        )}

        {/* Why Us Section */}
        {content.whyUsCards && content.whyUsCards.length > 0 && (
          <div className="mt-16 rounded-2xl border border-white/10 bg-surface/50 p-8 shadow-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-8">{content.whyUsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.whyUsCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={ready ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {index === 0 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{card.description}</p>
                  <div className="mt-auto inline-flex items-center rounded bg-white/5 px-3 py-1 text-xs text-white/40 border border-white/5">
                    {card.tag}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Informational Articles */}
        {content.sections && content.sections.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {content.sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
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

        {/* Testimonials */}
        {content.testimonials && content.testimonials.length > 0 && (
          <section className="mt-16 rounded-2xl border border-white/10 bg-surface/30 p-8">
            <h2 className="text-2xl font-semibold text-center text-white mb-8">{content.testimonialsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={ready ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-xl border border-white/10 bg-black/40 p-6 hover:bg-black/60 transition-all"
                >
                  <p className="text-sm italic text-white/80 mb-6">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-xs">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
                  {testimonial.kpi && (
                    <div className="mt-4 border-t border-white/10 pt-3 text-xs text-green-400">{testimonial.kpi}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>
        )}

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
          <section className="mt-16 bg-black/20 rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold text-white mb-8">{content.faqTitle}</h2>
            <div className="space-y-4">
              {content.faqs.map((item, index) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} index={index} />
              ))}
            </div>
          </section>
        )}

      </div>
      </motion.main>
    </>
  );
}
