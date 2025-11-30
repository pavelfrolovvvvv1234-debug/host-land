import { HomePageModern } from "../components/home/HomePageModern";
import { homeContent } from "../content/home";

export default function Page() {
  return <HomePageModern locale="en" content={homeContent.en} />;
}


