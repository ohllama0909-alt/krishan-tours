import type { Metadata } from "next";
import { locales, localizeHref, type Locale } from "./config";
import { getI18n } from "./server";
import { siteConfig } from "@/lib/site";

const ogLocaleMap: Record<Locale, string> = {
  en: "en_GB",
  ar: "ar_AE",
  cs: "cs_CZ",
  fr: "fr_FR",
  pl: "pl_PL",
  de: "de_DE",
};

export async function localizedMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description?: string;
  path: string;
  image?: string;
}): Promise<Metadata> {
  const { locale, t } = await getI18n();
  const canonicalPath = localizeHref(path, locale);
  const canonicalUrl = `${siteConfig.url}${canonicalPath.startsWith("/") ? "" : "/"}${canonicalPath === "/" ? "" : canonicalPath}`;
  const translatedTitle = t(title);
  const translatedDesc = description ? t(description) : undefined;

  // Resolve compatible Open Graph and Twitter image (JPEG/PNG for WhatsApp/iMessage compatibility)
  const defaultOgImage = `${siteConfig.url}/images/og-image.jpg`;
  let resolvedImageUrl = defaultOgImage;

  if (image) {
    const safeImage = image.endsWith(".webp") ? image.replace(/\.webp$/, ".jpg") : image;
    resolvedImageUrl = safeImage.startsWith("http")
      ? safeImage
      : `${siteConfig.url}${safeImage.startsWith("/") ? "" : "/"}${safeImage}`;
  }

  const ogImageObj = {
    url: resolvedImageUrl,
    secureUrl: resolvedImageUrl,
    width: 1200,
    height: 630,
    alt: translatedTitle,
    type: resolvedImageUrl.endsWith(".png") ? "image/png" : "image/jpeg",
  };

  return {
    title: translatedTitle,
    description: translatedDesc,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(locales.map((item) => [item, `${siteConfig.url}${localizeHref(path, item)}`])),
    },
    openGraph: {
      title: translatedTitle,
      description: translatedDesc,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: ogLocaleMap[locale] || "en_GB",
      type: "website",
      images: [ogImageObj],
    },
    twitter: {
      card: "summary_large_image",
      title: translatedTitle,
      description: translatedDesc,
      images: [resolvedImageUrl],
    },
  };
}
