import { Navigate } from "react-router";
import { ComponentPlayground } from "../ComponentPlayground";
import { Home } from "../Home";
import type { AppRouteObject } from "./types";
import { AutoComplete } from "../AutoComplete";
import { ResumeGenerator } from "../Resume";
import { BookOpen, House } from "lucide-react";

export const navigationConfig: AppRouteObject[] = [
  {
    path: "/",
    Component: Home,
    handle: {
      label: "Home",
      icon: House,
      id: "home",
    },
  },
  {
    path: "/ui-gallery/*",
    Component: ComponentPlayground,
    handle: {
      label: "UI Gallery",
      icon: BookOpen,
      id: "ui-gallery",
    },
    children: [
      {
        index: true,
        element: <Navigate to={"auto-complete"} />,
      },
      {
        path: "auto-complete",
        Component: AutoComplete,
        handle: {
          label: "Auto Complete",
          id: "auto-complete",
        },
      },
      {
        path: "resume",
        Component: ResumeGenerator,
        handle: {
          label: "Resume Generator",
          id: "resume-generator",
        },
      },
    ],
  },
];
