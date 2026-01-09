"use client";

import { ServicePageTemplate } from "../../components/services/ServicePageTemplate";

const hero = {
  heading: "Minecraft Hosting",
  summary: "High-performance Minecraft server hosting with optimized Java runtime, mod support, and automatic backups. Perfect for survival, creative, and custom game modes.",
  comingSoon: true
};

const sections = [
  {
    title: "Optimized Performance",
    body: "Dedicated resources and optimized Java runtime ensure smooth gameplay even with large player counts and heavy mods.",
    bullets: [
      "High-performance CPU allocation",
      "Optimized Java runtime",
      "SSD storage for fast world loading"
    ]
  },
  {
    title: "Mod & Plugin Support",
    body: "Full support for popular server software including Paper, Spigot, Purpur, and modpacks.",
    bullets: [
      "Paper, Spigot, Purpur support",
      "Forge and Fabric modpacks",
      "One-click plugin installation"
    ]
  },
  {
    title: "Automated Backups",
    body: "Automatic daily backups ensure your world is safe. Manual backups available on demand.",
    bullets: [
      "Daily automatic backups",
      "7-day backup retention",
      "One-click restore"
    ]
  }
];

const steps = [
  {
    title: "Choose your plan",
    description: "Select a hosting plan based on expected player count and mod requirements."
  },
  {
    title: "Select server type",
    description: "Choose between Vanilla, Paper, Spigot, or modded server types."
  },
  {
    title: "Configure your server",
    description: "Set up your server settings, plugins, and world options."
  },
  {
    title: "Invite players",
    description: "Share your server IP and start playing with friends."
  }
];

const faqs = [
  {
    question: "What server types are supported?",
    answer: "We support Vanilla, Paper, Spigot, Purpur, and modded servers including Forge and Fabric modpacks. Most popular server software is available."
  },
  {
    question: "Can I upload my existing world?",
    answer: "Yes, you can upload your existing world files via FTP or our file manager. We'll help you migrate your server seamlessly."
  },
  {
    question: "How many players can my server support?",
    answer: "Player capacity depends on your plan's resources. Our plans range from small servers (10-20 players) to large networks (100+ players)."
  },
  {
    question: "Are backups included?",
    answer: "Yes, all plans include daily automatic backups with 7-day retention. Manual backups can be created at any time."
  }
];

export default function MinecraftHostingPageClient() {
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Minecraft Hosting Plans</h2>
          <p className="text-white/70 mb-6">
            Our Minecraft hosting service is currently in development. Contact us at{" "}
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
