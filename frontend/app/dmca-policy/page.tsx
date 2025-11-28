import type { Metadata } from "next";
import { LegalLayout } from "../../components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMCA Policy - DMCA-Ignored Hosting Policy | Dior Host",
  description:
    "Dior Host DMCA policy: manual review, mediation-first approach, DMCA-ignored by default unless court order. 7-14 day window for counter-notification. Learn our copyright handling process, how to submit DMCA notices, and counter-notification procedures.",
  keywords: [
    "dmca policy",
    "dmca ignored hosting",
    "copyright policy",
    "dmca handling",
    "dmca ignored policy",
    "copyright infringement hosting",
    "dmca takedown process",
    "counter notification dmca"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dior Host DMCA Policy",
  "description": "DMCA policy and copyright handling procedures",
  "publisher": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": "https://dior.host"
  }
};

export default function DMCAPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="DMCA Policy"
        description="How we handle copyright infringement notices"
      >
        <section id="what-is-dmca" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. What is DMCA?
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              The Digital Millennium Copyright Act (DMCA) is a United States copyright law that provides a framework for copyright holders to request removal of infringing content from online services.
            </p>
            <p className="text-white/80 leading-relaxed">
              While DMCA is a U.S. law, similar copyright protection mechanisms exist in other jurisdictions. Dior Host operates from multiple jurisdictions (Netherlands, Germany, Romania) and handles copyright notices according to our abuse-resistant policies.
            </p>
          </div>
        </section>

        <section id="dmca-ignored-policy" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. DMCA-Ignored Policy
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              <strong>Dior Host operates with a DMCA-ignored policy by default.</strong> This means:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>We do not automatically suspend services upon receiving DMCA takedown notices</li>
              <li>All DMCA notices undergo manual review by our NOC team</li>
              <li>We prioritize mediation and due process over automatic takedowns</li>
              <li>Account holders receive private notification with remediation options</li>
              <li>We provide a 7-14 day window for response or counter-notification</li>
            </ul>
            <div className="bg-black/30 border border-blue-500/30 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-2 text-blue-300">Why DMCA-Ignored?</h3>
              <p className="text-white/80 text-sm">
                We believe in due process and fair treatment. Many DMCA notices are false, mistaken, or used to silence legitimate content. Our mediation-first approach ensures legitimate projects stay online during disputes while still addressing valid copyright concerns.
              </p>
            </div>
          </div>
        </section>

        <section id="jurisdiction-list" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Jurisdiction List
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Dior Host operates from the following jurisdictions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Netherlands</h3>
                <p className="text-sm text-white/80">
                  Primary jurisdiction. Main office and NOC in Amsterdam. EU regulations apply.
                </p>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Germany</h3>
                <p className="text-sm text-white/80">
                  Datacenter in Frankfurt. EU compliance and GDPR requirements.
                </p>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Romania</h3>
                <p className="text-sm text-white/80">
                  Tier III facility in Bucharest. EU jurisdiction with offshore protections.
                </p>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-white">Moldova</h3>
                <p className="text-sm text-white/80">
                  Additional location in Chisinau. Extended offshore protection.
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Court orders from these jurisdictions are complied with immediately, overriding our DMCA-ignored policy.
            </p>
          </div>
        </section>

        <section id="submitting-dmca-notice" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. How to Submit a DMCA Notice
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              To submit a DMCA takedown notice, send email to <a href="mailto:dmca@dior.host" className="text-blue-300 hover:text-white underline">dmca@dior.host</a> with the following information:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-white">Required Information</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80 text-sm ml-4">
                <li><strong>Identification of copyrighted work:</strong> Description of the copyrighted material claimed to be infringed</li>
                <li><strong>Identification of infringing material:</strong> URLs, IP addresses, or specific locations of the allegedly infringing content</li>
                <li><strong>Contact information:</strong> Your name, address, phone number, and email address</li>
                <li><strong>Good faith statement:</strong> Statement that you believe the use is not authorized by the copyright owner</li>
                <li><strong>Accuracy statement:</strong> Statement that the information is accurate and you are authorized to act on behalf of the copyright owner</li>
                <li><strong>Signature:</strong> Physical or electronic signature of the copyright owner or authorized agent</li>
              </ol>
            </div>
            <div className="bg-black/20 border border-white/5 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-2 text-white">Email Format</h3>
              <p className="text-white/80 text-sm mb-2">
                Subject: "DMCA Takedown Notice - [Copyrighted Work Title]"
              </p>
              <p className="text-white/80 text-sm">
                Include all required information in the email body. Attachments (PDF, images) are accepted for supporting evidence.
              </p>
            </div>
          </div>
        </section>

        <section id="evaluating-reports" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. How We Evaluate Reports
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              When we receive a DMCA notice, our NOC team evaluates it according to the following criteria:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-1">1. Completeness</h4>
                <p className="text-sm text-white/80">
                  Does the notice include all required information? Incomplete notices are rejected with a request for additional information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">2. Legitimacy</h4>
                <p className="text-sm text-white/80">
                  Is the notice from a legitimate copyright holder or authorized agent? We verify contact information and may request additional proof of authorization.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">3. Specificity</h4>
                <p className="text-sm text-white/80">
                  Are the infringing URLs or content locations clearly identified? Vague or overly broad notices are rejected.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">4. Jurisdiction</h4>
                <p className="text-sm text-white/80">
                  Does the notice originate from a jurisdiction where we operate? Notices from other jurisdictions are handled on a case-by-case basis.
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Even if a notice is valid, we do not automatically suspend services. We notify the account holder and provide a 7-14 day window for response or counter-notification.
            </p>
          </div>
        </section>

        <section id="customer-notification" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. How Customers Are Notified
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              When a DMCA notice is received and validated, we notify the account holder privately via:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li><strong>Email:</strong> Notification sent to the account's registered email address</li>
              <li><strong>Ticket System:</strong> Support ticket created in the account's ticket system</li>
              <li><strong>Private Message:</strong> Internal message in the billing panel (if applicable)</li>
            </ul>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-2 text-white">Notification Contents</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80 text-sm ml-4">
                <li>Summary of the DMCA notice</li>
                <li>Identified infringing content or URLs</li>
                <li>Complainant's contact information</li>
                <li>Response deadline (7-14 days)</li>
                <li>Options: remove content, provide counter-notification, or dispute the claim</li>
              </ul>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              <strong>We do not publicly disclose DMCA notices or account information.</strong> All communications are private and confidential.
            </p>
          </div>
        </section>

        <section id="counter-notification" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Counter-Notification
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              If you receive a DMCA notice and believe the content was removed by mistake, you can submit a counter-notification within 7-14 days:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-white">Counter-Notification Requirements</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80 text-sm ml-4">
                <li><strong>Identification of removed content:</strong> Specific URLs or content that was removed</li>
                <li><strong>Good faith statement:</strong> Statement that you believe the content was removed by mistake or misidentification</li>
                <li><strong>Contact information:</strong> Your name, address, phone number, and email address</li>
                <li><strong>Consent to jurisdiction:</strong> Statement that you consent to the jurisdiction of your local federal court (or equivalent)</li>
                <li><strong>Signature:</strong> Physical or electronic signature</li>
              </ol>
            </div>
            <div className="bg-black/20 border border-white/5 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-2 text-white">Counter-Notification Process</h3>
              <ol className="list-decimal list-inside space-y-1 text-white/80 text-sm ml-4">
                <li>Submit counter-notification to <a href="mailto:dmca@dior.host" className="text-blue-300 hover:text-white underline">dmca@dior.host</a></li>
                <li>We forward the counter-notification to the original complainant</li>
                <li>If the complainant does not file a court action within 10-14 business days, we may restore the content</li>
                <li>If a court action is filed, we comply with court orders</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="exceptions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. Exceptions
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Our DMCA-ignored policy does not apply to:
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-2">Criminal Activity</h3>
              <p className="text-white/80 text-sm">
                Copyright infringement combined with criminal activity (fraud, money laundering, terrorism) is handled as zero-tolerance abuse, not standard DMCA. Immediate action is taken.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-2">Phishing & Malware</h3>
              <p className="text-white/80 text-sm">
                Copyrighted content used in phishing websites or malware distribution is treated as security abuse, not DMCA. Immediate suspension.
              </p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-orange-400 mb-2">Court Orders</h3>
              <p className="text-white/80 text-sm">
                Valid court orders from Netherlands, Germany, or Romania override our DMCA-ignored policy and require immediate compliance, regardless of counter-notifications.
              </p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">Repeated Infringement</h3>
              <p className="text-white/80 text-sm">
                Accounts with multiple valid DMCA notices (3+ within 12 months) may be subject to stricter enforcement, including potential termination.
              </p>
            </div>
          </div>
        </section>

        <section id="related-pages" className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Related Documents</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/abuse-flow"
              className="text-blue-300 hover:text-white underline"
            >
              Abuse Flow
            </Link>
            <Link
              href="/user-agreement"
              className="text-blue-300 hover:text-white underline"
            >
              User Agreement
            </Link>
            <Link
              href="/public-offer"
              className="text-blue-300 hover:text-white underline"
            >
              Public Offer
            </Link>
          </div>
        </section>
      </LegalLayout>
    </>
  );
}


