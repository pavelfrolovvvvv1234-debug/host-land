import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * Sitemap.xml route handler
 * Reads sitemap.xml from public/ directory
 * Accessible at: https://dior.host/sitemap.xml
 */
export async function GET() {
  try {
    // Read sitemap.xml from public directory
    const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
    
    if (!fs.existsSync(sitemapPath)) {
      return new NextResponse("Sitemap not found", { status: 404 });
    }

    const sitemap = fs.readFileSync(sitemapPath, "utf-8");

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400, s-maxage=86400", // Cache for 24 hours
      },
    });
  } catch (error) {
    console.error("Error reading sitemap.xml:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
