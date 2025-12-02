import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "../../components/LegalLayout";

export const metadata: Metadata = {
  title: "Public Offer - Terms of Service | Dior Host",
  description:
    "Dior Host public offer: terms of service for bulletproof VPS, VDS, dedicated servers, IPHM, and domains. Offshore hosting services, pricing, payment terms, liability limitations, and service agreements.",
  keywords: [
    "public offer",
    "terms of service",
    "bulletproof hosting terms",
    "offshore hosting agreement",
    "VPS terms",
    "VDS agreement",
    "dedicated server terms",
    "hosting contract"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Dior Host Public Offer",
  "description": "Terms of service for bulletproof hosting services",
  "provider": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": "https://dior.host"
  },
  "areaServed": ["Netherlands", "Germany", "Romania", "Moldova"],
  "serviceType": "Hosting Services"
};

export default function PublicOfferPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Public Offer"
        description="Terms of service for bulletproof hosting services"
      >
        <section id="general-provisions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. General Provisions
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            This Public Offer (the "Agreement") constitutes a legally binding contract between Dior Host ("Provider", "we", "us") and any individual or legal entity ("Client", "you", "customer") who accepts these terms by using our services.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            By accessing, registering, or using any service provided by Dior Host, you acknowledge that you have read, understood, and agree to be bound by this Agreement. If you do not agree to these terms, you must not use our services.
          </p>
          <p className="text-white/80 leading-relaxed">
            This Agreement is effective immediately upon acceptance and remains in effect until terminated by either party in accordance with the terms herein.
          </p>
        </section>

        <section id="definitions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Terms and Definitions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.1. Service</h3>
              <p className="text-white/80 leading-relaxed">
                Any hosting, infrastructure, or related service provided by Dior Host, including but not limited to VPS, VDS, dedicated servers, IPHM services, domain registration, and web hosting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.2. Client</h3>
              <p className="text-white/80 leading-relaxed">
                Any individual or legal entity that has registered an account and uses Dior Host services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.3. Account</h3>
              <p className="text-white/80 leading-relaxed">
                A registered user account in Dior Host's billing system, associated with a unique email address and payment method.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.4. Abuse</h3>
              <p className="text-white/80 leading-relaxed">
                Any activity that violates applicable laws, this Agreement, or Dior Host's abuse policies, including but not limited to spam, malware distribution, phishing, and copyright infringement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.5. Uptime</h3>
              <p className="text-white/80 leading-relaxed">
                The percentage of time during a billing period that a service is accessible and operational, excluding scheduled maintenance and force majeure events.
              </p>
            </div>
          </div>
        </section>

        <section id="subject" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Subject of the Agreement
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Dior Host provides infrastructure hosting services on an "as-is" basis. The Provider agrees to deliver services in accordance with the specifications selected by the Client and the terms outlined in this Agreement.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            The Client agrees to use the services in compliance with all applicable laws, this Agreement, and Dior Host's policies, including but not limited to our <Link href="/abuse-flow" className="text-blue-300 hover:text-white underline">Abuse Flow</Link> and <Link href="/dmca-policy" className="text-blue-300 hover:text-white underline">DMCA Policy</Link>.
          </p>
        </section>

        <section id="services" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Services
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4.1. Virtual Private Servers (VPS/VDS)</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Dior Host provides virtualized server instances with allocated CPU, RAM, storage, and network resources. Services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Bulletproof VDS with bulletproof policies</li>
                <li>TurboNet Virtual Servers with enhanced network performance</li>
                <li>Standard Virtual Servers with standard SLA</li>
                <li>Instant deployment and automated backups</li>
                <li>Full root access and OS selection</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4.2. Dedicated Servers</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Physical server hardware dedicated to a single client, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Bulletproof Dedicated Servers with bulletproof handling</li>
                <li>Dedicated Servers with IPHM (IP History Management)</li>
                <li>Standard Dedicated Servers</li>
                <li>Hardware replacement within SLA timeframes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4.3. Domain Registration</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Domain name registration and management services for various TLDs, including bulletproof domains with bulletproof policies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">4.4. Offshore Web Hosting</h3>
              <p className="text-white/80 leading-relaxed">
                Shared and managed hosting services with flexible abuse-handling policies, suitable for high-risk workloads.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Pricing and Payment Terms
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.1. Service Fees</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Service fees are displayed on our website and may be updated at any time. Prices are quoted in USD unless otherwise specified.
              </p>
              <p className="text-white/80 leading-relaxed">
                The Client agrees to pay all fees associated with their selected services in advance for each billing period (monthly, quarterly, or annually).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.2. Payment Methods</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Dior Host accepts the following payment methods:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Cryptocurrency (Bitcoin, Ethereum, USDT)</li>
                <li>Credit and debit cards</li>
                <li>Bank transfers</li>
                <li>Other payment methods as specified on our website</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.3. Billing Cycle</h3>
              <p className="text-white/80 leading-relaxed">
                Services are billed on a recurring basis according to the selected billing cycle. The Client is responsible for ensuring sufficient funds are available for automatic renewal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">5.4. Refunds</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Refund policies vary by service type:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>VPS/VDS: Refund available within 7 days of initial purchase if service is unused</li>
                <li>Dedicated Servers: No refunds after service activation</li>
                <li>Domain Registration: No refunds (domains are registered immediately)</li>
                <li>Abuse-related terminations: No refunds</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="rights-obligations" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Rights and Obligations of the Parties
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">6.1. Provider's Rights</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Suspend or terminate services in case of abuse, non-payment, or violation of this Agreement</li>
                <li>Modify service specifications, pricing, or terms with 30 days' notice</li>
                <li>Perform scheduled maintenance with 48 hours' advance notice</li>
                <li>Review and investigate abuse reports in accordance with our <Link href="/abuse-flow" className="text-blue-300 hover:text-white underline">Abuse Flow</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">6.2. Provider's Obligations</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Provide services in accordance with the selected specifications and <Link href="/sla" className="text-blue-300 hover:text-white underline">SLA commitments</Link></li>
                <li>Maintain 99.9% server uptime and 99.95% network availability (as per SLA)</li>
                <li>Provide 24/7 NOC support with response times as specified in the SLA</li>
                <li>Protect client data in accordance with our <Link href="/privacy-policy" className="text-blue-300 hover:text-white underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">6.3. Client's Rights</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Use services in accordance with this Agreement and applicable laws</li>
                <li>Receive service credits as specified in the SLA for downtime exceeding guarantees</li>
                <li>Request account termination and data export (subject to data retention policies)</li>
                <li>Appeal abuse decisions through our ticket system</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">6.4. Client's Obligations</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                <li>Pay all fees on time and maintain valid payment information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not engage in prohibited activities as outlined in our <Link href="/user-agreement" className="text-blue-300 hover:text-white underline">User Agreement</Link></li>
                <li>Maintain account security and notify us immediately of unauthorized access</li>
                <li>Respond to abuse notifications within the specified timeframes</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="liability" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Limitation of Liability
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              Dior Host's liability is limited to the amount paid by the Client for the affected service during the billing period in which the incident occurred.
            </p>
            <p className="text-white/80 leading-relaxed">
              The Provider is not liable for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Data loss resulting from client actions, third-party software, or force majeure events</li>
              <li>Service interruptions due to DDoS attacks beyond our filtering capacity</li>
              <li>Losses resulting from abuse-related suspensions or terminations</li>
              <li>Indirect, consequential, or incidental damages</li>
              <li>Losses resulting from scheduled maintenance with proper notice</li>
            </ul>
            <p className="text-white/80 leading-relaxed">
              The Client is solely responsible for backing up their data and maintaining adequate security measures.
            </p>
          </div>
        </section>

        <section id="force-majeure" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. Force Majeure
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Neither party shall be liable for failure to perform obligations under this Agreement due to force majeure events, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mb-4">
            <li>Natural disasters, earthquakes, floods, fires</li>
            <li>War, terrorism, civil unrest</li>
            <li>Government actions, regulatory changes, or court orders</li>
            <li>Internet infrastructure failures or major ISP outages</li>
            <li>Cyberattacks beyond reasonable mitigation capabilities</li>
          </ul>
          <p className="text-white/80 leading-relaxed">
            The affected party must notify the other party within 48 hours of the force majeure event and make reasonable efforts to resume performance.
          </p>
        </section>

        <section id="contract-formation" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. Contract Formation
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            This Agreement is formed when the Client:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4 mb-4">
            <li>Registers an account on Dior Host's website</li>
            <li>Selects and orders a service</li>
            <li>Completes payment for the selected service</li>
            <li>Receives service activation confirmation</li>
          </ol>
          <p className="text-white/80 leading-relaxed">
            By completing these steps, the Client accepts all terms and conditions of this Public Offer without reservation.
          </p>
        </section>

        <section id="termination" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            10. Termination
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">10.1. Client-Initiated Termination</h3>
              <p className="text-white/80 leading-relaxed">
                The Client may terminate services at any time by canceling automatic renewal in their account or submitting a termination request. Services remain active until the end of the current billing period.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">10.2. Provider-Initiated Termination</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Dior Host may terminate services immediately in case of:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Non-payment exceeding 7 days past due date</li>
                <li>Violation of abuse policies or prohibited activities</li>
                <li>Violation of this Agreement or applicable laws</li>
                <li>Court orders requiring service termination</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">10.3. Data Retention</h3>
              <p className="text-white/80 leading-relaxed">
                Upon termination, client data is retained for 30 days. The Client is responsible for exporting their data before termination. After 30 days, all data is permanently deleted.
              </p>
            </div>
          </div>
        </section>

        <section id="contacts" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            11. Contact Information
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Dior Host</h3>
            <div className="space-y-2 text-white/80">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@dior.host" className="text-blue-300 hover:text-white">
                  support@dior.host
                </a>
              </p>
              <p>
                <strong>Abuse Reports:</strong>{" "}
                <a href="mailto:abuse@dior.host" className="text-blue-300 hover:text-white">
                  abuse@dior.host
                </a>
              </p>
              <p>
                <strong>DMCA Notices:</strong>{" "}
                <a href="mailto:support@dior.host" className="text-blue-300 hover:text-white">
                  support@dior.host
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href="https://dior.host" className="text-blue-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                  https://dior.host
                </a>
              </p>
            </div>
          </div>
        </section>

        <section id="related-pages" className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Related Documents</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy-policy"
              className="text-blue-300 hover:text-white underline"
            >
              Privacy Policy
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
              Service Level Agreement (SLA)
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
        </section>
      </LegalLayout>
    </>
  );
}


