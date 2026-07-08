import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { siteDescription, siteTitle, siteUrl } from "@/data/seo";
import "./globals.css";

const heroImage = "/images/temple-hero.png";

const templeStructuredData = {
  "@context": "https://schema.org",
  "@type": "HinduTemple",
  name: "Sri Durgaparameshwari Temple",
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}${heroImage}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kallubettu, Nainadu",
    addressRegion: "Karnataka",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9722764,
    longitude: 75.1440808
  },
  hasMap:
    "https://www.google.com/maps/place/Sri+Durgaparameshwari+Temple,+Kallubettu,+Nainadu/@12.9722764,75.1440808,10z/"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteTitle,
  title: {
    default: siteTitle,
    template: "%s | Sri Durgaparameshwari Temple"
  },
  description: siteDescription,
  keywords: [
    "Sri Durgaparameshwari Temple",
    "Durgaparameshwari Temple Kallubettu",
    "Kallubettu temple",
    "Nainadu temple",
    "Karnataka Hindu temple",
    "temple sevas",
    "e-hundi"
  ],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: "Sri Durgaparameshwari Temple inspired temple exterior"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [heroImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(templeStructuredData).replace(
              /</g,
              "\\u003c"
            )
          }}
        />
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
