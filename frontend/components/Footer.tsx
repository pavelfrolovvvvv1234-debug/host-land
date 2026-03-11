"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TELEGRAM_BOT = "https://t.me/diorhost_bot";

export function Footer() {
  const pathname = usePathname();
  const isRu = pathname?.startsWith("/ru") ?? false;
  const year = new Date().getFullYear();

  const productLinks = [
    { href: isRu ? "/ru/bulletproof/vds" : "/bulletproof/vds", label: isRu ? "Тарифы" : "Pricing" },
    { href: isRu ? "/ru/services" : "/services", label: isRu ? "Услуги" : "Services" },
    { href: isRu ? "/ru/blog" : "/blog", label: "Blog" },
    { href: isRu ? "/ru/wiki" : "/wiki", label: isRu ? "База знаний" : "Knowledge base" },
    { href: isRu ? "/ru/affilate_program" : "/affilate_program", label: isRu ? "Партнёрка" : "Affiliate" },
  ];

  const legalLinks = [
    { href: isRu ? "/ru/public-offer" : "/public-offer", label: isRu ? "Публичная оферта" : "Public offer" },
    { href: isRu ? "/ru/privacy-policy" : "/privacy-policy", label: isRu ? "Политика конфиденциальности" : "Privacy policy" },
    { href: isRu ? "/ru/user-agreement" : "/user-agreement", label: isRu ? "Пользовательское соглашение" : "User agreement" },
    { href: isRu ? "/ru/about" : "/about", label: isRu ? "О компании" : "About" },
    { href: isRu ? "/ru/sla" : "/sla", label: "SLA" },
    { href: isRu ? "/ru/abuse-flow" : "/abuse-flow", label: isRu ? "Обработка жалоб" : "Abuse flow" },
    { href: isRu ? "/ru/dmca-policy" : "/dmca-policy", label: "DMCA Policy" },
  ];

  const contactLinks = [
    { href: "mailto:support@dior.host", label: "support@dior.host" },
    { href: "https://t.me/diorhost_bot", label: "Telegram" },
    { href: "https://t.me/diorhost_news", label: isRu ? "Telegram-канал" : "Telegram news" },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#080808]" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href={isRu ? "/ru" : "/"}
              className="inline-block transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-[#080808] rounded-lg"
              aria-label="Dior Host — home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="109"
                height="21"
                viewBox="0 0 106 21"
                className="h-5 w-auto text-white"
                aria-hidden
              >
                <g>
                  <path
                    d="M 10.992188 20.992188 L 19.496094 20.992188 L 13.476562 13.105469 L 22.140625 13.105469 L 28.050781 5.585938 L 23.59375 0 L 3.472656 0 L 8.65625 6.789062 L 0 6.789062 Z M 18.523438 6.773438 L 13.480469 13.105469 L 8.644531 6.773438 Z"
                    fill="rgb(66,104,255)"
                  />
                  <path
                    d="M 57.769531 10.472656 C 57.769531 12.03125 57.386719 13.429688 56.621094 14.675781 C 55.871094 15.917969 54.789062 16.898438 53.378906 17.609375 C 51.980469 18.320312 50.355469 18.675781 48.5 18.675781 L 40.382812 18.675781 L 40.382812 2.226562 L 48.480469 2.226562 C 50.347656 2.226562 51.980469 2.582031 53.378906 3.292969 C 54.789062 3.988281 55.871094 4.96875 56.621094 6.226562 C 57.386719 7.472656 57.769531 8.886719 57.769531 10.472656 Z M 48.789062 15.410156 C 50.347656 15.410156 51.621094 14.984375 52.605469 14.140625 C 53.589844 13.28125 54.082031 12.058594 54.082031 10.472656 C 54.082031 9.585938 53.847656 8.761719 53.378906 8.007812 C 52.921875 7.234375 52.289062 6.628906 51.480469 6.183594 C 50.671875 5.738281 49.773438 5.515625 48.789062 5.515625 L 44.109375 5.515625 L 44.109375 15.410156 Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M 63.4375 18.675781 L 59.710938 18.675781 L 59.710938 2.226562 L 63.4375 2.226562 Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M 75.449219 1.871094 C 77.363281 1.871094 79.082031 2.242188 80.613281 2.980469 C 82.15625 3.722656 83.363281 4.753906 84.230469 6.070312 C 85.097656 7.390625 85.535156 8.875 85.535156 10.519531 C 85.535156 12.148438 85.097656 13.617188 84.230469 14.917969 C 83.363281 16.222656 82.164062 17.253906 80.636719 18.007812 C 79.105469 18.75 77.382812 19.121094 75.472656 19.121094 C 73.617188 19.121094 71.914062 18.75 70.351562 18.007812 C 68.792969 17.253906 67.558594 16.222656 66.644531 14.917969 C 65.734375 13.601562 65.277344 12.132812 65.277344 10.519531 C 65.277344 8.886719 65.734375 7.414062 66.644531 6.09375 C 67.558594 4.777344 68.785156 3.746094 70.332031 3.003906 C 71.890625 2.25 73.597656 1.871094 75.449219 1.871094 Z M 75.449219 16.054688 C 76.523438 16.054688 77.539062 15.839844 78.496094 15.410156 C 79.449219 14.980469 80.222656 14.347656 80.8125 13.519531 C 81.398438 12.675781 81.695312 11.675781 81.695312 10.519531 C 81.695312 9.378906 81.394531 8.382812 80.789062 7.539062 C 80.203125 6.695312 79.421875 6.050781 78.449219 5.605469 C 77.496094 5.160156 76.480469 4.9375 75.40625 4.9375 C 74.257812 4.9375 73.207031 5.160156 72.25 5.605469 C 71.308594 6.050781 70.558594 6.6875 70 7.515625 C 69.441406 8.347656 69.160156 9.332031 69.160156 10.472656 C 69.160156 11.644531 69.449219 12.652344 70.023438 13.496094 C 70.609375 14.328125 71.382812 14.964844 72.339844 15.410156 C 73.296875 15.839844 74.332031 16.054688 75.449219 16.054688 Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M 101.410156 18.632812 L 96.886719 13.320312 L 91.039062 13.320312 L 91.039062 18.632812 L 87.375 18.632812 L 87.375 2.183594 L 98.917969 2.183594 C 100.285156 2.183594 101.492188 2.410156 102.535156 2.871094 C 103.59375 3.332031 104.410156 3.976562 104.984375 4.804688 C 105.574219 5.621094 105.867188 6.570312 105.867188 7.652344 L 105.867188 7.738281 C 105.867188 9.148438 105.457031 10.3125 104.632812 11.230469 C 103.824219 12.148438 102.699219 12.761719 101.257812 13.074219 L 106 18.632812 Z M 102.117188 7.828125 C 102.117188 6.984375 101.953125 6.367188 101.632812 5.984375 C 101.320312 5.597656 100.925781 5.359375 100.4375 5.273438 C 99.953125 5.183594 99.269531 5.136719 98.386719 5.136719 C 97.988281 5.136719 97.652344 5.144531 97.371094 5.160156 C 95.386719 5.207031 93.277344 5.226562 91.039062 5.226562 L 91.039062 10.363281 L 98.386719 10.363281 C 99.269531 10.363281 99.953125 10.324219 100.4375 10.25 C 100.925781 10.164062 101.320312 9.941406 101.632812 9.585938 C 101.953125 9.214844 102.117188 8.628906 102.117188 7.828125 Z"
                    fill="#ffffff"
                  />
                </g>
              </svg>
            </Link>
            <p className="mt-3 text-sm text-white/50 max-w-[200px] leading-relaxed">
              {isRu ? "Офшорная абузоустойчивая инфраструктура" : "Offshore bulletproof infrastructure"}
            </p>
            <a
              href={TELEGRAM_BOT}
              className="mt-6 inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {isRu ? "Начать" : "Get started"}
            </a>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              {isRu ? "Продукт" : "Product"}
            </h3>
            <ul className="space-y-3">
              {productLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              {isRu ? "Документы" : "Legal"}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
              {isRu ? "Контакты" : "Contact"}
            </h3>
            <ul className="space-y-3">
              {contactLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white/50">
              <span className="font-medium text-white/70">99.98%</span> uptime · NL
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {year} Dior Host. {isRu ? "Все права защищены." : "All rights reserved."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-white/40">
            <a href="mailto:abuse@dior.host" className="transition-colors hover:text-white/60">
              abuse@dior.host
            </a>
            <a href="xmpp:diorhost@exploit.in?message" className="transition-colors hover:text-white/60">
              Jabber
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
