export type Locale = "en" | "ru";

const EXTERNAL_HREF_PATTERN = /^(?:[a-z][a-z0-9+\-.]*:|\/\/)/i;

/**
 * Returns true when the provided href targets an external resource instead of
 * an internal Next.js route. Protocol-relative URLs and anchor links are
 * considered external to avoid unintended locale prefixes.
 *
 * Args:
 *   href: Raw href supplied to a Link or anchor component.
 *
 * Returns:
 *   boolean: True when the URL should be treated as external.
 */
export function isExternalHref(href: string): boolean {
  if (!href) {
    return true;
  }

  if (EXTERNAL_HREF_PATTERN.test(href)) {
    return true;
  }

  return href.startsWith("#");
}

/**
 * Prefixes internal href values with the ru locale segment when needed.
 *
 * Args:
 *   href: A relative URL starting with "/" or an absolute URL.
 *   locale: The active locale that determines whether "/ru" should be applied.
 *
 * Returns:
 *   string: Localized href ready to be consumed by Next.js Link or anchor.
 */
export function localizePath(href: string, locale: Locale): string {
  if (!href || isExternalHref(href) || locale !== "ru") {
    return href;
  }

  if (href === "/") {
    return "/ru";
  }

  if (href.startsWith("/ru")) {
    return href;
  }

  return href.startsWith("/") ? `/ru${href}` : `/ru/${href}`;
}


