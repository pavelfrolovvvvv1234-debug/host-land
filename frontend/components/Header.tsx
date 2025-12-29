"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const isRu = pathname?.startsWith("/ru") ?? false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginUrl, setLoginUrl] = useState("https://my.diorhost.com/billmgr?func=logon");
  
  // Получаем URL для входа на основе текущего домена
  // Поддерживаемые домены: diorhost.com, diorhost.net, diors.host, d1or.host, d1ior.com
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      
      // Если localhost или локальный IP, используем дефолтный домен
      if (hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("192.168.") || hostname.startsWith("10.")) {
        setLoginUrl("https://my.diorhost.com/billmgr?func=logon");
        return;
      }
      
      // Убираем порт если есть
      let cleanHostname = hostname.split(':')[0];
      
      // Убираем поддомены если есть (www., app. и т.д.), оставляем только основной домен
      // Но сохраняем поддомены my. и vm. если они уже есть
      if (cleanHostname.startsWith("my.") || cleanHostname.startsWith("vm.")) {
        // Если уже на my. или vm., просто используем текущий домен
        setLoginUrl(`https://${cleanHostname}/billmgr?func=logon`);
        return;
      }
      
      // Убираем www. и другие поддомены для получения основного домена
      const parts = cleanHostname.split('.');
      if (parts.length > 2 && !['my', 'vm'].includes(parts[0])) {
        // Если есть поддомен (например, www.diorhost.com), берем основной домен
        cleanHostname = parts.slice(-2).join('.');
      }
      
      // Формируем URL с my. + текущий домен
      // Работает для: diorhost.com -> my.diorhost.com, diorhost.net -> my.diorhost.net,
      // diors.host -> my.diors.host, d1or.host -> my.d1or.host, d1ior.com -> my.d1ior.com
      const myDomain = `my.${cleanHostname}`;
      const url = `https://${myDomain}/billmgr?func=logon`;
      
      // Отладка
      console.log("Login URL:", url, "Hostname:", hostname, "Clean hostname:", cleanHostname);
      setLoginUrl(url);
    }
  }, []);

  const basePath =
    isRu && pathname
      ? pathname.replace(/^\/ru/, "") || "/"
      : pathname || "/";

  const enHref = basePath === "" ? "/" : basePath;
  const ruHref = basePath === "/" ? "/ru" : `/ru${basePath}`;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <Link href={isRu ? "/ru" : "/"} className="nav-logo block" aria-label="Dior Host home">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="109"
                  height="21"
                  viewBox="0 0 106 21"
                  className="nav-logo"
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
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-sm">
                <Link
                  href={isRu ? "/ru" : "/"}
                  className="rounded-md px-3 py-2 font-medium text-gray-200 transition-colors duration-300"
                  aria-current="page"
                >
                  {isRu ? "Главная" : "Home"}
                </Link>
                <Link
                  href={isRu ? "/ru/services" : "/services"}
                  className="rounded-md px-3 py-2 font-medium text-gray-200 hover:text-white transition-colors duration-300"
                >
                  {isRu ? "Услуги" : "Services"}
                </Link>
                <Link
                  href={isRu ? "/ru/blog" : "/blog"}
                  className="rounded-md px-3 py-2 font-medium text-gray-200 hover:text-white transition-colors duration-300"
                >
                  {isRu ? "Блог" : "Blog"}
                </Link>
                <Link
                  href={isRu ? "/ru/wiki" : "/wiki"}
                  className="rounded-md px-3 py-2 font-medium text-gray-200 hover:text-white transition-colors duration-300"
                >
                  {isRu ? "База знаний" : "Knowledge base"}
                </Link>
                <Link
                  href={isRu ? "/ru/affilate_program" : "/affilate_program"}
                  className="rounded-md px-3 py-2 font-medium text-gray-200 hover:text-white transition-colors duration-300"
                >
                  {isRu ? "Реферальная система" : "Affiliate program"}
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:flex gap-2 items-center">
            <a
              href={loginUrl}
              className="flex justify-center items-center border rounded border-[#303030] px-2 h-[37px] bg-zinc-950 text-white text-sm"
            >
              {isRu ? "Войти" : "Log in"}
            </a>
            <ul className="languages flex gap-2">
              <Link
                href={enHref}
                locale={false}
                className="border rounded border-[#303030] p-2 lang-switcher"
                aria-label="English"
                aria-current={isRu ? undefined : "page"}
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                >
                  <path fill="#012169" d="M0 0h640v480H0z" />
                  <path
                    fill="#FFF"
                    d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
                  />
                  <path
                    fill="#C8102E"
                    d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
                  />
                  <path
                    fill="#FFF"
                    d="M241 0v480h160V0zM0 160v160h640V160z"
                  />
                  <path
                    fill="#C8102E"
                    d="M0 193v96h640v-96zM273 0v480h96V0z"
                  />
                </svg>
              </Link>
              <Link
                href={ruHref}
                locale={false}
                className="border rounded border-[#303030] p-2 lang-switcher"
                aria-label="Русский"
                aria-current={isRu ? "page" : undefined}
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 480"
                >
                  <path fill="#fff" d="M0 0h640v160H0z" />
                  <path fill="#0039a6" d="M0 160h640v160H0z" />
                  <path fill="#d52b1e" d="M0 320h640v160H0z" />
                </svg>
              </Link>
            </ul>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md bg-zinc-950 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              {isMenuOpen ? (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href={isRu ? "/ru" : "/"}
              onClick={closeMenu}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 transition-colors duration-300"
            >
              {isRu ? "Главная" : "Home"}
            </Link>
            <Link
              href={isRu ? "/ru/services" : "/services"}
              onClick={closeMenu}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:text-white transition-colors duration-300"
            >
              {isRu ? "Услуги" : "Services"}
            </Link>
            <Link
              href={isRu ? "/ru/blog" : "/blog"}
              onClick={closeMenu}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:text-white transition-colors duration-300"
            >
              {isRu ? "Блог" : "Blog"}
            </Link>
            <Link
              href={isRu ? "/ru/wiki" : "/wiki"}
              onClick={closeMenu}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:text-white transition-colors duration-300"
            >
              {isRu ? "База знаний" : "Knowledge base"}
            </Link>
            <Link
              href={isRu ? "/ru/affilate_program" : "/affilate_program"}
              onClick={closeMenu}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:text-white transition-colors duration-300"
            >
              {isRu ? "Реферальная система" : "Affiliate program"}
            </Link>
            
            <div className="border-t border-white/10 pt-4 pb-3">
              <a
                href={loginUrl}
                className="block rounded-md px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                {isRu ? "Войти" : "Log in"}
              </a>
              
              <div className="mt-3 flex gap-2 px-3">
                <Link
                  href={enHref}
                  locale={false}
                  onClick={closeMenu}
                  className="border rounded border-[#303030] p-2 lang-switcher"
                  aria-label="English"
                  aria-current={isRu ? undefined : "page"}
                >
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 480"
                  >
                    <path fill="#012169" d="M0 0h640v480H0z" />
                    <path
                      fill="#FFF"
                      d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
                    />
                    <path
                      fill="#C8102E"
                      d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
                    />
                    <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
                    <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
                  </svg>
                </Link>
                <Link
                  href={ruHref}
                  locale={false}
                  onClick={closeMenu}
                  className="border rounded border-[#303030] p-2 lang-switcher"
                  aria-label="Русский"
                  aria-current={isRu ? "page" : undefined}
                >
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 480"
                  >
                    <path fill="#fff" d="M0 0h640v160H0z" />
                    <path fill="#0039a6" d="M0 160h640v160H0z" />
                    <path fill="#d52b1e" d="M0 320h640v160H0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

