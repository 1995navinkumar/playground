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
import { useNavigationState } from "../Router/useNavigationState";

export function AppHeader() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isMobile = useIsMobile();
  const navigationState = useNavigationState();
  console.log(navigationState);

  const ColorSchemeIcon = colorScheme === "light" ? Sun : Moon;

  const Logo = isMobile ? SknkLockup24 : SknkLockup28;

  const { l0NavItems } = navigationState;

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
                <item.handle.icon size={16}/>
                {item.handle.label}
              </div>
            </TopNavLink>
          ))}
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
