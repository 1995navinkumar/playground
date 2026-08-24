import { useSyncExternalStore } from "react";

const MOBILE_BREAKPOINT = "(max-width: 767px)";

function getIsMobileSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(MOBILE_BREAKPOINT).matches;
}

// Subscribe function for matchMedia changes
function subscribeIsMobile(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};

  const mql = window.matchMedia(MOBILE_BREAKPOINT);

  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

export function useIsMobile(): boolean {
  return useSyncExternalStore(
    subscribeIsMobile,
    getIsMobileSnapshot,
    // Server snapshot: safely defaults to false during SSR
    () => false,
  );
}
