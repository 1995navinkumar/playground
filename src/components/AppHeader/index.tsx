import { useColorScheme } from "@hooks/useColorScheme";

import {
  TopNav,
  TopNavActions,
  TopNavBrand,
  TopNavContent,
  TopNavLink,
} from "@ds/TopNav";
import styles from "./app-header.module.css";
import { Moon, Sun } from "lucide-react";
import { SknkLockup24, SknkLockup28 } from "../svgr";
import { useIsMobile } from "@/hooks/useIsMobile";

export function AppHeader() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isMobile = useIsMobile();

  const ColorSchemeIcon = colorScheme === "light" ? Sun : Moon;

  const Logo = isMobile ? SknkLockup24 : SknkLockup28;

  return (
    <header>
      <TopNav>
        <TopNavBrand>
          <a href="/">
            <Logo className="logo" />
          </a>
        </TopNavBrand>
        <TopNavContent>
          <TopNavLink to={"/"}>Home</TopNavLink>
          <TopNavLink to={"/ui-gallery"}>UI Gallery</TopNavLink>
        </TopNavContent>
        <TopNavActions>
          <button
            className={`button-secondary ${styles["theme-switcher"]}`}
            onClick={toggleColorScheme}
          >
            <ColorSchemeIcon size={isMobile ? 16 : 18} />
          </button>
        </TopNavActions>
      </TopNav>
    </header>
  );
}
