import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Виртуальные серверы (VDS) - Обычный VDS хостинг | DiorHost",
  description: 'Обычные виртуальные серверы для «белой» или «серой» эксплуатации. Применяются стандартные политики обработки жалоб - жалобы обрабатываются согласно правилам дата-центра.',
  alternates: {
    canonical: "https://dior.host/ru/virtual-services",
  },
  openGraph: {
    title: "Виртуальные серверы (VDS) - Обычный VDS хостинг | DiorHost",
    description: 'Обычные виртуальные серверы для «белой» или «серой» эксплуатации.',
    url: "https://dior.host/ru/virtual-services",
    siteName: "DiorHost",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Виртуальные серверы (VDS) - Обычный VDS хостинг | DiorHost",
    description: 'Обычные виртуальные серверы для «белой» или «серой» эксплуатации.',
  },
};

export default function VirtualServicesRuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
