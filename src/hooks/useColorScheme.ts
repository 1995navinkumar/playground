import { useEffect, useState } from "react";

export function useColorScheme(): "dark" | "light" {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const deviceScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const dataThemeElement = document.querySelector(`[data-theme]`);
    const appTheme = dataThemeElement?.getAttribute("data-theme");
    return appTheme ? (appTheme === "light" ? "light" : "dark") : deviceScheme;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return theme;
}
