"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Tarif = {
  title: string;
  cpu: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Virtual Servers (VDS)",
  subheading: "Reliable VDS hosting for white and gray projects",
  summary:
    'Regular virtual servers for "white" or "gray" operation. Standard abuse policies apply - complaints are handled according to datacenter rules. Perfect for low-risk projects that don\'t expect abuse complaints or DMCA notices.'
};

const tarifs: Tarif[] = [
  // Lite Plans
  {
    title: "Lite 1",
    cpu: 1,
    ram: 1,
    ssd: 20,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 3.69,
    url: "https://my.dior.host/"
  },
  {
    title: "Lite 2",
    cpu: 2,
    ram: 2,
    ssd: 40,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 5.99,
    url: "https://my.dior.host/"
  },
  {
    title: "Lite 3",
    cpu: 2,
    ram: 4,
    ssd: 40,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 7.49,
    url: "https://my.dior.host/"
  },
  {
    title: "Lite 4",
    cpu: 2,
    ram: 6,
    ssd: 50,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 9.49,
    url: "https://my.dior.host/"
  },
  // Elite Plans
  {
    title: "Elite 1",
    cpu: 4,
    ram: 8,
    ssd: 80,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 16.66,
    url: "https://my.dior.host/"
  },
  {
    title: "Elite 2",
    cpu: 4,
    ram: 10,
    ssd: 100,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 23.79,
    url: "https://my.dior.host/"
  },
  {
    title: "Elite 3",
    cpu: 8,
    ram: 12,
    ssd: 150,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 37.79,
    url: "https://my.dior.host/"
  },
  {
    title: "Elite 4",
    cpu: 8,
    ram: 16,
    ssd: 200,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 42.29,
    url: "https://my.dior.host/"
  },
  // Mega Plans
  {
    title: "Mega 1",
    cpu: 12,
    ram: 24,
    ssd: 300,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 69.29,
    url: "https://my.dior.host/"
  },
  {
    title: "Mega 2",
    cpu: 12,
    ram: 32,
    ssd: 320,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 87.29,
    url: "https://my.dior.host/"
  },
  {
    title: "Mega 3",
    cpu: 16,
    ram: 48,
    ssd: 320,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 119.29,
    url: "https://my.dior.host/"
  },
  {
    title: "Mega 4",
    cpu: 16,
    ram: 64,
    ssd: 1000,
    networkSpeed: 0.15,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 195.29,
    url: "https://my.dior.host/"
  }
];

const comparisonData = [
  {
    label: "Abuse Policy",
    regular: "Standard datacenter policies apply",
    bulletproof: "DMCA ignored, manual review"
  },
  {
    label: "Complaint Handling",
    regular: "Automated suspension possible",
    bulletproof: "No automatic shutdowns"
  },
  {
    label: "Network Protection",
    regular: "Standard DDoS protection",
    bulletproof: "150+ Gbps with advanced filtering"
  },
  {
    label: "Jurisdiction",
    regular: "Standard datacenters",
    bulletproof: "Netherlands (more locations coming soon)"
  },
  {
    label: "Privacy",
    regular: "Standard KYC requirements",
    bulletproof: "Crypto payments, optional KYC"
  },
  {
    label: "Best For",
    regular: "Low-risk, white/gray projects",
    bulletproof: "High-risk, DMCA-heavy content"
  }
];

export default function VirtualServersPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"vds" | "comparison">("vds");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              {hero.heading}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              {hero.subheading}
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              {hero.summary}
            </p>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  Important: Not Bulletproof!
                </h3>
                <p className="text-gray-300 mb-3">
                  These are regular VDS servers. <strong>Complaints and DMCA notices are handled according to standard datacenter policies.</strong> Your server may be suspended if abuse complaints are received.
                </p>
                <p className="text-gray-300">
                  Need bulletproof hosting? Check out our{" "}
                  <a href="/bulletproof-vds" className="text-purple-400 hover:text-purple-300 underline">
                    Bulletproof VDS
                  </a>{" "}
                  with DMCA-ignored policies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("vds")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "vds"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              VDS Plans
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === "comparison"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              Regular vs Bulletproof
            </button>
          </div>

          {/* VDS Plans */}
          {activeTab === "vds" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {tarifs.map((tarif, index) => (
                <motion.div
                  key={tarif.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all"
                >
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">
                    {tarif.title}
                  </h3>
                  <div className="space-y-3 mb-6 text-gray-300">
                    <div className="flex justify-between">
                      <span>CPU:</span>
                      <span className="font-semibold">{tarif.cpu} cores</span>
                    </div>
                    <div className="flex justify-between">
                      <span>RAM:</span>
                      <span className="font-semibold">{tarif.ram} GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SSD:</span>
                      <span className="font-semibold">{tarif.ssd} GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Network:</span>
                      <span className="font-semibold">{tarif.networkSpeed * 1000} Mbps</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bandwidth:</span>
                      <span className="font-semibold">{tarif.bandwidth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>OS:</span>
                      <span className="font-semibold text-sm">{tarif.os}</span>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-white">${tarif.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <a
                    href={tarif.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl text-center transition-colors"
                  >
                    Order Now
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Comparison Table */}
          {activeTab === "comparison" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-800/50 border-b border-gray-700">
                  <div className="text-xl font-bold text-purple-400">Feature</div>
                  <div className="text-xl font-bold text-blue-400">Regular VDS</div>
                  <div className="text-xl font-bold text-green-400">Bulletproof VDS</div>
                </div>
                {comparisonData.map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 gap-4 p-6 ${
                      index % 2 === 0 ? "bg-gray-900/30" : ""
                    }`}
                  >
                    <div className="font-semibold text-gray-300">{row.label}</div>
                    <div className="text-gray-400">{row.regular}</div>
                    <div className="text-gray-400">{row.bulletproof}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="/bulletproof-vds"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all"
                >
                  View Bulletproof VDS Plans →
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            When to Choose Regular VDS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                White Projects
              </h3>
              <p className="text-gray-300">
                Corporate websites, blogs, e-commerce, SaaS platforms, and other legitimate business projects that don't attract complaints.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
            >
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                Development & Testing
              </h3>
              <p className="text-gray-300">
                Development environments, staging servers, testing platforms, and other non-production workloads.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">
                Budget-Friendly
              </h3>
              <p className="text-gray-300">
                Cost-effective solution for projects that don't need bulletproof policies or offshore protection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30"
          >
            <h2 className="text-3xl font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Not sure if regular VDS or bulletproof VDS is right for you? Contact our team for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/diorhost"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
              >
                Contact on Telegram
              </a>
              <a
                href="/bulletproof-vds"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-colors"
              >
                View Bulletproof VDS
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
