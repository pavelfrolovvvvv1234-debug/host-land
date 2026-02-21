import type { Metadata } from "next";
import { LegalLayout } from "../../components/LegalLayout";
import Link from "next/link";
import { PRIMARY_ORIGIN } from "../../lib/canonical";

export const metadata: Metadata = {
  title: "User Agreement - Terms of Use & Acceptable Use Policy | Dior Host",
  description:
    "Dior Host user agreement: acceptable use policy, prohibited activities, abuse rules, DMCA handling, payments, refunds, account security, termination, liability, governing law for bulletproof hosting services.",
  keywords: [
    "user agreement",
    "terms of use",
    "acceptable use policy",
    "prohibited activities",
    "hosting terms",
    "abuse policy",
    "account security",
    "service termination"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dior Host User Agreement",
  "description": "Terms of use and acceptable use policy",
  "publisher": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": PRIMARY_ORIGIN
  }
};

export default function UserAgreementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="User Agreement"
        description="Terms of use and acceptable use policy for Dior Host services"
      >
        <section id="acceptance" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            By accessing, registering, or using any service provided by Dior Host, you ("User", "you", "your") agree to be bound by this User Agreement ("Agreement") and all applicable laws and regulations.
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            If you do not agree to any part of this Agreement, you must immediately stop using our services and terminate your account.
          </p>
          <p className="text-white/80 leading-relaxed">
            This Agreement supplements our <Link href="/public-offer" className="text-blue-300 hover:text-white underline">Public Offer</Link> and <Link href="/privacy-policy" className="text-blue-300 hover:text-white underline">Privacy Policy</Link>. In case of conflict, this Agreement takes precedence for matters of acceptable use.
          </p>
        </section>

        <section id="allowed-activities" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Allowed Activities
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            You may use Dior Host services for legitimate business and personal purposes, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
            <li>Web hosting and content delivery</li>
            <li>Application hosting and API services</li>
            <li>Development and testing environments</li>
            <li>Security research and penetration testing (with proper authorization)</li>
            <li>Marketing campaigns and email marketing (compliant with CAN-SPAM, GDPR, and applicable laws)</li>
            <li>Cryptocurrency mining (subject to resource limits and fair use policies)</li>
            <li>Any other lawful activity that does not violate this Agreement</li>
          </ul>
        </section>

        <section id="prohibited-activities" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Prohibited Activities
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.1. Zero-Tolerance Content</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                The following activities are strictly prohibited and will result in immediate service termination without notice or refund:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Child abuse material or exploitation content</li>
                <li>Terrorism-related content or activities</li>
                <li>Malware distribution, botnets, or command-and-control servers</li>
                <li>Phishing websites or credential theft</li>
                <li>Fraudulent financial schemes (Ponzi, pyramid schemes)</li>
                <li>Human trafficking or illegal trade</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.2. Network Abuse</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Prohibited network activities include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>DDoS attacks or network flooding</li>
                <li>Port scanning or unauthorized access attempts</li>
                <li>Spam or unsolicited bulk email (unless compliant with CAN-SPAM and recipient consent)</li>
                <li>IP spoofing or network protocol abuse</li>
                <li>Resource exhaustion attacks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.3. Content Violations</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Prohibited content includes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Copyright infringement (subject to <Link href="/dmca-policy" className="text-blue-300 hover:text-white underline">DMCA Policy</Link>)</li>
                <li>Defamation, harassment, or hate speech</li>
                <li>Illegal gambling or unlicensed financial services</li>
                <li>Counterfeit goods or trademark infringement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">3.4. System Abuse</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                Prohibited system activities:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Attempting to gain unauthorized access to systems or accounts</li>
                <li>Exploiting security vulnerabilities</li>
                <li>Interfering with other users' services</li>
                <li>Circumventing service limitations or security measures</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="abuse-rules" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Abuse Rules
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              All abuse reports are handled in accordance with our <Link href="/abuse-flow" className="text-blue-300 hover:text-white underline">Abuse Flow</Link>:
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.1. Abuse Notification Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4">
                <li>Abuse report is received and reviewed by our NOC team</li>
                <li>You are notified privately with details and remediation options</li>
                <li>You have 7-14 days to address the issue (mediation window)</li>
                <li>If unresolved, service may be suspended or terminated</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.2. Zero-Tolerance Enforcement</h3>
              <p className="text-white/80 leading-relaxed">
                Zero-tolerance content (Section 3.1) results in immediate termination without mediation window. All other violations follow the standard abuse flow with notification and remediation period.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">4.3. Reporting Abuse</h3>
              <p className="text-white/80 leading-relaxed">
                To report abuse, send email to <a href="mailto:abuse@dior.host" className="text-blue-300 hover:text-white underline">abuse@dior.host</a> with detailed information, URLs, timestamps, and evidence.
              </p>
            </div>
          </div>
        </section>

        <section id="dmca-handling" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. DMCA Handling
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            Copyright infringement claims are handled according to our <Link href="/dmca-policy" className="text-blue-300 hover:text-white underline">DMCA Policy</Link>:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
            <li>We operate with DMCA-ignored policy by default</li>
            <li>All DMCA notices undergo manual review</li>
            <li>You receive private notification with 7-14 day response window</li>
            <li>Counter-notifications are accepted and forwarded to complainants</li>
            <li>We comply with valid court orders from our operating jurisdictions</li>
          </ul>
        </section>

        <section id="payments-refunds" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Payments & Refunds
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.1. Payment Terms</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>All services are prepaid for the selected billing cycle</li>
                <li>Automatic renewal is enabled by default</li>
                <li>You are responsible for maintaining valid payment information</li>
                <li>Failed payments result in service suspension after 7 days</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.2. Refund Policy</h3>
              <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-4 text-white font-semibold">Service Type</th>
                      <th className="text-left py-2 px-4 text-white font-semibold">Refund Policy</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/5">
                      <td className="py-2 px-4">VPS/VDS</td>
                      <td className="py-2 px-4">7-day money-back guarantee (unused services only)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 px-4">Dedicated Servers</td>
                      <td className="py-2 px-4">No refunds after service activation</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 px-4">Domain Registration</td>
                      <td className="py-2 px-4">No refunds (domains registered immediately)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 px-4">Web Hosting</td>
                      <td className="py-2 px-4">7-day money-back guarantee</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Abuse-related termination</td>
                      <td className="py-2 px-4">No refunds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">6.3. Chargebacks</h3>
              <p className="text-white/80 leading-relaxed">
                Chargebacks or payment disputes result in immediate account suspension. Contact support to resolve payment issues before initiating chargebacks.
              </p>
            </div>
          </div>
        </section>

        <section id="account-security" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Account Security
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.1. Your Responsibilities</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                You are solely responsible for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>Using strong, unique passwords and enabling two-factor authentication (2FA)</li>
                <li>Monitoring your account for unauthorized access</li>
                <li>Notifying us immediately of security breaches or suspicious activity</li>
                <li>Keeping your contact information up to date</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.2. Unauthorized Access</h3>
              <p className="text-white/80 leading-relaxed">
                You are liable for all activities that occur under your account, regardless of whether you authorized them. We are not responsible for losses resulting from compromised account credentials.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.3. Security Measures</h3>
              <p className="text-white/80 leading-relaxed">
                We implement industry-standard security measures, but you must also take reasonable precautions to protect your account and services.
              </p>
            </div>
          </div>
        </section>

        <section id="termination" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. Termination
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.1. Termination by User</h3>
              <p className="text-white/80 leading-relaxed">
                You may terminate your account at any time by canceling automatic renewal or submitting a termination request. Services remain active until the end of the current billing period.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.2. Termination by Provider</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                We may terminate your account immediately for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Violation of prohibited activities (Section 3)</li>
                <li>Non-payment exceeding 7 days</li>
                <li>Violation of this Agreement or applicable laws</li>
                <li>Court orders requiring termination</li>
                <li>Fraudulent activity or chargebacks</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">8.3. Effect of Termination</h3>
              <p className="text-white/80 leading-relaxed">
                Upon termination, all services are immediately suspended, and data is deleted after 30 days. You are responsible for exporting your data before termination. No refunds are provided for terminated accounts.
              </p>
            </div>
          </div>
        </section>

        <section id="liability" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. Liability
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Our liability is limited as follows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li><strong>Maximum liability:</strong> Limited to the amount paid for the affected service during the billing period</li>
              <li><strong>No indirect damages:</strong> We are not liable for lost profits, data loss, or consequential damages</li>
              <li><strong>Service availability:</strong> We provide services "as-is" with uptime guarantees as specified in our <Link href="/sla" className="text-blue-300 hover:text-white underline">SLA</Link></li>
              <li><strong>Third-party services:</strong> We are not liable for issues with third-party services (Cloudflare, payment processors, domain registrars)</li>
              <li><strong>Client content:</strong> You are solely responsible for your content and data</li>
            </ul>
          </div>
        </section>

        <section id="governing-law" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            10. Governing Law
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              This Agreement is governed by the laws of the Netherlands, with jurisdiction in Amsterdam courts. However, we maintain legal entities in multiple jurisdictions:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <ul className="space-y-2 text-white/80">
                <li><strong>Netherlands:</strong> Primary jurisdiction for disputes and legal matters</li>
                <li><strong>Germany:</strong> Alternative jurisdiction for EU compliance matters</li>
                <li><strong>Romania:</strong> Additional jurisdiction for offshore protection</li>
              </ul>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              For disputes, parties agree to first attempt resolution through mediation. If mediation fails, disputes shall be resolved in Amsterdam courts, Netherlands.
            </p>
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
              href="/privacy-policy"
              className="text-blue-300 hover:text-white underline"
            >
              Privacy Policy
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


