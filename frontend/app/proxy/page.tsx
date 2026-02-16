import { Metadata } from "next";
import ProxyPageClient from "./client";

export const metadata: Metadata = {
  title: "Proxy Service | Residential & Static Proxies | Dior Host",
  description:
    "Premium proxy service with residential and static datacenter IPs. High anonymity, geo-targeting, and unlimited bandwidth for privacy, bypassing restrictions, and web automation.",
  keywords: "proxy service, residential proxies, static proxies, proxy hosting, anonymous proxy",
  alternates: {
    canonical: "https://dior.host/proxy",
  },
  openGraph: {
    title: "Proxy Service | Residential & Static Proxies",
    description:
      "Premium proxy service with residential and static datacenter IPs for privacy and web automation.",
    url: "https://dior.host/proxy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proxy Service",
    description: "Residential and static proxy service for anonymity and geo-targeting.",
  },
};

export default function ProxyPage() {
  return <ProxyPageClient />;
}
