"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "../../components/motion/ScrollReveal";
import { StaggerContainer } from "../../components/motion/StaggerContainer";
import { fadeInUp, scaleOnHover, cardHover, iconRotate } from "../../lib/motion";

// Content configuration (easy to localize)
const content = {
  hero: {
    title: "Affiliate program for bulletproof hosting partners",
    subheading: "Up to 15% revshare from bulletproof VDS, IPHM and domains. Lifetime commissions.",
    ctaPrimary: "Sign up as partner",
    ctaSecondary: "Log in to affiliate panel"
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        number: 1,
        title: "Share the link",
        description: "Share your referral link or promo code.",
        icon: "link"
      },
      {
        number: 2,
        title: "Wait registration",
        description: "New customers register using your link or promo code.",
        icon: "user"
      },
      {
        number: 3,
        title: "You get the profit",
        description: "You earn a percentage of every order they place.",
        icon: "dollar"
      }
    ]
  },
  partnerLevels: {
    title: "Partner levels",
    tiers: [
      {
        name: "Bronze",
        monthlyTurnover: "$0 - $1,000",
        revshare: "5%",
        bonuses: "Standard support",
        recommended: false
      },
      {
        name: "Silver",
        monthlyTurnover: "$1,000 - $5,000",
        revshare: "8%",
        bonuses: "Priority support + Extra $10 CPA per server",
        recommended: false
      },
      {
        name: "Gold",
        monthlyTurnover: "$5,000 - $15,000",
        revshare: "12%",
        bonuses: "Dedicated manager + Extra $20 CPA per IPHM client",
        recommended: true
      },
      {
        name: "Platinum",
        monthlyTurnover: "$15,000+",
        revshare: "15%",
        bonuses: "VIP manager + Custom CPA deals + Marketing materials",
        recommended: false
      }
    ]
  },
  whatWeTrack: {
    title: "What we track",
    features: [
      { name: "Clicks", description: "Track every click on your referral links" },
      { name: "Registrations", description: "Monitor new customer sign-ups" },
      { name: "Active services", description: "Real-time service status tracking" },
      { name: "Payouts", description: "Automatic payout calculations" }
    ],
    additional: [
      "Real-time dashboard",
      "Postback / webhook / API support"
    ]
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "How are payouts made?",
        answer: "Payouts are automatically transferred to your account on the first day of each month. You can withdraw via cryptocurrency (Bitcoin, USDT), bank transfer, or use funds to pay for your own services."
      },
      {
        question: "What is the cookie lifetime?",
        answer: "Our referral tracking uses a 90-day cookie lifetime. If a visitor clicks your referral link and registers within 90 days, you'll receive credit for that customer."
      },
      {
        question: "Do you allow brand SEO traffic?",
        answer: "Yes, we allow brand SEO traffic. You can promote our services through SEO, content marketing, and organic search traffic. However, we do not allow bidding on our brand keywords in paid advertising."
      },
      {
        question: "Is incentivized traffic allowed?",
        answer: "Incentivized traffic (offering rewards for sign-ups) is allowed on a case-by-case basis. Please contact us to discuss your traffic source and ensure compliance with our terms."
      },
      {
        question: "How do I track my referrals?",
        answer: "After signing up, you'll receive access to your affiliate dashboard with real-time statistics, including clicks, registrations, active services, earnings, and payout history. API and webhook support is available for advanced integration."
      },
      {
        question: "Can I use my referral link on multiple websites?",
        answer: "Yes, you can use your referral link or promo code on multiple websites, social media, email campaigns, or any other marketing channels. There are no restrictions on the number of websites or channels you can use."
      }
    ]
  },
  finalCta: {
    title: "Ready to earn on bulletproof infrastructure?",
    subtitle: "We already work with affiliates in EU, US and CIS high-risk verticals.",
    cta: "Become a partner",
    termsLink: "View terms of the program"
  }
};

// Icon components
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

type IconComponentType = React.FC<IconProps>;

const LinkIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const UserIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const DollarIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const PercentIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" x2="5" y1="5" y2="19" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
  </svg>
);

const ShieldIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const RepeatIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m17 2 4 4-4 4" />
    <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" />
    <path d="M21 13v1a4 4 0 0 1-4 4H3" />
  </svg>
);

const ChartIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);

const WalletIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
  </svg>
);

const HeadphonesIcon = ({ className }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 14h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3z" />
    <path d="M21 14h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3z" />
    <path d="M3 10v4" />
    <path d="M21 10v4" />
    <path d="M7 14v4a2 2 0 0 0 2 2h1" />
    <path d="M15 14v4a2 2 0 0 1-2 2h-1" />
  </svg>
);

const iconMap: Record<string, IconComponentType> = {
  link: LinkIcon,
  user: UserIcon,
  dollar: DollarIcon,
  percent: PercentIcon,
  shield: ShieldIcon,
  repeat: RepeatIcon,
  chart: ChartIcon,
  wallet: WalletIcon,
  headphones: HeadphonesIcon
};


// FAQ Accordion Component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ScrollReveal>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-white text-center">
          {content.faq.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const IconComponent: IconComponentType = (index % 2 === 0 ? LinkIcon : ChartIcon) as IconComponentType;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-lg overflow-hidden bg-black/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="font-semibold text-white">{item.question}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-400 flex-shrink-0 ml-4"
                  >
                    ▶
                  </motion.span>
                </button>
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pt-0 text-white/70 text-sm">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </ScrollReveal>
  );
}

export default function AffiliateProgramPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black/60 border border-white/10 rounded-2xl mb-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(66, 104, 255, 0.3)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          {/* Network nodes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500/30 rounded-full" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-500/30 rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-500/30 rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-500/30 rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <StaggerContainer>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              {content.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              {content.hero.subheading}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="https://my.dior.host?func=register"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                {content.hero.ctaPrimary}
              </motion.a>
              <motion.a
                href="https://my.dior.host"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-colors"
              >
                {content.hero.ctaSecondary}
              </motion.a>
            </motion.div>
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works Stepper */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-12 text-white text-center">
            {content.howItWorks.title}
          </h2>
          <div className="flex flex-col gap-6 max-w-2xl mx-auto relative">
            <StaggerContainer>
              {content.howItWorks.steps.map((step, index) => {
                return (
                  <motion.div
                    key={step.number}
                    variants={fadeInUp}
                    className="relative z-10"
                  >
                    <motion.div
                      variants={cardHover}
                      initial="rest"
                      whileHover="hover"
                      className="bg-black/40 border border-blue-500/30 rounded-xl p-6 relative flex items-center gap-6"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center">
                          <span className="text-2xl font-bold text-blue-400">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                        <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Partner Levels */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-12 text-white text-center">
            {content.partnerLevels.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.partnerLevels.tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className={`bg-black/40 border rounded-xl p-6 relative ${
                  tier.recommended
                    ? "border-blue-500/50 shadow-[0_0_30px_rgba(66,104,255,0.2)]"
                    : "border-white/10"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4 text-white text-center">{tier.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-white/60 mb-1">Monthly turnover</p>
                    <p className="text-white font-semibold">{tier.monthlyTurnover}</p>
                  </div>
                  <div>
                    <p className="text-white/60 mb-1">Revshare</p>
                    <p className="text-2xl font-bold text-green-400">{tier.revshare}</p>
                  </div>
                  <div>
                    <p className="text-white/60 mb-1">Bonuses</p>
                    <p className="text-white/80 text-xs">{tier.bonuses}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>


      {/* What We Track */}
      <ScrollReveal>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-12 text-white text-center">
            {content.whatWeTrack.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              {content.whatWeTrack.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/40 border border-white/10 rounded-lg p-4"
                >
                  <h3 className="font-semibold mb-1 text-white">{feature.name}</h3>
                  <p className="text-white/70 text-xs">{feature.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="bg-black/40 border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-white">Additional Features</h3>
              <ul className="space-y-2">
                {content.whatWeTrack.additional.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-white/80">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Mockup dashboard visual */}
              <div className="mt-6 bg-black/50 rounded-lg p-4 border border-white/5">
                <div className="space-y-2">
                  <div className="h-3 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/10 rounded w-1/2" />
                  <div className="h-3 bg-white/10 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <FAQAccordion />

      {/* Final CTA */}
      <ScrollReveal>
        <section className="relative bg-black/60 border border-white/10 rounded-2xl p-12 text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(66, 104, 255, 0.3)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              {content.finalCta.title}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 mb-8"
            >
              {content.finalCta.subtitle}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://my.dior.host?func=register"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                {content.finalCta.cta}
              </motion.a>
              <Link
                href="/public-offer"
                className="text-blue-300 hover:text-white underline text-sm"
              >
                {content.finalCta.termsLink}
              </Link>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
