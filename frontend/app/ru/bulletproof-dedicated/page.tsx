import { Metadata } from "next";
import BulletproofDedicatedPageClient from "./client";

export const metadata: Metadata = {
  title: "Абузоустойчивые выделенные серверы | Оффшорные серверы с DMCA-игнорируемой политикой | Dior Host",
  description: "Абузоустойчивые выделенные серверы со 100% гарантией анонимности. Никаких блокировок и жалоб. Возможность доставки на любую ОС.",
  keywords: "абузоустойчивые выделенные серверы, абузоустойчивый хост, абузоустойчивые сервера, абузоустойчивый dedicated сервер, оффшорные серверы, dmca игнорируемые серверы, абузоустойчивый выделенный сервер, абузоустойчивые выделенные сервера, абузоустойчивый bare metal, абузоустойчивый физический сервер, абузоустойчивый хостинг серверов, абузоустойчивый провайдер серверов",
  alternates: {
    canonical: "https://dior.host/ru/bulletproof-dedicated",
  },
  openGraph: {
    title: "Абузоустойчивые выделенные серверы | Оффшорные серверы",
    description: "Выделенные серверы со 100% гарантией анонимности. Никаких блокировок и жалоб.",
    url: "https://dior.host/ru/bulletproof-dedicated",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Абузоустойчивые выделенные серверы",
    description: "Оффшорные выделенные серверы с DMCA-игнорируемой политикой.",
  },
};

export default function BulletproofDedicatedPageRu() {
  return <BulletproofDedicatedPageClient />;
}
