export const DOMAIN_TLDS = [
  ".com",
  ".org",
  ".net",
  ".app",
  ".bio",
  ".biz",
  ".cash",
  ".club",
  ".dev",
  ".guru",
  ".info",
  ".lat",
  ".me",
  ".money",
  ".one",
  ".pro",
  ".shop",
  ".site",
  ".store",
  ".team",
  ".vip"
] as const;

export const DOMAIN_YEARLY_PRICE = 80;

export type DomainZoneEntry = {
  readonly title: string;
  readonly price: number;
};

export type DomainZoneWithUrl = DomainZoneEntry & {
  readonly url: string;
};

export const homeDomainZones: ReadonlyArray<DomainZoneEntry> = DOMAIN_TLDS.map((title) => ({
  title,
  price: DOMAIN_YEARLY_PRICE
}));

export function domainZonesWithUrl(url: string): DomainZoneWithUrl[] {
  return DOMAIN_TLDS.map((title) => ({
    title,
    price: DOMAIN_YEARLY_PRICE,
    url
  }));
}

/** e.g. ".com, .org, .net, .app, .bio, .biz and more" */
export function domainTldSummary(previewCount = 6, locale: "en" | "ru" = "en"): string {
  const preview = DOMAIN_TLDS.slice(0, previewCount).join(", ");
  if (DOMAIN_TLDS.length <= previewCount) {
    return preview;
  }
  return locale === "ru" ? `${preview} и др.` : `${preview} and more`;
}
