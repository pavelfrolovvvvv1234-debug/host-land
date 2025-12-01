import Link from "next/link";

const services = [
  {
    title: "Абузоустойчивые VDS",
    description:
      "На этих серверах вы можете сохранить все. Мы игнорируем любые жалобы. Возможность доставки любой ОС. Анонимность 100%",
    href: "/ru/bulletproof/vds",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m13 6-4 6h6l-4 6" />
      </svg>
    )
  },
  {
    title: "Абузоустойчивые домены",
    description:
      "Пуленепробиваемые домены. Никаких блокировок и гарантия на весь срок! При желании возможен перенос. Все домены за $80",
    href: "/ru/bulletproof/domains",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
      </svg>
    )
  },
  {
    title: "Виртуальные сервера (VDS)",
    description:
      'Обычные серверы для «белой» или «серой» эксплуатации. Жалобы не остаются без внимания! Возможность установки любой ОС',
    href: "/ru/services/vds",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    )
  },
  {
    title: "Абузоустойчивые выделенные сервера",
    description:
      "Выделенные серверы со 100% гарантией анонимности. Никаких блокировок и жалоб. Возможность доставки на любую ОС.",
    href: "/ru/bulletproof/dedicated",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m15.7 13.4-.9-.3" />
        <path d="m9.2 10.9-.9-.3" />
        <path d="m10.6 15.7.3-.9" />
        <path d="m13.6 15.7-.4-1" />
        <path d="m10.8 9.3-.4-1" />
        <path d="m8.3 13.6 1-.4" />
        <path d="m14.7 10.8 1-.4" />
        <path d="m13.4 8.3-.3.9" />
      </svg>
    )
  },
  {
    title: "Выделенные сервера",
    description:
      'Выделенные серверы для «белой» или «серой» работы. Жалобы не остаются без внимания! Возможность установки любой ОС.',
    href: "/ru/services/dedicated",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
        <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m15.7 13.4-.9-.3" />
        <path d="m9.2 10.9-.9-.3" />
        <path d="m10.6 15.7.3-.9" />
        <path d="m13.6 15.7-.4-1" />
        <path d="m10.8 9.3-.4-1" />
        <path d="m8.3 13.6 1-.4" />
        <path d="m14.7 10.8 1-.4" />
        <path d="m13.4 8.3-.3.9" />
      </svg>
    )
  },
  {
    title: "TurboVDS",
    description:
      "Серверы для парсинга, mass-check, SEO, анализа безопасности и других задач с высокой сетевой активностью. Скорость до 10 Гбит/сек обеспечивает молниеносную работу без потерь в стабильности. Подходят для порт-сканирования, проверки доступности хостов, автоматизации и API-запросов. Лучше стандартных абузоустойчивых VDS за счёт высокой пропускной способности.",
    href: "/ru/services/vdsturbo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
        <path d="M6 6h.01" />
        <path d="M6 18h.01" />
        <path d="m13 6-4 6h6l-4 6" />
      </svg>
    )
  },
  {
    title: "Выделенные Серверы IPHM",
    description:
      "Сервера с IPHM предоставляют возможность скрывать настоящий IP-адрес пользователя, маскируя его под другой. Это может быть полезно для защиты приватности, обхода географических блокировок или проведения тестирования безопасности сети. Канал до 10гб/сек",
    href: "/ru/services/iphm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
        <path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
        <path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
      </svg>
    )
  }
];

export default function ServicesPageRu() {
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold mb-6">Услуги</h1>
      <div className="flex flex-wrap w-full gap-3 relative h-full bg-[#09131c] rounded-lg shadow-[0px_21px_295px_89px_rgba(10,_77,_146,_0.18)] p-4">
        {services.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="border relative rounded-lg border-[#09131c] bg-black/60 shadow-md shadow-black w-full p-4 select-none cursor-pointer hover:border-[#446581] transition-all block md:max-w-1/4 md:w-1/4 flex-grow basis-60 service-card scroll-reveal revealed"
          >
            <div className="ml-5 mt-5 top-0 left-0 scale-[1.9] md:scale-[1.2] md:ml-1 md:mt-1 size-10 flex items-center justify-center">
              {service.icon}
            </div>
            <h2 className="font-bold text-blue-400 text-balance mt-4">{service.title}</h2>
            <p className="text-md md:text-xs text-balance mt-2">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}


