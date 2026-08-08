import styles from "./App.module.css";
import {
  TopNav,
  TopNavActions,
  TopNavBrand,
  TopNavContent,
} from "./components/ds/TopNav";
import logoLight from "./assets/sknk-light-transparent.png";
import logoDark from "./assets/sknk-dark-transparent.png";

import { useColorScheme } from "./hooks/useColorScheme";

function App() {
  const theme = useColorScheme();

  const logo = theme === "dark" ? logoLight : logoDark;

  console.log(logo, theme);

  return (
    <div className={styles.app}>
      <header>
        <TopNav>
          <TopNavBrand>
            <a href="#">
              <img src={logo} />
            </a>
          </TopNavBrand>
          {/* <TopNavContent>
            <div>Content</div>
          </TopNavContent>
          <TopNavActions>
            <div>Actionsss</div>
          </TopNavActions> */}
        </TopNav>
      </header>
      <section className={styles["main-section"]}>
        <aside></aside>
        <main className={styles.main}>
          <div style={{ width: "10000px" }}>hi</div>
        </main>
      </section>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
