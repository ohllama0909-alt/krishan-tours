import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { I18nProvider } from "@/components/I18nProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { getI18n } from "@/lib/i18n/server";
import { direction } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site";

const display = Cormorant_Garamond({ subsets:["latin"], variable:"--font-display", weight:["400"], style:["normal","italic"], display:"optional" });
const sans = Manrope({ subsets:["latin"], variable:"--font-sans", display:"swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default:"Krishan Tours Sri Lanka | Private Driver & Custom Sri Lanka Tours", template:"%s | Krishan Tours Sri Lanka" },
  description:"Krishan Tours Sri Lanka is a Panadura-based private tour and driver service offering custom trips throughout Sri Lanka. Personal driver-guides, tailor-made itineraries, and reliable airport transfers.",
  keywords:[
    "Krishan Tours Sri Lanka",
    "Sri Lanka private driver",
    "Sri Lanka private tours",
    "Panadura tour operator",
    "Sri Lanka tour packages",
    "airport transfer Sri Lanka",
    "Sigiriya Kandy Ella tour",
    "Sri Lanka 7 day tour",
    "Sri Lanka 10 day tour",
    "Sri Lanka 14 day tour",
    "Krishan Tours",
    "private driver Sri Lanka",
    "tailor-made Sri Lanka holidays"
  ],
  applicationName:"Krishan Tours Sri Lanka",
  creator:"Krishan Tours Sri Lanka",
  publisher:"Krishan Tours Sri Lanka",
  category:"travel",
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
  alternates:{ canonical:"/" },
  openGraph:{
    title:"Krishan Tours Sri Lanka | Private Driver & Custom Sri Lanka Tours",
    description:"Krishan Tours Sri Lanka is a Panadura-based private tour and driver service offering custom trips throughout Sri Lanka.",
    url:siteConfig.url,
    siteName:"Krishan Tours Sri Lanka",
    locale:"en_GB",
    type:"website",
    images:[{
      url:`${siteConfig.url}/images/og-image.jpg`,
      secureUrl:`${siteConfig.url}/images/og-image.jpg`,
      width:1200,
      height:630,
      alt:"Krishan Tours Sri Lanka - Private Driver & Custom Sri Lanka Tours",
      type:"image/jpeg"
    }]
  },
  twitter:{
    card:"summary_large_image",
    title:"Krishan Tours Sri Lanka | Private Driver & Custom Sri Lanka Tours",
    description:"Krishan Tours Sri Lanka is a Panadura-based private tour and driver service offering custom trips throughout Sri Lanka.",
    images:[`${siteConfig.url}/images/og-image.jpg`]
  },
  icons:{
    icon:[
      { url:"/favicon.ico", sizes:"any" },
      { url:"/icon.svg", type:"image/svg+xml" },
      { url:"/icon.png", type:"image/png", sizes:"512x512" },
      { url:"/icons/icon-48x48.png", type:"image/png", sizes:"48x48" },
      { url:"/icons/icon-96x96.png", type:"image/png", sizes:"96x96" },
      { url:"/icons/icon-192x192.png", type:"image/png", sizes:"192x192" },
      { url:"/icons/icon-512x512.png", type:"image/png", sizes:"512x512" },
    ],
    apple:[
      { url:"/apple-touch-icon.png", sizes:"180x180", type:"image/png" },
    ],
    shortcut:"/favicon.ico",
  },
  manifest: "/site.webmanifest",
};
export const viewport: Viewport = { themeColor:"#17382b", width:"device-width", initialScale:1 };

export default async function RootLayout({children}:{children:React.ReactNode}) {
  const { locale, t, catalog } = await getI18n();
  const sameAsLinks = Object.values(siteConfig.social).filter(Boolean);
  const schema = {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "name": "Krishan Tours Sri Lanka",
    "legalName": "Krishan Tours Sri Lanka",
    "alternateName": ["Krishan Tours", "KrishanTours", "Krishan Tours Panadura", "Krishan Tours Sri Lanka Panadura"],
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/icon.png`,
    "image": `${siteConfig.url}/images/og-image.jpg`,
    "description": "Krishan Tours Sri Lanka is a Panadura-based private tour and driver service offering custom trips throughout Sri Lanka.",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${siteConfig.address.street}, ${siteConfig.address.locality}`,
      "addressLocality": siteConfig.address.city,
      "addressRegion": siteConfig.address.region,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.7132,
      "longitude": 79.9074
    },
    "founder": {
      "@type": "Person",
      "name": "Krishan",
      "jobTitle": "Founder & Licensed Private Driver-Guide"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Sri Lanka"
      },
      {
        "@type": "City",
        "name": "Panadura"
      }
    ],
    "sameAs": sameAsLinks
  };
  return (
    <html lang={locale} dir={direction(locale)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${display.variable} ${sans.variable}`}>
        <I18nProvider locale={locale} catalog={catalog}>
          <a href="#main" className="fixed left-3 top-3 z-[100] -translate-y-24 bg-paper px-4 py-3 text-sm focus:translate-y-0">{t("Skip to content")}</a>
          <Header/>
          <main id="main">{children}</main>
          <Footer/>
          <WhatsAppCTA/>
          <CookieConsent/>
          <GoogleAnalytics measurementId={siteConfig.gaMeasurementId}/>
        </I18nProvider>
      </body>
    </html>
  );
}
