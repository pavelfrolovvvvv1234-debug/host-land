type ComparisonRow = { label: string; bulletproof: string; regular: string };

const hero = {
  heading: "Bulletproof Web Hosting",
  subheading:
    "Offshore shared and managed stacks with DMCA-resistant policies",
  summary:
    "In simple terms, bulletproof web hosting keeps your websites online even if DMCA or abuse complaints arrive by placing them on offshore infrastructure in the USA, UK, NL, DE and EU, combining managed services with abuse mediation."
};

const steps = [
  {
    title: "Map your sites and GEOs",
    description:
      "List domains, traffic sources and countries you must reach."
  },
  {
    title: "Pick the hosting mode",
    description:
      "Choose managed shared stacks, isolated containers or hybrid web + VDS nodes."
  },
  {
    title: "Configure domains & SSL",
    description:
      "Point bulletproof domains, upload SSL/TLS certificates or request managed issuance."
  },
  {
    title: "Launch & monitor",
    description:
      "Deploy via panel, enable backups and watch abuse tickets in the dashboard."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Abuse handling",
    bulletproof: "Manual mediation, DMCA ignored.",
    regular: "Auto suspension by the host."
  },
  {
    label: "Infrastructure",
    bulletproof: "Offshore multi-region clusters with isolation options.",
    regular: "Single datacenter shared servers."
  },
  {
    label: "Privacy & KYC",
    bulletproof: "Crypto/wire, optional paperwork.",
    regular: "Mandatory ID for every account."
  },
  {
    label: "Scaling",
    bulletproof: "Seamless upgrade to VDS/dedicated nodes.",
    regular: "Limited upgrade paths, forced migrations."
  },
  {
    label: "Support",
    bulletproof: "24/7 abuse liaison + NOC.",
    regular: "Standard ticket queue."
  }
];

const sections = [
  {
    title: "What is bulletproof web hosting?",
    body: "Managed reverse proxies, PHP/Node stacks and static/CDN layers that continue to serve pages despite takedown attempts.",
    bullets: [
      "DMCA ignored by default, human review before action.",
      "Managed WAF/CDN shielding plus optional custom SSL.",
      "Ideal for landing pages, marketing funnels, media mirrors."
    ]
  },
  {
    title: "Where is it hosted?",
    body: "Multi-region clusters in Amsterdam, Frankfurt and New York with Anycast routing toward EU/US eyeballs.",
    bullets: [
      "150+ Gbps bandwidth and DDoS mitigation.",
      "On-demand isolation to VDS/dedicated nodes.",
      "Panel/API to manage deployments and backups."
    ]
  },
  {
    title: "How are abuses handled?",
    body: "Tickets reach our compliance desk first. We coordinate remediation privately, log outcomes and keep workloads online unless courts require removal.",
    bullets: [
      "Zero tolerance only for malware/CSA/terror.",
      "Optional KYC for regulated partners.",
      "Escalation to account managers when needed."
    ]
  }
];

const faqs = [
  {
    question: "What is bulletproof web hosting?",
    answer:
      "Managed web infrastructure that stays online during DMCA disputes via offshore policies."
  },
  {
    question: "Can I run PHP, Node and static sites?",
    answer:
      "Yes, we support modern runtimes, reverse proxies and custom containers."
  },
  {
    question: "Do you provide CDN or WAF?",
    answer:
      "Each plan includes CDN caching, WAF rules and optional custom configurations."
  },
  {
    question: "Is migration assisted?",
    answer:
      "Yes, we migrate files, databases and SSL with zero downtime."
  },
  {
    question: "How do you bill?",
    answer:
      "Crypto, wire and card (via partners) with optional invoices for corporate clients."
  }
];

export default function BulletproofWebHostingPage() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)]">
        <h1 className="text-3xl font-bold">{hero.heading}</h1>
        <p className="mt-2 text-white/70">{hero.subheading}</p>
        <p className="mt-4 text-white/80">{hero.summary}</p>
      </section>

      {steps.length > 0 && (
        <section className="mt-8 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">
            How to deploy bulletproof web hosting
          </h2>
          <ol className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full border border-white/30 text-lg font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  {step.description && (
                    <p className="text-sm text-white/70">{step.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {comparisonRows.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">
            Bulletproof web hosting vs traditional hosting
          </h2>
          <p className="text-white/70 mt-2">Managed stack plus abuse resistance.</p>
          <div className="mt-4 overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Key factor</th>
                  <th className="px-4 py-3">Bulletproof web hosting</th>
                  <th className="px-4 py-3">Traditional hosting</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-white/10">
                    <th className="px-4 py-3 font-semibold">{row.label}</th>
                    <td className="px-4 py-3 text-white/80">{row.bulletproof}</td>
                    <td className="px-4 py-3 text-white/60">{row.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {sections.length > 0 && (
        <section className="mt-8 grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.title}
              className="bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col gap-3"
            >
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="text-sm text-white/70">{section.body}</p>
              {section.bullets && (
                <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}

      <section className="mt-6 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white/80">
        <p>
          Pair your web stack with{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/bulletproof/domains"
          >
            bulletproof domains
          </a>
          ,{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/bulletproof/vds"
          >
            VDS
          </a>{" "}
          and{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/bulletproof/dedicated"
          >
            dedicated servers
          </a>{" "}
          for full coverage.
        </p>
      </section>

      {faqs.length > 0 && (
        <section className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Bulletproof web hosting FAQ</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-white/10 rounded-lg p-4 bg-black/30"
              >
                <summary className="cursor-pointer font-semibold text-lg flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="faq-arrow ml-2">▶</span>
                </summary>
                <div className="accordion-content">
                  <p className="mt-2 text-sm text-white/70">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

