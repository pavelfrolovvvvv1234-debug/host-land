import { Metadata } from "next";
import BulletproofWebHostingPageClient from "./client";
import { toPrimaryUrl, getHreflangAlternates } from "../../../lib/canonical";

const pathname = "/ru/bulletproof-web-hosting";

export const metadata: Metadata = {
  title: "Абузоустойчивый веб-хостинг | Оффшорный shared и managed хостинг | Dior Host",
  description: "Абузоустойчивый веб-хостинг сохраняет ваши сайты онлайн даже при получении DMCA или жалоб о злоупотреблениях. Оффшорная инфраструктура в Нидерландах, США, Германии и Турции с управляемыми сервисами и медиацией абузов.",
  keywords: "абузоустойчивый веб-хостинг, абузоустойчивый хост, абузоустойчивые сервера, абузоустойчивый хостинг, оффшорный хостинг, dmca игнорируемый хостинг, абузоустойчивый web хостинг, абузоустойчивый shared хостинг, абузоустойчивый managed хостинг, абузоустойчивый хостинг провайдер, абузоустойчивый веб хостинг провайдер, абузоустойчивый сайт хостинг",
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Абузоустойчивый веб-хостинг | Оффшорный shared и managed хостинг",
    description: "Оффшорные shared и managed стеки с DMCA-устойчивой политикой.",
    url: toPrimaryUrl(pathname),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Абузоустойчивый веб-хостинг",
    description: "Оффшорный shared и managed хостинг с DMCA-устойчивой политикой.",
  },
};

export default function BulletproofWebHostingPageRu() {
  return <BulletproofWebHostingPageClient />;
}
