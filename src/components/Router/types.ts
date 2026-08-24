import type { RouteObject, NonIndexRouteObject } from "react-router";
import { type ComponentType } from "react";

export interface NavMetadata {
  label: string;
  id: string;
  icon?: ComponentType<{ className?: string }>;
  hideInMobileNav?: boolean;
  hideInDesktopNav?: boolean;
}

// Extend standard React Router objects with custom handle shape
export type AppRouteObject = Omit<RouteObject, "children"> & {
  handle?: NavMetadata;
  children?: AppRouteObject[];
};

export type AppNonIndexRouteObject = Omit<NonIndexRouteObject, "children"> & {
  handle?: NavMetadata;
  children?: AppRouteObject[];
  path: string;
};
