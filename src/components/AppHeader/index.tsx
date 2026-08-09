import { useColorScheme } from "@hooks/useColorScheme";
import logoLight from "@assets/sknk-light-transparent.png";
import logoDark from "@assets/sknk-dark-transparent.png";
import { TopNav, TopNavBrand } from "@ds/TopNav";
import styles from "./app-header.module.css";

export function AppHeader() {
  const theme = useColorScheme();

  const logo = theme === "light" ? logoLight : logoDark;
  return (
    <header>
      <TopNav>
        <TopNavBrand>
          <a href="/">
            <img className={styles.logo} src={logo} />
          </a>
        </TopNavBrand>
      </TopNav>
    </header>
  );
}
