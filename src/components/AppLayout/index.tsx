import { Outlet } from "react-router";
import styles from "./layout.module.css";

export function AppLayout() {
  return (
    <main className={styles.layout}>
      <aside className={styles["side-nav"]}>
        <div className={styles['side-nav__item']}>Image Carousel</div>
      </aside>
      <Outlet />
    </main>
  );
}
