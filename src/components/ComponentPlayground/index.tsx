import { Navigate, Route, Routes } from "react-router";
import styles from "./playground.module.css";
import { SideNav, SideNavContent, SideNavLink } from "../ds/SideNav";
import { ResumeGenerator } from "../Resume";

export function ComponentPlayground() {
  return (
    <section className={styles.layout}>
      <SideNav>
        <SideNavContent>
          <SideNavLink to={"/ui-gallery/image-carousel"}>
            Image Carousel
          </SideNavLink>
          <SideNavLink to={"/ui-gallery/resume"}>Resume</SideNavLink>
        </SideNavContent>
      </SideNav>
      <main style={{ overflow: "scroll" }}>
        <Routes>
          <Route index element={<Navigate to={"image-carousel"} />} />
          <Route
            path="image-carousel"
            element={<button className={styles.button}>Image Carousel</button>}
          />
          <Route path="resume" element={<ResumeGenerator />} />
        </Routes>
      </main>
    </section>
  );
}
