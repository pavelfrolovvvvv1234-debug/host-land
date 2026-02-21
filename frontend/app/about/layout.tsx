import type { Metadata } from "next";
import { toPrimaryUrl, getHreflangAlternates } from "../../lib/canonical";

const pathname = "/about";
export const metadata: Metadata = {
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    url: toPrimaryUrl(pathname),
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
