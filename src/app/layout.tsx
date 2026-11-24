import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Schibsted_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/content";
import { site } from "@/config/site";
import "./globals.css";

// Self-hosted at build time by next/font: no request to Google from visitors.
const display = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  display: "swap",
});
const text = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
const mono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
  preload: false,
});

const t = getDictionary("fr");

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: t.home.meta.title, template: "%s | Tikéo" },
  description: t.home.meta.description,
  applicationName: site.name,
  openGraph: { type: "website", locale: "fr_CI", siteName: site.name },
  // Keep search engines out until launch (NEXT_PUBLIC_SITE_LIVE=true).
  robots: site.live ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#1f3fd1",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr-CI" className={`${display.variable} ${text.variable} ${mono.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-ui focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
        >
          {t.skipLink}
        </a>
        <Header t={t.nav} />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <Footer t={t} />
      </body>
    </html>
  );
}
