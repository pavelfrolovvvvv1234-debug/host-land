import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Servers (VDS) - Regular VDS Hosting | DiorHost",
  description: 'Regular virtual servers for "white" or "gray" operation. Standard abuse policies apply - complaints are handled according to datacenter rules. Perfect for low-risk projects.',
  alternates: {
    canonical: "https://dior.host/virtual-services",
  },
  openGraph: {
    title: "Virtual Servers (VDS) - Regular VDS Hosting | DiorHost",
    description: 'Regular virtual servers for "white" or "gray" operation. Standard abuse policies apply.',
    url: "https://dior.host/virtual-services",
    siteName: "DiorHost",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Servers (VDS) - Regular VDS Hosting | DiorHost",
    description: 'Regular virtual servers for "white" or "gray" operation. Standard abuse policies apply.',
  },
};

export default function VirtualServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
