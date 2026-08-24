import { Outlet } from "react-router";
import styles from "./playground.module.css";
import { SideNav, SideNavContent, SideNavLink } from "../ds/SideNav";
import { useIsMobile } from "@/hooks/useIsMobile";

export function ComponentPlayground() {
  const isMobile = useIsMobile();
  return (
    <section className={styles.layout}>
      {!isMobile && (
        <SideNav>
          <SideNavContent>
            <SideNavLink to={"/ui-gallery/auto-complete"}>
              Auto Complete
            </SideNavLink>
            <SideNavLink to={"/ui-gallery/resume"}>Resume</SideNavLink>
          </SideNavContent>
        </SideNav>
      )}

      <main style={{ overflow: "scroll" }}>
        <Outlet />
      </main>
    </section>
  );
}
