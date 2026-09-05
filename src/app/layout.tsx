import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { content } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

// TODO: update to the custom domain (e.g. alessandroizzo.com) once it's live —
// keeping this pointed at a domain that isn't serving the site yet breaks
// link previews (Open Graph image, canonical, structured data).
const SITE_URL = "https://alessandro-izzo-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: content.it.meta.title,
  description: content.it.meta.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: content.it.meta.ogTitle,
    description: content.it.meta.ogDescription,
    url: SITE_URL,
    siteName: "Alessandro Izzo",
    locale: "it_IT",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.it.meta.ogTitle,
    description: content.it.meta.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf8",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alessandro Izzo",
  jobTitle: "Community & Digital Growth Specialist",
  url: SITE_URL,
  email: "mailto:izzoalessandro917@gmail.com",
  sameAs: ["https://www.linkedin.com/in/felice-alessandro-izzo-7ba04020b/"],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Campania",
    addressCountry: "IT",
  },
  knowsAbout: [
    "Community Management",
    "Digital Growth",
    "Discord Server Administration",
    "AI-Driven Project Direction",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <body className="flex min-h-full flex-col bg-[var(--color-bg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
