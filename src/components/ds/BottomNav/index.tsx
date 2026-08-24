import React from "react";
import type { ComponentProps } from "react";
import styles from "./bottomnav.module.css";
import { NavLink } from "react-router";

export type BottomNavLinkProps = ComponentProps<typeof NavLink>;

export function BottomNav({ children }: { children: React.ReactNode }) {
  return <div className={styles.bottomnav}>{children}</div>;
}

export function BottomNavContent({ children }: { children: React.ReactNode }) {
  return <nav className={styles.bottomnav_content}>{children}</nav>;
}

export function BottomNavLink(props: BottomNavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `${styles.bottomnav__link} ${
          isActive ? styles["bottomnav__link--active"] : ""
        }`
      }
    />
  );
}
