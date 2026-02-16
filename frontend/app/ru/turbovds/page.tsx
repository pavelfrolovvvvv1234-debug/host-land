import { Metadata } from "next";
import TurboVDSPageClientRu from "./client";

export const metadata: Metadata = {
  title: "TurboVDS | Высокопроизводительные серверы для сетевых задач | Dior Host",
  description: "Серверы для парсинга, mass-check, SEO, анализа безопасности и других задач с высокой сетевой активностью. Скорость до 10 Гбит/сек обеспечивает молниеносную работу без потерь в стабильности.",
  keywords: "turbovds, абузоустойчивый хост, абузоустойчивые сервера, высокопроизводительные vds, абузоустойчивый vds turbo, парсинг серверы, mass-check, seo серверы, абузоустойчивый turbo vds, абузоустойчивый высокопроизводительный сервер, абузоустойчивый vds для парсинга",
  alternates: {
    canonical: "https://dior.host/ru/turbovds",
  },
  openGraph: {
    title: "TurboVDS | Высокопроизводительные серверы",
    description: "Серверы для парсинга, mass-check, SEO и других задач с высокой сетевой активностью.",
    url: "https://dior.host/ru/turbovds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboVDS",
    description: "Высокопроизводительные серверы для сетевых задач.",
  },
};

export default function TurboVDSPageRu() {
  return <TurboVDSPageClientRu />;
}
