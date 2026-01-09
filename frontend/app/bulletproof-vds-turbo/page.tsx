import { Metadata } from "next";
import TurboVDSPageClient from "./client";

export const metadata: Metadata = {
  title: "TurboVDS | High-Performance Servers for Network-Intensive Tasks | Dior Host",
  description: "TurboVDS servers for parsing, mass-checking, SEO, security analysis, and high-load network tasks. Up to 10 Gbps bandwidth with lightning-fast performance and stability.",
  keywords: "turbovds, turbo vds, high performance vds, network intensive servers, 10 gbps vds, parsing servers",
  alternates: {
    canonical: "https://dior.host/bulletproof-vds-turbo",
  },
  openGraph: {
    title: "TurboVDS | High-Performance Servers",
    description: "TurboVDS servers with up to 10 Gbps bandwidth for network-intensive tasks.",
    url: "https://dior.host/bulletproof-vds-turbo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboVDS",
    description: "High-performance servers for network-intensive tasks.",
  },
};

export default function TurboVDSPage() {
  return <TurboVDSPageClient />;
}
