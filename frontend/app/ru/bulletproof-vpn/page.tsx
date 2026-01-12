import { Metadata } from "next";
import BulletproofVpnPageClient from "./client";

export const metadata: Metadata = {
  title: "VPN сервис | Безопасный и приватный доступ в интернет | Dior Host",
  description: "Виртуальная частная сеть для безопасного и приватного доступа в интернет. Обходите географические блокировки, защищайте свои данные и серфите анонимно с нашей VPN-инфраструктурой.",
  keywords: "vpn сервис, абузоустойчивый хост, абузоустойчивые сервера, виртуальная частная сеть, безопасный vpn, приватный доступ в интернет, vpn хостинг, абузоустойчивый vpn, абузоустойчивый vpn сервис, абузоустойчивый vpn провайдер, абузоустойчивый vpn хостинг",
  alternates: {
    canonical: "https://dior.host/ru/bulletproof-vpn",
  },
  openGraph: {
    title: "VPN сервис | Безопасный и приватный доступ в интернет",
    description: "VPN сервис для безопасного и приватного доступа в интернет с глобальной сетью серверов.",
    url: "https://dior.host/ru/bulletproof-vpn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VPN сервис",
    description: "Безопасный и приватный доступ в интернет с VPN.",
  },
};

export default function BulletproofVpnPageRu() {
  return <BulletproofVpnPageClient />;
}
