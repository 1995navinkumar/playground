import styles from "./App.module.css";
import { AppHeader } from "@components/AppHeader";
import { Outlet } from "react-router";
import { AppFooter } from "./components/AppFooter";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <section>
        <Outlet />
      </section>
      <AppFooter />
      {/* <div id="side-drawer-root"></div> */}
    </div>
  );
}

export default App;
