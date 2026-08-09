import { Metadata } from "next";
import { toPrimaryUrl, getHreflangAlternates } from "../../../lib/canonical";
import { getDedicatedServersMeta } from "../../../content/dedicated-servers";

const pathname = "/ru/dedicated-servers";
const meta = getDedicatedServersMeta("ru");

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: toPrimaryUrl(pathname),
    siteName: "DiorHost",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
};

export default function DedicatedServersRuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
