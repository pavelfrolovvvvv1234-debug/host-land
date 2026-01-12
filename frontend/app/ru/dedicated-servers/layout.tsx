import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Выделенные серверы - Обычный Dedicated хостинг | DiorHost",
  description: 'Выделенные серверы для «белой» или «серой» работы. Жалобы не остаются без внимания! Возможность установки любой ОС.',
  alternates: {
    canonical: "https://dior.host/ru/dedicated-servers",
  },
  openGraph: {
    title: "Выделенные серверы - Обычный Dedicated хостинг | DiorHost",
    description: 'Выделенные серверы для «белой» или «серой» работы. Жалобы не остаются без внимания!',
    url: "https://dior.host/ru/dedicated-servers",
    siteName: "DiorHost",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Выделенные серверы - Обычный Dedicated хостинг | DiorHost",
    description: 'Выделенные серверы для «белой» или «серой» работы. Жалобы не остаются без внимания!',
  },
};

export default function DedicatedServersRuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
