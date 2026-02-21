import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { PRIMARY_ORIGIN } from "../lib/canonical";

/**
 * Sitemap.xml generator. Emits only primary domain (dior.host) URLs; no .com/.net, no .html.
 * Next.js serves this at: https://dior.host/sitemap.xml
 */
function normalizeSitemapUrl(url: string): string {
  try {
    const u = new URL(url);
    const pathname = u.pathname.replace(/\.html$/i, "");
    return `${PRIMARY_ORIGIN}${pathname}${u.search}`;
  } catch {
    return url.startsWith("/") ? `${PRIMARY_ORIGIN}${url}` : url;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = PRIMARY_ORIGIN;
  const now = new Date().toISOString().split("T")[0];

  // Try to read sitemap from public directory if exists
  let staticSitemap: MetadataRoute.Sitemap = [];
  try {
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    if (fs.existsSync(sitemapPath)) {
      const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
      const urlMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
      if (urlMatches) {
        staticSitemap = urlMatches.map((match) => {
          const rawUrl = match.replace(/<\/?loc>/g, "");
          const url = normalizeSitemapUrl(rawUrl);
          return {
            url,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.8,
          };
        });
      }
    }
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error reading static sitemap:", error);
    }
  }

  if (staticSitemap.length > 0) {
    return staticSitemap;
  }

  // Blog article slugs
  const articleSlugs = [
    "bulletproof-vds-blog",
    "bulletproof-domains-blog",
    "vds-vs-vps-vs-dedicated-blog",
    "bulletproof-dedicated-servers-blog",
    "dedicated-servers-blog",
    "turbovds-blog",
    "iphm-dedicated-servers-blog",
    "offshore-hosting-blog",
    "bulletproof-hosting-stack-blog",
    "dmca-ignored-hosting-blog",
    "cdn-complete-guide",
    "vpn-infrastructure-guide",
    "minecraft-hosting-architecture",
    "abuse-resistant-vps-complete-guide",
    "bulletproof-domains-guide",
    "bulletproof-security-controls",
    "bulletproof-vps-for-marketers",
    "dmca-ignored-hosting-checklist",
    "dmca-ignored-hosting-escalation-guide",
    "iphm-dedicated-servers-guide",
    "llm-ready-hosting-faq",
    "migrating-to-bulletproof-hosting-zero-downtime",
    "offshore-bulletproof-vps-2025",
    "offshore-compliance-guide",
    "privacy-first-billing",
    "turbovds-vs-regular-vds",
    "bulletproof-dedicated-vs-vds"
  ];

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = [
    // Main pages
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    // Services
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Bulletproof services (English)
    {
      url: `${baseUrl}/bulletproof-vds`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bulletproof-dedicated`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bulletproof-domains`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bulletproof-web-hosting`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/turbovds`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dedicated-iphm`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bulletproof-cdn`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/minecraft-hosting`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/bulletproof-vpn`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/proxy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Bulletproof services (Russian)
    {
      url: `${baseUrl}/ru/bulletproof-vds`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/bulletproof-dedicated`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/bulletproof-domains`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/bulletproof-web-hosting`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/turbovds`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/dedicated-iphm`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/bulletproof-cdn`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/minecraft-hosting`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/bulletproof-vpn`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/proxy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Regular services
    {
      url: `${baseUrl}/virtual-services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/virtual-services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dedicated-servers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/dedicated-servers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Blog pages
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ru/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Blog articles (English)
    ...articleSlugs.map((slug) => ({
      url: `${baseUrl}/blog/articles/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Blog articles (Russian)
    ...articleSlugs.map((slug) => ({
      url: `${baseUrl}/ru/blog/articles/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    // Wiki
    {
      url: `${baseUrl}/wiki`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/wiki`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Tools
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ru/tools`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // About
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ru/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Affiliate
    {
      url: `${baseUrl}/affilate_program`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ru/affilate_program`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ru/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/user-agreement`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ru/user-agreement`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/dmca-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ru/dmca-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/sla`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ru/sla`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  return sitemapEntries;
}
