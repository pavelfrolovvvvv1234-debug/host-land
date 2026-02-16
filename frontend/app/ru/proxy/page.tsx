import { Metadata } from "next";
import ProxyPageClientRu from "./client";

export const metadata: Metadata = {
  title: "Прокси-сервис | Резидентские и статические прокси | Dior Host",
  description:
    "Премиум-сервис прокси с резидентскими и статическими IP. Высокая анонимность, геотаргетинг и безлимитная пропускная способность для приватности, обхода ограничений и веб-автоматизации.",
  keywords: "прокси, резидентские прокси, статические прокси, прокси сервис",
  alternates: {
    canonical: "https://dior.host/ru/proxy",
  },
  openGraph: {
    title: "Прокси-сервис | Резидентские и статические прокси",
    description:
      "Премиум-сервис прокси с резидентскими и статическими IP для приватности и автоматизации.",
    url: "https://dior.host/ru/proxy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Прокси-сервис",
    description: "Резидентские и статические прокси для анонимности и геотаргетинга.",
  },
};

export default function ProxyPageRu() {
  return <ProxyPageClientRu />;
}
