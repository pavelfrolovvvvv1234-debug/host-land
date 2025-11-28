import { HomePage } from "../../components/home/HomePage";
import { homeContent } from "../../content/home";

export default function Page() {
  return <HomePage locale="ru" content={homeContent.ru} />;
}


