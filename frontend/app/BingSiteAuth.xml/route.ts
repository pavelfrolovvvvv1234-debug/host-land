import { NextResponse } from "next/server";

/**
 * Bing Webmaster Tools verification file
 * Accessible at: https://dior.host/BingSiteAuth.xml
 */
export async function GET() {
  const xml = `<?xml version="1.0"?>
<users>
	<user>BC18A6B2F824EE5B82836F7B11AE10D0</user>
</users>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

