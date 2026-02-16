import { Metadata } from "next";
import MinecraftHostingPageClient from "./client";

export const metadata: Metadata = {
  title: "Minecraft Hosting | High-Performance Minecraft Server Hosting | Dior Host",
  description: "High-performance Minecraft server hosting with optimized Java runtime, mod support, and automatic backups. Perfect for survival, creative, and custom game modes.",
  keywords: "minecraft hosting, minecraft server hosting, minecraft vps, minecraft server, modded minecraft hosting",
  alternates: {
    canonical: "https://dior.host/minecraft-hosting",
  },
  openGraph: {
    title: "Minecraft Hosting | High-Performance Server Hosting",
    description: "Minecraft server hosting with optimized Java runtime and mod support.",
    url: "https://dior.host/minecraft-hosting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minecraft Hosting",
    description: "High-performance Minecraft server hosting.",
  },
};

export default function MinecraftHostingPage() {
  return <MinecraftHostingPageClient />;
}
