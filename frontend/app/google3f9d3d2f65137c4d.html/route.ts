import { NextResponse } from "next/server";

/**
 * Google Search Console verification file
 * Accessible at: https://dior.host/google3f9d3d2f65137c4d.html
 */
export async function GET() {
  return new NextResponse("google-site-verification: google3f9d3d2f65137c4d.html", {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "public, max-age=86400",
    },
  });
}


