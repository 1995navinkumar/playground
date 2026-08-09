import { Navigate, Route, Routes } from "react-router";
import styles from "./playground.module.css";
import { SideNav, SideNavContent, SideNavLink } from "../ds/SideNav";

export function ComponentPlayground() {
  return (
    <section className={styles.layout}>
      <SideNav>
        <SideNavContent>
          <SideNavLink to={"/ui-gallery/image-carousel"}>
            Image Carousel
          </SideNavLink>
        </SideNavContent>
      </SideNav>
      <main>
        <Routes>
          <Route index element={<Navigate to={"image-carousel"} />} />
          <Route path="image-carousel" element={<div>Image Carousel</div>} />
        </Routes>
      </main>
    </section>
  );
}
