type ComparisonRow = { label: string; bulletproof: string; regular: string };

type Zone = {
  title: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Bulletproof Domains & Offshore Registration",
  subheading: "DMCA-ignored registrars with resilient DNS",
  summary:
    "In simple terms, bulletproof domains are registered through offshore providers that keep DNS online even when DMCA notices or abuse complaints arrive, protecting SEO and email reputation across USA, UK, NL, DE and EU audiences."
};

const sections = [
  {
    title: "Why use bulletproof domains?",
    body: "Domains are the first asset takedown teams attack. Offshore registrars with mediation-first policies keep your brand reachable.",
    bullets: [
      "Manual review and dialogue before any suspension.",
      "WHOIS privacy enabled by default.",
      "Works for marketing, fintech, VPN, media and privacy projects."
    ]
  },
  {
    title: "Which TLDs are supported?",
    body: "Flat $70/year pricing (except .io) across .com, .net, .org, .io, .cc, .uk, .us, .link, .bz and more.",
    bullets: [
      "Instant activation plus API access.",
      "Assisted transfers and backorders.",
      "DNSSEC, vanity nameservers and custom glue records."
    ]
  },
  {
    title: "How are abuse tickets handled?",
    body: "Every notice is triaged manually. We notify you privately, define a remediation plan and ignore DMCA unless a court order appears.",
    bullets: [
      "Zero tolerance only for malware, CSA or terrorism.",
      "Compliance liaisons for EU/US regulators and partners.",
      "Dedicated channels for advertisers and PSPs."
    ]
  }
];

const steps = [
  {
    title: "Pick the jurisdiction & TLD",
    description:
      "Decide which GEO needs protection and choose between .com, .net, .io, .uk, .us or niche TLDs."
  },
  {
    title: "Plan term & DNS strategy",
    description:
      "Prepay multi-year registrations, configure DNSSEC and glue records if required."
  },
  {
    title: "Register or transfer",
    description:
      "Use the panel or API to register instantly or hand off EPP codes for zero-downtime transfers."
  },
  {
    title: "Monitor abuse inbox",
    description:
      "Keep abuse contacts active so we can coordinate remediation without escalation."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Abuse handling",
    bulletproof: "Manual review, DMCA ignored by default.",
    regular: "Automated suspension from registry."
  },
  {
    label: "Privacy",
    bulletproof: "WHOIS privacy included, offshore data handling.",
    regular: "Public WHOIS or costly add-ons."
  },
  {
    label: "DNS tooling",
    bulletproof: "API, DNSSEC, vanity NS, IPv4/IPv6 glue.",
    regular: "Basic DNS only."
  },
  {
    label: "Pricing",
    bulletproof: "Flat yearly pricing ($70 / $99 for .io).",
    regular: "Fluctuating renewals, hidden fees."
  },
  {
    label: "Use cases",
    bulletproof: "Affiliate, fintech, VPN, media, security research.",
    regular: "Low-risk brochure sites."
  }
];

const domainsPrices = {
  reg: 70,
  renew: 70,
  transfer: 70
};

const zones: Zone[] = [
  { title: ".com", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".net", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".org", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".info", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".biz", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".club", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".pro", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".uk", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".guru", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".ca", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".at", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".io", price: 99, url: "https://t.me/diorhost_bot" },
  { title: ".cc", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".us", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".link", price: 80, url: "https://t.me/diorhost_bot" },
  { title: ".bz", price: 80, url: "https://t.me/diorhost_bot" }
];

const faqs = [
  {
    question: "What is a bulletproof domain?",
    answer:
      "A domain registered via abuse-resistant offshore registrars that do not remove DNS delegation when DMCA arrives."
  },
  {
    question: "Can I transfer existing domains?",
    answer:
      "Yes. Provide the EPP code and we coordinate a zero-downtime cutover."
  },
  {
    question: "Do you hide WHOIS data?",
    answer: "WHOIS privacy is enabled by default at the registry level."
  },
  {
    question: "Are there content restrictions?",
    answer:
      "Only universal zero-tolerance content is banned. Everything else goes through mediation."
  },
  {
    question: "Do you support DNSSEC and vanity NS?",
    answer:
      "Yes, DNSSEC, custom glue, vanity nameservers and API automation are available."
  }
];

export default function BulletproofDomainsPage() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)]">
        <h1 className="text-3xl font-bold">{hero.heading}</h1>
        <p className="mt-2 text-white/70">{hero.subheading}</p>
        <p className="mt-4 text-white/80">{hero.summary}</p>
      </section>

      <section className="mt-6 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white/80">
        <p>
          Pair your domains with{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/bulletproof/vds"
          >
            bulletproof VDS
          </a>{" "}
          and{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/bulletproof/dedicated"
          >
            dedicated servers
          </a>{" "}
          for end-to-end resilience.
        </p>
      </section>

      <div className="mt-4 bg-[#00000079] rounded-lg">
        <div className="p-4">
          <ul className="flex flex-col gap-4 mt-4 select-none sm:w-2/3 mx-auto">
            <li className="border border-[#ffffff54] hover:border-[#ffffffcc] p-2 rounded flex gap-4 justify-between items-center font-semibold pl-4">
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                  <path d="m9 9.5 2 2 4-4" />
                </svg>{" "}
                Registration
              </div>
              <span className="bg-gradient-to-tr from-orange-700 via-pink-600 to-orange-600 p-2 rounded-lg inline-block vibrate-1-normal">
                <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-teal-100 to-green-500 bg-clip-text text-transparent font-bold">
                  {domainsPrices.reg} $
                </span>
              </span>
            </li>
            <li className="border border-[#ffffff54] hover:border-[#ffffffcc] p-2 rounded flex gap-4 justify-between items-center font-semibold pl-4">
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 2h4" />
                  <path d="M12 14v-4" />
                  <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
                  <path d="M9 17H4v5" />
                </svg>{" "}
                Renewal
              </div>
              <span className="bg-gradient-to-tr from-orange-700 via-pink-600 to-orange-600 p-2 rounded-lg inline-block vibrate-1-normal">
                <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-teal-100 to-green-500 bg-clip-text text-transparent font-bold">
                  {domainsPrices.renew} $
                </span>
              </span>
            </li>
            <li className="border border-[#ffffff54] hover:border-[#ffffffcc] p-2 rounded flex gap-4 justify-between items-center font-semibold pl-4">
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3 4 7l4 4" />
                  <path d="M4 7h16" />
                  <path d="m16 21 4-4-4-4" />
                  <path d="M20 17H4" />
                </svg>{" "}
                Transfer
              </div>
              <span className="bg-gradient-to-tr from-orange-700 via-pink-600 to-orange-600 p-2 rounded-lg inline-block vibrate-1-normal">
                <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-teal-100 to-green-500 bg-clip-text text-transparent font-bold">
                  {domainsPrices.transfer} $
                </span>
              </span>
            </li>
          </ul>

          <div className="mx-auto mt-4">
            <div className="inline-flex items-center justify-center w-full relative">
              <hr className="w-64 h-px my-8 bg-transparent border-0 dark:bg-white/40" />
              <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-[#040404] left-1/2 dark:text-white">
                Available Zones
              </span>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              {zones.map((zone) => (
                <a
                  key={zone.title}
                  href={zone.url}
                  className="w-1/2 md:w-1/4 flex-grow select-none cursor-pointer p-4 flex flex-col items-start gap-4 border border-white/40 rounded-lg hover:border-white"
                >
                  <div className="flex flex-col gap-2 items-start">
                    <h3 className="text-3xl font-bold">{zone.title}</h3>
                    <span className="bg-gradient-to-tr from-orange-700 via-pink-600 to-orange-600 p-2 rounded-lg inline-block">
                      <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-100 via-teal-100 to-green-500 bg-clip-text text-transparent font-bold">
                        {zone.price} $
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {steps.length > 0 && (
        <section className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">
            How to secure a bulletproof domain
          </h2>
          <ol className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full border border-white/30 text-lg font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-white/70">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {sections.length > 0 && (
        <section className="mt-10 grid gap-6 md:grid-cols-3">
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

      {comparisonRows.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            Bulletproof domains vs regular domains
          </h2>
          <p className="text-white/70 mt-2">Keep your DNS online during disputes.</p>
          <div className="mt-4 overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Factor</th>
                  <th className="px-4 py-3">Bulletproof domains</th>
                  <th className="px-4 py-3">Regular domains</th>
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

      {faqs.length > 0 && (
        <section className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Bulletproof domain FAQ</h2>
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

