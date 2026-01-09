import { Metadata } from "next";
import CDNPageClient from "./client";

export const metadata: Metadata = {
  title: "CDN Service | Content Delivery Network | Fast Global Content Distribution | Dior Host",
  description: "Content Delivery Network service for fast and reliable content distribution worldwide. Reduce latency, improve performance, and enhance user experience with our global CDN infrastructure.",
  keywords: "cdn, content delivery network, global cdn, fast content delivery, edge servers, cdn service",
  alternates: {
    canonical: "https://dior.host/bulletproof-cdn",
  },
  openGraph: {
    title: "CDN Service | Content Delivery Network",
    description: "Fast and reliable content distribution worldwide with global CDN infrastructure.",
    url: "https://dior.host/bulletproof-cdn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDN Service",
    description: "Content Delivery Network for fast global content distribution.",
  },
};

export default function CDNPage() {
  return <CDNPageClient />;
}
