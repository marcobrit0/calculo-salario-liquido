"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider as Provider } from "posthog-js/react";

const posthogKey =
  process.env.NEXT_PUBLIC_POSTHOG_KEY ??
  "phc_mBdhYHMKpamnpkiM94NoCFYLyaGeyrcoMoB7EB6VXtBS";

const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

if (typeof window !== "undefined" && !posthog.__loaded) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
    defaults: "2026-01-30",
    capture_pageview: false,
  });
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const queryString = searchParams.toString();
    const path = queryString ? `${pathname}?${queryString}` : pathname;

    posthog.capture("$pageview", {
      $current_url: window.location.href,
      path,
    });
  }, [pathname, searchParams]);

  return null;
}

function PostHogClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-posthog-event]");

      if (!trackedElement) {
        return;
      }

      posthog.capture(trackedElement.dataset.posthogEvent ?? "link_clicked", {
        label: trackedElement.dataset.posthogLabel,
        href: trackedElement.dataset.posthogHref,
        path: window.location.pathname,
      });
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

export function PostHogAnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider client={posthog}>
      {children}
      <PostHogClickTracker />
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
    </Provider>
  );
}
