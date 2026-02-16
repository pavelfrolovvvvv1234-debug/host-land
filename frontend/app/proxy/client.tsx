"use client";

import { ServicePageTemplate } from "../../components/services/ServicePageTemplate";

const hero = {
  heading: "Proxy Service",
  summary:
    "Premium proxy service with residential and static datacenter IPs. High anonymity, geo-targeting, and unlimited bandwidth for privacy protection, bypassing geographical restrictions, and web automation.",
  comingSoon: true,
};

const sections = [
  {
    title: "Residential & Static IPs",
    body: "Choose between residential proxies that use real ISP IPs or static datacenter proxies for maximum speed and stability. Both options offer high anonymity.",
    bullets: [
      "Residential proxies from 50+ countries",
      "Static datacenter IPs with 10 Gbps",
      "Rotating and sticky sessions",
    ],
  },
  {
    title: "High Anonymity",
    body: "Our proxy infrastructure is designed for maximum privacy. No logging, no tracking, and IP rotation options for sensitive operations.",
    bullets: [
      "Elite anonymity level",
      "No-logs policy",
      "SOCKS5 and HTTP(S) support",
    ],
  },
  {
    title: "Geo-Targeting & Flexibility",
    body: "Target specific countries, cities, or ISPs. Perfect for market research, ad verification, price monitoring, and bypassing geo-restrictions.",
    bullets: [
      "City-level targeting",
      "ISP-specific selection",
      "Unlimited bandwidth plans",
    ],
  },
];

const steps = [
  {
    title: "Choose plan",
    description: "Select residential or static proxy plan based on your needs.",
  },
  {
    title: "Get credentials",
    description: "Receive proxy host, port, username, and password after payment.",
  },
  {
    title: "Configure",
    description: "Add proxy to your browser, script, or application (HTTP/SOCKS5).",
  },
  {
    title: "Start using",
    description: "Browse anonymously or run your automation with our proxies.",
  },
];

const faqs = [
  {
    question: "What is the difference between residential and static proxies?",
    answer:
      "Residential proxies use IP addresses from real Internet Service Providers, making them appear as regular users. Static datacenter proxies use IPs from data centers—faster and cheaper, but more easily detectable by some services.",
  },
  {
    question: "Do you keep proxy usage logs?",
    answer:
      "No, we operate a strict no-logs policy for our proxy service. We do not track, collect, or store your browsing activity or connection data.",
  },
  {
    question: "What protocols do you support?",
    answer: "We support HTTP, HTTPS, and SOCKS5 proxy protocols. Most applications and browsers support these standards.",
  },
  {
    question: "Can I use proxies for web scraping?",
    answer:
      "Yes, our proxies are suitable for web scraping, automation, and data collection. Rotating residential proxies help avoid blocks and rate limits.",
  },
];

export default function ProxyPageClient() {
  return (
    <ServicePageTemplate
      hero={hero}
      sections={sections}
      steps={steps}
      faqs={faqs}
    >
      <div className="relative rounded-2xl border border-white/5 bg-surface/50 p-8 shadow-2xl overflow-hidden backdrop-blur-sm mb-12">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Proxy Plans
          </h2>
          <p className="text-white/70 mb-6">
            Our proxy service is currently in development. Contact us at{" "}
            <a
              href="mailto:support@dior.host"
              className="text-primary hover:underline"
            >
              support@dior.host
            </a>{" "}
            for early access and pricing information.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
