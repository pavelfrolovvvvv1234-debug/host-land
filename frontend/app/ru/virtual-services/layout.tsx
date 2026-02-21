import { Metadata } from "next";
import { toPrimaryUrl, getHreflangAlternates } from "../../../lib/canonical";

const pathname = "/ru/virtual-services";
export const metadata: Metadata = {
  title: "Виртуальные серверы (VDS) - Обычный VDS хостинг | DiorHost",
  description: 'Обычные виртуальные серверы для «белой» или «серой» эксплуатации. Применяются стандартные политики обработки жалоб - жалобы обрабатываются согласно правилам дата-центра.',
  alternates: {
    canonical: toPrimaryUrl(pathname),
    languages: getHreflangAlternates(pathname),
  },
  openGraph: {
    title: "Виртуальные серверы (VDS) - Обычный VDS хостинг | DiorHost",
    description: 'Обычные виртуальные серверы для «белой» или «серой» эксплуатации.',
    url: toPrimaryUrl(pathname),
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
