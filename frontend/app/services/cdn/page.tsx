"use client";

import { ServicePageTemplate } from "../../../components/services/ServicePageTemplate";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const hero = {
  heading: "CDN Service",
  summary: "Content Delivery Network service for fast and reliable content distribution worldwide. Reduce latency, improve performance, and enhance user experience with our global CDN infrastructure."
};

const sections = [
  {
    title: "Global Edge Network",
    body: "Our CDN spans multiple continents with edge servers strategically placed to minimize latency and maximize performance.",
    bullets: [
      "Worldwide edge locations",
      "Low latency content delivery",
      "Automatic failover and redundancy"
    ]
  },
  {
    title: "Performance Optimization",
    body: "Advanced caching, compression, and optimization technologies ensure your content loads faster for all users.",
    bullets: [
      "Smart caching algorithms",
      "Image and asset optimization",
      "Bandwidth savings up to 70%"
    ]
  },
  {
    title: "Security & DDoS Protection",
    body: "Built-in security features protect your content and infrastructure from threats and attacks.",
    bullets: [
      "DDoS mitigation",
      "SSL/TLS encryption",
      "Access control and authentication"
    ]
  }
];

const steps = [
  {
    title: "Configure your domain",
    description: "Point your domain's DNS to our CDN servers or use our DNS service."
  },
  {
    title: "Upload your content",
    description: "Upload your static assets, images, videos, and files to the CDN."
  },
  {
    title: "Optimize settings",
    description: "Configure caching rules, compression, and security settings."
  },
  {
    title: "Go live",
    description: "Your content is now distributed globally with improved performance."
  }
];

const faqs = [
  {
    question: "What is a CDN?",
    answer: "A Content Delivery Network (CDN) is a distributed network of servers that delivers web content to users based on their geographic location, reducing latency and improving performance."
  },
  {
    question: "What types of content can I deliver?",
    answer: "Our CDN supports static files, images, videos, JavaScript, CSS, fonts, and API responses. Dynamic content can also be cached based on your configuration."
  },
  {
    question: "How does it improve performance?",
    answer: "By caching content on edge servers closer to users, CDN reduces the distance data travels, resulting in faster load times and better user experience."
  },
  {
    question: "Is SSL/TLS included?",
    answer: "Yes, free SSL/TLS certificates are included with all CDN plans for secure content delivery."
  }
];

export default function CDNPage() {
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">CDN Features</h2>
          <p className="text-white/70 mb-6">
            Our CDN service is currently in development. Contact us at{" "}
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
