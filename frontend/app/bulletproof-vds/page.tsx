import { Metadata } from "next";
import BulletproofVdsPageClient from "./client";
import { toPrimaryUrl, getHreflangAlternates } from "../lib/canonical";

const pathname = "/bulletproof-vds";
export const metadata: Metadata = {
  title: "Bulletproof VDS Hosting | Offshore VPS with DMCA-Ignored Policies | Dior Host",
  description: "Bulletproof VDS hosting keeps your virtual servers online even when complaints, DMCA notices or abuse reports are filed. Offshore VPS with DMCA-ignored policies, instant delivery, and 100% anonymity guarantee.",
  keywords: "bulletproof vds, bulletproof vps, offshore vps, dmca ignored hosting, abuse resistant vps, bulletproof hosting",
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Bulletproof VDS Hosting | Offshore VPS with DMCA-Ignored Policies",
    description: "Bulletproof VDS hosting keeps your virtual servers online even when complaints, DMCA notices or abuse reports are filed.",
    url: toPrimaryUrl(pathname),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulletproof VDS Hosting | Offshore VPS",
    description: "Bulletproof VDS hosting with DMCA-ignored policies and instant delivery.",
  },
};

export default function BulletproofVdsPage() {
  return <BulletproofVdsPageClient />;
}
