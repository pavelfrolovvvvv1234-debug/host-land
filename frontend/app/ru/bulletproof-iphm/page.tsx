import { Metadata } from "next";
import BulletproofIphmPageClient from "./client";

export const metadata: Metadata = {
  title: "Выделенные Серверы IPHM | Маскировка IP и защита приватности | Dior Host",
  description: "Сервера с IPHM предоставляют возможность скрывать настоящий IP-адрес пользователя, маскируя его под другой. Полезно для защиты приватности, обхода географических блокировок или тестирования безопасности сети. Канал до 10 Гбит/сек.",
  keywords: "iphm серверы, абузоустойчивый хост, абузоустойчивые сервера, маскировка ip, выделенные серверы iphm, абузоустойчивый iphm сервер, защита приватности, скрытие ip, абузоустойчивый сервер с iphm, абузоустойчивый ip маскинг, абузоустойчивый хостинг iphm",
  alternates: {
    canonical: "https://dior.host/ru/bulletproof-iphm",
  },
  openGraph: {
    title: "Выделенные Серверы IPHM | Маскировка IP",
    description: "Сервера IPHM для защиты приватности и маскировки IP.",
    url: "https://dior.host/ru/bulletproof-iphm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Выделенные Серверы IPHM",
    description: "Маскировка IP и защита приватности.",
  },
};

export default function BulletproofIphmPageRu() {
  return <BulletproofIphmPageClient />;
}
