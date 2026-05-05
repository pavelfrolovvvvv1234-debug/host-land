import { Metadata } from "next";
import ProxyPageClient from "./client";
import { toPrimaryUrl, getHreflangAlternates } from "../../lib/canonical";

const pathname = "/proxy";

export const metadata: Metadata = {
  title: "Proxy Service | Residential & Static Proxies | Dior Host",
  description:
    "Premium proxy service with residential and static datacenter IPs. High anonymity, geo-targeting, and unlimited bandwidth for privacy, bypassing restrictions, and web automation.",
  keywords: "proxy service, residential proxies, static proxies, proxy hosting, anonymous proxy",
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Proxy Service | Residential & Static Proxies",
    description:
      "Premium proxy service with residential and static datacenter IPs for privacy and web automation.",
    url: toPrimaryUrl(pathname),
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
