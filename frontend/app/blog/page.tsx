import Link from "next/link";

const blogIntro = {
  title: "Bulletproof Hosting Insights",
  summary:
    "Actionable playbooks for abuse-resistant VPS, dedicated servers, offshore domains and DMCA compliance."
};

type BlogCard = {
  slug: string;
  title: string;
  summary: string;
};

const blogPosts: BlogCard[] = [
  {
    slug: "bulletproof-vds-blog",
    title: "What Is a Bulletproof VDS? Full Technical Overview, Use Cases, and Abuse-Resistance Architecture",
    summary:
      "Complete technical deep-dive into bulletproof VDS architecture, hypervisor configurations, network isolation, abuse-handling policies, and deployment strategies for high-risk workloads."
  },
  {
    slug: "bulletproof-domains-blog",
    title: "Bulletproof Domains: How Offshore & DMCA-Resistant Domain Infrastructure Works",
    summary:
      "Technical explanation of bulletproof domain systems, registry policies, DNS infrastructure, abuse-handling workflows, and deployment strategies for high-risk projects."
  },
  {
    slug: "vds-vs-vps-vs-dedicated-blog",
    title: "VDS vs VPS vs Dedicated: Deep Technical Comparison for High-Risk and High-Load Projects",
    summary:
      "Technical comparison of VDS, VPS, and dedicated server architectures, hypervisor technologies, network isolation, storage stacks, and deployment strategies."
  },
  {
    slug: "bulletproof-dedicated-servers-blog",
    title: "Bulletproof Dedicated Servers: Architecture, Abuse Handling, Traffic Filtering, and IP Policies",
    summary:
      "Technical deep-dive into bulletproof dedicated server architecture, abuse-handling workflows, traffic filtering systems, IP policies, and deployment strategies."
  },
  {
    slug: "dedicated-servers-blog",
    title: "Dedicated Servers: When You Need Bare-Metal, Performance, Isolation & IP Control",
    summary:
      "Guide to dedicated server infrastructure, performance characteristics, isolation benefits, IP management strategies, and deployment best practices for high-performance workloads."
  },
  {
    slug: "turbovds-blog",
    title: "TurboVDS: High-Performance Virtual Servers with Optimized CPU/RAM/IO Stack",
    summary:
      "Technical overview of TurboVDS architecture, performance optimizations, use cases, benchmarking results, and deployment strategies for high-performance applications."
  },
  {
    slug: "iphm-dedicated-servers-blog",
    title: "Dedicated Server with IPHM: IP History Management Explained, Benefits, Anti-Abuse Logic",
    summary:
      "Complete guide to IP History Management (IPHM), reputation management, anti-abuse logic, use cases, and deployment strategies for high-reputation workloads."
  },
  {
    slug: "offshore-hosting-blog",
    title: "Offshore Hosting Explained: Jurisdictions, DMCA Ignore Policies, Network Stability & Risks",
    summary:
      "Technical explanation of offshore hosting architecture, jurisdiction selection, DMCA ignore policies, network stability considerations, legal risks, and deployment strategies."
  },
  {
    slug: "abuse-resistant-hosting-stack-blog",
    title: "How to Build an Abuse-Resistant Hosting Stack: DNS, L4/L7 Firewalls, Routing, IP Reputation",
    summary:
      "Technical guide to building abuse-resistant hosting infrastructure, including DNS configuration, firewall rules, BGP routing, IP reputation monitoring, and deployment best practices."
  },
  {
    slug: "dmca-ignored-hosting-blog",
    title: "DMCA-Ignored Hosting & DMCA-Ignored VDS: How It Works, Who Uses It, Technical Pros & Cons",
    summary:
      "Complete guide to DMCA-ignored hosting architecture, abuse-handling workflows, use cases, technical advantages, legal considerations, and deployment strategies."
  },
  {
    slug: "cdn-complete-guide",
    title: "CDN: Complete Guide to Website Acceleration Through Global Content Delivery Networks",
    summary:
      "Deep technical dive into CDN architecture, edge caching, geo-routing, smart-routing, DNS load balancing, and configuration examples for Cloudflare, Fastly, and Akamai."
  },
  {
    slug: "vpn-infrastructure-guide",
    title: "VPN Infrastructure Breakdown: How to Choose a VPN Provider and Deploy Your Own Corporate VPN Stack",
    summary:
      "Technical deep-dive into VPN protocols (WireGuard, OpenVPN, IPSec), deployment architectures, security encryption, access control, use cases, and monetization strategies."
  },
  {
    slug: "minecraft-hosting-architecture",
    title: "Minecraft Hosting: Architecture, Optimization, Load Management, Security, and Scalability",
    summary:
      "Complete technical guide to Minecraft server hosting, Java performance optimization, Paper/Spigot/Purpur configuration, BungeeCord/Velocity scaling, and production deployment strategies."
  },
  {
    slug: "abuse-resistant-vps-complete-guide",
    title: "Abuse-Resistant VPS/VDS: How Abuse-Resistant Data Centers Work and Who Really Needs Them",
    summary:
      "Complete technical guide to abuse-resistant hosting, abuse request handling mechanics, IPHM, SLA policies, policy-friendly jurisdictions, and use cases for high-risk projects."
  }
];

export default function BlogIndexPage() {
  return (
    <div>
      <section className="bg-black/50 border border-white/10 rounded-2xl p-6">
        <h1 className="text-3xl font-bold">{blogIntro.title}</h1>
        <p className="mt-2 text-white/70">{blogIntro.summary}</p>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-2xl font-semibold">Latest articles</h2>
          <div className="text-sm text-white/60 flex gap-2 items-center">
            <span>Tags:</span>
            <span className="uppercase tracking-wide text-white/80 text-xs">
              VPS · DMCA · DNS · Compliance
            </span>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-black/40 border border-white/10 rounded-xl p-5 flex flex-col gap-4"
            >
              <div className="text-xs uppercase tracking-wide text-white/50">
                Article
              </div>
              <h3 className="text-xl font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-white/70">{post.summary}</p>
              <Link
                className="mt-auto inline-flex items-center gap-2 text-blue-300 hover:text-white transition"
                href={`/blog/articles/${post.slug}`}
              >
                Read article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}


