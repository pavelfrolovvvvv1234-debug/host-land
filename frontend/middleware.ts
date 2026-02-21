import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRIMARY_HOST = "dior.host";

/**
 * Secondary domains that must 301 to primary. Preserves pathname and query string.
 */
function isSecondaryHost(host: string): boolean {
  const h = host.toLowerCase().replace(/^www\./, "");
  return h === "diorhost.com" || h === "diorhost.net";
}

/**
 * URL Migration Redirects
 *
 * Redirects old URL structure (/services/* and /bulletproof/*) to new flat structure (/bulletproof-*)
 * All redirects are 301 (permanent) for SEO purposes
 */
const urlMappings: Record<string, string> = {
  // Bulletproof services (from /bulletproof/)
  "/bulletproof/vds": "/bulletproof-vds",
  "/bulletproof/dedicated": "/bulletproof-dedicated",
  "/bulletproof/domains": "/bulletproof-domains",
  "/bulletproof/web-hosting": "/bulletproof-web-hosting",
  
  // Regular services (from /services/)
  "/services/vds": "/virtual-services",
  "/services/dedicated": "/dedicated-servers",
  "/services/vdsturbo": "/turbovds",
  "/services/iphm": "/dedicated-iphm",
  "/services/cdn": "/bulletproof-cdn",
  "/services/minecraft": "/minecraft-hosting",
  "/services/web-hosting": "/bulletproof-web-hosting",
  "/services/vpn": "/bulletproof-vpn",
  "/services/proxy": "/proxy",
  "/bulletproof-proxy": "/proxy",
  "/bulletproof-minecraft": "/minecraft-hosting",
  "/ru/bulletproof-minecraft": "/ru/minecraft-hosting",
  "/bulletproof-iphm": "/dedicated-iphm",
  "/ru/bulletproof-iphm": "/ru/dedicated-iphm",
  "/bulletproof-vds-turbo": "/turbovds",
  "/ru/bulletproof-vds-turbo": "/ru/turbovds",

  // Russian versions
  "/ru/bulletproof/vds": "/ru/bulletproof-vds",
  "/ru/bulletproof/dedicated": "/ru/bulletproof-dedicated",
  "/ru/bulletproof/domains": "/ru/bulletproof-domains",
  "/ru/bulletproof/web-hosting": "/ru/bulletproof-web-hosting",
  "/ru/services/vds": "/ru/virtual-services",
  "/ru/services/dedicated": "/ru/dedicated-servers",
  "/ru/services/vdsturbo": "/ru/turbovds",
  "/ru/services/iphm": "/ru/dedicated-iphm",
  "/ru/services/cdn": "/ru/bulletproof-cdn",
  "/ru/services/minecraft": "/ru/minecraft-hosting",
  "/ru/services/web-hosting": "/ru/bulletproof-web-hosting",
  "/ru/services/vpn": "/ru/bulletproof-vpn",
  "/ru/services/proxy": "/ru/proxy",
  "/ru/bulletproof-proxy": "/ru/proxy",
};

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const host = request.headers.get("host") ?? "";

  // 1) Secondary domain -> 301 to primary (dior.host). Path and query preserved; assets then load from dior.host.
  if (isSecondaryHost(host)) {
    const primaryUrl = new URL(pathname + search, `https://${PRIMARY_HOST}`);
    return NextResponse.redirect(primaryUrl, 301);
  }

  // 2) URL migration: old paths -> new flat structure
  const newPath = urlMappings[pathname];
  if (newPath) {
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|xml|txt|pdf)).*)",
  ],
};
