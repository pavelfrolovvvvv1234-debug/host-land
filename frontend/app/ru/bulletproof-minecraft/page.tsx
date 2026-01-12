import { Metadata } from "next";
import BulletproofMinecraftPageClient from "./client";

export const metadata: Metadata = {
  title: "Хостинг Minecraft | Высокопроизводительный хостинг серверов Minecraft | Dior Host",
  description: "Высокопроизводительный хостинг для серверов Minecraft с оптимизированной Java-средой, поддержкой модов и автоматическими бэкапами. Идеально для выживания, креатива и кастомных режимов игры.",
  keywords: "хостинг minecraft, абузоустойчивый хост, абузоустойчивые сервера, хостинг серверов minecraft, minecraft vps, сервер minecraft, хостинг модов minecraft, абузоустойчивый minecraft хостинг, абузоустойчивый хостинг minecraft серверов, абузоустойчивый minecraft сервер",
  alternates: {
    canonical: "https://dior.host/ru/bulletproof-minecraft",
  },
  openGraph: {
    title: "Хостинг Minecraft | Высокопроизводительный хостинг серверов",
    description: "Хостинг серверов Minecraft с оптимизированной Java-средой и поддержкой модов.",
    url: "https://dior.host/ru/bulletproof-minecraft",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Хостинг Minecraft",
    description: "Высокопроизводительный хостинг серверов Minecraft.",
  },
};

export default function BulletproofMinecraftPageRu() {
  return <BulletproofMinecraftPageClient />;
}
