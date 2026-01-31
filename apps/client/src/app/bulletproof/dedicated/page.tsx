type ComparisonRow = { label: string; bulletproof: string; regular: string };

type DedicatedTarif = {
  title: string;
  cpu: number;
  threads: number;
  ram: number;
  ssd: number;
  networkSpeed: number;
  bandwidth: string;
  os: string;
  price: number;
  url: string;
};

const hero = {
  heading: "Bulletproof Dedicated Servers",
  subheading: "Abuse-resistant bare metal with offshore jurisdictions",
  summary:
    "In simple terms, bulletproof dedicated hosting keeps your bare-metal nodes online even when DMCA notices or abuse complaints arrive by placing hardware in offshore-friendly facilities across the USA, Netherlands, Germany and the EU."
};

const sections = [
  {
    title: "Who needs bulletproof dedicated servers?",
    body: "Privacy-focused SaaS, ad platforms, fintech rails, cybersecurity labs and streaming/media mirrors require hardware that resists false-positive takedowns.",
    bullets: [
      "Dedicated CPUs and RAM, zero noisy neighbours.",
      "Root-level customization for custom hypervisors, clusters and appliances.",
      "Optional IP announcements or BGP sessions for complex networks."
    ]
  },
  {
    title: "How does Dior Host harden the hardware?",
    body: "We deploy Tier III facilities in NL/DE/MD with redundant power, on-site stock, hot spares and 24/7 NOC escalation paths.",
    bullets: [
      "1–10 Gbps ports with burst and upgrade options.",
      "Hardware RAID, ECC RAM, AES-NI acceleration.",
      "Private backhaul to partner POPs in NYC, LON, AMS and FRA."
    ]
  },
  {
    title: "What about compliance?",
    body: "Abuse tickets trigger human review, mediation windows and DMCA-ignored handling until a legal mandate arrives.",
    bullets: [
      "Zero-tolerance only for malware, child abuse, terrorism.",
      "Optional contracts and documentation for regulated partners.",
      "Dedicated account managers for confidential escalations."
    ]
  }
];

const steps = [
  {
    title: "Define workloads and legal exposure",
    description:
      "Map services, traffic patterns, data sensitivity and potential complaint types."
  },
  {
    title: "Pick jurisdictions & IP strategy",
    description:
      "Choose NL/DE/MD/US-friendly racks, required subnets and routing preferences."
  },
  {
    title: "Select hardware tiers",
    description:
      "Match CPU generation, RAM, storage, bandwidth and mitigation add-ons to growth plans."
  },
  {
    title: "Launch & governance",
    description:
      "Schedule provisioning, import images, establish abuse contacts and monitoring."
  }
];

const comparisonRows: ComparisonRow[] = [
  {
    label: "Abuse workflow",
    bulletproof: "Manual mediation, DMCA ignored by default.",
    regular: "Automatic shutdown at first complaint."
  },
  {
    label: "Jurisdictions",
    bulletproof: "Offshore NL/DE/MD racks + US-friendly peers.",
    regular: "One domestic data center."
  },
  {
    label: "Privacy",
    bulletproof: "Crypto/wire, optional KYC, private tickets.",
    regular: "Strict AML/KYC and shared ticketing."
  },
  {
    label: "Network & mitigation",
    bulletproof: "10 Gbps uplinks, Anycast scrubbing, ACL automation.",
    regular: "Basic 1 Gbps port, minimal DDoS cover."
  },
  {
    label: "Scaling",
    bulletproof: "Burst, stack or hybridize with VDS/Turbo nodes.",
    regular: "Manual migrations, extra contracts."
  }
];

const tarifs: DedicatedTarif[] = [
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    threads: 8,
    ram: 16,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 189,
    url: "https://my.dior.host"
  },
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    threads: 8,
    ram: 32,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 215,
    url: "https://my.dior.host"
  },
  {
    title: "2x Intel Xeon X5670",
    cpu: 12,
    threads: 24,
    ram: 64,
    ssd: 250,
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 235,
    url: "https://my.dior.host"
  }
];

const faqs = [
  {
    question: "What is a bulletproof dedicated server?",
    answer:
      "A bare-metal server hosted in offshore-friendly facilities that stays online during DMCA or abuse disputes while our team mediates complaints."
  },
  {
    question: "Is bulletproof dedicated hosting legal?",
    answer:
      "Yes. We comply with criminal law while protecting legitimate customers, removing only zero-tolerance content."
  },
  {
    question: "Which locations do you offer?",
    answer:
      "Netherlands, Germany, Moldova and USA-friendly partners with routes into NA/EU."
  },
  {
    question: "Do I need to pass KYC?",
    answer:
      "Not by default. Documentation is optional unless your bank requires it."
  },
  {
    question: "Can you migrate existing infrastructure?",
    answer:
      "Yes, we assist with data transfer, rack planning and staged cutovers."
  }
];

export default function BulletproofDedicatedPage() {
  return (
    <div>
      <section className="bg-black/60 border border-white/10 rounded-2xl p-6 shadow-[0px_21px_120px_rgba(10,77,146,0.2)] hero-fade-in">
        <h1 className="text-3xl font-bold">{hero.heading}</h1>
        <p className="mt-2 text-white/70">{hero.subheading}</p>
        <p className="mt-4 text-white/80">{hero.summary}</p>
      </section>

      <section className="mt-6 bg-black/30 border border-white/10 rounded-xl p-4 text-sm text-white/80">
        <p>
          Pair your bare metal with{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/bulletproof/vds"
          >
            bulletproof VDS
          </a>{" "}
          and{" "}
          <a
            className="text-blue-300 hover:text-white"
            href="/bulletproof/domains"
          >
            bulletproof domains
          </a>{" "}
          for a full-stack setup.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 p-2 bg-[#09131c]/40 sm:justify-center shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] rounded-lg">
        {tarifs.map((tarif) => (
          <div
            key={`${tarif.title}-${tarif.ram}-${tarif.ssd}`}
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
                      {tarif.cpu} core{" "}
                      <span className="text-white/40">
                        / {tarif.threads} threads
                      </span>
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
                      {tarif.networkSpeed} gb/s
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
          <h2 className="text-2xl font-semibold">
            How to plan bulletproof dedicated capacity
          </h2>
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
            Bulletproof dedicated vs regular dedicated
          </h2>
          <p className="text-white/70 mt-2">
            Control, privacy and resilience for critical workloads.
          </p>
          <div className="mt-4 overflow-auto rounded-xl border border-white/10">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-white/5 uppercase text-xs tracking-wide">
                <tr>
                  <th className="px-4 py-3">Factor</th>
                  <th className="px-4 py-3">Bulletproof dedicated</th>
                  <th className="px-4 py-3">Traditional dedicated</th>
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
          <h2 className="text-2xl font-semibold">Bulletproof dedicated FAQ</h2>
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

