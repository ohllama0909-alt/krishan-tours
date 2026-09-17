import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { tours } from "@/data/tours";
import { experiences } from "@/data/experiences";
import { stories } from "@/data/stories";
import { siteConfig } from "@/lib/site";
import { locales, localizeHref } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const targetRoutes = [
    "/sri-lanka-private-driver",
    "/sri-lanka-private-tours",
    "/sri-lanka-tour-packages",
    "/airport-transfer-sri-lanka",
    "/sigiriya-kandy-ella-tour",
    "/sri-lanka-7-day-tour",
    "/sri-lanka-10-day-tour",
    "/sri-lanka-14-day-tour",
  ];
  const staticRoutes = [
    "",
    "/destinations",
    "/tours",
    "/experiences",
    "/plan-your-trip",
    "/about",
    "/stories",
    "/contact",
  ];
  const routes = [
    ...staticRoutes.map((route) => ({
      route: route || "/",
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...targetRoutes.map((route) => ({
      route,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    })),
    ...destinations.map((d) => ({
      route: `/destinations/${d.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...tours.map((t) => ({
      route: `/tours/${t.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...experiences.map((e) => ({
      route: `/experiences/${e.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...stories.map((s) => ({
      route: `/stories/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
  return routes.flatMap(item=>locales.map(locale=>({url:`${siteConfig.url}${localizeHref(item.route,locale)}`,changeFrequency:item.changeFrequency,priority:item.priority,alternates:{languages:Object.fromEntries(locales.map(language=>[language,`${siteConfig.url}${localizeHref(item.route,language)}`]))}})));
}
