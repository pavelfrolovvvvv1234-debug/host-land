import { HomePageModern } from "../components/home/HomePageModern";
import { homeContent } from "../content/home";

export default function ModernPage() {
  return <HomePageModern locale="en" content={homeContent.en} />;
}

