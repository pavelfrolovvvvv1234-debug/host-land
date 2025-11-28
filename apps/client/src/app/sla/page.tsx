import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SLA - Service Level Agreement | 99.9% Uptime Guarantee | Dior Host",
  description:
    "Dior Host SLA: 99.9% server uptime guarantee, 99.95% network availability, 24/7 NOC support with <1 hour response time. Service credits: 10-50% for downtime. Tier III datacenters, redundant power, network paths.",
  keywords: [
    "sla",
    "service level agreement",
    "uptime guarantee",
    "hosting sla",
    "99.9% uptime",
    "server uptime guarantee",
    "network availability sla",
    "service credits hosting",
    "downtime compensation"
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dior Host Service Level Agreement",
  "description": "Service level agreement with uptime guarantees and service credits",
  "provider": {
    "@type": "Organization",
    "name": "Dior Host",
    "url": "https://dior.host"
  },
  "serviceType": "Hosting Services",
  "areaServed": ["Netherlands", "Germany", "Romania", "Moldova"]
};

export default function SLAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout
        title="Service Level Agreement (SLA)"
        description="Uptime guarantees and service commitments"
      >
        <section id="uptime-commitment" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            1. 99.9% Uptime Commitment
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Dior Host guarantees 99.9% server uptime and 99.95% network availability for all services, measured monthly. Actual performance consistently exceeds these guarantees, with 99.99% uptime across all datacenters.
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Server Uptime</h3>
                  <p className="text-4xl font-bold text-green-400 mb-2">99.9%</p>
                  <p className="text-sm text-white/70">Guaranteed monthly uptime</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Network Availability</h3>
                  <p className="text-4xl font-bold text-blue-400 mb-2">99.95%</p>
                  <p className="text-sm text-white/70">Network path availability</p>
                </div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Uptime is calculated as: (Total minutes - Downtime minutes) / Total minutes × 100%. Scheduled maintenance with 48 hours' notice is excluded from uptime calculations.
            </p>
          </div>
        </section>

        <section id="network-availability" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            2. Network Availability
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              We guarantee 99.95% network availability, measured at the datacenter edge routers. Network availability includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Redundant network paths to multiple upstream providers</li>
              <li>BGP routing with automatic failover</li>
              <li>DDoS protection and filtering (up to our capacity limits)</li>
              <li>Peering at NL-IX, AMS-IX, DE-CIX, and RO-IX</li>
              <li>150+ Gbps total network capacity</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              Network downtime is measured as the inability to route traffic to/from your service due to infrastructure failures, excluding DDoS attacks beyond our filtering capacity.
            </p>
          </div>
        </section>

        <section id="hardware-replacement" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            3. Hardware Replacement Times
          </h2>
          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-white font-semibold">Hardware Component</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Replacement Time</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Storage (SSD/NVMe)</td>
                  <td className="py-3 px-4">≤ 4 hours</td>
                  <td className="py-3 px-4">Hot-swappable, redundant storage available</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">RAM Modules</td>
                  <td className="py-3 px-4">≤ 4 hours</td>
                  <td className="py-3 px-4">ECC RAM with error detection</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Network Interface</td>
                  <td className="py-3 px-4">≤ 2 hours</td>
                  <td className="py-3 px-4">Redundant network interfaces</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 px-4">Power Supply Unit</td>
                  <td className="py-3 px-4">≤ 1 hour</td>
                  <td className="py-3 px-4">Redundant PSUs, automatic failover</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Motherboard/CPU</td>
                  <td className="py-3 px-4">≤ 8 hours</td>
                  <td className="py-3 px-4">Full server replacement if needed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-white/80 leading-relaxed mt-4">
            Replacement times are measured from the moment hardware failure is confirmed until service is restored. Times may be extended during force majeure events or if replacement parts are unavailable.
          </p>
        </section>

        <section id="support-response" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            4. Support Response Times
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              Our 24/7 NOC (Network Operations Center) provides support with the following response time guarantees:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white font-semibold">Ticket Priority</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Response Time</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4"><span className="text-red-400 font-semibold">Critical</span></td>
                    <td className="py-3 px-4">≤ 1 hour</td>
                    <td className="py-3 px-4">Service completely down, data loss, security breach</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4"><span className="text-orange-400 font-semibold">High</span></td>
                    <td className="py-3 px-4">≤ 4 hours</td>
                    <td className="py-3 px-4">Significant performance degradation, partial service outage</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4"><span className="text-yellow-400 font-semibold">Medium</span></td>
                    <td className="py-3 px-4">≤ 24 hours</td>
                    <td className="py-3 px-4">Minor issues, configuration questions, general inquiries</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4"><span className="text-blue-400 font-semibold">Low</span></td>
                    <td className="py-3 px-4">≤ 48 hours</td>
                    <td className="py-3 px-4">Feature requests, billing questions, non-urgent matters</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/80 leading-relaxed mt-4">
              Response time is measured from ticket submission until first human response. Response times apply during business hours (24/7 for critical issues, business days for low/medium priority).
            </p>
          </div>
        </section>

        <section id="credits-compensation" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            5. Service Credits & Compensation
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              If uptime falls below our guarantees, service credits are automatically applied to your account:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white font-semibold">Monthly Uptime</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Service Credit</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Calculation</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">99.0% - 99.9%</td>
                    <td className="py-3 px-4"><span className="text-green-400 font-semibold">10%</span></td>
                    <td className="py-3 px-4">10% of monthly service fee</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">98.0% - 99.0%</td>
                    <td className="py-3 px-4"><span className="text-yellow-400 font-semibold">25%</span></td>
                    <td className="py-3 px-4">25% of monthly service fee</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">{"<"} 98.0%</td>
                    <td className="py-3 px-4"><span className="text-red-400 font-semibold">50%</span></td>
                    <td className="py-3 px-4">50% of monthly service fee</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-black/20 border border-white/5 rounded-lg p-4 mt-4">
              <h3 className="font-semibold mb-2 text-white">Credit Application</h3>
              <ul className="list-disc list-inside space-y-1 text-white/80 text-sm ml-4">
                <li>Credits are automatically calculated and applied at the end of each billing month</li>
                <li>Credits are applied to the next billing cycle</li>
                <li>Credits cannot be exchanged for cash refunds</li>
                <li>Maximum credit per month: 50% of monthly service fee</li>
                <li>Credits are calculated based on the affected service only</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ticket-escalation" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            6. Ticket Escalation Ladder
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed mb-4">
              If your issue is not resolved within the guaranteed response time, tickets are automatically escalated:
            </p>
            <div className="bg-black/30 border border-white/10 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-1">Level 1: Initial Response</h4>
                <p className="text-sm text-white/80">NOC engineer responds within guaranteed time</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Level 2: Escalation (if unresolved)</h4>
                <p className="text-sm text-white/80">Senior engineer review within 2 hours of Level 1 response</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Level 3: Management Escalation</h4>
                <p className="text-sm text-white/80">Technical management review within 4 hours of Level 2</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Level 4: Executive Escalation</h4>
                <p className="text-sm text-white/80">Executive team review for critical unresolved issues</p>
              </div>
            </div>
          </div>
        </section>

        <section id="monitoring-incidents" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            7. Monitoring & Incidents
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.1. Monitoring</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                We continuously monitor:
              </p>
              <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
                <li>Server uptime and availability (ping, HTTP checks)</li>
                <li>Network connectivity and latency</li>
                <li>Resource usage (CPU, RAM, disk, bandwidth)</li>
                <li>Hardware health (SMART status, temperature, power)</li>
                <li>Security events and intrusion attempts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.2. Incident Response</h3>
              <p className="text-white/80 leading-relaxed mb-2">
                When incidents are detected:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-white/80 ml-4">
                <li>Automated alerts notify NOC engineers immediately</li>
                <li>Engineers investigate and diagnose the issue</li>
                <li>Affected customers are notified via email and ticket system</li>
                <li>Resolution is implemented and verified</li>
                <li>Post-incident report is generated for major incidents</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">7.3. Incident Communication</h3>
              <p className="text-white/80 leading-relaxed">
                For incidents affecting multiple customers or lasting more than 15 minutes, we provide status updates via email and our status page. Updates are sent at: incident start, every 30 minutes during incident, and at resolution.
              </p>
            </div>
          </div>
        </section>

        <section id="exclusions" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            8. SLA Exclusions
          </h2>
          <p className="text-white/80 leading-relaxed mb-4">
            The following events are excluded from SLA calculations and do not qualify for service credits:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
            <li><strong>Scheduled maintenance:</strong> Maintenance with 48 hours' advance notice (typically &lt; 4 hours per month)</li>
            <li><strong>Client actions:</strong> Service interruptions caused by client configuration, software, or actions</li>
            <li><strong>Third-party services:</strong> Issues with Cloudflare, payment processors, or other third-party services</li>
            <li><strong>DDoS attacks:</strong> Attacks exceeding our DDoS filtering capacity (we filter up to our capacity limits)</li>
            <li><strong>Force majeure:</strong> Natural disasters, war, government actions, or other force majeure events</li>
            <li><strong>Abuse-related suspensions:</strong> Service suspensions due to abuse violations or prohibited activities</li>
            <li><strong>Non-payment:</strong> Service suspensions due to payment failures or account closure</li>
          </ul>
        </section>

        <section id="claiming-credits" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-white border-b border-white/10 pb-4">
            9. Claiming Service Credits
          </h2>
          <div className="space-y-4">
            <p className="text-white/80 leading-relaxed">
              Service credits are automatically calculated and applied. No manual claim is required. Credits appear in your account within 5 business days after the end of the billing month.
            </p>
            <p className="text-white/80 leading-relaxed">
              If you believe you are entitled to credits that were not automatically applied, contact support with:
            </p>
            <ul className="list-disc list-inside space-y-1 text-white/80 ml-4">
              <li>Service ID and affected time period</li>
              <li>Evidence of downtime (logs, screenshots, monitoring data)</li>
              <li>Description of the incident</li>
            </ul>
            <p className="text-white/80 leading-relaxed mt-4">
              We review credit requests within 7 business days and apply credits if verified.
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
              href="/user-agreement"
              className="text-blue-300 hover:text-white underline"
            >
              User Agreement
            </Link>
            <Link
              href="/about"
              className="text-blue-300 hover:text-white underline"
            >
              About Us
            </Link>
          </div>
        </section>
      </LegalLayout>
    </>
  );
}

