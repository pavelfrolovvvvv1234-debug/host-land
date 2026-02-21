import { MetadataRoute } from "next";
import { PRIMARY_ORIGIN } from "../lib/canonical";

/**
 * Robots.txt generator. Sitemap points to primary domain only.
 * Next.js serves this at: https://dior.host/robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search", "/admin", "/internal"],
    },
    sitemap: `${PRIMARY_ORIGIN}/sitemap.xml`,
  };
}


