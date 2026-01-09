import { Metadata } from "next";
import BulletproofWebHostingPageClient from "./client";

export const metadata: Metadata = {
  title: "Bulletproof Web Hosting | Offshore Shared & Managed Hosting | Dior Host",
  description: "Bulletproof web hosting keeps your websites online even if DMCA or abuse complaints arrive. Offshore infrastructure in USA, UK, NL, DE and EU with managed services and abuse mediation.",
  keywords: "bulletproof web hosting, offshore hosting, dmca ignored hosting, abuse resistant hosting, managed hosting",
  alternates: {
    canonical: "https://dior.host/bulletproof-web-hosting",
  },
  openGraph: {
    title: "Bulletproof Web Hosting | Offshore Shared & Managed Hosting",
    description: "Offshore shared and managed stacks with DMCA-resistant policies.",
    url: "https://dior.host/bulletproof-web-hosting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulletproof Web Hosting",
    description: "Offshore shared and managed hosting with DMCA-resistant policies.",
  },
};

export default function BulletproofWebHostingPage() {
  return <BulletproofWebHostingPageClient />;
}
