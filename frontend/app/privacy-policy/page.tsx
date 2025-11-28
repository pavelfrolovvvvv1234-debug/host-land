import type { Metadata } from "next";
import { LegalLayout } from "../../components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & GDPR Compliance | Dior Host",
  description:
    "Dior Host privacy policy: data collection, cookies, telemetry, logs, data retention, GDPR/EEA compliance, user rights, third-party services. Learn how we protect your privacy and handle personal data.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "cookie policy",
    "data retention",
    "privacy rights",
    "data deletion",
    "hosting privacy"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PrivacyPolicy",
  "name": "Dior Host Privacy Policy",
  "description": "Privacy policy and data protection practices",
  "publisher": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": "https://dior.host"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Privacy Policy"
        description="How we collect, use, and protect your personal data"
      >
        <section id="scope" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. Scope
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            This Privacy Policy ("Policy") describes how Dior Host ("we", "us", "our") collects, uses, stores, and protects personal data when you use our services, including VPS, VDS, dedicated servers, domain registration, and web hosting.
          </p>
          <p className="text-white/80 leading-relaxed">
            By using Dior Host services, you consent to the data practices described in this Policy. If you do not agree with these practices, you must not use our services.
          </p>
        </section>

        <section id="data-collection" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. What Data We Collect
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.1. Account Information</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                When you register an account, we collect:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Email address (required for account management and notifications)</li>
                <li>Payment information (processed by third-party payment processors)</li>
                <li>Billing address (if provided for invoicing purposes)</li>
                <li>Account preferences and service configurations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.2. Service Usage Data</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                We automatically collect technical data related to service usage:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>IP addresses assigned to your services</li>
                <li>Server resource usage (CPU, RAM, bandwidth, storage)</li>
                <li>Service uptime and availability metrics</li>
                <li>Connection logs and network traffic metadata</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.3. Communication Data</h3>
              <p className="text-white/80 leading-relaxed">
                We retain records of communications, including support tickets, abuse reports, and email correspondence, for service quality and compliance purposes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">2.4. Website Usage Data</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                When you visit our website, we collect:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Browser type and version</li>
                <li>Device information and screen resolution</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referrer URLs and search queries</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="cookies-telemetry" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Cookies & Telemetry
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">3.1. Cookies</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                We use cookies and similar technologies for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li><strong>Essential cookies:</strong> Session management, authentication, and security (required for service functionality)</li>
                <li><strong>Analytics cookies:</strong> Website usage statistics and performance monitoring (optional, can be disabled)</li>
                <li><strong>Preference cookies:</strong> Language settings and user interface preferences</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                You can control cookie preferences through your browser settings. Disabling essential cookies may affect service functionality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">3.2. Telemetry</h3>
              <p className="text-white/80 leading-relaxed">
                We collect anonymous telemetry data for service improvement, including error rates, performance metrics, and feature usage. This data is aggregated and cannot be used to identify individual users.
              </p>
            </div>
          </div>
        </section>

        <section id="logs-security" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Logs & Security
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.1. System Logs</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                We maintain system logs for security and troubleshooting purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Authentication attempts and login events</li>
                <li>Administrative actions and configuration changes</li>
                <li>Network connection attempts and firewall events</li>
                <li>Error logs and system diagnostics</li>
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                Logs are retained for 90 days unless required for security investigations or legal compliance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.2. Security Monitoring</h3>
              <p className="text-white/80 leading-relaxed">
                We monitor network traffic and system activity to detect and prevent security threats, including DDoS attacks, unauthorized access attempts, and abuse. This monitoring is automated and does not involve manual review of content unless a security incident is detected.
              </p>
            </div>
          </div>
        </section>

        <section id="data-retention" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Data Retention
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              We retain personal data only for as long as necessary to provide services and comply with legal obligations:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-4 text-white font-semibold">Data Type</th>
                    <th className="text-left py-2 px-4 text-white font-semibold">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Account information</td>
                    <td className="py-2 px-4">Until account deletion + 30 days</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Service usage logs</td>
                    <td className="py-2 px-4">90 days</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Support tickets</td>
                    <td className="py-2 px-4">3 years</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 px-4">Billing records</td>
                    <td className="py-2 px-4">7 years (legal requirement)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Abuse reports</td>
                    <td className="py-2 px-4">5 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="data-deletion" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Data Deletion
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              You have the right to request deletion of your personal data, subject to legal and operational requirements:
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.1. Account Deletion</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                You can request account deletion at any time. Upon deletion:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>All services are terminated and data is permanently deleted</li>
                <li>Account information is removed from active systems within 30 days</li>
                <li>Billing records are retained for 7 years as required by law</li>
                <li>Abuse reports and security logs may be retained for compliance purposes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.2. Data Export</h3>
              <p className="text-white/80 leading-relaxed">
                Before account deletion, you can export your data, including service configurations, support tickets, and billing history, in machine-readable formats (JSON, CSV).
              </p>
            </div>
          </div>
        </section>

        <section id="third-party-services" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Third-Party Services
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              We use third-party services that may process your data:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-1">Cloudflare</h4>
                <p className="text-sm text-white/80">
                  CDN and DDoS protection. Processes IP addresses and network traffic metadata. See{" "}
                  <a href="https://www.cloudflare.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white underline">
                    Cloudflare Privacy Policy
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Payment Processors</h4>
                <p className="text-sm text-white/80">
                  Payment information is processed by third-party payment processors. We do not store full credit card numbers or payment credentials.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Domain Registrars</h4>
                <p className="text-sm text-white/80">
                  Domain registration data is shared with ICANN-accredited registrars as required for domain registration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gdpr-compliance" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. GDPR/EEA Compliance
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR):
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.1. Legal Basis</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                We process personal data based on:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li><strong>Contract performance:</strong> To provide hosting services as agreed</li>
                <li><strong>Legal obligation:</strong> To comply with tax, accounting, and abuse reporting requirements</li>
                <li><strong>Legitimate interests:</strong> For security monitoring, fraud prevention, and service improvement</li>
                <li><strong>Consent:</strong> For optional analytics and marketing communications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.2. Data Transfers</h3>
              <p className="text-white/80 leading-relaxed">
                Data is processed within the EEA (Netherlands, Germany, Romania). Transfers outside the EEA are limited to third-party services with adequate safeguards (Standard Contractual Clauses, Privacy Shield adequacy).
              </p>
            </div>
          </div>
        </section>

        <section id="user-rights" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. User Rights
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-1">Right to Access</h4>
                <p className="text-sm text-white/80">
                  Request a copy of all personal data we hold about you.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Right to Rectification</h4>
                <p className="text-sm text-white/80">
                  Correct inaccurate or incomplete personal data.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Right to Erasure</h4>
                <p className="text-sm text-white/80">
                  Request deletion of your personal data (subject to legal requirements).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Right to Restrict Processing</h4>
                <p className="text-sm text-white/80">
                  Request limitation of data processing in certain circumstances.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Right to Data Portability</h4>
                <p className="text-sm text-white/80">
                  Receive your data in a structured, machine-readable format.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Right to Object</h4>
                <p className="text-sm text-white/80">
                  Object to processing based on legitimate interests.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Right to Withdraw Consent</h4>
                <p className="text-sm text-white/80">
                  Withdraw consent for optional data processing at any time.
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@dior.host" className="text-blue-300 hover:text-white underline">privacy@dior.host</a>. We will respond within 30 days.
            </p>
          </div>
        </section>

        <section id="privacy-inquiries" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            10. Contact for Privacy Inquiries
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-6">
            <p className="text-white/80 leading-relaxed mb-4">
              For privacy-related questions, data access requests, or complaints, contact:
            </p>
            <div className="space-y-2 text-white/80">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@dior.host" className="text-blue-300 hover:text-white">
                  privacy@dior.host
                </a>
              </p>
              <p>
                <strong>Subject:</strong> Privacy Inquiry / GDPR Request
              </p>
              <p className="text-sm text-white/70 mt-4">
                For EEA users, you also have the right to lodge a complaint with your local data protection authority.
              </p>
            </div>
          </div>
        </section>

        <section id="related-pages" className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Related Documents</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/public-offer"
              className="text-blue-300 hover:text-white underline"
            >
              Public Offer
            </Link>
            <Link
              href="/user-agreement"
              className="text-blue-300 hover:text-white underline"
            >
              User Agreement
            </Link>
            <Link
              href="/sla"
              className="text-blue-300 hover:text-white underline"
            >
              Service Level Agreement
            </Link>
          </div>
        </section>
      </LegalLayout>
    </>
  );
}


