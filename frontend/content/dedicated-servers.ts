export type DedicatedTariff = {
  readonly title: string;
  readonly cpu: number;
  readonly ram: number;
  readonly storage: string;
  readonly networkSpeed: number;
  readonly bandwidth: string;
  readonly os: string;
  readonly price: number;
  readonly url: string;
};

export type DedicatedServersContent = {
  readonly hero: {
    readonly heading: string;
    readonly subheading: string;
    readonly summary: string;
  };
  readonly sections: ReadonlyArray<{
    readonly title: string;
    readonly body: string;
    readonly bullets: ReadonlyArray<string>;
  }>;
  readonly steps: ReadonlyArray<{ readonly title: string; readonly description: string }>;
  readonly stepsTitle: string;
  readonly comparisonTitle: string;
  readonly comparisonSubtitle: string;
  readonly comparisonHeaders: {
    readonly factor: string;
    readonly regular: string;
    readonly bulletproof: string;
  };
  readonly comparisonRows: ReadonlyArray<{
    readonly label: string;
    readonly regular: string;
    readonly bulletproof: string;
  }>;
  readonly faqs: ReadonlyArray<{ readonly question: string; readonly answer: string }>;
  readonly faqTitle: string;
  readonly tariffs: ReadonlyArray<DedicatedTariff>;
  readonly labels: {
    readonly cpu: string;
    readonly ram: string;
    readonly storage: string;
    readonly network: string;
    readonly bandwidth: string;
    readonly os: string;
    readonly priceSuffix: string;
    readonly coresUnit: string;
  };
};

const sharedTariffs: ReadonlyArray<DedicatedTariff> = [
  {
    title: "Intel Core i7-6700",
    cpu: 4,
    ram: 64,
    storage: "500 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 90,
    url: "https://my.dior.host"
  },
  {
    title: "Intel Core i7-8700",
    cpu: 6,
    ram: 64,
    storage: "SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 110,
    url: "https://my.dior.host"
  },
  {
    title: "Intel Xeon E3-1240v2",
    cpu: 4,
    ram: 64,
    storage: "500 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 120,
    url: "https://my.dior.host"
  },
  {
    title: "Ryzen 7 3700X",
    cpu: 8,
    ram: 64,
    storage: "2000 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 140,
    url: "https://my.dior.host"
  },
  {
    title: "Ryzen 9 3900",
    cpu: 12,
    ram: 64,
    storage: "2000 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 150,
    url: "https://my.dior.host"
  },
  {
    title: "Ryzen 9 5950X",
    cpu: 16,
    ram: 256,
    storage: "2000 GB SSD / NVMe",
    networkSpeed: 1,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 190,
    url: "https://my.dior.host"
  }
];

export const dedicatedServersContent: Record<"en" | "ru", DedicatedServersContent> = {
  en: {
    hero: {
      heading: "Dedicated Servers",
      subheading: "Bare-metal hosting for white and gray projects",
      summary:
        "Regular dedicated servers give you full physical hardware — CPU, RAM and storage without noisy neighbours. Ideal for production apps, game servers, databases and infrastructure that needs predictable performance. Standard datacenter abuse policies apply: complaints are reviewed and may lead to suspension. Need DMCA-ignored bare metal? See our bulletproof dedicated line."
    },
    sections: [
      {
        title: "Why choose dedicated servers?",
        body: "Dedicated hosting removes virtualization overhead and delivers consistent I/O, lower latency and full control over the stack — from custom kernels to bare-metal hypervisors.",
        bullets: [
          "100% of server resources — no shared vCPU or RAM caps.",
          "Install any OS: Linux, Windows Server or your own image.",
          "Root access, IPMI/KVM and flexible networking on request."
        ]
      },
      {
        title: "What workloads fit regular dedicated?",
        body: "These nodes suit projects with moderate compliance risk — corporate sites, SaaS backends, game hosting, streaming relays and internal tools that follow datacenter acceptable-use rules.",
        bullets: [
          "High-traffic web apps and API backends on fixed hardware.",
          "Game servers, voice/chat and media relays with steady CPU.",
          "MySQL/PostgreSQL clusters, Redis and search indexes at scale."
        ]
      },
      {
        title: "Hardware, network and support",
        body: "Dior Host provisions Intel and AMD bare-metal tiers with NVMe storage, 1 Gbps ports and unlimited bandwidth on listed plans. Provisioning typically takes from a few hours to one business day.",
        bullets: [
          "NVMe/SSD storage options with hardware RAID on request.",
          "1 Gbps uplink, DDoS baseline and 24/7 ticket support.",
          "Upgrade path to bulletproof dedicated without changing provider."
        ]
      }
    ],
    steps: [
      {
        title: "Pick a configuration",
        description:
          "Match CPU cores, RAM and NVMe capacity to your workload — databases, games or virtualization hosts."
      },
      {
        title: "Choose OS and options",
        description:
          "Select Linux or Windows, note any IP, BGP or storage requirements in the order notes."
      },
      {
        title: "Order in the panel",
        description:
          "Place the server in the client area. Our team confirms stock and starts provisioning."
      },
      {
        title: "Deploy and monitor",
        description:
          "Receive root credentials, harden the OS, point DNS and monitor abuse contacts for compliance."
      }
    ],
    stepsTitle: "How to order a dedicated server",
    comparisonTitle: "Regular dedicated vs bulletproof dedicated",
    comparisonSubtitle: "Choose standard bare metal for compliant workloads or bulletproof nodes when abuse tolerance matters.",
    comparisonHeaders: {
      factor: "Factor",
      regular: "Regular dedicated",
      bulletproof: "Bulletproof dedicated"
    },
    comparisonRows: [
      {
        label: "Abuse handling",
        regular: "Standard datacenter policies; complaints are acted on.",
        bulletproof: "Manual review, DMCA ignored by default."
      },
      {
        label: "Jurisdiction",
        regular: "Standard EU/US-friendly facilities.",
        bulletproof: "Offshore NL/DE/MD/US-friendly racks."
      },
      {
        label: "Privacy & billing",
        regular: "Standard invoicing and contact details.",
        bulletproof: "Crypto/wire, optional KYC, private tickets."
      },
      {
        label: "Network",
        regular: "1 Gbps port, baseline DDoS filtering.",
        bulletproof: "Up to 10 Gbps, advanced mitigation options."
      },
      {
        label: "Best for",
        regular: "Corporate, SaaS, games, low-risk gray projects.",
        bulletproof: "High-risk media, affiliate, fintech, privacy tools."
      }
    ],
    faqs: [
      {
        question: "What is a dedicated server?",
        answer:
          "A dedicated server is physical bare-metal hardware assigned only to you — no virtualization layer sharing CPU or RAM with other customers."
      },
      {
        question: "Are these servers bulletproof?",
        answer:
          "No. This page lists regular dedicated servers with standard abuse handling. For DMCA-ignored bare metal, use our bulletproof dedicated servers."
      },
      {
        question: "Dedicated server vs VPS — when to upgrade?",
        answer:
          "Move to dedicated when you need guaranteed CPU/RAM, higher disk throughput, custom networking or compliance isolation that VPS cannot provide."
      },
      {
        question: "Which operating systems are supported?",
        answer:
          "Linux distributions and Windows Server via ISO or panel templates. Custom images and reinstalls are available through support."
      },
      {
        question: "How long does provisioning take?",
        answer:
          "Most configurations deploy within several hours to one business day depending on stock and datacenter location."
      }
    ],
    faqTitle: "Dedicated servers FAQ",
    tariffs: sharedTariffs,
    labels: {
      cpu: "CPU",
      ram: "RAM",
      storage: "Storage",
      network: "Network",
      bandwidth: "Bandwidth",
      os: "OS",
      priceSuffix: "/mo",
      coresUnit: "cores"
    }
  },
  ru: {
    hero: {
      heading: "Выделенные серверы",
      subheading: "Bare-metal хостинг для «белых» и «серых» проектов",
      summary:
        "Обычные выделенные серверы — это физическое железо целиком: CPU, RAM и диск без соседей по виртуализации. Подходят для продакшена, игровых серверов, баз данных и инфраструктуры со стабильной нагрузкой. Действуют стандартные политики дата-центра: жалобы рассматриваются и могут привести к блокировке. Нужен bare metal с игнорированием DMCA? Смотрите абузоустойчивые дедики."
    },
    sections: [
      {
        title: "Зачем выбирать выделенный сервер?",
        body: "Dedicated убирает overhead виртуализации и даёт предсказуемый I/O, низкую задержку и полный контроль — от своего ядра до гипервизора на bare metal.",
        bullets: [
          "100% ресурсов сервера — без shared vCPU и лимитов RAM.",
          "Любая ОС: Linux, Windows Server или свой образ.",
          "Root-доступ, IPMI/KVM и гибкая сеть по запросу."
        ]
      },
      {
        title: "Какие задачи подходят для обычных дедиков?",
        body: "Узлы для проектов с умеренным compliance-риском: корпоративные сайты, SaaS-бэкенды, игровой хостинг, стриминг и внутренние сервисы в рамках правил дата-центра.",
        bullets: [
          "Высоконагруженные веб-приложения и API на выделенном железе.",
          "Игровые, голосовые и медиа-серверы со стабильным CPU.",
          "Кластеры MySQL/PostgreSQL, Redis и поисковые индексы."
        ]
      },
      {
        title: "Железо, сеть и поддержка",
        body: "Dior Host выдаёт bare metal на Intel и AMD с NVMe, портом 1 Gbps и безлимитным трафиком на указанных тарифах. Развёртывание — от нескольких часов до одного рабочего дня.",
        bullets: [
          "NVMe/SSD, аппаратный RAID по запросу.",
          "Uplink 1 Gbps, базовая DDoS-защита и поддержка 24/7.",
          "Апгрейд до абузоустойчивых дедиков без смены провайдера."
        ]
      }
    ],
    steps: [
      {
        title: "Выберите конфигурацию",
        description:
          "Подберите ядра CPU, объём RAM и NVMe под базы данных, игры или виртуализацию."
      },
      {
        title: "Укажите ОС и опции",
        description:
          "Linux или Windows, дополнительные IP, BGP или требования к дискам — в комментарии к заказу."
      },
      {
        title: "Оформите в панели",
        description:
          "Создайте заказ в клиентской зоне. Команда подтверждает наличие и запускает выдачу."
      },
      {
        title: "Разверните и контролируйте",
        description:
          "Получите root-доступ, настройте ОС, DNS и следите за abuse-контактами для compliance."
      }
    ],
    stepsTitle: "Как заказать выделенный сервер",
    comparisonTitle: "Обычные дедики vs абузоустойчивые",
    comparisonSubtitle: "Стандартный bare metal для compliant-проектов или bulletproof-узлы, когда важна устойчивость к жалобам.",
    comparisonHeaders: {
      factor: "Фактор",
      regular: "Обычный dedicated",
      bulletproof: "Bulletproof dedicated"
    },
    comparisonRows: [
      {
        label: "Обработка жалоб",
        regular: "Стандартные политики ДЦ; жалобы отрабатываются.",
        bulletproof: "Ручной разбор, DMCA ignored по умолчанию."
      },
      {
        label: "Юрисдикция",
        regular: "Стандартные EU/US-friendly площадки.",
        bulletproof: "Офшорные NL/DE/MD/US-friendly стойки."
      },
      {
        label: "Приватность и оплата",
        regular: "Стандартные реквизиты и контакты.",
        bulletproof: "Crypto/wire, опциональный KYC, приватные тикеты."
      },
      {
        label: "Сеть",
        regular: "Порт 1 Gbps, базовая DDoS-фильтрация.",
        bulletproof: "До 10 Gbps, расширенная митигация."
      },
      {
        label: "Лучше для",
        regular: "Корпоративные, SaaS, игры, low-risk gray.",
        bulletproof: "High-risk медиа, affiliate, fintech, privacy."
      }
    ],
    faqs: [
      {
        question: "Что такое выделенный сервер?",
        answer:
          "Dedicated — физический bare-metal сервер только для вас, без разделения CPU и RAM с другими клиентами на уровне виртуализации."
      },
      {
        question: "Это абузоустойчивые серверы?",
        answer:
          "Нет. На этой странице — обычные дедики со стандартной обработкой жалоб. Для DMCA-ignored bare metal используйте абузоустойчивые выделенные серверы."
      },
      {
        question: "Dedicated vs VPS — когда переходить?",
        answer:
          "На dedicated переходят, когда нужны гарантированные CPU/RAM, высокий disk throughput, своя сеть или изоляция, которую VPS не даёт."
      },
      {
        question: "Какие ОС поддерживаются?",
        answer:
          "Linux и Windows Server через ISO или шаблоны панели. Свои образы и переустановка — через поддержку."
      },
      {
        question: "Сколько ждать выдачу?",
        answer:
          "Обычно от нескольких часов до одного рабочего дня — зависит от наличия железа и локации."
      }
    ],
    faqTitle: "FAQ: выделенные серверы",
    tariffs: sharedTariffs.map((t) =>
      t.title === "Ryzen 9 5950X" ? { ...t, ram: 128 } : t
    ),
    labels: {
      cpu: "CPU",
      ram: "RAM",
      storage: "Хранилище",
      network: "Сеть",
      bandwidth: "Трафик",
      os: "ОС",
      priceSuffix: "/мес",
      coresUnit: "ядер"
    }
  }
};

export function getDedicatedServersMeta(locale: "en" | "ru") {
  if (locale === "ru") {
    return {
      title: "Выделенные серверы — Bare-metal хостинг | Dior Host",
      description:
        "Обычные выделенные серверы (dedicated): Intel и AMD bare metal, NVMe, Linux/Windows, root-доступ. Стандартные политики abuse. Тарифы от $90/мес."
    };
  }
  return {
    title: "Dedicated Servers — Bare-Metal Hosting | Dior Host",
    description:
      "Regular dedicated servers: Intel and AMD bare metal, NVMe storage, Linux/Windows, full root access. Standard abuse policies. Plans from $90/mo."
  };
}
