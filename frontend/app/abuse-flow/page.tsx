import type { Metadata } from "next";
import { LegalLayout } from "../../components/LegalLayout";
import Link from "next/link";
import { PRIMARY_ORIGIN } from "../../lib/canonical";

export const metadata: Metadata = {
  title: "Abuse Escalation Process - DMCA & Abuse Handling | Dior Host",
  description:
    "Learn how Dior Host handles abuse tickets, DMCA notices and complaints with manual review, mediation-first workflows, 7-14 day windows, and transparent escalation. Zero-tolerance content policy, 24h response time.",
  keywords: [
    "abuse escalation",
    "dmca handling",
    "abuse ticket process",
    "bulletproof abuse policy",
    "abuse complaint handling",
    "dmca ignored process",
    "abuse ticket workflow",
    "mediation first hosting"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Dior Host Abuse Escalation Process",
  "description": "Abuse handling and escalation procedures",
  "publisher": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": PRIMARY_ORIGIN
  }
};

export default function AbuseFlowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Abuse Escalation Process"
        description="How we handle complaints and abuse tickets"
      >
        <section id="what-is-abuse" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. What is Abuse?
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              Abuse refers to any activity that violates applicable laws, our <Link href="/user-agreement" className="text-blue-300 hover:text-white underline">User Agreement</Link>, or our abuse policies. This includes but is not limited to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-black/30 border border-red-500/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-red-400">Zero-Tolerance Content</h3>
                <ul className="list-disc list-inside space-y-1 text-white/80 text-sm ml-2">
                  <li>Child abuse material</li>
                  <li>Terrorism-related content</li>
                  <li>Malware distribution</li>
                  <li>Phishing websites</li>
                </ul>
              </div>
              <div className="bg-black/30 border border-orange-500/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 text-orange-400">Standard Abuse</h3>
                <ul className="list-disc list-inside space-y-1 text-white/80 text-sm ml-2">
                  <li>Copyright infringement (DMCA)</li>
                  <li>Spam or unsolicited email</li>
                  <li>Network abuse (DDoS, port scanning)</li>
                  <li>Fraudulent activities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="types-of-reports" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Types of Reports
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.1. DMCA Notices</h3>
              <p className="text-white/80 leading-relaxed">
                Copyright infringement claims handled according to our <Link href="/dmca-policy" className="text-blue-300 hover:text-white underline">DMCA Policy</Link>. All DMCA notices undergo manual review with 7-14 day mediation window.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.2. Abuse Reports</h3>
              <p className="text-white/80 leading-relaxed">
                General abuse complaints (spam, network abuse, fraud) submitted via email to <a href="mailto:abuse@dior.host" className="text-blue-300 hover:text-white underline">abuse@dior.host</a> or through our ticket system.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2.3. Law Enforcement Requests</h3>
              <p className="text-white/80 leading-relaxed">
                Valid court orders and law enforcement requests from jurisdictions where we operate (Netherlands, Germany, Romania) are complied with immediately.
              </p>
            </div>
          </div>
        </section>

        <section id="workflow" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Internal Handling Workflow
          </h2>
          <div className="space-y-6">
            <div className="bg-black/30 border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Workflow Diagram</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center font-bold text-blue-300">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">Report Received</h4>
                    <p className="text-sm text-white/70">Abuse or DMCA notice arrives via email or ticket system</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-white/20"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center font-bold text-blue-300">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">Internal Validation</h4>
                    <p className="text-sm text-white/70">NOC team reviews complaint, verifies legitimacy, checks content type</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-white/20"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center font-bold text-blue-300">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">Jurisdiction Check</h4>
                    <p className="text-sm text-white/70">Verify if complaint originates from our operating jurisdictions (NL, DE, RO)</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-white/20"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-lg flex items-center justify-center font-bold text-blue-300">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">Action Path Decision</h4>
                    <p className="text-sm text-white/70">Determine if zero-tolerance (immediate action) or standard (mediation window)</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-white/20"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-red-400 mb-2">Ignore</h4>
                    <p className="text-sm text-white/70">Invalid or out-of-jurisdiction complaint</p>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-400 mb-2">Notify Client</h4>
                    <p className="text-sm text-white/70">Standard abuse: 7-14 day mediation window</p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-400 mb-2">Client Escalation</h4>
                    <p className="text-sm text-white/70">Request response or counter-notification</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-0.5 h-8 bg-white/20"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center font-bold text-green-300">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">Final Decision</h4>
                    <p className="text-sm text-white/70">Issue resolved, service suspended, or case closed based on outcome</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="escalation-levels" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Escalation Levels
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-semibold">Level</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Response Time</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4"><span className="text-red-400 font-semibold">Level 0</span></td>
                  <td className="py-3 px-4">Immediate</td>
                  <td className="py-3 px-4">Zero-tolerance content: immediate suspension</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4"><span className="text-orange-400 font-semibold">Level 1</span></td>
                  <td className="py-3 px-4">≤ 24 hours</td>
                  <td className="py-3 px-4">Standard abuse: notification sent, 7-14 day window</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4"><span className="text-yellow-400 font-semibold">Level 2</span></td>
                  <td className="py-3 px-4">≤ 48 hours</td>
                  <td className="py-3 px-4">DMCA notices: manual review, counter-notification window</td>
                </tr>
                <tr>
                  <td className="py-3 px-4"><span className="text-blue-400 font-semibold">Level 3</span></td>
                  <td className="py-3 px-4">≤ 72 hours</td>
                  <td className="py-3 px-4">Complex cases: extended review, legal consultation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="possible-outcomes" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Possible Outcomes
          </h2>
          <div className="space-y-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">Ignore</h3>
              <p className="text-white/80 text-sm">
                Complaint is invalid, out of jurisdiction, or lacks sufficient evidence. No action taken, case closed.
              </p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-400 mb-2">Resolve</h3>
              <p className="text-white/80 text-sm">
                Client addresses the issue within mediation window (removes content, fixes configuration, provides counter-notification). Service continues, case closed.
              </p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-orange-400 mb-2">Investigate</h3>
              <p className="text-white/80 text-sm">
                Additional evidence or legal review required. Service may be temporarily restricted pending investigation outcome.
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-2">Suspend/Terminate</h3>
              <p className="text-white/80 text-sm">
                Zero-tolerance content confirmed, client fails to respond, or court order issued. Service suspended or terminated immediately. No refunds.
              </p>
            </div>
          </div>
        </section>

        <section id="customer-responsibilities" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Customer Responsibilities
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              When you receive an abuse notification, you must:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-white/80 ml-4">
              <li><strong>Respond promptly:</strong> Acknowledge receipt within 48 hours</li>
              <li><strong>Review the complaint:</strong> Verify if the reported content or activity exists on your service</li>
              <li><strong>Take action:</strong> Remove violating content, fix configuration issues, or provide counter-notification</li>
              <li><strong>Communicate:</strong> Update us via ticket system on your remediation progress</li>
              <li><strong>Provide evidence:</strong> If disputing the complaint, provide evidence supporting your position</li>
            </ol>
            <p className="text-white/80 leading-relaxed mt-4">
              Failure to respond within the mediation window (7-14 days) may result in service suspension or termination.
            </p>
          </div>
        </section>

        <section id="abuse-evidence-format" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Abuse Evidence Format
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              To ensure efficient processing, abuse reports should include:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3 text-white">Required Information</h3>
              <ul className="list-disc list-inside space-y-2 text-white/80 text-sm ml-4">
                <li><strong>Complainant information:</strong> Name, email, organization (if applicable)</li>
                <li><strong>Affected service:</strong> IP address, domain, or service identifier</li>
                <li><strong>Description:</strong> Detailed description of the abuse or violation</li>
                <li><strong>Evidence:</strong> Screenshots, logs, URLs, timestamps</li>
                <li><strong>Legal basis:</strong> Applicable law or policy violation</li>
                <li><strong>Requested action:</strong> What action you want us to take</li>
              </ul>
            </div>
            <div className="bg-black/20 border border-white/5 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-2 text-white">Submit Abuse Reports</h3>
              <p className="text-white/80 text-sm mb-2">
                Send email to <a href="mailto:abuse@dior.host" className="text-blue-300 hover:text-white underline">abuse@dior.host</a> with subject line: "Abuse Report - [Service ID/IP]"
              </p>
              <p className="text-white/80 text-sm">
                For DMCA notices, see our <Link href="/dmca-policy" className="text-blue-300 hover:text-white underline">DMCA Policy</Link> for specific requirements.
              </p>
            </div>
          </div>
        </section>

        <section id="dmca-exceptions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. DMCA Exceptions
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              While we operate with DMCA-ignored policy by default, certain exceptions apply:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-1">Court Orders</h4>
                <p className="text-sm text-white/80">
                  Valid court orders from Netherlands, Germany, or Romania override our DMCA-ignored policy and require immediate compliance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Criminal Activity</h4>
                <p className="text-sm text-white/80">
                  Copyright infringement combined with criminal activity (fraud, money laundering) is handled as criminal abuse, not DMCA.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Phishing & Malware</h4>
                <p className="text-sm text-white/80">
                  Copyrighted content used in phishing or malware distribution is treated as zero-tolerance abuse, not standard DMCA.
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              For standard DMCA notices, see our <Link href="/dmca-policy" className="text-blue-300 hover:text-white underline">DMCA Policy</Link> for complete procedures.
            </p>
          </div>
        </section>

        <section id="related-pages" className="mt-12 pt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Related Documents</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/user-agreement"
              className="text-blue-300 hover:text-white underline"
            >
              User Agreement
            </Link>
            <Link
              href="/dmca-policy"
              className="text-blue-300 hover:text-white underline"
            >
              DMCA Policy
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


