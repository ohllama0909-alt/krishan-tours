"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { analyticsConsentStorageKey } from "./CookieConsent";

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setEnabled(localStorage.getItem(analyticsConsentStorageKey) === "granted"));
    const update = (event: Event) => setEnabled((event as CustomEvent<string>).detail === "granted");
    window.addEventListener("krishantours-consent", update);
    return () => window.removeEventListener("krishantours-consent", update);
  }, []);

  if (!measurementId || pathname?.startsWith("/admin") || !enabled) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  );
}
