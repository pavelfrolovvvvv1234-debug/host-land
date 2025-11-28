type ComparisonRow = {
  label: string;
  bulletproof: string;
  regular: string;
};

type Tarif = {
  title: string;
  cpu: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Bulletproof VDS Hosting (Abuse-Resistant VPS)",
  subheading: "Offshore VPS with DMCA-ignored policies and instant delivery",
  summary:
    "In simple terms, bulletproof VPS hosting is a service that keeps your virtual servers online even when complaints, DMCA notices or abuse reports are filed against your content thanks to offshore-friendly networks in the USA, Netherlands, Germany and the wider EU."
};

const sections = [
  {
    title: "Why choose bulletproof VDS?",
    body: "Bulletproof VDS nodes prioritise uptime, privacy and flexible acceptable use so growth campaigns, privacy tools and security labs survive aggressive takedown attempts.",
    bullets: [
      "DMCA ignored by default with manual review and mediation.",
      "Offshore routing in NL, DE, MD and USA-friendly peers with 150+ Gbps capacity.",
      "Crypto, wire and anonymous support channels without forced KYC."
    ]
  },
  {
    title: "Where are the servers located?",
    body: "Dior Host maintains multi-homed VPS clusters in Amsterdam, Rotterdam, Frankfurt and Chisinau with uplinks toward New York, London and Warsaw.",
    bullets: [
      "Redundant AS paths and proactive DDoS filtering.",
      "Localised IP pools for USA, UK, NL, DE and EU-targeted workloads.",
      "Private peering to ad networks, affiliate trackers and fintech APIs."
    ]
  },
  {
    title: "What workloads fit bulletproof VDS?",
    body: "Privacy SaaS, affiliate marketing, fintech gateways, cybersecurity labs, streaming mirrors and DMCA-heavy media benefit from abuse-resistant VPS.",
    bullets: [
      "Full root access for custom stacks, containers and tunnelling.",
      "Snapshot, reinstall and rescue modes via panel or API.",
      "Upgrade paths into Turbo VDS or dedicated nodes without downtime."
    ]
  }
];

const steps = [
  {
    title: "Map your workloads",
    description:
      "List applications, traffic sources and compliance risks that may trigger DMCA or abuse tickets."
  },
  {
    title: "Choose jurisdictions",
    description:
      "Select NL/DE/MD or hybrid USA-friendly nodes depending on latency to your audience."
  },
  {
    title: "Right-size resources",
    description:
      "Match CPU, RAM, NVMe and bandwidth to workloads, reserving burst headroom for peak campaigns."
  },
  {
    title: "Launch & monitor",
    description:
      "Order via panel or API, import images, enable snapshots and monitor tickets with our NOC."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Abuse workflow",
    bulletproof: "Manual review, evidence exchange, DMCA ignored by default.",
    regular: "Auto-suspension after the first complaint."
  },
  {
    label: "Jurisdictions & IPs",
    bulletproof: "NL/DE/MD/US-friendly pools, multiple ASNs and clean ranges.",
    regular: "Single-country IPs exposed to local takedowns."
  },
  {
    label: "Privacy & billing",
    bulletproof: "Crypto + wire + optional paperwork, no forced AML/KYC.",
    regular: "ID checks and rigid billing data."
  },
  {
    label: "Network safeguards",
    bulletproof: "150+ Gbps capacity, Anycast scrubbing, ACL automation.",
    regular: "Basic firewall with limited mitigation."
  },
  {
    label: "Migration path",
    bulletproof: "Upgrade to dedicated or Turbo VDS seamlessly.",
    regular: "Requires new provider or downtime during moves."
  }
];

const tarifs: Tarif[] = [
  {
    title: "Lite 1",
    cpu: 1,
    ram: 1,
    ssd: 20,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 17.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=77&startform=v2.vds.order.param"
  },
  {
    title: "Lite 2",
    cpu: 2,
    ram: 2,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 32.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=83&startform=v2.vds.order.param"
  },
  {
    title: "Lite 3",
    cpu: 2,
    ram: 4,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 37.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=89&startform=v2.vds.order.param"
  },
  {
    title: "Lite 4",
    cpu: 2,
    ram: 6,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 57.29,
    url: "https://my.diorhost.com/billmgr?datacenter=1&pricelist=95&startform=v2.vds.order.param"
  }
];

const faqs = [
  {
    question: "What is bulletproof VPS hosting?",
    answer:
      "Bulletproof VPS hosting keeps workloads online during DMCA or abuse disputes by relying on offshore rules, flexible policies and manual mediation."
  },
  {
    question: "Is bulletproof VDS legal in the USA or EU?",
    answer:
      "Yes—using bulletproof VPS is legal when your project avoids criminal content. Dior Host only blocks zero-tolerance abuse."
  },
  {
    question: "Which locations power Dior Host VDS?",
    answer:
      "Amsterdam, Frankfurt, Chisinau and USA-friendly peers with direct routes to New York, London and Frankfurt IX."
  },
  {
    question: "Do you require KYC for bulletproof VPS?",
    answer:
      "No mandatory KYC. Provide documents only if your bank or partner requests them."
  },
  {
    question: "Can I migrate from a regular VPS?",
    answer:
      "Yes. Import images or snapshots, schedule cutover with support and keep the same IPv4 pools."
  }
];

export default function BulletproofVdsPage() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)] hero-fade-in">
        <h1 className="text-3xl font-bold">{hero.heading}</h1>
        <p className="mt-2 text-white/70">{hero.subheading}</p>
        <p className="mt-4 text-white/80">{hero.summary}</p>
      </section>

      <section className="mt-6 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white/80">
        <p>
          Need more capacity? Check out{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/bulletproof/dedicated"
          >
            bulletproof dedicated servers
          </a>{" "}
          and{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/bulletproof/domains"
          >
            bulletproof domains
          </a>{" "}
          to secure the full stack.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 p-2 bg-[#09131c]/40 sm:justify-center shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] rounded-lg">
        {tarifs.map((tarif) => (
          <div
            key={tarif.title}
            className="p-2 rounded-lg border flex-grow sm:min-w-[250px] sm:max-w-[287px] border-[#ffffff49] select-none service-card scroll-reveal revealed"
          >
            <div className="content">
              <div className="flex flex-col gap-2 !items-start !justify-start m-[20px]">
                <div className="flex flex-wrap gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="41"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="service-card-icon"
                  >
                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                  </svg>
                  <h2 className="font-bold text-xl">{tarif.title}</h2>
                </div>
                <div className="mt-auto text-xs w-full">
                  <ul className="flex flex-col gap-2">
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">CPU</span>{" "}
                      {tarif.cpu} core
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">RAM</span>{" "}
                      {tarif.ram} gb
                    </li>
                    <li className="text-sm flex justify-between">
                      <span className="rounded-lg font-bold px-1 inline-block">
                        SSD / NVME
                      </span>{" "}
                      {tarif.ssd} gb
                    </li>
                  </ul>
                  <ul className="mt-4 flex flex-col gap-2">
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        Network speed
                      </span>{" "}
                      {tarif.networkSpeed} mb/s
                    </li>
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        Bandwidth
                      </span>{" "}
                      {tarif.bandwidth}
                    </li>
                    <li className="text-white/40 flex gap-2">
                      <span className="rounded-lg bg-gradient-to-tl from-stone-700 via-yellow-400 to-emerald-50 text-black font-bold px-1 inline-block">
                        OS
                      </span>{" "}
                      {tarif.os}
                    </li>
                  </ul>
                </div>
                <a
                  href={tarif.url}
                  className="p-2 bg-black/20 w-full rounded-lg border-[#ffffff44] mt-4 border hover:border-[#6e84e4] service-card-price"
                >
                  {tarif.price} $ / month (order)
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {steps.length > 0 && (
        <section className="mt-10 bg-black/40 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">How to deploy bulletproof VDS</h2>
          <ol className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 scroll-reveal revealed">
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
            Bulletproof VDS vs regular VPS
          </h2>
          <p className="text-white/70 mt-2">
            Stay online longer with offshore abuse-resistant infrastructure.
          </p>
          <div className="mt-4 overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Factor</th>
                  <th className="px-4 py-3">Bulletproof VDS</th>
                  <th className="px-4 py-3">Regular VPS</th>
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
          <h2 className="text-2xl font-semibold">Bulletproof VDS FAQ</h2>
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

