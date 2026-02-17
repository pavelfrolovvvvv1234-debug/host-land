"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import back2 from "../../assets/back_2.png";
import { HeroGlowSweep } from "../motion/HeroGlowSweep";
import { DigitalGrain } from "../motion/DigitalGrain";
import { ScrollReveal } from "../motion/ScrollReveal";
import { StaggerContainer } from "../motion/StaggerContainer";
import { PremiumCard } from "../motion/PremiumCard";
import { TLDCloud } from "../motion/TLDCloud";
import { ProgressLine } from "../motion/ProgressLine";
import { IPHMPulseLine } from "../motion/IPHMPulseLine";
import { FAQItem } from "../motion/FAQItem";
import { fadeInUp, iconRotate, slideInLeft } from "../../lib/motion";
import { homeContent, type HomeContent, type ParagraphSegment } from "../../content/home";
import { localizePath, type Locale } from "../../lib/localization";

export interface HomePageProps {
  readonly locale: Locale;
  readonly content?: HomeContent;
}

/**
 * Renders the landing page with localized content, premium animations and
 * locale-aware links. Shared between EN and RU routes to avoid duplication.
 */
export function HomePage({ locale, content = homeContent[locale] }: HomePageProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const preloaderElement = document.getElementById("preloader");
    if (!preloaderElement) {
      setReady(true);
      return;
    }

    const hidePreloader = () => {
      preloaderElement.classList.add("preloader-fadeout");
      setTimeout(() => {
        preloaderElement.classList.remove("preloader-visible", "preloader-fadeout");
        preloaderElement.classList.add("preloader-removed");
        preloaderElement.style.cssText =
          "display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;";
        setReady(true);
      }, 500);
    };

    const preloaderTimer = setTimeout(hidePreloader, 1800);
    return () => {
      clearTimeout(preloaderTimer);
    };
  }, []);

  const localizeHref = (href: string) => localizePath(href, locale);
  const planParagraph = (segments: ReadonlyArray<ParagraphSegment>) =>
    segments.map((segment, index) =>
      segment.type === "text" ? (
        <Fragment key={`text-${index}`}>{segment.value}</Fragment>
      ) : (
        <a
          key={`link-${segment.href}-${segment.label}`}
          className="text-blue-300 underline-offset-2 hover:text-white"
          href={localizeHref(segment.href)}
        >
          {segment.label}
        </a>
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

      <div style={{ display: ready ? "block" : "none" }}>
        <div className="relative rounded-lg p-10 py-20 shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] overflow-hidden bg-black">
          <Image src={back2} alt="" fill priority className="object-cover opacity-80 pointer-events-none" />
          <DigitalGrain />
          <HeroGlowSweep />

          <div className="relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-3xl sm:text-4xl font-bold tracking-tight text-center"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="text-center text-lg mt-4 text-white/90 max-w-2xl mx-auto bg-black/50 px-4 py-2 rounded-full shadow shadow-black/40"
            >
              {content.hero.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="mt-6 text-base sm:text-lg text-center text-white/90 max-w-3xl mx-auto bg-black/60 px-5 py-4 rounded-2xl shadow-lg shadow-black/40 backdrop-blur"
            >
              {content.hero.description}
            </motion.p>
            <motion.button
              type="button"
              aria-label={content.heroScrollLabel}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, 8, 0]
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.45 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.45
                }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center mt-4 mx-auto cursor-pointer"
              onClick={() => {
                const el = document.getElementById("better");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#e0e0e0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.button>

            <motion.section
              id="better"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="mt-10 w-full relative"
            >
              <div className="flex justify-center items-center clear-both">
                <div className="flex gap-4 items-stretch flex-wrap justify-center">
                  {content.quickBenefits.map((text, index) => (
                    <motion.li
                      key={text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                      className="border border-blue bg-black/50 p-2 rounded flex-grow flex-basis-400 text-center list-none"
                    >
                      {text}
                    </motion.li>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        <div className="mt-4 rounded-lg p-2 shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] bg-black/40 bg-center py-20 bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 backdrop-saturate-150 backdrop-contrast-100">
          <StaggerContainer>
            <ul className="flex gap-4 justify-center flex-wrap px-4">
              {content.statusCards.map((card) => (
                <motion.li key={card.name} variants={fadeInUp} whileHover="hover" initial="rest" className="flex-grow basis-72">
                  <div className="bg-black/40 p-4 rounded-lg shadow shadow-lg">
                    <h3 className="font-bold uppercase opacity-50">{card.name}</h3>
                    <p className="mt-4">{card.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </StaggerContainer>
        </div>

        <section className="mt-4 bg-black/40 border border-white/10 rounded-xl p-4 text-sm text-white/80">
          <p>{planParagraph(content.readyPlansSegments)}</p>
        </section>

        <div className="mt-4 flex min-h-[200px] flex-col gap-4">
          <ScrollReveal>
            <div className="bg-black/70 rounded-lg p-4 text-center w-full shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)]">
              <h2 className="text-2xl font-bold">{content.domainSectionTitle}</h2>
              <div className="flex flex-wrap gap-2 my-4 justify-center uppercase max-w-[50%] mx-auto">
                {content.domainZones.map((zone, index) => {
                  const isSpecial = [".io", ".link", ".guru", ".cloud"].includes(zone.title);
                  return (
                    <TLDCloud
                      key={zone.title}
                      isSpecial={isSpecial}
                      delay={index * 0.1}
                      className="select-none border-transparent hover:border-white inline-block p-2 border rounded domain-link"
                    >
                      <a href="https://t.me/diorhost_bot" className="block">
                        {zone.title} <span className="text-red-400">{zone.price} $</span>
                      </a>
                    </TLDCloud>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-lg bg-black w-full text-center">
              <h2 className="text-2xl font-bold my-4">{content.vdsSectionTitle}</h2>
              <StaggerContainer className="flex flex-wrap gap-4 p-2 sm:justify-center rounded-lg">
                {content.vdsTariffs.map((tarif) => (
                  <PremiumCard
                    key={tarif.title}
                    className="p-2 rounded-lg border flex-grow sm:min-w-[250px] sm:max-w-[287px] border-[#ffffff49] select-none bg-black/30"
                    glowColor="rgba(66, 104, 255, 0.2)"
                  >
                    <motion.div variants={fadeInUp} className="content">
                      <div className="flex flex-col gap-2 !items-start !justify-start m-[20px]">
                        <div className="flex flex-wrap gap-4 items-center">
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="41"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={iconRotate}
                            initial="rest"
                            whileHover="hover"
                            className="service-card-icon"
                          >
                            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                            <line x1="6" x2="6.01" y1="6" y2="6" />
                            <line x1="6" x2="6.01" y1="18" y2="18" />
                          </motion.svg>
                          <h3 className="font-bold text-xl">{tarif.title}</h3>
                        </div>
                        <div className="mt-auto text-xs w-full">
                          <ul className="flex flex-col gap-2">
                            <li className="text-sm flex justify-between">
                              <span className="rounded-lg font-bold px-1 inline-block">{content.specLabels.cpu}</span> {tarif.cpu} core
                            </li>
                            <li className="text-sm flex justify-between">
                              <span className="rounded-lg font-bold px-1 inline-block">{content.specLabels.ram}</span> {tarif.ram} gb
                            </li>
                            <li className="text-sm flex justify-between relative">
                              <span className="rounded-lg font-bold px-1 inline-block">{content.specLabels.storage}</span> {tarif.ssd} gb
                              <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                                initial={{ width: 0, x: 0 }}
                                whileHover={{ width: "100%", x: "100%" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                              />
                            </li>
                          </ul>
                          <ul className="mt-4 flex flex-col gap-2">
                            <li className="text-white/40 flex gap-2">
                              <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                                {content.specLabels.networkSpeed}
                              </span>{" "}
                              {tarif.networkSpeed} mb/s
                              <ProgressLine />
                            </li>
                            <li className="text-white/40 flex gap-2">
                              <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                                {content.specLabels.bandwidth}
                              </span>{" "}
                              {tarif.bandwidth}
                            </li>
                            <li className="text-white/40 flex gap-2">
                              <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                                {content.specLabels.os}
                              </span>{" "}
                              {tarif.os}
                            </li>
                          </ul>
                        </div>
                        <a
                          href={tarif.url}
                          className="p-2 bg-black/20 w-full rounded-lg border-[#ffffff44] mt-4 border hover:border-[#6e84e4] transition-colors"
                        >
                          {formatPrice(tarif.price)}
                        </a>
                      </div>
                    </motion.div>
                  </PremiumCard>
                ))}
              </StaggerContainer>
              <a
                href={localizeHref("/bulletproof/vds")}
                className="my-4 inline-block hover:border-b border-b border-transparent hover:border-white transition-colors"
              >
                {content.vdsShowMoreLabel}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-lg bg-black w-full text-center relative">
              <IPHMPulseLine />

              <h2 className="text-2xl font-bold my-4">{content.iphmSectionTitle}</h2>
              <StaggerContainer className="flex flex-wrap gap-4 p-2 sm:justify-center rounded-lg">
                {content.iphmTariffs.map((tarif) => (
                  <motion.div
                    key={`${tarif.title}-${tarif.ram}-${tarif.ssd}`}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03, y: -6 }}
                    initial="hidden"
                    animate={{
                      opacity: [0.96, 1, 0.96]
                    }}
                    transition={{
                      opacity: {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      scale: {
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1]
                      }
                    }}
                    className="p-2 rounded-lg border flex-grow sm:min-w-[250px] sm:max-w-[287px] border-[#ffffff49] select-none bg-black/30 relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        background: "radial-gradient(circle at center, rgba(66, 104, 255, 0.05), transparent 70%)"
                      }}
                      animate={{
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <div className="content relative z-10">
                      <div className="flex flex-col gap-2 !items-start !justify-start m-[20px]">
                        <div className="flex flex-wrap gap-4 items-center">
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="41"
                            height="41"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#e0e0e0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={iconRotate}
                            initial="rest"
                            whileHover="hover"
                            className="service-card-icon"
                          >
                            <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
                            <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
                            <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
                          </motion.svg>
                          <h3 className="font-bold text-xl">{tarif.title}</h3>
                        </div>
                        <div className="mt-auto text-xs w-full">
                          <ul className="flex flex-col gap-2">
                            <li className="text-sm flex justify-between">
                              <span className="rounded-lg font-bold px-1 inline-block">{content.specLabels.cpu}</span> {tarif.cpu} core
                            </li>
                            <li className="text-sm flex justify-between">
                              <span className="rounded-lg font-bold px-1 inline-block">
                                RAM (DDR5)
                              </span>{" "}
                              {tarif.ram} gb
                            </li>
                            <li className="text-sm flex justify-between">
                              <span className="rounded-lg font-bold px-1 inline-block">NVME</span> {tarif.ssd} gb
                            </li>
                          </ul>
                          <ul className="mt-4 flex flex-col gap-2">
                            {tarif.props.map((prop) => (
                              <li key={`${tarif.title}-${prop.name}`} className="text-white/40 flex gap-2">
                                <span className="rounded-lg text-center flex justify-center items-center bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1">
                                  {prop.name}
                                </span>{" "}
                                {prop.value}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href={tarif.url}
                          className="p-2 bg-black/20 w-full rounded-lg border-[#ffffff44] mt-4 border hover:border-[#6e84e4] service-card-price transition-colors"
                        >
                          {formatPrice(tarif.price)}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
              <a
                href={localizeHref("/services/iphm")}
                className="my-4 inline-block hover:border-b border-b border-transparent hover:border-white transition-colors"
              >
                {content.iphmShowMoreLabel}
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-4 bg-black/40 p-2 rounded-lg shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)]">
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="ml-6 mt-4 font-bold text-2xl">
              {content.whyUsTitle}
            </motion.h2>
            <StaggerContainer className="flex gap-4 p-4 flex-wrap items-center">
              {content.whyUsCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="max-w-1/2 p-2 flex items-center flex-wrap md:flex-nowrap why-us-item"
                >
                  <div className="flex-grow basis-60">
                    <h3 className="font-bold text-xl flex gap-2 flex-wrap items-center flex-grow">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="why-us-icon"
                        animate={{
                          scale: [1, 1.03, 1]
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </motion.svg>
                      {card.title}
                    </h3>
                    <p className="text-balance flex-grow mt-4 why-us-list">{card.description}</p>
                  </div>
                  <div className="w-full flex-grow basis-60 text-center p-2 bg-white/10 my-4 rounded-lg m-4">{card.tag}</div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {content.sections.length > 0 && (
          <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3">
            {content.sections.map((section) => (
              <motion.article
                key={section.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-black/60 border border-white/10 rounded-xl p-6 flex flex-col gap-4 shadow-[0px_21px_80px_rgba(10,77,146,0.25)]"
              >
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="text-sm text-white/70">{section.body}</p>
                {section.bullets.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.article>
            ))}
          </StaggerContainer>
        )}

        {content.testimonials.length > 0 && (
          <ScrollReveal>
            <section className="mt-12 bg-black/50 border border-white/10 rounded-2xl p-6">
              <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl font-bold text-center mb-6">
                {content.testimonialsTitle}
              </motion.h2>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.testimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.name}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-black/40 border border-white/10 rounded-lg p-4"
                  >
                    <p className="text-white/80 text-sm mb-3 italic">&quot;{testimonial.quote}&quot;</p>
                    <div className="flex items-center gap-2 mt-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center font-bold">{testimonial.initials}</div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-white/60">{testimonial.role}</p>
                      </div>
                    </div>
                    {testimonial.kpi && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-xs text-white/70">{testimonial.kpi}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </StaggerContainer>
            </section>
          </ScrollReveal>
        )}

        {content.steps.length > 0 && (
          <ScrollReveal>
            <section className="mt-10 bg-black/50 border border-white/10 rounded-2xl p-6">
              <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl font-semibold">
                {content.stepsTitle}
              </motion.h2>
              <p className="text-white/70 mt-2">{content.stepsSubtitle}</p>
              <StaggerContainer className="mt-4 space-y-4">
                {content.steps.map((step, index) => (
                  <motion.li key={step.title} variants={fadeInUp} className="flex gap-4">
                    <motion.span
                      className="h-10 w-10 flex items-center justify-center rounded-full border border-white/30 text-lg font-bold"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {index + 1}
                    </motion.span>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-sm text-white/70">{step.description}</p>
                    </div>
                  </motion.li>
                ))}
              </StaggerContainer>
            </section>
          </ScrollReveal>
        )}

        {content.comparisonRows.length > 0 && (
          <ScrollReveal>
            <section className="mt-10">
              <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl font-semibold">
                {content.comparisonTitle}
              </motion.h2>
              <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-white/70 mt-2">
                {content.comparisonSubtitle}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-4 overflow-auto rounded-xl border border-white/10"
              >
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-white/5 uppercase text-xs tracking-wide">
                    <tr>
                      <th className="px-4 py-3">{content.comparisonHeaders.keyFactor}</th>
                      <th className="px-4 py-3">{content.comparisonHeaders.bulletproof}</th>
                      <th className="px-4 py-3">{content.comparisonHeaders.regular}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.comparisonRows.map((row, index) => (
                      <motion.tr
                        key={row.label}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                        className="border-t border-white/10"
                      >
                        <th className="px-4 py-3 font-semibold">{row.label}</th>
                        <td className="px-4 py-3 text-white/80">{row.bulletproof}</td>
                        <td className="px-4 py-3 text-white/60">{row.regular}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </section>
          </ScrollReveal>
        )}

        {content.faqs.length > 0 && (
          <ScrollReveal>
            <section className="mt-12 bg-black/40 border border-white/10 rounded-2xl p-6">
              <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl font-semibold">
                {content.faqTitle}
              </motion.h2>
              <div className="mt-4 space-y-4">
                {content.faqs.map((faq, index) => (
                  <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}
      </div>
    </>
  );
}


