import App from "@/App";
import {
  createHashRouter,
  RouterProvider,
  type RouteObject,
} from "react-router";
import { navigationConfig } from "./navigationConfig";

const router = createHashRouter([
  {
    Component: App,
    children: navigationConfig as RouteObject[],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
