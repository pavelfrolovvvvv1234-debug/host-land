import { Metadata } from "next";
import { toPrimaryUrl, getHreflangAlternates } from "../../lib/canonical";

const pathname = "/dedicated-servers";
export const metadata: Metadata = {
  title: "Dedicated Servers - Regular Dedicated Hosting | DiorHost",
  description: 'Dedicated servers for "white" or "gray" operation. Complaints are not ignored! The ability to install any OS.',
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Dedicated Servers - Regular Dedicated Hosting | DiorHost",
    description: 'Dedicated servers for "white" or "gray" operation. Complaints are not ignored!',
    url: toPrimaryUrl(pathname),
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
