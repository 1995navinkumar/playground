import React from "react";
import type { ComponentProps } from "react";
import styles from "./topnav.module.css";
import { NavLink } from "react-router";

export type TopNavLinkProps = ComponentProps<typeof NavLink>;

export function TopNav({ children }: { children: React.ReactNode }) {
  return <div className={styles.topnav}>{children}</div>;
}

export function TopNavBrand({ children }: { children: React.JSX.Element }) {
  return <div className={styles.topnav__brand}>{children}</div>;
}

export function TopNavContent({ children }: { children: React.ReactNode }) {
  return <nav className={styles.topnav_content}>{children}</nav>;
}

export function TopNavActions({ children }: { children: React.JSX.Element }) {
  return <div className={styles.active}>{children}</div>;
}

export function TopNavLink(props: TopNavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        `${styles.topnav__link} ${isActive ? styles["topnav__link--active"] : ""}`
      }
    />
  );
}

/*

<TopNav>
    <TopNavBrand></TopNavBrand>
    <TopNavContent></TopNavContent>
    <TopNavActions></TopNavActions>
</TopNav>




*/
