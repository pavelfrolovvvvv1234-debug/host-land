import type { ServiceIconId } from "../components/services/ServiceIcons";

export type ServiceItem = {
  id: ServiceIconId;
  title: string;
  description: string;
  href: string;
  comingSoon?: boolean;
};

export type ServicesContent = {
  eyebrow: string;
  title: string;
  description: string;
  catalogEyebrow: string;
  learnMore: string;
  unavailable: string;
  soonBadge: string;
  services: ReadonlyArray<ServiceItem>;
};

export const servicesContent: Record<"en" | "ru", ServicesContent> = {
  en: {
    eyebrow: "Infrastructure",
    title: "Services",
    description:
      "Choose the right hosting stack for your workload — from bulletproof VDS to dedicated hardware, domains, and edge delivery.",
    catalogEyebrow: "Catalog",
    learnMore: "Learn more",
    unavailable: "Temporarily unavailable",
    soonBadge: "Soon",
    services: [
      {
        id: "bulletproof-vds",
        title: "Bulletproof VPS/VDS",
        description:
          "On these servers, you can keep everything. We ignore any type of complaint. The ability to deliver any OS. Anonymity is 100%",
        href: "/bulletproof-vds"
      },
      {
        id: "offshore-domains",
        title: "Offshore Domains",
        description:
          "Bulletproof domains. No blocking and the warranty is for the whole period! Transfer is possible, if desired. All domains from $80",
        href: "/bulletproof-domains"
      },
      {
        id: "bulletproof-dedicated",
        title: "Bulletproof Dedicated",
        description:
          "Dedicated servers with a 100% guarantee of anonymity. No blocking and no complaints. The ability to deliver any OS.",
        href: "/bulletproof-dedicated"
      },
      {
        id: "turbovds",
        title: "TurboVDS",
        description:
          "Servers for parsing, mass-checking, SEO, security analysis, and other high-load network tasks. With up to 10 Gbps bandwidth, they deliver lightning-fast performance and stability.",
        href: "/turbovds"
      },
      {
        id: "vps-vds",
        title: "VPS/VDS",
        description:
          "Regular virtual servers for white and gray projects. Standard abuse-handling policies apply — ideal for workloads without expected DMCA pressure.",
        href: "/virtual-services"
      },
      {
        id: "dedicated-servers",
        title: "Dedicated Servers",
        description:
          'Dedicated servers for "white" or "gray" operation. Complaints are not ignored! The ability to install any OS.',
        href: "/dedicated-servers"
      },
      {
        id: "cdn",
        title: "CDN",
        description:
          "Content Delivery Network service for fast content delivery worldwide. Accelerate your website performance with global edge servers and smart caching.",
        href: "/bulletproof-cdn"
      },
      {
        id: "vpn",
        title: "VPN",
        description:
          "Virtual Private Network service for secure and private internet access. Bypass geo-restrictions, protect your data, and browse anonymously.",
        href: "/bulletproof-vpn",
        comingSoon: true
      },
      {
        id: "iphm",
        title: "Dedicated Servers IPHM",
        description:
          "IPHM servers are temporarily unavailable. This option lets users mask their real IP for privacy, geo-bypass, and network testing when available again.",
        href: "/dedicated-iphm",
        comingSoon: true
      },
      {
        id: "minecraft",
        title: "Minecraft Hosting",
        description:
          "High-performance Minecraft server hosting with optimized Java runtime, mod support, and automatic backups.",
        href: "/minecraft-hosting",
        comingSoon: true
      },
      {
        id: "web-hosting",
        title: "Web Hosting",
        description:
          "Reliable shared hosting with cPanel, one-click installs, and 99.9% uptime guarantee. Perfect for websites, blogs, and business applications.",
        href: "/bulletproof-web-hosting",
        comingSoon: true
      },
      {
        id: "proxy",
        title: "Proxy",
        description:
          "Premium proxy service with residential and static datacenter IPs. High anonymity, geo-targeting, and unlimited bandwidth.",
        href: "/proxy",
        comingSoon: true
      }
    ]
  },
  ru: {
    eyebrow: "Инфраструктура",
    title: "Услуги",
    description:
      "Подберите стек под ваш проект — от абузоустойчивых VDS до выделенных серверов, доменов и CDN.",
    catalogEyebrow: "Каталог",
    learnMore: "Узнать больше",
    unavailable: "Временно недоступно",
    soonBadge: "Скоро",
    services: [
      {
        id: "bulletproof-vds",
        title: "Абузоустойчивые VPS/VDS",
        description:
          "На этих серверах вы можете сохранить все. Мы игнорируем любые жалобы. Возможность установки любой ОС. Анонимность 100%",
        href: "/ru/bulletproof-vds"
      },
      {
        id: "offshore-domains",
        title: "Оффшорные Домены",
        description: "При желании возможен перенос. Все домены от 80$",
        href: "/ru/bulletproof-domains"
      },
      {
        id: "bulletproof-dedicated",
        title: "Абузоустойчивые Дедики",
        description:
          "Выделенные серверы со 100% гарантией анонимности. Никаких блокировок и жалоб. Возможность доставки на любую ОС.",
        href: "/ru/bulletproof-dedicated"
      },
      {
        id: "turbovds",
        title: "TurboVDS",
        description:
          "Серверы для парсинга, mass-check, SEO, анализа безопасности и других задач с высокой сетевой активностью. Скорость до 10 Гбит/сек.",
        href: "/ru/turbovds"
      },
      {
        id: "vps-vds",
        title: "VPS/VDS",
        description:
          "Обычные виртуальные серверы для «белой» или «серой» эксплуатации. Стандартные политики обработки жалоб.",
        href: "/ru/virtual-services"
      },
      {
        id: "dedicated-servers",
        title: "Дедики",
        description:
          "Выделенные серверы для «белой» или «серой» работы. Жалобы не остаются без внимания! Возможность установки любой ОС.",
        href: "/ru/dedicated-servers"
      },
      {
        id: "cdn",
        title: "CDN",
        description:
          "Сеть доставки контента для быстрой загрузки сайтов по всему миру. Глобальные edge-серверы и умное кеширование.",
        href: "/ru/bulletproof-cdn"
      },
      {
        id: "vpn",
        title: "VPN",
        description:
          "Виртуальная частная сеть для безопасного и приватного доступа в интернет. Обход блокировок и защита данных.",
        href: "/ru/bulletproof-vpn",
        comingSoon: true
      },
      {
        id: "iphm",
        title: "Выделенные Серверы IPHM",
        description:
          "Серверы с IPHM временно недоступны. Опция для скрытия IP, обхода ограничений и тестирования сети.",
        href: "/ru/dedicated-iphm",
        comingSoon: true
      },
      {
        id: "minecraft",
        title: "Хостинг Minecraft",
        description:
          "Высокопроизводительный хостинг для серверов Minecraft с оптимизированной Java-средой, модами и бэкапами.",
        href: "/ru/minecraft-hosting",
        comingSoon: true
      },
      {
        id: "web-hosting",
        title: "Веб-хостинг",
        description:
          "Надёжный виртуальный хостинг с cPanel, установкой в один клик и гарантией аптайма 99.9%.",
        href: "/ru/bulletproof-web-hosting",
        comingSoon: true
      },
      {
        id: "proxy",
        title: "Прокси",
        description:
          "Премиум-сервис прокси с резидентскими и статическими IP. Высокая анонимность и геотаргетинг.",
        href: "/ru/proxy",
        comingSoon: true
      }
    ]
  }
};
