import { Outlet } from "react-router";
import styles from "./playground.module.css";
import { SideNav, SideNavContent, SideNavLink } from "../ds/SideNav";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useNavigationState } from "../Router/useNavigationState";

export function ComponentPlayground() {
  const isMobile = useIsMobile();
  const { l1NavItems } = useNavigationState();
  return (
    <section className={styles.layout}>
      {!isMobile && (
        <SideNav>
          <SideNavContent>
            {l1NavItems.map((item) => (
              <SideNavLink to={item.path} key={item.path}>
                {item.handle.label}
              </SideNavLink>
            ))}
            {/* <SideNavLink to={"/ui-gallery/auto-complete"}>
              Auto Complete
            </SideNavLink>
            <SideNavLink to={"/ui-gallery/resume"}>Resume</SideNavLink> */}
          </SideNavContent>
        </SideNav>
      )}

      <main style={{ overflow: "scroll" }}>
        <Outlet />
      </main>
    </section>
  );
}
