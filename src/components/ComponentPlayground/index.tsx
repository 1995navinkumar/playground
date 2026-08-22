import { Navigate, Route, Routes } from "react-router";
import styles from "./playground.module.css";
import { SideNav, SideNavContent, SideNavLink } from "../ds/SideNav";
import { ResumeGenerator } from "../Resume";
import { AutoComplete } from "../AutoComplete";

export function ComponentPlayground() {
  return (
    <section className={styles.layout}>
      <SideNav>
        <SideNavContent>
          <SideNavLink to={"/ui-gallery/auto-complete"}>
            Auto Complete
          </SideNavLink>
          <SideNavLink to={"/ui-gallery/resume"}>Resume</SideNavLink>
        </SideNavContent>
      </SideNav>
      <main style={{ overflow: "scroll" }}>
        <Routes>
          <Route index element={<Navigate to={"auto-complete"} />} />
          <Route path="auto-complete" element={<AutoComplete />} />
          <Route path="resume" element={<ResumeGenerator />} />
        </Routes>
      </main>
    </section>
  );
}
