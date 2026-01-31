import type { Locale } from "../lib/localization";

export interface StatusCard {
  readonly name: string;
  readonly description: string;
}

export interface DomainZone {
  readonly title: string;
  readonly price: number;
}

export interface VdsTariff {
  readonly title: string;
  readonly cpu: number;
  readonly ram: number;
  readonly ssd: number;
  readonly networkSpeed: number;
  readonly bandwidth: string;
  readonly os: string;
  readonly price: number;
  readonly url: string;
}

export interface IphmTariff {
  readonly title: string;
  readonly cpu: number;
  readonly ssd: number;
  readonly ram: number;
  readonly props: ReadonlyArray<{ readonly name: string; readonly value: string }>;
  readonly price: number;
  readonly url: string;
}

export interface WhyUsCard {
  readonly title: string;
  readonly description: string;
  readonly tag: string;
}

export interface SectionContent {
  readonly title: string;
  readonly body: string;
  readonly bullets: ReadonlyArray<string>;
}

export interface ComparisonRow {
  readonly label: string;
  readonly bulletproof: string;
  readonly regular: string;
}

export interface FAQItemContent {
  readonly question: string;
  readonly answer: string;
}

export interface StepContent {
  readonly title: string;
  readonly description: string;
}

export interface Testimonial {
  readonly name: string;
  readonly role: string;
  readonly initials: string;
  readonly quote: string;
  readonly kpi?: string;
}

export type ParagraphSegment =
  | { readonly type: "text"; readonly value: string }
  | { readonly type: "link"; readonly label: string; readonly href: string };

export interface SpecLabels {
  readonly cpu: string;
  readonly ram: string;
  readonly storage: string;
  readonly networkSpeed: string;
  readonly bandwidth: string;
  readonly os: string;
}

export interface HeroContent {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly highlightPills: ReadonlyArray<string>;
}

export interface HomeContent {
  readonly hero: HeroContent;
  readonly heroScrollLabel: string;
  readonly quickBenefits: ReadonlyArray<string>;
  readonly statusCards: ReadonlyArray<StatusCard>;
  readonly readyPlansSegments: ReadonlyArray<ParagraphSegment>;
  readonly domainSectionTitle: string;
  readonly domainZones: ReadonlyArray<DomainZone>;
  readonly vdsTariffs: ReadonlyArray<VdsTariff>;
  readonly vdsSectionTitle: string;
  readonly vdsShowMoreLabel: string;
  readonly iphmTariffs: ReadonlyArray<IphmTariff>;
  readonly iphmSectionTitle: string;
  readonly iphmShowMoreLabel: string;
  readonly specLabels: SpecLabels;
  readonly pricingOrderLabel: string;
  readonly whyUsTitle: string;
  readonly whyUsCards: ReadonlyArray<WhyUsCard>;
  readonly sections: ReadonlyArray<SectionContent>;
  readonly testimonialsTitle: string;
  readonly testimonials: ReadonlyArray<Testimonial>;
  readonly stepsTitle: string;
  readonly stepsSubtitle: string;
  readonly steps: ReadonlyArray<StepContent>;
  readonly comparisonTitle: string;
  readonly comparisonSubtitle: string;
  readonly comparisonHeaders: { readonly keyFactor: string; readonly bulletproof: string; readonly regular: string };
  readonly comparisonRows: ReadonlyArray<ComparisonRow>;
  readonly faqTitle: string;
  readonly faqs: ReadonlyArray<FAQItemContent>;
}

const sharedVdsTariffs: ReadonlyArray<VdsTariff> = [
  {
    title: "Lite 1",
    cpu: 1,
    ram: 1,
    ssd: 20,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 17.29,
    url: "https://my.dior.host"
  },
  {
    title: "Lite 2",
    cpu: 2,
    ram: 2,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 32.29,
    url: "https://my.dior.host"
  },
  {
    title: "Lite 3",
    cpu: 2,
    ram: 4,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 37.29,
    url: "https://my.dior.host"
  },
  {
    title: "Lite 4",
    cpu: 2,
    ram: 6,
    ssd: 40,
    networkSpeed: 150,
    bandwidth: "Unlimited",
    os: "Linux, Windows",
    price: 57.29,
    url: "https://my.dior.host"
  }
];

const sharedIphmTariffs: ReadonlyArray<IphmTariff> = [
  {
    title: "1X E5 2673 V3",
    cpu: 12,
    ssd: 1000,
    ram: 64,
    props: [
      { name: "IPs", value: "1 IPv4 - Upgradable" },
      { name: "OS", value: "Linux, Windows" },
      { name: "Bandwidth", value: "UNMETERED" },
      { name: "Network Speed", value: "1 gbit/s" }
    ],
    price: 1935,
    url: "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D286%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 1000,
    ram: 64,
    props: [
      { name: "IPs", value: "1 IPv4 - Upgradable" },
      { name: "OS", value: "Linux, Windows" },
      { name: "Bandwidth", value: "UNMETERED" },
      { name: "Network Speed", value: "1 gbit/s" }
    ],
    price: 2275,
    url: "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D288%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 2000,
    ram: 128,
    props: [
      { name: "IPs", value: "1 IPv4 - Upgradable" },
      { name: "OS", value: "Linux, Windows" },
      { name: "Bandwidth", value: "UNMETERED" },
      { name: "Network Speed", value: "1 gbit/s" }
    ],
    price: 3189,
    url: "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D290%26period%3D1%26project%3D2"
  },
  {
    title: "2X E5 2673 V3",
    cpu: 24,
    ssd: 1000,
    ram: 64,
    props: [
      { name: "IPs", value: "1 IPv4 - Upgradable" },
      { name: "OS", value: "Linux, Windows" },
      { name: "Bandwidth", value: "500TB" },
      { name: "Network Speed", value: "10 gbit/s" }
    ],
    price: 4785,
    url: "https://my.dior.host?func=register&redirect=startform%3Dquickorder%26redirect%3Dbasket%26pricelist%3D292%26period%3D1%26project%3D2"
  }
];

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    hero: {
      title: "Bulletproof VPS, VDS & Offshore Hosting",
      subtitle: "Offshore abuse-resistant infrastructure for global teams",
      description:
        "Bulletproof hosting is a service that stays online despite DMCA, complaints, or abuse reports, supported by offshore-friendly providers in the USA, UK, Netherlands, Germany, and the EU.",
      highlightPills: ["No AML/KYC/CFT", "Instant delivery", "Data encryption", "The best prices"]
    },
    heroScrollLabel: "Scroll down",
    quickBenefits: ["No AML/KYC/CFT", "Instant delivery", "Data encryption", "The best prices"],
    statusCards: [
      { name: "Operators", description: "Working 24/7" },
      { name: "Current status", description: "Everything works" },
      { name: "Servers", description: "450+ online" },
      { name: "Geolocation of servers", description: "Netherlands" }
    ],
    readyPlansSegments: [
      { type: "text", value: "Need ready-to-run plans? Explore " },
      { type: "link", label: "bulletproof VDS", href: "/bulletproof/vds" },
      { type: "text", value: ", " },
      { type: "link", label: "dedicated servers", href: "/bulletproof/dedicated" },
      { type: "text", value: ", " },
      { type: "link", label: "bulletproof domains", href: "/bulletproof/domains" },
      { type: "text", value: " and " },
      { type: "link", label: "offshore web hosting", href: "/bulletproof/web-hosting" },
      { type: "text", value: "." }
    ],
    domainSectionTitle: "Domain registration",
    domainZones: [
      { title: ".com", price: 70 },
      { title: ".net", price: 70 },
      { title: ".org", price: 70 },
      { title: ".info", price: 70 },
      { title: ".biz", price: 70 },
      { title: ".club", price: 70 },
      { title: ".pro", price: 70 },
      { title: ".uk", price: 70 },
      { title: ".guru", price: 70 },
      { title: ".ca", price: 70 },
      { title: ".at", price: 70 },
      { title: ".io", price: 99 },
      { title: ".cc", price: 70 },
      { title: ".us", price: 70 },
      { title: ".link", price: 70 }
    ],
    vdsTariffs: sharedVdsTariffs,
    vdsSectionTitle: "Bulletproof VDS",
    vdsShowMoreLabel: "Show more",
    iphmTariffs: sharedIphmTariffs,
    iphmSectionTitle: "IPHM",
    iphmShowMoreLabel: "Show more",
    specLabels: {
      cpu: "CPU",
      ram: "RAM",
      storage: "SSD / NVME",
      networkSpeed: "Network speed",
      bandwidth: "Bandwidth",
      os: "OS"
    },
    pricingOrderLabel: "{price}$ / month (order)",
    whyUsTitle: "Why us?",
    whyUsCards: [
      {
        title: "Anonymity and confidentiality",
        description:
          "Our servers provide a high level of anonymity and protection of personal data. We do not collect user information and adhere to strict privacy standards to keep your data safe.",
        tag: "100% no AML/KYC/CFT"
      },
      {
        title: "High performance",
        description:
          "Our VDS have powerful hardware and are optimized to provide high speed and stability. This allows you to run resource-intensive applications, sites and services without delays and failures.",
        tag: "Speed up to 150 MBit/s"
      },
      {
        title: "Full control over the services",
        description:
          "You get full access, which makes it possible to independently manage the server, install the necessary applications and settings, as well as adapt the system to specific tasks.",
        tag: "A convenient panel"
      },
      {
        title: "Flexibility and scalability",
        description:
          "We offer a wide range of tariff plans that can be easily customized to your specific needs. If your project requires additional resources, you can quickly and easily upgrade to a more powerful plan.",
        tag: "A lot of tariffs"
      }
    ],
    sections: [
      {
        title: "What is bulletproof hosting?",
        body: "Bulletproof hosting is an abuse-resistant infrastructure model that prioritizes uptime, privacy and due-process reviews. Dior Host deploys compute in offshore facilities throughout the Netherlands, Germany, Romania and USA-friendly routes, escalates DMCA complaints manually and works with you before taking action.",
        bullets: [
          "DMCA-ignored by default with legal escalation only when a court order arrives.",
          "Offshore routing with redundant AS paths in NL, DE, RO and USA-friendly locations.",
          "Privacy-first billing with crypto, SEPA wire and anonymous ticketing."
        ]
      },
      {
        title: "Is bulletproof VPS legal in the USA & EU?",
        body: "Operating a bulletproof VPS is legal as long as your workloads do not break criminal law. Dior Host balances offshore protections with US/EU readiness so legitimate marketing, cybersecurity and fintech teams stay online without false-positive suspensions.",
        bullets: [
          "We only suspend workloads that violate zero-tolerance rules (malware, child abuse, terrorism).",
          "Abuse tickets trigger a dialogue and mitigation plan instead of instant shutdowns.",
          "Compliance decisions are documented so advertisers, acquirers and partners stay confident."
        ]
      },
      {
        title: "How does Dior Host protect my project?",
        body: "Every VPS and dedicated node ships with layered network protection, Anycast filtering and a 24/7 abuse-response desk stationed in NL and DE facilities.",
        bullets: [
          "Multi-homed bandwidth across NL, DE, RO and US peers with 150+ Gbps capacity.",
          "Hardware-level AES-NI encryption, ECC RAM and rapid snapshot tooling.",
          "Account managers escalate sensitive cases through private channels instead of public blocklists."
        ]
      }
    ],
    testimonialsTitle: "Client Testimonials",
    testimonials: [
      {
        name: "Marketing Agency",
        role: "Growth Team Lead",
        initials: "MA",
        quote: "Zero DMCA suspensions in 18 months. Our affiliate campaigns run 24/7 without interruptions.",
        kpi: "99.98% uptime, 0 DMCA blocks"
      },
      {
        name: "Privacy SaaS",
        role: "CTO",
        initials: "PS",
        quote: "Offshore routing and crypto payments maintain operational privacy. Support responds within minutes.",
        kpi: "7 min average response time"
      },
      {
        name: "Security Lab",
        role: "Security Researcher",
        initials: "SL",
        quote: "Perfect for pentesting and security research. Abuse tickets are handled professionally.",
        kpi: "100% abuse ticket resolution"
      }
    ],
    stepsTitle: "How to choose a bulletproof VPS provider",
    stepsSubtitle: "Why offshore abuse-resistant servers stay online longer.",
    steps: [
      {
        title: "Define compliance risk",
        description: "List the campaigns, datasets and applications that could trigger DMCA or abuse notices."
      },
      {
        title: "Pick jurisdictions close to your audience",
        description: "Choose offshore data centers (NL, DE, RO, MD, US-friendly) that balance latency to USA, UK and EU regions."
      },
      {
        title: "Match workloads to resources",
        description: "Map CPU, RAM, storage and bandwidth requirements to abuse-resistant VPS or dedicated tiers."
      },
      {
        title: "Plan mitigation & documentation",
        description: "Decide whether you need AML/KYC-free billing or hybrid paperwork for banks and ad networks."
      },
      {
        title: "Launch, monitor and iterate",
        description: "Use the Dior Host panel or API to provision, migrate and watch abuse tickets with our NOC team."
      }
    ],
    comparisonTitle: "Bulletproof vs regular hosting",
    comparisonSubtitle: "Why offshore abuse-resistant servers stay online longer.",
    comparisonHeaders: {
      keyFactor: "Key factor",
      bulletproof: "Bulletproof",
      regular: "Regular"
    },
    comparisonRows: [
      {
        label: "Abuse handling",
        bulletproof: "Manual review, DMCA ignored by default, mediation-first decisions.",
        regular: "Automated suspension after the first complaint or DMCA notice."
      },
      {
        label: "Jurisdictions",
        bulletproof: "Offshore NL/DE/RO nodes plus US-friendly peers for global reach.",
        regular: "Single domestic data center with limited routing."
      },
      {
        label: "Privacy & KYC",
        bulletproof: "Crypto, wire and anonymized tickets with optional paperwork.",
        regular: "Mandatory AML/KYC collection for every order."
      },
      {
        label: "Network & mitigation",
        bulletproof: "Layer 3/4 + L7 filtering, Anycast traffic scrubbing, 150+ Gbps.",
        regular: "Basic firewalling without upstream mitigation."
      },
      {
        label: "Ideal use cases",
        bulletproof: "Growth marketing, privacy SaaS, cybersecurity labs, DMCA-heavy media.",
        regular: "Corporate sites, blogs and low-risk workloads."
      }
    ],
    faqTitle: "Bulletproof hosting FAQ",
    faqs: [
      {
        question: "What is bulletproof hosting?",
        answer:
          "Bulletproof hosting is abuse-resistant infrastructure that keeps running even when DMCA or abuse notices arrive by relying on offshore jurisdictions, manual reviews and flexible acceptable-use rules."
      },
      {
        question: "Is bulletproof VPS legal in my country?",
        answer:
          "Yes. Using bulletproof VPS is legal when your project avoids criminal content. Dior Host mediates complaints and only shuts down workloads that violate zero-tolerance policies."
      },
      {
        question: "Which locations are popular for bulletproof hosting?",
        answer:
          "Netherlands, Germany, Romania, Moldova and Caribbean or USA-friendly offshore networks with resilient telecom partners."
      },
      {
        question: "Do you require KYC for bulletproof VPS?",
        answer:
          "No mandatory KYC is required. Provide documents only if your payment partner needs them; otherwise crypto and wire options remain private."
      },
      {
        question: "Can I move from regular hosting to bulletproof hosting easily?",
        answer:
          "Yes. Schedule a migration window with our NOC, import images or snapshots and we will re-provision workloads on abuse-resistant nodes."
      }
    ]
  },
  ru: {
    hero: {
      title: "Абузоустойчивый хостинг, VPS и VDS",
      subtitle: "Офшорная инфраструктура, устойчивая к жалобам, для глобальных команд",
      description:
        "Bulletproof-хостинг остаётся онлайн, даже когда приходят уведомления DMCA или жалобы. Это достигается за счёт офшорных площадок в США, Великобритании, Нидерландах, Германии и других странах ЕС.",
      highlightPills: ["Без AML/KYC/CFT", "Мгновенная выдача", "Шифрование данных", "Лучшие цены"]
    },
    heroScrollLabel: "Прокрутите вниз",
    quickBenefits: ["Без AML/KYC/CFT", "Мгновенная выдача", "Шифрование данных", "Лучшие цены"],
    statusCards: [
      { name: "Операторы", description: "Работают 24/7" },
      { name: "Текущий статус", description: "Все системы в работе" },
      { name: "Серверы", description: "450+ онлайн" },
      { name: "География", description: "Нидерланды" }
    ],
    readyPlansSegments: [
      { type: "text", value: "Нужны готовые тарифы? Посмотрите " },
      { type: "link", label: "bulletproof VDS", href: "/bulletproof/vds" },
      { type: "text", value: ", " },
      { type: "link", label: "выделенные серверы", href: "/bulletproof/dedicated" },
      { type: "text", value: ", " },
      { type: "link", label: "bulletproof домены", href: "/bulletproof/domains" },
      { type: "text", value: " и " },
      { type: "link", label: "офшорный веб-хостинг", href: "/bulletproof/web-hosting" },
      { type: "text", value: "." }
    ],
    domainSectionTitle: "Регистрация доменов",
    domainZones: [
      { title: ".com", price: 70 },
      { title: ".net", price: 70 },
      { title: ".org", price: 70 },
      { title: ".info", price: 70 },
      { title: ".biz", price: 70 },
      { title: ".club", price: 70 },
      { title: ".pro", price: 70 },
      { title: ".uk", price: 70 },
      { title: ".guru", price: 70 },
      { title: ".ca", price: 70 },
      { title: ".at", price: 70 },
      { title: ".io", price: 99 },
      { title: ".cc", price: 70 },
      { title: ".us", price: 70 },
      { title: ".link", price: 70 }
    ],
    vdsTariffs: sharedVdsTariffs,
    vdsSectionTitle: "Bulletproof VDS",
    vdsShowMoreLabel: "Показать больше",
    iphmTariffs: sharedIphmTariffs,
    iphmSectionTitle: "IPHM",
    iphmShowMoreLabel: "Показать больше",
    specLabels: {
      cpu: "CPU",
      ram: "RAM",
      storage: "SSD / NVME",
      networkSpeed: "Скорость сети",
      bandwidth: "Трафик",
      os: "ОС"
    },
    pricingOrderLabel: "{price}$ / мес (заказать)",
    whyUsTitle: "Почему мы?",
    whyUsCards: [
      {
        title: "Анонимность и конфиденциальность",
        description:
          "Мы не собираем личные данные клиентов и придерживаемся строгих стандартов приватности, чтобы инфраструктура оставалась безопасной для высокорисковых проектов.",
        tag: "0% AML/KYC/CFT"
      },
      {
        title: "Высокая производительность",
        description:
          "Современное оборудование и оптимизированная конфигурация обеспечивают стабильную скорость и позволяют запускать ресурсоёмкие приложения без простоев.",
        tag: "До 150 Мбит/с"
      },
      {
        title: "Полный контроль",
        description:
          "Доступ на уровне root позволяет настраивать окружение, устанавливать любое ПО и адаптировать сервер под конкретные задачи.",
        tag: "Удобная панель"
      },
      {
        title: "Гибкость и масштабирование",
        description:
          "Широкая линейка тарифов легко апгрейдится. При росте нагрузки достаточно перейти на более мощный план без миграций.",
        tag: "Десятки тарифов"
      }
    ],
    sections: [
      {
        title: "Что такое bulletproof-хостинг?",
        body: "Это инфраструктура, устойчивая к жалобам и DMCA. Dior Host вручную эскалирует обращения, разворачивает мощности в Нидерландах, Германии, Румынии и дружественных США маршрутах и всегда ведёт диалог с клиентом перед действиями.",
        bullets: [
          "Уведомления DMCA игнорируются по умолчанию, пока не поступит судебное решение.",
          "Офшорная маршрутизация с резервированием AS-путей в NL, DE, RO и дружественных США юрисдикциях.",
          "Биллинг с приоритетом приватности: криптовалюты, SEPA и анонимные тикеты."
        ]
      },
      {
        title: "Законен ли bulletproof VPS в США и ЕС?",
        body: "Да, если проекты не нарушают уголовное законодательство. Мы балансируем офшорную защиту и готовность к требованиям США/ЕС, поэтому маркетологи, финтех и исследователи безопасности работают без ложных блокировок.",
        bullets: [
          "Мы останавливаем только те проекты, которые попадают под нулевую терпимость: вредоносный код, детская эксплуатация, терроризм.",
          "Каждая жалоба запускает диалог и план минимизации, а не моментальное отключение.",
          "Решения документируются, чтобы рекламодатели и банки доверяли инфраструктуре."
        ]
      },
      {
        title: "Как Dior Host защищает проекты?",
        body: "Каждый сервер оснащён многоуровневой сетевой защитой, Anycast-фильтрацией и круглосуточным abuse-деском в NL и DE дата-центрах.",
        bullets: [
          "Мультихоминг по NL, DE, RO и US-пирингам с ёмкостью 150+ Гбит/с.",
          "Аппаратное шифрование AES-NI, ECC RAM и быстрые снапшоты.",
          "Аккаунт-менеджеры эскалируют чувствительные кейсы в приватных каналах без публичных списков блокировок."
        ]
      }
    ],
    testimonialsTitle: "Отзывы клиентов",
    testimonials: [
      {
        name: "Маркетинговое агентство",
        role: "Team Lead по росту",
        initials: "MA",
        quote: "18 месяцев без блокировок DMCA. Партнёрские кампании работают 24/7 без сбоев.",
        kpi: "99.98% аптайма, 0 блокировок"
      },
      {
        name: "Privacy SaaS",
        role: "CTO",
        initials: "PS",
        quote: "Офшорные маршруты и крипто-платежи сохраняют приватность. Поддержка отвечает за минуты.",
        kpi: "7 минут среднее время ответа"
      },
      {
        name: "Security Lab",
        role: "Исследователь безопасности",
        initials: "SL",
        quote: "Идеально для пентестов и лабораторий. Жалобы обрабатываются профессионально.",
        kpi: "100% обработанных тикетов"
      }
    ],
    stepsTitle: "Как выбрать bulletproof-провайдера",
    stepsSubtitle: "5 шагов, которые помогают проектам оставаться онлайн.",
    steps: [
      {
        title: "Определите риски",
        description: "Составьте список кампаний и данных, которые могут вызвать жалобы или DMCA."
      },
      {
        title: "Подберите юрисдикции",
        description: "Выберите офшорные дата-центры (NL, DE, RO, MD), балансирующие задержки до аудитории."
      },
      {
        title: "Соотнесите ресурсы",
        description: "Сопоставьте CPU, RAM, хранилище и трафик с VPS или выделенными тарифами."
      },
      {
        title: "Продумайте комплаенс",
        description: "Решите, нужен ли полностью безбумажный биллинг или гибрид для банков и сетей."
      },
      {
        title: "Запускайте и мониторьте",
        description: "Используйте панель или API Dior Host, чтобы мигрировать и контролировать тикеты совместно с NOC."
      }
    ],
    comparisonTitle: "Bulletproof vs классический хостинг",
    comparisonSubtitle: "Почему офшорные решения живут дольше.",
    comparisonHeaders: {
      keyFactor: "Ключевой фактор",
      bulletproof: "Bulletproof",
      regular: "Обычный"
    },
    comparisonRows: [
      {
        label: "Работа с жалобами",
        bulletproof: "Ручная проверка, DMCA игнорируется по умолчанию, решения через медиацию.",
        regular: "Авто-блокировка после первой жалобы."
      },
      {
        label: "Юрисдикции",
        bulletproof: "NL/DE/RO + дружественные США площадки для глобального охвата.",
        regular: "Один локальный дата-центр."
      },
      {
        label: "Приватность и KYC",
        bulletproof: "Крипто, переводы и анонимные тикеты. Документы — только по запросу.",
        regular: "Обязательный AML/KYC на каждый заказ."
      },
      {
        label: "Сеть и фильтрация",
        bulletproof: "Anycast, фильтрация L3-L7, запас 150+ Гбит/с.",
        regular: "Базовый файрволл без upstream-защиты."
      },
      {
        label: "Идеальные кейсы",
        bulletproof: "Маркетинг роста, privacy SaaS, кибербезопасность, медиа с DMCA.",
        regular: "Блоги, корпоративные сайты, низкий риск."
      }
    ],
    faqTitle: "Частые вопросы о bulletproof-хостинге",
    faqs: [
      {
        question: "Что такое bulletproof-хостинг?",
        answer:
          "Это инфраструктура, которая остаётся онлайн даже при жалобах благодаря офшорным юрисдикциям, ручным проверкам и гибкой политике использования."
      },
      {
        question: "Легально ли пользоваться bulletproof VPS?",
        answer:
          "Да, если проект не нарушает уголовное законодательство. Dior Host медиирует жалобы и отключает только то, что подпадает под жёсткие запреты."
      },
      {
        question: "Какие локации популярны?",
        answer:
          "Нидерланды, Германия, Румыния, Молдова и дружественные США офшорные площадки с устойчивыми телеком-партнёрами."
      },
      {
        question: "Нужен ли KYC?",
        answer:
          "Обязательного KYC нет. Документы требуются только если их запрашивает ваш платёжный партнёр."
      },
      {
        question: "Сложно ли мигрировать?",
        answer: "Нет. Согласуйте окно миграции, импортируйте образы, и мы развернём их на абузоустойчивых серверах."
      }
    ]
  }
};


