import { Metadata } from "next";
import { toPrimaryUrl, getHreflangAlternates } from "../../../lib/canonical";

const pathname = "/ru/dedicated-servers";
export const metadata: Metadata = {
  title: "Выделенные серверы - Обычный Dedicated хостинг | DiorHost",
  description: 'Выделенные серверы для «белой» или «серой» работы. Жалобы не остаются без внимания! Возможность установки любой ОС.',
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Выделенные серверы - Обычный Dedicated хостинг | DiorHost",
    description: 'Выделенные серверы для «белой» или «серой» работы. Жалобы не остаются без внимания!',
    url: toPrimaryUrl(pathname),
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
