"use client";

import type { Metadata } from "next";
import { LegalLayout } from "../../components/LegalLayout";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/motion";
import { StaggerContainer } from "../../components/motion/StaggerContainer";
import Link from "next/link";

const hero = {
  heading: "About Dior Host",
  subheading: "Offshore infrastructure provider with bulletproof policies"
};

const companyInfo = {
  founded: "2020",
  uptime: "99.99%",
  sla: "99.9% uptime guarantee",
  networkCapacity: "150+ Gbps",
  asn: "Multiple ASNs across NL, DE, RO",
  peering: ["NL-IX", "AMS-IX", "DE-CIX", "RO-IX"],
  datacenters: [
    { name: "Amsterdam", tier: "Tier III", country: "Netherlands" },
    { name: "Frankfurt", tier: "Tier III", country: "Germany" },
    { name: "Bucharest", tier: "Tier III", country: "Romania" },
    { name: "Chisinau", tier: "Tier III", country: "Moldova" }
  ]
};

const history =
  "Dior Host was established to serve high-risk workloads requiring offshore infrastructure with flexible abuse-handling policies. We operate Tier III facilities across Netherlands, Germany, Romania and Moldova, maintaining 99.99% uptime through redundant power, network paths and 24/7 NOC coverage.";

const operators =
  "Our network operations center (NOC) is staffed 24/7 by engineers based in Amsterdam and Frankfurt. Abuse tickets are triaged manually with mediation-first workflows, ensuring legitimate projects stay online during disputes.";

const jurisdictions =
  "We maintain physical presence and legal entities in Netherlands, Germany and Romania, allowing us to balance offshore protections with EU/US compliance readiness for regulated partners.";

const mission =
  "Our mission is to provide reliable bulletproof infrastructure for legitimate businesses, marketing teams, security researchers, and privacy-focused applications. We believe in due process, manual review, and mediation over automatic suspensions.";

const technology =
  "Dior Host uses enterprise-grade hardware including ECC RAM, AES-NI encryption, NVMe storage, and redundant network paths. Our infrastructure supports instant deployment, encrypted snapshots, and automated backups across multiple Tier III facilities.";

const compliance =
  "While operating with flexible abuse-handling policies, we maintain EU/US compliance readiness. We work with regulated partners, financial institutions, and ad networks requiring documented processes.";

const services = [
  {
    title: "Bulletproof VDS",
    description: "bulletproof virtual servers with flexible abuse-handling policies",
    link: "/bulletproof/vds"
  },
  {
    title: "Dedicated Servers",
    description: "Physical servers with IPHM and bulletproof options",
    link: "/bulletproof/dedicated"
  },
  {
    title: "Domain Registration",
    description: "Bulletproof domains with bulletproof registration policies",
    link: "/bulletproof/domains"
  },
  {
    title: "Web Hosting",
    description: "Offshore web hosting with DMCA-ignored policies",
    link: "/bulletproof/web-hosting"
  }
];

const whyUs = [
  {
    title: "99.99% Uptime",
    description: "Actual uptime performance exceeding our 99.9% SLA guarantee"
  },
  {
    title: "IPHM Technology",
    description: "IP History Management for clean IP reputation and deliverability"
  },
  {
    title: "Abuse Resistance",
    description: "Mediation-first workflows ensure legitimate projects stay online"
  },
  {
    title: "24/7 NOC Support",
    description: "Network operations center staffed around the clock"
  }
];

const faqs = [
  {
    question: "When was Dior Host founded?",
    answer:
      "Dior Host was founded in 2020 to serve high-risk workloads requiring offshore infrastructure with flexible abuse-handling policies."
  },
  {
    question: "Where are Dior Host datacenters located?",
    answer:
      "We operate Tier III facilities in Amsterdam (Netherlands), Frankfurt (Germany), Bucharest (Romania) and Chisinau (Moldova)."
  },
  {
    question: "What uptime does Dior Host guarantee?",
    answer:
      "We guarantee 99.9% uptime with actual performance of 99.99% across all datacenters, backed by redundant power and network paths."
  },
  {
    question: "Which peering exchanges are used?",
    answer:
      "We peer at NL-IX, AMS-IX, DE-CIX and RO-IX, providing 150+ Gbps with Anycast routing and BGP communities."
  },
  {
    question: "Does Dior Host require KYC/AML documents?",
    answer:
      "Mandatory KYC is not required. We accept crypto, SEPA wires and provide anonymous tickets for privacy-focused customers."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dior Host",
  "url": "https://dior.host",
  "logo": "https://dior.host/favicon.png",
  "foundingDate": "2020",
  "description": "Offshore infrastructure provider with bulletproof policies",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@dior.host",
    "contactType": "Customer Support"
  },
  "sameAs": []
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout title={hero.heading} description={hero.subheading}>
        <StaggerContainer>
          <motion.section
            id="company-history"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Company History
            </h2>
            <p className="text-white/80 leading-relaxed">{history}</p>
          </motion.section>

          <motion.section
            id="operators-support"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Operators & Support
            </h2>
            <p className="text-white/80 leading-relaxed">{operators}</p>
          </motion.section>

          <motion.section
            id="company-mission"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Company Mission
            </h2>
            <p className="text-white/80 leading-relaxed">{mission}</p>
          </motion.section>

          <motion.section
            id="philosophy"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Philosophy
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Bulletproof Infrastructure</h3>
                <p className="text-white/80 leading-relaxed">
                  We provide infrastructure that stays online despite DMCA notices, abuse reports, and complaints. Our mediation-first approach ensures legitimate projects continue operating during disputes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Offshore Protection</h3>
                <p className="text-white/80 leading-relaxed">
                  Operating from multiple jurisdictions (Netherlands, Germany, Romania, Moldova) provides legal flexibility and protection for high-risk workloads.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Privacy-First</h3>
                <p className="text-white/80 leading-relaxed">
                  We respect user privacy and do not require mandatory KYC/AML. Anonymous payment methods and privacy-focused ticket systems are available.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="technology-stack"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Technology Stack
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">{technology}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>ECC RAM for memory error protection</li>
              <li>AES-NI hardware encryption</li>
              <li>NVMe SSD storage with high IOPS</li>
              <li>Automated snapshots and backups</li>
              <li>Instant VPS provisioning</li>
            </ul>
          </motion.section>

          <motion.section
            id="compliance-regulation"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Compliance & Regulation
            </h2>
            <p className="text-white/80 leading-relaxed">{compliance}</p>
          </motion.section>

          <motion.section
            id="jurisdictions"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Jurisdictions
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">{jurisdictions}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                { name: "Netherlands", desc: "Main office and NOC in Amsterdam. EU jurisdiction with flexible regulations." },
                { name: "Germany", desc: "Datacenter in Frankfurt. EU compliance readiness." },
                { name: "Romania", desc: "Tier III facility in Bucharest. Offshore protection within EU." },
                { name: "Moldova", desc: "Additional location in Chisinau. Extended offshore protection." }
              ].map((jurisdiction, index) => (
                <motion.div
                  key={jurisdiction.name}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 p-4 rounded-lg"
                >
                  <h3 className="font-semibold mb-2 text-white">{jurisdiction.name}</h3>
                  <p className="text-sm text-white/80">{jurisdiction.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="our-services"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 border border-white/10 rounded-lg p-4"
                >
                  <h3 className="font-semibold mb-2 text-white">
                    <Link href={service.link} className="text-blue-300 hover:text-white">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-white/80">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="why-us"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Why Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 border border-white/10 rounded-lg p-4"
                >
                  <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="infrastructure"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Infrastructure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <motion.div
                variants={fadeInUp}
                className="bg-black/30 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-2 text-white">Uptime</h3>
                <p className="text-2xl font-bold text-green-400">{companyInfo.uptime}</p>
                <p className="text-sm text-white/70 mt-1">{companyInfo.sla}</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-black/30 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-2 text-white">Network Capacity</h3>
                <p className="text-2xl font-bold text-blue-400">
                  {companyInfo.networkCapacity}
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-black/30 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-2 text-white">ASN</h3>
                <p className="text-white/80">{companyInfo.asn}</p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-black/30 p-4 rounded-lg"
              >
                <h3 className="font-semibold mb-2 text-white">Peering</h3>
                <p className="text-white/80">{companyInfo.peering.join(", ")}</p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id="datacenters"
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
              Datacenters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {companyInfo.datacenters.map((dc, index) => (
                <motion.div
                  key={dc.name}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-black/30 p-4 rounded-lg"
                >
                  <h3 className="font-semibold text-lg text-white">{dc.name}</h3>
                  <p className="text-sm text-white/70 mt-1">{dc.country}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                    {dc.tier}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {faqs.length > 0 && (
            <motion.section
              id="faqs"
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={faq.question}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.05 }}
                    className="group border border-white/10 rounded-lg p-4 bg-black/30"
                  >
                    <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between text-white">
                      <span>{faq.question}</span>
                      <span className="faq-arrow ml-2">▶</span>
                    </summary>
                    <div className="accordion-content">
                      <p className="mt-2 text-sm text-white/70">{faq.answer}</p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </motion.section>
          )}

          <motion.section
            id="related-pages"
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <h2 className="text-2xl font-semibold mb-4 text-white">Related Pages</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/sla"
                className="text-blue-300 hover:text-white underline"
              >
                Service Level Agreement
              </Link>
              <Link
                href="/abuse-flow"
                className="text-blue-300 hover:text-white underline"
              >
                Abuse Flow
              </Link>
              <Link
                href="/dmca-policy"
                className="text-blue-300 hover:text-white underline"
              >
                DMCA Policy
              </Link>
            </div>
          </motion.section>
        </StaggerContainer>
      </LegalLayout>
    </>
  );
}
