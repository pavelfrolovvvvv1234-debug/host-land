/**
 * Canonical URL and primary domain utilities.
 * Primary domain is https://dior.host only; no .com/.net or .html routes.
 */

/** Absolute origin for the primary domain. Must be used for all canonical, OG, sitemap, and JSON-LD URLs. */
export const PRIMARY_ORIGIN = "https://dior.host";

/**
 * Builds an absolute primary URL for the given pathname and optional query.
 * Never appends .html; never uses diorhost.com or diorhost.net.
 *
 * @param pathname - Path (e.g. "/bulletproof-vds" or "/ru/about"). Should not include .html.
 * @param search - Optional query string including leading "?" (e.g. "?ref=blog").
 * @returns Absolute URL on primary domain.
 */
export function toPrimaryUrl(pathname: string, search?: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const query = search && search.startsWith("?") ? search : search ? `?${search}` : "";
  return `${PRIMARY_ORIGIN}${path}${query}`;
}

/**
 * Returns hreflang alternates for the current path.
 * English is the default (no prefix); Russian uses /ru.
 * Use for metadata.alternates.languages. Do not create alternates for routes that don't exist.
 *
 * @param pathname - Current request path (e.g. "/bulletproof-vds" or "/ru/bulletproof-vds").
 * @returns Record of language code -> absolute URL. Includes x-default (default language).
 */
export function getHreflangAlternates(pathname: string): Record<string, string> {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const enPath = path.startsWith("/ru") ? path.replace(/^\/ru/, "") || "/" : path;
  const ruPath = path.startsWith("/ru") ? path : path === "/" ? "/ru" : `/ru${path}`;
  return {
    "x-default": toPrimaryUrl(enPath),
    en: toPrimaryUrl(enPath),
    ru: toPrimaryUrl(ruPath),
  };
}
