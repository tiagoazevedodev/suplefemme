import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE } from "@/lib/config";
import { ingredients } from "@/lib/content";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Suplemento natural feminino com Feno Grego, Maca Peruana e Long Jack. Apoio à libido, energia, equilíbrio hormonal e bem-estar — formulado por farmácia de manipulação.",
  keywords: [
    "suplemento libido feminina",
    "suplemento natural feminino",
    "maca peruana",
    "feno grego",
    "long jack",
    "tongkat ali",
    "energia feminina",
    "equilíbrio hormonal",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Três fitoterápicos tradicionais para apoiar libido, energia e bem-estar feminino.",
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: SITE.name,
    description:
      "Suplemento dietético natural feminino formulado com Feno Grego, Maca Peruana e Long Jack. Apoio à libido, energia e equilíbrio hormonal.",
    brand: { "@type": "Brand", name: SITE.name },
    category: "Suplemento dietético",
    additionalProperty: ingredients.map((i) => ({
      "@type": "PropertyValue",
      name: i.name,
      value: i.dose,
    })),
  };

  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
        />
      </body>
    </html>
  );
}
