import { useColorScheme } from "@hooks/useColorScheme";
import logoLight from "@assets/sknk-light-transparent.png";
import logoDark from "@assets/sknk-dark-transparent.png";
import {
  TopNav,
  TopNavActions,
  TopNavBrand,
  TopNavContent,
  TopNavLink,
} from "@ds/TopNav";
import styles from "./app-header.module.css";
import { Moon, Sun } from "lucide-react";

export function AppHeader() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const logo = colorScheme === "light" ? logoLight : logoDark;
  const ColorSchemeIcon = colorScheme === "light" ? Sun : Moon;

  return (
    <header>
      <TopNav>
        <TopNavBrand>
          <a href="/">
            <img className={styles.logo} src={logo} />
          </a>
        </TopNavBrand>
        <TopNavContent>
          <TopNavLink to={"/"}>Home</TopNavLink>
          <TopNavLink to={"/component"}>UI Gallery</TopNavLink>
        </TopNavContent>
        <TopNavActions>
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={toggleColorScheme}
          >
            <ColorSchemeIcon />
          </button>
        </TopNavActions>
      </TopNav>
    </header>
  );
}
