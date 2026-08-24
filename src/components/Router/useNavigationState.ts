import { useMatches } from "react-router";
import { useMemo } from "react";
import type { AppNonIndexRouteObject, NavMetadata } from "./types";
import { navigationConfig } from "./navigationConfig";

export interface ActiveNavState {
  hasL1Children: boolean;
  hasL2Children: boolean;
  l1NavItems: AppNonIndexRouteObject[];
  l0NavItems: AppNonIndexRouteObject[];
}

export function useNavigationState(): ActiveNavState {
  // Pass NavMetadata as the second generic parameter to type match.handle properly
  const matches = useMatches() as Array<{
    handle?: NavMetadata;
    pathname: string;
  }>;

  return useMemo(() => {
    // Collect handles for all matched routes that define navigation metadata
    const activeHandles = matches
      .map((m) => m.handle)
      .filter((handle): handle is NavMetadata => Boolean(handle?.label));

    const L0RouteId = activeHandles[0].id;

    const L0RouteConfig = navigationConfig.find(
      (nav) => nav?.handle.id === L0RouteId,
    );

    console.log(L0RouteConfig);

    const l1NavItems =
      L0RouteConfig?.children?.filter(
        (child): child is AppNonIndexRouteObject => !!child?.handle,
      ) ?? [];

    // Depth checks based on matched levels
    const hasL1Children = activeHandles.length > 1;
    const hasL2Children = activeHandles.length > 2;

    const l0NavItems = navigationConfig
      .filter((nav): nav is AppNonIndexRouteObject => !!nav.path)
      .map((nav) => ({ ...nav, path: cleanBasePath(nav.path) }));

    return {
      hasL1Children,
      hasL2Children,
      l0NavItems,
      l1NavItems,
    };
  }, [matches]);
}

export function cleanBasePath(path?: string): string {
  if (!path) return "";
  return path.replace(/\/\*$/, "").replace(/\/$/, "");
}
