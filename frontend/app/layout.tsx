import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";
import "../animations.css";
import "../main.css";
import "./premium-animations.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const commissioner = Commissioner({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-commissioner"
});

export const metadata: Metadata = {
  title: "Bulletproof VPS, VDS & Offshore Hosting | Dior Host",
  description:
    "Abuse-resistant VPS, VDS, dedicated servers and domains in offshore EU & US locations with DMCA-ignored policies, 24/7 support and privacy-first operations.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "any", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body className={`${commissioner.variable} bg-[#080808] text-white min-h-screen`} style={{ fontFamily: "var(--font-commissioner), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <div className="min-h-screen flex flex-col justify-between items-stretch max-w-screen">
          <Header />
          <main className="flex-1 h-full relative">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-full relative">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

