import { Metadata } from "next";
import IPHMPageClient from "./client";

export const metadata: Metadata = {
  title: "Dedicated Servers IPHM | IP Masking & Privacy Protection | Dior Host",
  description: "IPHM servers allow users to hide their real IP address by masking it with another. Useful for privacy protection, bypassing geographical restrictions, or network security testing. Bandwidth up to 10 Gbps.",
  keywords: "iphm servers, ip masking, dedicated servers iphm, privacy protection servers, ip hiding",
  alternates: {
    canonical: "https://dior.host/dedicated-iphm",
  },
  openGraph: {
    title: "Dedicated Servers IPHM | IP Masking",
    description: "IPHM servers for privacy protection and IP masking.",
    url: "https://dior.host/dedicated-iphm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedicated Servers IPHM",
    description: "IP masking and privacy protection servers.",
  },
};

export default function IPHMPage() {
  return <IPHMPageClient />;
}
