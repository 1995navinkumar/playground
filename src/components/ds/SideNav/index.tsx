import type { ComponentProps } from "react";
import styles from "./sidenav.module.css";
import { NavLink } from "react-router";

export type SideNavLinkProps = ComponentProps<typeof NavLink>;

export function SideNav({ children }: { children: React.JSX.Element }) {
  return <aside className={styles.sidenav}>{children}</aside>;
}

export function SideNavContent({ children }: { children: React.JSX.Element }) {
  return <nav className={styles.sidenav__content}>{children}</nav>;
}

export function SideNavLink(props: SideNavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `${styles.sidenav__link} ${isActive ? styles["sidenav__link--active"] : ""}`
      }
    />
  );
}
