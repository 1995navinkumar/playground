import { useColorScheme } from "@hooks/useColorScheme";

import {
  TopNav,
  TopNavActions,
  TopNavBrand,
  TopNavContent,
  TopNavLink,
} from "@ds/TopNav";
import styles from "./app-header.module.css";
import { Hamburger, Menu, Moon, Sun } from "lucide-react";
import { SknkLockup24, SknkLockup28 } from "../svgr";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useNavigationState } from "../Router/useNavigationState";

export function AppHeader() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isMobile = useIsMobile();
  const navigationState = useNavigationState();

  const ColorSchemeIcon = colorScheme === "light" ? Sun : Moon;

  const Logo = isMobile ? SknkLockup24 : SknkLockup28;

  const { l0NavItems, hasL1Children } = navigationState;

  return (
    <header>
      <TopNav>
        <TopNavBrand>
          <a href="/">
            <Logo className="logo" />
          </a>
        </TopNavBrand>
        <TopNavContent>
          {l0NavItems.map((item) => (
            <TopNavLink key={item.path} to={item.path}>
              <div className={styles["nav-item"]}>
                <item.handle.icon size={16} />
                {item.handle.label}
              </div>
            </TopNavLink>
          ))}
        </TopNavContent>
        <TopNavActions>
          <div className={styles["header-actions"]}>
            <button
              className={`button-secondary ${styles["theme-switcher"]}`}
              onClick={toggleColorScheme}
            >
              <ColorSchemeIcon size={isMobile ? 16 : 18} />
            </button>
            {isMobile && hasL1Children && (
              <button
                className={`button-secondary ${styles["theme-switcher"]}`}
              >
                <Menu size={16} />
              </button>
            )}
          </div>
        </TopNavActions>
      </TopNav>
    </header>
  );
}
