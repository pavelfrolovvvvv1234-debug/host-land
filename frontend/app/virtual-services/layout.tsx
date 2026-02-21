import { Metadata } from "next";
import { toPrimaryUrl, getHreflangAlternates } from "../../lib/canonical";

const pathname = "/virtual-services";
export const metadata: Metadata = {
  title: "Virtual Servers (VPS/VDS) - Regular VDS Hosting | DiorHost",
  description: 'Regular virtual servers for "white" or "gray" operation. Standard abuse policies apply - complaints are handled according to datacenter rules. Perfect for low-risk projects.',
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Virtual Servers (VPS/VDS) - Regular VDS Hosting | DiorHost",
    description: 'Regular virtual servers for "white" or "gray" operation. Standard abuse policies apply.',
    url: toPrimaryUrl(pathname),
    siteName: "DiorHost",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Servers (VPS/VDS) - Regular VDS Hosting | DiorHost",
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
