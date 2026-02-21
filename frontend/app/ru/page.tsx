import type { Metadata } from "next";
import { HomePageModern } from "../../components/home/HomePageModern";
import { homeContent } from "../../content/home";
import { toPrimaryUrl, getHreflangAlternates } from "../../lib/canonical";

export const metadata: Metadata = {
  alternates: {
    canonical: toPrimaryUrl("/ru"),
    languages: getHreflangAlternates("/ru"),
  },
  openGraph: {
    url: toPrimaryUrl("/ru"),
  },
};

export default function Page() {
  return <HomePageModern locale="ru" content={homeContent.ru} />;
}


