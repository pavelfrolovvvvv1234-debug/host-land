"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ScrollReveal } from "../../components/motion/ScrollReveal";
import { fadeInUp, staggerContainer, cardHover } from "../../lib/motion";

const blogIntro = {
  title: "Bulletproof Hosting Insights",
  summary:
    "Actionable playbooks for bulletproof VPS, dedicated servers, offshore domains and DMCA compliance."
};

type BlogCard = {
  slug: string;
  title: string;
  summary: string;
};

const blogPosts: BlogCard[] = [
  {
    slug: "bulletproof-vds-blog",
    title: "What Is a Bulletproof VDS? Full Technical Overview, Use Cases, and Abuse-Resistance Architecture",
    summary:
      "Complete technical deep-dive into bulletproof VDS architecture, hypervisor configurations, network isolation, abuse-handling policies, and deployment strategies for high-risk workloads."
  },
  {
    slug: "bulletproof-domains-blog",
    title: "Bulletproof Domains: How Offshore & DMCA-Resistant Domain Infrastructure Works",
    summary:
      "Technical explanation of bulletproof domain systems, registry policies, DNS infrastructure, abuse-handling workflows, and deployment strategies for high-risk projects."
  },
  {
    slug: "vds-vs-vps-vs-dedicated-blog",
    title: "VDS vs VPS vs Dedicated: Deep Technical Comparison for High-Risk and High-Load Projects",
    summary:
      "Technical comparison of VDS, VPS, and dedicated server architectures, hypervisor technologies, network isolation, storage stacks, and deployment strategies."
  },
  {
    slug: "bulletproof-dedicated-servers-blog",
    title: "Bulletproof Dedicated Servers: Architecture, Abuse Handling, Traffic Filtering, and IP Policies",
    summary:
      "Technical deep-dive into bulletproof dedicated server architecture, abuse-handling workflows, traffic filtering systems, IP policies, and deployment strategies."
  },
  {
    slug: "dedicated-servers-blog",
    title: "Dedicated Servers: When You Need Bare-Metal, Performance, Isolation & IP Control",
    summary:
      "Guide to dedicated server infrastructure, performance characteristics, isolation benefits, IP management strategies, and deployment best practices for high-performance workloads."
  },
  {
    slug: "turbovds-blog",
    title: "TurboVDS: High-Performance Virtual Servers with Optimized CPU/RAM/IO Stack",
    summary:
      "Technical overview of TurboVDS architecture, performance optimizations, use cases, benchmarking results, and deployment strategies for high-performance applications."
  },
  {
    slug: "iphm-dedicated-servers-blog",
    title: "Dedicated Server with IPHM: IP History Management Explained, Benefits, Anti-Abuse Logic",
    summary:
      "Complete guide to IP History Management (IPHM), reputation management, anti-abuse logic, use cases, and deployment strategies for high-reputation workloads."
  },
  {
    slug: "offshore-hosting-blog",
    title: "Offshore Hosting Explained: Jurisdictions, DMCA Ignore Policies, Network Stability & Risks",
    summary:
      "Technical explanation of offshore hosting architecture, jurisdiction selection, DMCA ignore policies, network stability considerations, legal risks, and deployment strategies."
  },
  {
    slug: "bulletproof-hosting-stack-blog",
    title: "How to Build an bulletproof Hosting Stack: DNS, L4/L7 Firewalls, Routing, IP Reputation",
    summary:
      "Technical guide to building bulletproof hosting infrastructure, including DNS configuration, firewall rules, BGP routing, IP reputation monitoring, and deployment best practices."
  },
  {
    slug: "dmca-ignored-hosting-blog",
    title: "DMCA-Ignored Hosting & DMCA-Ignored VDS: How It Works, Who Uses It, Technical Pros & Cons",
    summary:
      "Complete guide to DMCA-ignored hosting architecture, abuse-handling workflows, use cases, technical advantages, legal considerations, and deployment strategies."
  },
  {
    slug: "cdn-complete-guide",
    title: "CDN: Complete Guide to Website Acceleration Through Global Content Delivery Networks",
    summary:
      "Deep technical dive into CDN architecture, edge caching, geo-routing, smart-routing, DNS load balancing, and configuration examples for Cloudflare, Fastly, and Akamai."
  },
  {
    slug: "vpn-infrastructure-guide",
    title: "VPN Infrastructure Breakdown: How to Choose a VPN Provider and Deploy Your Own Corporate VPN Stack",
    summary:
      "Technical deep-dive into VPN protocols (WireGuard, OpenVPN, IPSec), deployment architectures, security encryption, access control, use cases, and monetization strategies."
  },
  {
    slug: "minecraft-hosting-architecture",
    title: "Minecraft Hosting: Architecture, Optimization, Load Management, Security, and Scalability",
    summary:
      "Complete technical guide to Minecraft server hosting, Java performance optimization, Paper/Spigot/Purpur configuration, BungeeCord/Velocity scaling, and production deployment strategies."
  },
  {
    slug: "bulletproof-vps-complete-guide",
    title: "bulletproof VPS/VDS: How bulletproof Data Centers Work and Who Really Needs Them",
    summary:
      "Complete technical guide to bulletproof hosting, abuse request handling mechanics, IPHM, SLA policies, policy-friendly jurisdictions, and use cases for high-risk projects."
  }
];

export default function BlogIndexPage() {
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
                {blogIntro.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base sm:text-lg text-white/70 leading-relaxed"
              >
                {blogIntro.summary}
              </motion.p>
            </div>
          </motion.section>
        </ScrollReveal>

        {/* Articles Section */}
        <ScrollReveal delay={0.2}>
          <section className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-between flex-wrap gap-4 mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Latest articles</h2>
              <div className="text-sm text-white/60 flex gap-2 items-center">
                <span>Tags:</span>
                <span className="uppercase tracking-wide text-white/80 text-xs">
                  VPS · DMCA · DNS · Compliance
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative flex flex-col rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                  <div className="relative flex h-full flex-col justify-between rounded-lg bg-black/40 p-6 hover:bg-black/60 transition-all">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/50 mb-3">
                        Article
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed mb-4">
                        {post.summary}
                      </p>
                    </div>
                    <Link
                      className="mt-auto inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors group/link"
                      href={`/blog/articles/${post.slug}`}
                    >
                      Read article
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
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}


