import { Metadata } from "next";
import Script from "next/script";
import BulletproofDedicatedPageClient from "./client";
import { toPrimaryUrl, getHreflangAlternates } from "../../lib/canonical";

const pathname = "/bulletproof-dedicated";

export const metadata: Metadata = {
  title: "Bulletproof Dedicated Servers | Offshore Bare Metal Hosting | Dior Host",
  description: "Bulletproof dedicated servers keep your bare-metal nodes online even when DMCA notices or abuse complaints arrive. Offshore facilities in USA, Netherlands, Germany and EU with 100% anonymity guarantee.",
  keywords: "bulletproof dedicated servers, offshore dedicated hosting, dmca ignored dedicated, abuse resistant dedicated servers, bulletproof bare metal",
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Bulletproof Dedicated Servers | Offshore Bare Metal Hosting",
    description: "Bulletproof dedicated servers with offshore jurisdictions and DMCA-ignored policies.",
    url: toPrimaryUrl(pathname),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulletproof Dedicated Servers",
    description: "Bulletproof dedicated servers with offshore jurisdictions.",
  },
};

export default function BulletproofDedicatedPage() {
  return (
    <>
      <Script
        id="ld-service-bulletproof-dedicated"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Bulletproof Dedicated Servers",
            provider: {
              "@type": "Organization",
              name: "Dior Host",
              url: "https://dior.host"
            },
            areaServed: "Worldwide",
            serviceType: "Offshore Dedicated Hosting",
            url: toPrimaryUrl(pathname),
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: "180",
              availability: "https://schema.org/InStock"
            }
          })
        }}
      />
      <BulletproofDedicatedPageClient />
    </>
  );
}
