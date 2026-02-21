import type { Metadata } from "next";
import { HomePageModern } from "../components/home/HomePageModern";
import { homeContent } from "../content/home";
import { toPrimaryUrl, getHreflangAlternates } from "../lib/canonical";

export const metadata: Metadata = {
  alternates: {
    canonical: toPrimaryUrl("/"),
    languages: getHreflangAlternates("/"),
  },
  openGraph: {
    url: toPrimaryUrl("/"),
  },
};

export default function Page() {
  return <HomePageModern locale="en" content={homeContent.en} />;
}


