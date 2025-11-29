import { NextResponse } from "next/server";

/**
 * Yandex Webmaster verification file
 * Accessible at: https://dior.host/yandex_c97b880978746e2b.html
 */
export async function GET() {
  const html = `<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>Verification: c97b880978746e2b</body>
</html>`;

  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

