import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export function proxy(request: NextRequest) {
  const existingLocale = request.headers.get("x-krishantours-locale");
  if (existingLocale && isLocale(existingLocale)) {
    return NextResponse.next();
  }

  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const locale = isLocale(segments[0]) ? segments[0] : defaultLocale;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-krishantours-locale", locale);

  const currentCookie = requestHeaders.get("cookie") || "";
  const cleanedCookie = currentCookie
    .split("; ")
    .filter((c) => !c.startsWith("krishantours_locale="))
    .join("; ");
  requestHeaders.set(
    "cookie",
    cleanedCookie ? `${cleanedCookie}; krishantours_locale=${locale}` : `krishantours_locale=${locale}`
  );

  if (locale === defaultLocale) return NextResponse.next({ request: { headers: requestHeaders } });

  const url = request.nextUrl.clone();
  url.protocol = "http:";
  url.pathname = `/${segments.slice(1).join("/")}`;
  const response = NextResponse.rewrite(url, { request: { headers: requestHeaders } });
  response.cookies.set("krishantours_locale", locale, { path: "/", maxAge: 31536000, sameSite: "lax" });
  response.headers.set("x-krishantours-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!api|admin|_next/static|_next/image|favicon.ico|icon.svg|icon.png|apple-touch-icon.png|icons|site.webmanifest|robots.txt|sitemap.xml|images|video).*)"],
};
