import { Metadata } from "next";
import BulletproofCdnPageClient from "./client";

export const metadata: Metadata = {
  title: "CDN сервис | Сеть доставки контента | Быстрая глобальная доставка контента | Dior Host",
  description: "Сеть доставки контента для быстрой и надёжной доставки контента по всему миру. Уменьшите задержки, улучшите производительность и повысьте качество пользовательского опыта с нашей глобальной CDN-инфраструктурой.",
  keywords: "cdn, абузоустойчивый хост, абузоустойчивые сервера, сеть доставки контента, глобальный cdn, быстрая доставка контента, edge серверы, cdn сервис, абузоустойчивый cdn, абузоустойчивая сеть доставки контента, абузоустойчивый cdn провайдер",
  alternates: {
    canonical: "https://dior.host/ru/bulletproof-cdn",
  },
  openGraph: {
    title: "CDN сервис | Сеть доставки контента",
    description: "Быстрая и надёжная доставка контента по всему миру с глобальной CDN-инфраструктурой.",
    url: "https://dior.host/ru/bulletproof-cdn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDN сервис",
    description: "Сеть доставки контента для быстрой глобальной доставки контента.",
  },
};

export default function BulletproofCdnPageRu() {
  return <BulletproofCdnPageClient />;
}
