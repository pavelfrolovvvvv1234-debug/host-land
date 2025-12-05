"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isRu = pathname?.startsWith("/ru") ?? false;
  const year = new Date().getFullYear();

  return (
    <footer className="min-w-full bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href={isRu ? "/ru" : "/"} className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="109"
                height="21"
                viewBox="0 0 106 21"
                className="mb-3"
              >
                <g>
                  <path
                    className="logo-path"
                    d="M 10.992188 20.992188 L 19.496094 20.992188 L 13.476562 13.105469 L 22.140625 13.105469 L 28.050781 5.585938 L 23.59375 0 L 3.472656 0 L 8.65625 6.789062 L 0 6.789062 Z M 18.523438 6.773438 L 13.480469 13.105469 L 8.644531 6.773438 Z M 18.523438 6.773438 "
                    fill="rgb(66,104,255)"
                  />
                  <path
                    className="logo-path"
                    d="M 57.769531 10.472656 C 57.769531 12.03125 57.386719 13.429688 56.621094 14.675781 C 55.871094 15.917969 54.789062 16.898438 53.378906 17.609375 C 51.980469 18.320312 50.355469 18.675781 48.5 18.675781 L 40.382812 18.675781 L 40.382812 2.226562 L 48.480469 2.226562 C 50.347656 2.226562 51.980469 2.582031 53.378906 3.292969 C 54.789062 3.988281 55.871094 4.96875 56.621094 6.226562 C 57.386719 7.472656 57.769531 8.886719 57.769531 10.472656 Z M 48.789062 15.410156 C 50.347656 15.410156 51.621094 14.984375 52.605469 14.140625 C 53.589844 13.28125 54.082031 12.058594 54.082031 10.472656 C 54.082031 9.585938 53.847656 8.761719 53.378906 8.007812 C 52.921875 7.234375 52.289062 6.628906 51.480469 6.183594 C 50.671875 5.738281 49.773438 5.515625 48.789062 5.515625 L 44.109375 5.515625 L 44.109375 15.410156 Z"
                    fill="#ffffff"
                  />
                  <path
                    className="logo-path"
                    d="M 63.4375 18.675781 L 59.710938 18.675781 L 59.710938 2.226562 L 63.4375 2.226562 Z"
                    fill="#ffffff"
                  />
                  <path
                    className="logo-path"
                    d="M 75.449219 1.871094 C 77.363281 1.871094 79.082031 2.242188 80.613281 2.980469 C 82.15625 3.722656 83.363281 4.753906 84.230469 6.070312 C 85.097656 7.390625 85.535156 8.875 85.535156 10.519531 C 85.535156 12.148438 85.097656 13.617188 84.230469 14.917969 C 83.363281 16.222656 82.164062 17.253906 80.636719 18.007812 C 79.105469 18.75 77.382812 19.121094 75.472656 19.121094 C 73.617188 19.121094 71.914062 18.75 70.351562 18.007812 C 68.792969 17.253906 67.558594 16.222656 66.644531 14.917969 C 65.734375 13.601562 65.277344 12.132812 65.277344 10.519531 C 65.277344 8.886719 65.734375 7.414062 66.644531 6.09375 C 67.558594 4.777344 68.785156 3.746094 70.332031 3.003906 C 71.890625 2.25 73.597656 1.871094 75.449219 1.871094 Z M 75.449219 16.054688 C 76.523438 16.054688 77.539062 15.839844 78.496094 15.410156 C 79.449219 14.980469 80.222656 14.347656 80.8125 13.519531 C 81.398438 12.675781 81.695312 11.675781 81.695312 10.519531 C 81.695312 9.378906 81.394531 8.382812 80.789062 7.539062 C 80.203125 6.695312 79.421875 6.050781 78.449219 5.605469 C 77.496094 5.160156 76.480469 4.9375 75.40625 4.9375 C 74.257812 4.9375 73.207031 5.160156 72.25 5.605469 C 71.308594 6.050781 70.558594 6.6875 70 7.515625 C 69.441406 8.347656 69.160156 9.332031 69.160156 10.472656 C 69.160156 11.644531 69.449219 12.652344 70.023438 13.496094 C 70.609375 14.328125 71.382812 14.964844 72.339844 15.410156 C 73.296875 15.839844 74.332031 16.054688 75.449219 16.054688 Z"
                    fill="#ffffff"
                  />
                  <path
                    className="logo-path"
                    d="M 101.410156 18.632812 L 96.886719 13.320312 L 91.039062 13.320312 L 91.039062 18.632812 L 87.375 18.632812 L 87.375 2.183594 L 98.917969 2.183594 C 100.285156 2.183594 101.492188 2.410156 102.535156 2.871094 C 103.59375 3.332031 104.410156 3.976562 104.984375 4.804688 C 105.574219 5.621094 105.867188 6.570312 105.867188 7.652344 L 105.867188 7.738281 C 105.867188 9.148438 105.457031 10.3125 104.632812 11.230469 C 103.824219 12.148438 102.699219 12.761719 101.257812 13.074219 L 106 18.632812 Z M 102.117188 7.828125 C 102.117188 6.984375 101.953125 6.367188 101.632812 5.984375 C 101.320312 5.597656 100.925781 5.359375 100.4375 5.273438 C 99.953125 5.183594 99.269531 5.136719 98.386719 5.136719 C 97.988281 5.136719 97.652344 5.144531 97.371094 5.160156 C 95.386719 5.207031 93.277344 5.226562 91.039062 5.226562 L 91.039062 10.363281 L 98.386719 10.363281 C 99.269531 10.363281 99.953125 10.324219 100.4375 10.25 C 100.925781 10.164062 101.320312 9.941406 101.632812 9.585938 C 101.953125 9.214844 102.117188 8.628906 102.117188 7.828125 Z"
                    fill="#ffffff"
                  />
                </g>
              </svg>
              <p className="text-xs text-white/70 mb-4 leading-relaxed">
                Offshore Bulletproof Infrastructure Provider
              </p>
              
              {/* Payment Methods */}
              <div className="mb-4">
                <div className="grid grid-cols-4 gap-2">
                  {/* VISA */}
                  <div className="flex items-center justify-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                    <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="26" rx="3" fill="#1434CB"/>
                      <text x="20" y="18" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">VISA</text>
                    </svg>
                  </div>
                  
                  {/* Mastercard */}
                  <div className="flex items-center justify-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                    <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="26" rx="3" fill="#000000"/>
                      <circle cx="15" cy="13" r="6.5" fill="#EB001B"/>
                      <circle cx="25" cy="13" r="6.5" fill="#F79E1B"/>
                      <path d="M20 8.5C21.5 9.5 22.5 11 22.5 13C22.5 15 21.5 16.5 20 17.5C18.5 16.5 17.5 15 17.5 13C17.5 11 18.5 9.5 20 8.5Z" fill="#FF5F00"/>
                    </svg>
                  </div>
                  
                  {/* Bitcoin */}
                  <div className="flex items-center justify-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#F7931A"/>
                      <text x="12" y="17" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">₿</text>
                    </svg>
                  </div>
                  
                  {/* Ethereum */}
                  <div className="flex items-center justify-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0L5.5 12.25L12 16.5L18.5 12.25L12 0Z" fill="#627EEA"/>
                      <path d="M5.5 13.5L12 24L18.5 13.5L12 17.75L5.5 13.5Z" fill="#627EEA"/>
                    </svg>
                  </div>
                  
                  {/* Litecoin */}
                  <div className="flex items-center justify-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#345D9D"/>
                      <text x="12" y="17" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Ł</text>
                    </svg>
                  </div>
                  
                  {/* USDT */}
                  <div className="flex items-center justify-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#26A17B"/>
                      <text x="12" y="17" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">USDT</text>
                    </svg>
                  </div>
                  
                  {/* Tron */}
                  <div className="flex items-center justify-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#FF001B"/>
                      <text x="12" y="17" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">T</text>
                    </svg>
                  </div>
                  
                  {/* TON */}
                  <div className="flex items-center justify-center p-2 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#0088CC"/>
                      <text x="12" y="17" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="white" textAnchor="middle">TON</text>
                    </svg>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-white/40">
                Copyright by DiorHost © {year}
              </p>
            </Link>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {isRu ? "Юридические документы" : "Legal"}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={isRu ? "/ru/public-offer" : "/public-offer"}
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  {isRu ? "Публичная оферта" : "Public offer"}
                </Link>
              </li>
              <li>
                <Link
                  href={isRu ? "/ru/privacy-policy" : "/privacy-policy"}
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  {isRu ? "Политика конфиденциальности" : "Privacy policy"}
                </Link>
              </li>
              <li>
                <Link
                  href={isRu ? "/ru/user-agreement" : "/user-agreement"}
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  {isRu ? "Пользовательское соглашение" : "User agreement"}
                </Link>
              </li>
              <li>
                <Link
                  href={isRu ? "/ru/about" : "/about"}
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  {isRu ? "О компании" : "About"}
                </Link>
              </li>
              <li>
                <Link
                  href={isRu ? "/ru/sla" : "/sla"}
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  SLA
                </Link>
              </li>
              <li>
                <Link
                  href={isRu ? "/ru/abuse-flow" : "/abuse-flow"}
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  {isRu ? "Обработка жалоб" : "Abuse Flow"}
                </Link>
              </li>
              <li>
                <Link
                  href={isRu ? "/ru/dmca-policy" : "/dmca-policy"}
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  DMCA Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {isRu ? "Контакты" : "Contacts"}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:support@dior.host"
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  support@dior.host
                </a>
              </li>
              <li>
                <a
                  href="mailto:abuse@dior.host"
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  abuse@dior.host
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/diorhost"
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/diorhost_news"
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  Telegram news
                </a>
              </li>
              <li>
                <a
                  href="xmpp:diorhost@exploit.in?message"
                  className="text-sm text-white/60 hover:text-[#7a83f3] transition-colors duration-200"
                >
                  Jabber
                </a>
              </li>
            </ul>
          </div>

          {/* Trust Signals Section */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              {isRu ? "Показатели надёжности" : "Trust Signals"}
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <span className="font-medium text-white/80">SSL Rating:</span>{" "}
                <span className="text-white/60">A+ (Qualys)</span>
              </li>
              <li>
                <span className="font-medium text-white/80">Uptime:</span>{" "}
                <span className="text-white/60">99.99% (SLA)</span>
              </li>
              <li>
                <span className="font-medium text-white/80">Locations:</span>{" "}
                <span className="text-white/60">Netherlands (more locations coming soon)</span>
              </li>
              <li>
                <span className="font-medium text-white/80">Peering:</span>{" "}
                <span className="text-white/60">NL-IX, AMS-IX, DE-CIX</span>
              </li>
              <li className="pt-2 border-t border-white/10">
                <span className="font-medium text-white/80">Office:</span>{" "}
                <span className="text-white/60">Amsterdam, Netherlands</span>
              </li>
              <li>
                <span className="font-medium text-white/80">Phone:</span>{" "}
                <span className="text-white/60">+31 (EU) / VoIP available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

