import { MetadataRoute } from "next";

/**
 * Robots.txt generator
 * Next.js automatically serves this at: https://dior.host/robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search", "/admin", "/internal"],
    },
    sitemap: "https://dior.host/sitemap.xml",
  };
}


