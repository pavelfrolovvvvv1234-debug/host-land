"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const legalPages = [
  { href: "/public-offer", title: "Public Offer", titleRu: "Публичная оферта" },
  { href: "/privacy-policy", title: "Privacy Policy", titleRu: "Политика конфиденциальности" },
  { href: "/user-agreement", title: "User Agreement", titleRu: "Пользовательское соглашение" },
  { href: "/about", title: "About", titleRu: "О компании" },
  { href: "/sla", title: "SLA", titleRu: "SLA" },
  { href: "/abuse-flow", title: "Abuse Flow", titleRu: "Обработка жалоб" },
  { href: "/dmca-policy", title: "DMCA Policy", titleRu: "DMCA Policy" }
];

export function LegalLayout({ children, title, description }: LegalLayoutProps) {
  const pathname = usePathname();
  const isRu = pathname?.startsWith("/ru") ?? false;
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], h2[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-8">
              <div className="bg-black/40 border border-white/10 rounded-xl p-4">
                <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-4">
                  {isRu ? "Юридические документы" : "Legal Documents"}
                </h2>
                <ul className="space-y-2">
                  {legalPages.map((page) => {
                    const isActive = pathname === page.href || pathname === `/ru${page.href}`;
                    return (
                      <li key={page.href}>
                        <Link
                          href={isRu ? `/ru${page.href}` : page.href}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {isRu ? page.titleRu : page.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-black/40 border border-white/10 rounded-xl p-8 prose prose-invert max-w-none">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-4 text-white"
              >
                {title}
              </motion.h1>
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-xl text-white/70 mb-8"
                >
                  {description}
                </motion.p>
              )}
              <div className="legal-content">{children}</div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

