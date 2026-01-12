import { Metadata } from "next";
import BulletproofVdsPageClient from "./client";

export const metadata: Metadata = {
  title: "Абузоустойчивые VDS | Оффшорный VPS с DMCA-игнорируемой политикой | Dior Host",
  description: "Абузоустойчивый VDS хостинг сохраняет ваши виртуальные серверы онлайн даже при получении жалоб, DMCA-уведомлений или отчетов о злоупотреблениях. Оффшорный VPS с DMCA-игнорируемой политикой, мгновенная доставка и 100% гарантия анонимности.",
  keywords: "абузоустойчивый vds, абузоустойчивый vps, абузоустойчивый хост, абузоустойчивые сервера, абузоустойчивый хостинг, оффшорный vps, dmca игнорируемый хостинг, абузоустойчивый vps сервер, абузоустойчивый виртуальный сервер, абузоустойчивый vds хостинг, абузоустойчивый vps хостинг, абузоустойчивый сервер, абузоустойчивые vds сервера, абузоустойчивые vps сервера, абузоустойчивый провайдер, абузоустойчивый хостинг провайдер",
  alternates: {
    canonical: "https://dior.host/ru/bulletproof-vds",
  },
  openGraph: {
    title: "Абузоустойчивые VDS | Оффшорный VPS с DMCA-игнорируемой политикой",
    description: "Абузоустойчивый VDS хостинг сохраняет ваши виртуальные серверы онлайн даже при получении жалоб, DMCA-уведомлений или отчетов о злоупотреблениях.",
    url: "https://dior.host/ru/bulletproof-vds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Абузоустойчивые VDS | Оффшорный VPS",
    description: "Абузоустойчивый VDS хостинг с DMCA-игнорируемой политикой и мгновенной доставкой.",
  },
};

export default function BulletproofVdsPageRu() {
  return <BulletproofVdsPageClient />;
}
