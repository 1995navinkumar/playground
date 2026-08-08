import styles from "./App.module.css";
import { AppHeader } from "@components/AppHeader";
import { BrowserRouter, Routes, Route } from "react-router";
import { AppFooter } from "@components/AppFooter";
import { ComponentPlayground } from "./components/ComponentPlayground";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <AppHeader />
        <section>
          <Routes>
            <Route index element={<Home />} />
            <Route element={<AppLayout />}>
              <Route path="component" element={<ComponentPlayground />} />
            </Route>
          </Routes>
        </section>
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
