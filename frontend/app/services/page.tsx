"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Bulletproof VDS",
    description:
      "On these servers, you can keep everything. We ignore any type of complaint. The ability to deliver any OS. Anonymity is 100%",
    href: "/bulletproof/vds",
    icon: (
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
      >
        <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m13 6-4 6h6l-4 6" />
      </svg>
    )
  },
  {
    title: "Bulletproof Domains",
    description:
      "Bulletproof domains. No blocking and the warranty is for the whole period! Transfer is possible, if desired. All domains from $80",
    href: "/bulletproof/domains",
    icon: (
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
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
    )
  },
  {
    title: "Virtual servers (VDS)",
    description:
      'Regular servers for "white" or "gray" operation. Complaints are not ignored! The ability to install any OS',
    href: "/services/vds",
    icon: (
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
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    )
  },
  {
    title: "Bulletproof Dedicated Servers",
    description:
      "Dedicated servers with a 100% guarantee of anonymity. No blocking and no complaints. The ability to deliver any OS.",
    href: "/bulletproof/dedicated",
    icon: (
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
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m15.7 13.4-.9-.3" />
        <path d="m9.2 10.9-.9-.3" />
        <path d="m10.6 15.7.3-.9" />
        <path d="m13.6 15.7-.4-1" />
        <path d="m10.8 9.3-.4-1" />
        <path d="m8.3 13.6 1-.4" />
        <path d="m14.7 10.8 1-.4" />
        <path d="m13.4 8.3-.3.9" />
      </svg>
    )
  },
  {
    title: "Dedicated Servers",
    description:
      'Dedicated servers for "white" or "gray" operation. Complaints are not ignored! The ability to install any OS.',
    href: "/services/dedicated",
    icon: (
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
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m15.7 13.4-.9-.3" />
        <path d="m9.2 10.9-.9-.3" />
        <path d="m10.6 15.7.3-.9" />
        <path d="m13.6 15.7-.4-1" />
        <path d="m10.8 9.3-.4-1" />
        <path d="m8.3 13.6 1-.4" />
        <path d="m14.7 10.8 1-.4" />
        <path d="m13.4 8.3-.3.9" />
      </svg>
    )
  },
  {
    title: "TurboVDS",
    description:
      "Servers for parsing, mass-checking, SEO, security analysis, and other high-load network tasks. With up to 10 Gbps bandwidth, they deliver lightning-fast performance and stability. Ideal for port scanning, host availability checks, automation, and API-driven operations. Outperforms standard bulletproof VDS thanks to superior network throughput.",
    href: "/services/vdsturbo",
    icon: (
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
      >
        <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m13 6-4 6h6l-4 6" />
      </svg>
    )
  },
  {
    title: "Dedicated Servers IPHM",
    description:
      "IPHM servers allow users to hide their real IP address by masking it with another. This can be useful for privacy protection, bypassing geographical restrictions, or conducting network security testing. Bandwidth up to 10 Gbps.",
    href: "/services/iphm",
    icon: (
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
      >
        <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
        <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
        <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
      </svg>
    )
  },
  {
    title: "CDN",
    description:
      "Content Delivery Network service for fast content delivery worldwide. Accelerate your website performance with global edge servers and smart caching.",
    href: "/services/cdn",
    icon: (
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
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
    )
  },
  {
    title: "Minecraft Hosting",
    description:
      "High-performance Minecraft server hosting with optimized Java runtime, mod support, and automatic backups. Perfect for survival, creative, and custom game modes.",
    href: "/services/minecraft",
    icon: (
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
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    )
  },
  {
    title: "Web Hosting",
    description:
      "Reliable shared hosting with cPanel, one-click installs, and 99.9% uptime guarantee. Perfect for websites, blogs, and business applications.",
    href: "/services/web-hosting",
    icon: (
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
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    title: "VPN",
    description:
      "Virtual Private Network service for secure and private internet access. Bypass geo-restrictions, protect your data, and browse anonymously with our VPN infrastructure.",
    href: "/services/vpn",
    icon: (
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
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  }
];

export default function ServicesPage() {
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
        <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 sm:p-20 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-30"></div>

          <div className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight"
            >
              Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed"
            >
              Choose the perfect hosting solution for your needs. From bulletproof VDS to dedicated servers, we offer a wide range of services to keep your projects online.
            </motion.p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative"
            >
              <Link
                href={service.href}
                className="block h-full relative flex flex-col rounded-xl border border-white/10 bg-card-gradient p-1 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                <div className="relative flex h-full flex-col justify-between rounded-lg bg-black/40 p-6 hover:bg-black/60 transition-all">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="rounded-lg p-2 bg-primary/10 border border-primary/20 text-primary group-hover:border-primary/40 group-hover:bg-primary/20 transition-all">
                        {service.icon}
                      </div>
                      <h2 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
