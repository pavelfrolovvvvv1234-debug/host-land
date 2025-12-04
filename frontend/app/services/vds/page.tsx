"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function RegularVdsPage() {
  const [activeTab, setActiveTab] = useState<"plans" | "comparison">("plans");

  const plans = [
    {
      name: "VDS-1",
      cpu: "2 cores",
      ram: "4 GB",
      ssd: "50 GB",
      network: "1 Gbps",
      bandwidth: "Unlimited",
      os: "Linux, Windows",
      price: "$15",
      period: "/month"
    },
    {
      name: "VDS-2",
      cpu: "4 cores",
      ram: "8 GB",
      ssd: "100 GB",
      network: "1 Gbps",
      bandwidth: "Unlimited",
      os: "Linux, Windows",
      price: "$30",
      period: "/month"
    },
    {
      name: "VDS-3",
      cpu: "6 cores",
      ram: "16 GB",
      ssd: "200 GB",
      network: "1 Gbps",
      bandwidth: "Unlimited",
      os: "Linux, Windows",
      price: "$60",
      period: "/month"
    },
    {
      name: "VDS-4",
      cpu: "8 cores",
      ram: "32 GB",
      ssd: "400 GB",
      network: "1 Gbps",
      bandwidth: "Unlimited",
      os: "Linux, Windows",
      price: "$120",
      period: "/month"
    }
  ];

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-500 mb-4">
            Virtual Servers (VDS)
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Reliable VDS hosting for white and gray projects
          </p>
          <p className="text-base text-white/70 max-w-3xl mx-auto">
            Regular virtual servers for "white" or "gray" operation. Standard abuse policies apply - 
            complaints are handled according to datacenter rules. Perfect for low-risk projects that 
            don't expect abuse complaints or DMCA notices.
          </p>
        </motion.div>

        {/* Warning Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-yellow-500/10 border-2 border-yellow-500 rounded-lg p-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-yellow-500 font-bold text-lg mb-2">
                Important: Not Bulletproof!
              </h3>
              <p className="text-white/80 text-sm">
                These are regular VDS servers. Complaints and DMCA notices are handled according to standard datacenter policies. 
                Your server may be suspended if abuse complaints are received. Need bulletproof hosting? Check out our{" "}
                <Link href="/bulletproof/vds" className="text-purple-500 hover:text-purple-400 font-semibold underline">
                  Bulletproof VDS
                </Link>
                {" "}with DMCA-ignored policies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("plans")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "plans"
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-white/60 hover:text-white"
            }`}
          >
            VDS Plans
          </button>
          <button
            onClick={() => setActiveTab("comparison")}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === "comparison"
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-white/60 hover:text-white"
            }`}
          >
            Regular vs Bulletproof
          </button>
        </div>

        {/* Plans Grid */}
        {activeTab === "plans" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-white/10 rounded-lg p-6 hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{plan.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">CPU:</span>
                    <span className="text-white font-semibold">{plan.cpu}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">RAM:</span>
                    <span className="text-white font-semibold">{plan.ram}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">SSD:</span>
                    <span className="text-white font-semibold">{plan.ssd}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Network:</span>
                    <span className="text-white font-semibold">{plan.network}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Bandwidth:</span>
                    <span className="text-white font-semibold">{plan.bandwidth}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">OS:</span>
                    <span className="text-white font-semibold">{plan.os}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-purple-500">{plan.price}</span>
                    <span className="text-white/60 text-sm">{plan.period}</span>
                  </div>
                </div>

                <a
                  href="https://my.dior.host/billmgr?func=logon"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-gray-800/50 border border-white/10 rounded-lg overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">Regular VDS</th>
                  <th className="text-center py-4 px-6 text-purple-500 font-semibold">Bulletproof VDS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/80">DMCA Handling</td>
                  <td className="py-4 px-6 text-center text-red-400">Standard</td>
                  <td className="py-4 px-6 text-center text-green-400">Ignored</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/80">Abuse Complaints</td>
                  <td className="py-4 px-6 text-center text-red-400">Processed</td>
                  <td className="py-4 px-6 text-center text-green-400">Manual Review</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/80">Suspension Risk</td>
                  <td className="py-4 px-6 text-center text-red-400">High</td>
                  <td className="py-4 px-6 text-center text-green-400">Low</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/80">Price</td>
                  <td className="py-4 px-6 text-center text-green-400">Lower</td>
                  <td className="py-4 px-6 text-center text-yellow-400">Higher</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-white/80">Best For</td>
                  <td className="py-4 px-6 text-center text-white/60 text-sm">White/Gray projects</td>
                  <td className="py-4 px-6 text-center text-white/60 text-sm">High-risk projects</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </main>
  );
}
