import { Metadata } from "next";
import BulletproofDomainsPageClient from "./client";

export const metadata: Metadata = {
  title: "Bulletproof Domains & Offshore Registration | DMCA-Ignored Registrars | Dior Host",
  description: "Bulletproof domains registered through offshore providers that keep DNS online even when DMCA notices or abuse complaints arrive. WHOIS privacy enabled by default. All domains from $80/year.",
  keywords: "bulletproof domains, offshore domain registration, dmca ignored domains, bulletproof registrar, domain privacy",
  alternates: {
    canonical: "https://dior.host/bulletproof-domains",
  },
  openGraph: {
    title: "Bulletproof Domains & Offshore Registration",
    description: "DMCA-ignored registrars with resilient DNS and WHOIS privacy.",
    url: "https://dior.host/bulletproof-domains",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulletproof Domains",
    description: "Offshore domain registration with DMCA-ignored policies.",
  },
};

export default function BulletproofDomainsPage() {
  return <BulletproofDomainsPageClient />;
}
