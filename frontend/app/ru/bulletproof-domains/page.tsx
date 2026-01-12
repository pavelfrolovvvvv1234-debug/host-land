import { Metadata } from "next";
import BulletproofDomainsPageClient from "./client";

export const metadata: Metadata = {
  title: "Абузоустойчивые домены | Оффшорная регистрация с DMCA-игнорируемой политикой | Dior Host",
  description: "Абузоустойчивые домены, зарегистрированные через оффшорных провайдеров, которые сохраняют DNS онлайн даже при получении DMCA-уведомлений или жалоб о злоупотреблениях. WHOIS-приватность включена по умолчанию. Все домены от $80/год.",
  keywords: "абузоустойчивые домены, абузоустойчивый регистратор доменов, абузоустойчивый хост, абузоустойчивый регистратор, оффшорная регистрация доменов, dmca игнорируемые домены, абузоустойчивая регистрация доменов, абузоустойчивый домен, абузоустойчивые доменные имена, абузоустойчивый регистратор доменных имен, абузоустойчивый хостинг доменов, абузоустойчивый провайдер доменов, приватность домена",
  alternates: {
    canonical: "https://dior.host/ru/bulletproof-domains",
  },
  openGraph: {
    title: "Абузоустойчивые домены | Оффшорная регистрация",
    description: "DMCA-игнорируемые регистраторы с устойчивым DNS и WHOIS-приватностью.",
    url: "https://dior.host/ru/bulletproof-domains",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Абузоустойчивые домены",
    description: "Оффшорная регистрация доменов с DMCA-игнорируемой политикой.",
  },
};

export default function BulletproofDomainsPageRu() {
  return <BulletproofDomainsPageClient />;
}
