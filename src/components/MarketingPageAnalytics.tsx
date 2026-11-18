"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";

export default function MarketingPageAnalytics() {
  const pathname = usePathname();
  const lastTrackedPath = useRef("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currentAttribution = {
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
    };
    try {
      const key = "hempon:first-touch-attribution";
      if (!sessionStorage.getItem(key) && Object.values(currentAttribution).some(Boolean)) {
        sessionStorage.setItem(key, JSON.stringify(currentAttribution));
      }
    } catch {
      // Analytics attribution is optional and must not block page rendering.
    }
    if (!posthog.__loaded || lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;
    const [root, slug] = pathname.split("/").filter(Boolean);
    const pageType = root ? root.replaceAll("-", "_") : "home";
    posthog.capture("marketing_page_viewed", {
      page_type: pageType,
      page_path: pathname,
      page_slug: slug ?? null,
    });
  }, [pathname]);

  return null;
}
