import React from "react";
import styles from "./topnav.module.css";

export function TopNav({ children }: { children: React.ReactNode }) {
  return <div className={styles.topnav}>{children}</div>;
}

export function TopNavBrand({ children }: { children: React.JSX.Element }) {
  return <div className={styles.topnav__brand}>{children}</div>;
}

export function TopNavContent({ children }: { children: React.JSX.Element }) {
  return <div>{children}</div>;
}

export function TopNavActions({ children }: { children: React.JSX.Element }) {
  return <div>{children}</div>;
}

/*

<TopNav>
    <TopNavBrand></TopNavBrand>
    <TopNavContent></TopNavContent>
    <TopNavActions></TopNavActions>
</TopNav>




*/
