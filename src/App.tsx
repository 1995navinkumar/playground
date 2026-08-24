import styles from "./App.module.css";
import { AppHeader } from "@components/AppHeader";
import { HashRouter, Routes, Route } from "react-router";
import { ComponentPlayground } from "./components/ComponentPlayground";
import { Home } from "./components/Home";

function App() {
  return (
    <HashRouter>
      <div className={styles.app}>
        <AppHeader />
        <section>
          <Routes>
            <Route index element={<Home />} />
            <Route path="ui-gallery/*" element={<ComponentPlayground />} />
          </Routes>
        </section>
        {/* <BottomNav /> */}
      </div>
    </HashRouter>
  );
}

export default App;
