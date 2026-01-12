import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dedicated Servers - Regular Dedicated Hosting | DiorHost",
  description: 'Dedicated servers for "white" or "gray" operation. Complaints are not ignored! The ability to install any OS.',
  alternates: {
    canonical: "https://dior.host/dedicated-servers",
  },
  openGraph: {
    title: "Dedicated Servers - Regular Dedicated Hosting | DiorHost",
    description: 'Dedicated servers for "white" or "gray" operation. Complaints are not ignored!',
    url: "https://dior.host/dedicated-servers",
    siteName: "DiorHost",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dedicated Servers - Regular Dedicated Hosting | DiorHost",
    description: 'Dedicated servers for "white" or "gray" operation. Complaints are not ignored!',
  },
};

export default function DedicatedServersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
