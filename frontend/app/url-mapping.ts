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
  "/services/vds": "/virtual-services", // Regular VDS -> new URL
  "/services/dedicated": "/dedicated-servers", // Regular dedicated -> new URL
  "/services/vdsturbo": "/turbovds",
  "/services/iphm": "/dedicated-iphm",
  "/services/cdn": "/bulletproof-cdn",
  "/services/minecraft": "/minecraft-hosting",
  "/services/web-hosting": "/bulletproof-web-hosting", // Regular web hosting -> flat URL
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
