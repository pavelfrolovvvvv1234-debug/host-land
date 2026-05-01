import { Metadata } from "next";
import BulletproofWebHostingPageClient from "./client";
import { toPrimaryUrl, getHreflangAlternates } from "../../lib/canonical";

const pathname = "/bulletproof-web-hosting";

export const metadata: Metadata = {
  title: "Bulletproof Web Hosting | Offshore Shared & Managed Hosting | Dior Host",
  description: "Bulletproof web hosting keeps your websites online even if DMCA or abuse complaints arrive. Offshore infrastructure in Netherlands, USA, Germany and Turkey with managed services and abuse mediation.",
  keywords: "bulletproof hosting, bulletproof web hosting, offshore hosting, dmca ignored hosting, abuse resistant hosting, managed hosting",
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Bulletproof Web Hosting | Offshore Shared & Managed Hosting",
    description: "Offshore shared and managed stacks with DMCA-resistant policies.",
    url: toPrimaryUrl(pathname),
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
