import { NextResponse } from "next/server";

/**
 * Robots.txt route handler
 * Accessible at: https://dior.host/robots.txt
 */
export async function GET() {
  const robots = `User-agent: *
Allow: /

Disallow: /search
Disallow: /admin
Disallow: /internal

Sitemap: https://dior.host/sitemap.xml
`;

  return new NextResponse(robots, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400, s-maxage=86400", // Cache for 24 hours
    },
  });
}

