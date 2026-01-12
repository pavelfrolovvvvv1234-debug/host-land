import { Metadata } from "next";
import BulletproofWebHostingPageClient from "./client";

export const metadata: Metadata = {
  title: "Абузоустойчивый веб-хостинг | Оффшорный shared и managed хостинг | Dior Host",
  description: "Абузоустойчивый веб-хостинг сохраняет ваши сайты онлайн даже при получении DMCA или жалоб о злоупотреблениях. Оффшорная инфраструктура в США, Великобритании, Нидерландах, Германии и ЕС с управляемыми сервисами и медиацией абузов.",
  keywords: "абузоустойчивый веб-хостинг, абузоустойчивый хост, абузоустойчивые сервера, абузоустойчивый хостинг, оффшорный хостинг, dmca игнорируемый хостинг, абузоустойчивый web хостинг, абузоустойчивый shared хостинг, абузоустойчивый managed хостинг, абузоустойчивый хостинг провайдер, абузоустойчивый веб хостинг провайдер, абузоустойчивый сайт хостинг",
  alternates: {
    canonical: "https://dior.host/ru/bulletproof-web-hosting",
  },
  openGraph: {
    title: "Абузоустойчивый веб-хостинг | Оффшорный shared и managed хостинг",
    description: "Оффшорные shared и managed стеки с DMCA-устойчивой политикой.",
    url: "https://dior.host/ru/bulletproof-web-hosting",
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
