import { useColorScheme } from "@hooks/useColorScheme";

import {
  TopNav,
  TopNavActions,
  TopNavBrand,
  TopNavContent,
  TopNavLink,
} from "@ds/TopNav";
import styles from "./app-header.module.css";
import { Menu, Moon, Sun } from "lucide-react";
import { SknkLockup24, SknkLockup28 } from "../svgr";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useNavigationState } from "../Router/useNavigationState";
import { SideNav, SideNavContent, SideNavLink } from "../ds/SideNav";
import { SideDrawer } from "../ds/SideDrawer";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";

export function AppHeader() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isMobile = useIsMobile();
  const navigationState = useNavigationState();
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);

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
                ref={menuRef}
                className={`button-secondary ${styles["theme-switcher"]}`}
                onClick={() => setIsSideDrawerOpen(true)}
              >
                <Menu size={16} />
              </button>
            )}

            {isMobile && hasL1Children
              ? createPortal(
                  <SideNavDrawer
                    open={isSideDrawerOpen}
                    setIsSideDrawerOpen={setIsSideDrawerOpen}
                    onClickOutside={() => setIsSideDrawerOpen(false)}
                    trigger={menuRef.current as HTMLElement}
                  />,
                  document.body,
                )
              : null}
          </div>
        </TopNavActions>
      </TopNav>
    </header>
  );
}

function SideNavDrawer({
  open,
  setIsSideDrawerOpen,
  onClickOutside,
  trigger,
}: {
  open: boolean;
  setIsSideDrawerOpen: (v: boolean) => void;
  onClickOutside: () => void;
  trigger: HTMLElement;
}) {
  const { l1NavItems } = useNavigationState();

  return (
    <SideDrawer open={open} onClickOutside={onClickOutside} trigger={trigger}>
      <SideNav>
        <SideNavContent>
          {l1NavItems.map((item) => (
            <SideNavLink
              onClick={() => setIsSideDrawerOpen(false)}
              to={item.path}
              key={item.path}
              relative="route"
            >
              {item.handle.label}
            </SideNavLink>
          ))}
        </SideNavContent>
      </SideNav>
    </SideDrawer>
  );
}
