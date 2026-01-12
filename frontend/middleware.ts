import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
  "/services/vdsturbo": "/bulletproof-vds-turbo",
  "/services/iphm": "/bulletproof-iphm",
  "/services/cdn": "/bulletproof-cdn",
  "/services/minecraft": "/bulletproof-minecraft",
  "/services/web-hosting": "/bulletproof-web-hosting",
  "/services/vpn": "/bulletproof-vpn",
  
  // Russian versions
  "/ru/bulletproof/vds": "/ru/bulletproof-vds",
  "/ru/bulletproof/dedicated": "/ru/bulletproof-dedicated",
  "/ru/bulletproof/domains": "/ru/bulletproof-domains",
  "/ru/bulletproof/web-hosting": "/ru/bulletproof-web-hosting",
  "/ru/services/vds": "/ru/virtual-services",
  "/ru/services/dedicated": "/ru/dedicated-servers",
  "/ru/services/vdsturbo": "/ru/bulletproof-vds-turbo",
  "/ru/services/iphm": "/ru/bulletproof-iphm",
  "/ru/services/cdn": "/ru/bulletproof-cdn",
  "/ru/services/minecraft": "/ru/bulletproof-minecraft",
  "/ru/services/web-hosting": "/ru/bulletproof-web-hosting",
  "/ru/services/vpn": "/ru/bulletproof-vpn",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if this path needs a redirect
  const newPath = urlMappings[pathname];
  
  if (newPath) {
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    // Preserve query parameters
    return NextResponse.redirect(url, {
      status: 301, // Permanent redirect for SEO
    });
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
