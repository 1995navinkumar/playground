import { useEffect, useState } from "react";
import { getCookie, setCookie } from "typescript-cookie";

export type colorScheme = "dark" | "light";
export type UseColorScheme = {
  colorScheme: colorScheme;
  setColorScheme: (color: colorScheme) => void;
  toggleColorScheme: () => void;
};

export function useColorScheme(): UseColorScheme {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">(() => {
    const deviceScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const preferredScheme = getCookie("color-scheme") as colorScheme;
    return preferredScheme || deviceScheme;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", colorScheme);
    setCookie("color-scheme", colorScheme);
  }, [colorScheme]);

  const toggleColorScheme = () => {
    if (colorScheme === "light") {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  };

  return { colorScheme, setColorScheme, toggleColorScheme };
}
