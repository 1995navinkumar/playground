import underConstruction from "@assets/website_under_construction.webp";
import styles from "./home.module.css";

export function Home() {
  return (
    <main className={styles.home}>
      <img className={styles["under-construction"]} src={underConstruction} />
    </main>
  );
}
