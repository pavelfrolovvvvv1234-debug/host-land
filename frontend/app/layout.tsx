import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";
import "../animations.css";
import "../main.css";
import "./premium-animations.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Analytics } from "../components/Analytics";
import { NavigationTracker } from "../components/NavigationTracker";
import { PRIMARY_ORIGIN } from "../lib/canonical";

const commissioner = Commissioner({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-commissioner"
});

// Build metadata with verification meta tags
const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const metadataBase: Metadata = {
  metadataBase: new URL(PRIMARY_ORIGIN),
  title: "Bulletproof VPS/VDS, Offshore Domains, CDN & Hosting — Secure, No-Logs, Bulletproof Solutions",
  description:
    "Bulletproof VPS, VDS, dedicated servers and offshore domains with DMCA-ignored policies, strict no-logs, private networking, secure CDN options and 24/7 expert support for any high-risk workloads.",
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

// Add verification meta tags if provided
const verificationMetaTags: Record<string, string> = {};
if (bingVerification) {
  verificationMetaTags["msvalidate.01"] = bingVerification;
}
if (googleSiteVerification) {
  verificationMetaTags["google-site-verification"] = googleSiteVerification;
}

export const metadata: Metadata = {
  ...metadataBase,
  ...(Object.keys(verificationMetaTags).length > 0 && {
    other: verificationMetaTags
  })
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body className={`${commissioner.variable} bg-[#080808] text-white min-h-screen`} style={{ fontFamily: "var(--font-commissioner), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <NavigationTracker />
        <Analytics />
        <div className="min-h-screen flex flex-col justify-between items-stretch max-w-screen">
          <header className="relative z-20">
            <Header />
          </header>
          <main className="flex-1 h-full relative z-10">
            <div className="home-container relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 min-h-full">
              {/* Shared ambient background glows — same as homepage */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-hero-glow blur-[100px] opacity-50" />
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
              </div>
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </main>
          <footer className="relative z-20">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}

