import { Metadata } from "next";
import VPNPageClient from "./client";

export const metadata: Metadata = {
  title: "VPN Service | Secure & Private Internet Access | Dior Host",
  description: "Virtual Private Network service for secure and private internet access. Bypass geo-restrictions, protect your data, and browse anonymously with our VPN infrastructure.",
  keywords: "vpn service, virtual private network, secure vpn, private internet access, vpn hosting",
  alternates: {
    canonical: "https://dior.host/bulletproof-vpn",
  },
  openGraph: {
    title: "VPN Service | Secure & Private Internet Access",
    description: "VPN service for secure and private internet access with global server network.",
    url: "https://dior.host/bulletproof-vpn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VPN Service",
    description: "Secure and private internet access with VPN.",
  },
};

export default function VPNPage() {
  return <VPNPageClient />;
}
