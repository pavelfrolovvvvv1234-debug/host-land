import { Metadata } from "next";
import BulletproofDedicatedPageClient from "./client";

export const metadata: Metadata = {
  title: "Bulletproof Dedicated Servers | Offshore Bare Metal Hosting | Dior Host",
  description: "Bulletproof dedicated servers keep your bare-metal nodes online even when DMCA notices or abuse complaints arrive. Offshore facilities in USA, Netherlands, Germany and EU with 100% anonymity guarantee.",
  keywords: "bulletproof dedicated servers, offshore dedicated hosting, dmca ignored dedicated, abuse resistant dedicated servers, bulletproof bare metal",
  alternates: {
    canonical: "https://dior.host/bulletproof-dedicated",
  },
  openGraph: {
    title: "Bulletproof Dedicated Servers | Offshore Bare Metal Hosting",
    description: "Bulletproof dedicated servers with offshore jurisdictions and DMCA-ignored policies.",
    url: "https://dior.host/bulletproof-dedicated",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulletproof Dedicated Servers",
    description: "Bulletproof dedicated servers with offshore jurisdictions.",
  },
};

export default function BulletproofDedicatedPage() {
  return <BulletproofDedicatedPageClient />;
}
