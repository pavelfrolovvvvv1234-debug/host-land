import { Metadata } from "next";
import Script from "next/script";
import BulletproofDomainsPageClient from "./client";
import { toPrimaryUrl, getHreflangAlternates } from "../../lib/canonical";

const pathname = "/bulletproof-domains";

export const metadata: Metadata = {
  title: "Bulletproof Domains & Offshore Registration | DMCA-Ignored Registrars | Dior Host",
  description: "Bulletproof domains and offshore domain registrar services that keep DNS online during DMCA disputes. Includes anonymous domain registration workflows, WHOIS privacy, and resilient DNS from $80/year.",
  keywords: "bulletproof domains, offshore domain registrar, anonymous domain registration, offshore domain registration, dmca ignored domains, bulletproof registrar, domain privacy",
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Bulletproof Domains & Offshore Registration",
    description: "DMCA-ignored registrars with resilient DNS and WHOIS privacy.",
    url: toPrimaryUrl(pathname),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulletproof Domains",
    description: "Offshore domain registration with DMCA-ignored policies.",
  },
};

export default function BulletproofDomainsPage() {
  return (
    <>
      <Script
        id="ld-service-bulletproof-domains"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Bulletproof Domain Registration",
            provider: {
              "@type": "Organization",
              name: "Dior Host",
              url: "https://dior.host"
            },
            areaServed: "Worldwide",
            serviceType: "Offshore Domain Registration",
            url: toPrimaryUrl(pathname),
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "80",
              availability: "https://schema.org/InStock"
            }
          })
        }}
      />
      <BulletproofDomainsPageClient />
    </>
  );
}
