"use client";

import { ServicePageTemplate } from "../../components/services/ServicePageTemplate";

const hero = {
  heading: "VPN Service",
  summary: "Virtual Private Network service for secure and private internet access. Bypass geo-restrictions, protect your data, and browse anonymously with our VPN infrastructure.",
  comingSoon: true
};

const sections = [
  {
    title: "Secure & Private",
    body: "Military-grade encryption protects your data and online activities from prying eyes and hackers.",
    bullets: [
      "AES-256 encryption",
      "No-logs policy",
      "Kill switch protection"
    ]
  },
  {
    title: "Global Server Network",
    body: "Access content from anywhere with our worldwide server network spanning multiple countries.",
    bullets: [
      "Servers in 50+ countries",
      "High-speed connections",
      "Unlimited bandwidth"
    ]
  },
  {
    title: "Multiple Protocols",
    body: "Support for multiple VPN protocols including WireGuard, OpenVPN, and IKEv2 for maximum compatibility.",
    bullets: [
      "WireGuard protocol support",
      "OpenVPN compatibility",
      "Multi-device support"
    ]
  }
];

const steps = [
  {
    title: "Sign up for service",
    description: "Create an account and choose your VPN plan."
  },
  {
    title: "Download client",
    description: "Download and install the VPN client for your device (Windows, macOS, Linux, mobile)."
  },
  {
    title: "Connect to server",
    description: "Choose a server location and connect to start browsing securely."
  },
  {
    title: "Browse anonymously",
    description: "Your traffic is now encrypted and your IP address is hidden."
  }
];

const faqs = [
  {
    question: "What is a VPN?",
    answer: "A Virtual Private Network (VPN) creates a secure, encrypted connection between your device and the internet, protecting your privacy and allowing you to access geo-restricted content."
  },
  {
    question: "Do you keep logs?",
    answer: "No, we operate a strict no-logs policy. We don't track, collect, or store your online activities, browsing history, or connection logs."
  },
  {
    question: "How many devices can I use?",
    answer: "VPN plans support multiple simultaneous connections. Exact number depends on your chosen plan, typically ranging from 3 to unlimited devices."
  },
  {
    question: "Will VPN slow down my internet?",
    answer: "While VPN adds minimal overhead, our high-speed servers are optimized to minimize impact. Most users notice no significant speed difference."
  }
];

export default function VPNPageClient() {
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">VPN Plans</h2>
          <p className="text-white/70 mb-6">
            Our VPN service is currently in development. Contact us at{" "}
            <a href="mailto:support@dior.host" className="text-primary hover:underline">
              support@dior.host
            </a>{" "}
            for early access and pricing information.
          </p>
        </div>
      </div>
    </ServicePageTemplate>
  );
}
