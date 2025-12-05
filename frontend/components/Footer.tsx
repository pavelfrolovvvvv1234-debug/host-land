"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isRu = pathname?.startsWith("/ru") ?? false;
  const year = new Date().getFullYear();

  return (
    <footer className="min-w-full bg-[#000000] p-2 border-t border-white/10">
      <div className="flex justify-start flex-wrap mx-auto max-w-7xl">
        <div className="p-4 shrink-0 md:mx-auto">
          <Link href={isRu ? "/ru" : "/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="109"
              height="21"
              viewBox="0 0 106 21"
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
          </Link>
          <p className="text-xs mt-2 text-[#3a3a3a]">
            Copyright by DiorHost © {year}.
          </p>
        </div>

        <div className="p-4 flex gap-4 mx-auto text-sm text-zinc-600 flex-wrap">
          <ul>
            <li>
              <span className="font-bold text-sm">{isRu ? "Юридические документы" : "Legal"}</span>
            </li>
            <li className="mt-2">
              <Link
                href={isRu ? "/ru/public-offer" : "/public-offer"}
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                {isRu ? "Публичная оферта" : "Public offer"}
              </Link>
            </li>
            <li>
              <Link
                href={isRu ? "/ru/privacy-policy" : "/privacy-policy"}
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                {isRu ? "Политика конфиденциальности" : "Privacy policy"}
              </Link>
            </li>
            <li>
              <Link
                href={isRu ? "/ru/user-agreement" : "/user-agreement"}
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                {isRu ? "Пользовательское соглашение" : "User agreement"}
              </Link>
            </li>
            <li>
              <Link href={isRu ? "/ru/about" : "/about"} className="text-zinc-600 hover:text-[#7a83f3]">
                {isRu ? "О компании" : "About"}
              </Link>
            </li>
            <li>
              <Link href={isRu ? "/ru/sla" : "/sla"} className="text-zinc-600 hover:text-[#7a83f3]">
                SLA
              </Link>
            </li>
            <li>
              <Link
                href={isRu ? "/ru/abuse-flow" : "/abuse-flow"}
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                {isRu ? "Обработка жалоб" : "Abuse Flow"}
              </Link>
            </li>
            <li>
              <Link
                href={isRu ? "/ru/dmca-policy" : "/dmca-policy"}
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                {isRu ? "DMCA Policy" : "DMCA Policy"}
              </Link>
            </li>
          </ul>

          <ul>
            <li>
              <span className="font-bold text-sm">{isRu ? "Контакты" : "Contacts"}</span>
            </li>
            <li className="mt-2">
              <a
                href="mailto:support@dior.host"
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                support@dior.host
              </a>
            </li>
            <li>
              <a
                href="https://t.me/diorhost_news"
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                Telegram news
              </a>
            </li>
            <li>
              <a
                href="mailto:abuse@dior.host"
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                abuse@dior.host
              </a>
            </li>
            <li>
              <a
                href="https://t.me/diorhost"
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="xmpp:diorhost@exploit.in?message"
                className="text-zinc-600 hover:text-[#7a83f3]"
              >
                Jabber
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <span className="font-bold text-sm">{isRu ? "Способы оплаты" : "Payment Methods"}</span>
            </li>
            <li className="mt-2">
              <div className="flex flex-wrap gap-2 items-center">
                {/* VISA */}
                <div className="bg-white rounded px-2.5 py-1.5 flex items-center justify-center border border-gray-200" style={{ minWidth: '50px', height: '32px' }}>
                  <svg width="45" height="14" viewBox="0 0 45 14" fill="none">
                    <path d="M19.5 2.5L17.2 11.5H15L17.3 2.5H19.5ZM28.5 2.8C29.2 2.5 30 2.3 30.8 2.3C31.8 2.3 32.5 2.7 32.5 3.5C32.5 4.5 31.5 5 30 5.5C28.8 6 28.2 6.3 28.2 7C28.2 7.5 28.6 8 29.5 8C30.2 8 30.8 7.8 31.3 7.5L31.8 9.2C31.2 9.6 30.3 10 29.2 10C28 10 27.2 9.5 27.2 8.5C27.2 7.3 28.3 6.8 29.8 6.3C31 5.9 31.5 5.6 31.5 5C31.5 4.5 31 4 30 4C29.2 4 28.5 4.2 28 4.5L27.5 2.8H28.5ZM35.5 2.5L32.5 9.5L32 7.5L30.5 2.5H28L31 11.5H33.5L37 2.5H35.5ZM23.5 2.5L20.5 11.5H22.8L23.2 9.5H26.2L26.5 11.5H28.8L25.5 2.5H23.5ZM24.5 6.5L25.5 4.5L26.2 6.5H24.5Z" fill="#1434CB"/>
                    <path d="M12.5 2.5L9.5 8.5L9.2 6.5L7.5 2.5H5L8.5 11.5H10.8L14.5 2.5H12.5Z" fill="#1434CB"/>
                  </svg>
                </div>
                
                {/* Mastercard */}
                <div className="bg-white rounded px-2.5 py-1.5 flex items-center justify-center border border-gray-200" style={{ minWidth: '50px', height: '32px' }}>
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                    <circle cx="14" cy="12" r="8" fill="#EB001B"/>
                    <circle cx="26" cy="12" r="8" fill="#F79E1B"/>
                    <path d="M20 6.5C18.8 7.3 18 8.5 18 10C18 11.5 18.8 12.7 20 13.5C21.2 12.7 22 11.5 22 10C22 8.5 21.2 7.3 20 6.5Z" fill="#FF5F00"/>
                  </svg>
                </div>
                
                {/* CryptoBot */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded px-2.5 py-1.5 flex items-center justify-center" style={{ minWidth: '70px', height: '32px' }}>
                  <svg width="65" height="18" viewBox="0 0 65 18" fill="none">
                    <text x="2" y="14" fill="white" fontSize="12" fontWeight="600" fontFamily="Arial, sans-serif">CryptoBot</text>
                  </svg>
                </div>
                
                {/* BTC */}
                <div className="bg-[#F7931A] rounded px-2 py-1.5 flex items-center justify-center" style={{ minWidth: '40px', height: '32px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#F7931A"/>
                    <path d="M12.5 6.5C15.5 6.5 17.5 7.5 17.5 9.5C17.5 11 16.5 12 14.5 12.5C15.5 13 16 14 16 15C16 17 14 18 11 18H7.5V6.5H12.5ZM11 9.5V11.5H13C14 11.5 14.5 11 14.5 10.5C14.5 9.5 13.5 9.5 13 9.5H11ZM11 13.5V15.5H13.5C14.5 15.5 15 15 15 14.5C15 13.5 14 13.5 13.5 13.5H11Z" fill="white"/>
                  </svg>
                </div>
                
                {/* ETH */}
                <div className="bg-[#627EEA] rounded px-2 py-1.5 flex items-center justify-center" style={{ minWidth: '40px', height: '32px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L5 12L12 15L19 12L12 2Z" fill="#627EEA"/>
                    <path d="M12 16L5 13L12 22L19 13L12 16Z" fill="#627EEA"/>
                  </svg>
                </div>
                
                {/* LTC */}
                <div className="bg-[#BFBBBB] rounded px-2 py-1.5 flex items-center justify-center" style={{ minWidth: '40px', height: '32px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#BFBBBB"/>
                    <path d="M8 10L7 15H16L16.5 13H9L9.5 11H17L17.5 9H8L8 10Z" fill="white"/>
                  </svg>
                </div>
                
                {/* USDT */}
                <div className="bg-[#26A17B] rounded px-2.5 py-1.5 flex items-center justify-center" style={{ minWidth: '50px', height: '32px' }}>
                  <svg width="38" height="20" viewBox="0 0 38 20" fill="none">
                    <circle cx="19" cy="10" r="9" fill="#26A17B"/>
                    <path d="M19 5L15 6.5V9.5C15 9.5 15 12 19 12C23 12 23 9.5 23 9.5V6.5L19 5Z" fill="white"/>
                    <path d="M15 13.5V16.5L19 18L23 16.5V13.5L19 15.5L15 13.5Z" fill="white" opacity="0.6"/>
                  </svg>
                </div>
                
                {/* TRX */}
                <div className="bg-[#EF0027] rounded px-2.5 py-1.5 flex items-center justify-center" style={{ minWidth: '45px', height: '32px' }}>
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                    <circle cx="16" cy="10" r="9" fill="#EF0027"/>
                    <path d="M16 5L11 7.5V12.5L16 15L21 12.5V7.5L16 5ZM16 16.5L9.5 13V17.5L16 21L22.5 17.5V13L16 16.5Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </li>
          </ul>

          <div className="p-4 mx-auto">
            <ul className="text-xs text-zinc-600 space-y-1">
              <li>
                <span className="font-bold text-sm">Trust Signals</span>
              </li>
              <li className="mt-2">
                <strong>SSL Rating:</strong> A+ (Qualys)
              </li>
              <li>
                <strong>Uptime:</strong> 99.99% (SLA)
              </li>
              <li>
                <strong>Locations:</strong> NL, DE, RO, MD
              </li>
              <li>
                <strong>Peering:</strong> NL-IX, AMS-IX, DE-CIX
              </li>
              <li className="mt-2">
                <strong>Office:</strong> Amsterdam, Netherlands
              </li>
              <li>
                <strong>Phone:</strong> +31 (EU) / VoIP available
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

