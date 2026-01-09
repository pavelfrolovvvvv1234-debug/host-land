/**
 * URL Migration Mapping
 * 
 * Maps old URL structure (/services/* and /bulletproof/*) to new flat structure (/bulletproof-*)
 * 
 * Note: All services use "bulletproof-" prefix in URL for consistency, even if they are regular services.
 * The "bulletproof" nature is indicated in the page content, not the URL structure.
 */

export const urlMapping: Record<string, string> = {
  // Bulletproof services (from /bulletproof/)
  "/bulletproof/vds": "/bulletproof-vds",
  "/bulletproof/dedicated": "/bulletproof-dedicated",
  "/bulletproof/domains": "/bulletproof-domains",
  "/bulletproof/web-hosting": "/bulletproof-web-hosting",
  
  // Regular services (from /services/)
  "/services/vds": "/bulletproof-vds", // Regular VDS -> flat URL (content will indicate it's regular)
  "/services/dedicated": "/bulletproof-dedicated", // Regular dedicated -> flat URL
  "/services/vdsturbo": "/bulletproof-vds-turbo",
  "/services/iphm": "/bulletproof-iphm",
  "/services/cdn": "/bulletproof-cdn",
  "/services/minecraft": "/bulletproof-minecraft",
  "/services/web-hosting": "/bulletproof-web-hosting", // Regular web hosting -> flat URL
  "/services/vpn": "/bulletproof-vpn",
  
  // Russian versions
  "/ru/bulletproof/vds": "/ru/bulletproof-vds",
  "/ru/bulletproof/dedicated": "/ru/bulletproof-dedicated",
  "/ru/bulletproof/domains": "/ru/bulletproof-domains",
  "/ru/bulletproof/web-hosting": "/ru/bulletproof-web-hosting",
  "/ru/services/vds": "/ru/bulletproof-vds",
  "/ru/services/dedicated": "/ru/bulletproof-dedicated",
  "/ru/services/vdsturbo": "/ru/bulletproof-vds-turbo",
  "/ru/services/iphm": "/ru/bulletproof-iphm",
  "/ru/services/cdn": "/ru/bulletproof-cdn",
  "/ru/services/minecraft": "/ru/bulletproof-minecraft",
  "/ru/services/web-hosting": "/ru/bulletproof-web-hosting",
  "/ru/services/vpn": "/ru/bulletproof-vpn",
};

/**
 * Get new URL for old URL
 */
export function getNewUrl(oldUrl: string): string | null {
  return urlMapping[oldUrl] || null;
}

/**
 * Get all old URLs that need redirects
 */
export function getAllOldUrls(): string[] {
  return Object.keys(urlMapping);
}

/**
 * Get all new URLs
 */
export function getAllNewUrls(): string[] {
  return Array.from(new Set(Object.values(urlMapping)));
}
