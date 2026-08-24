import { useIsMobile } from "@/hooks/useIsMobile";
import { BottomNav, BottomNavContent, BottomNavLink } from "../ds/BottomNav";
import { useNavigationState } from "../Router/useNavigationState";
import styles from "./app-footer.module.css";
export function AppFooter() {
  const { l0NavItems } = useNavigationState();
  const isMobile = useIsMobile();
  return (
    <footer>
      {isMobile && (
        <BottomNav>
          <BottomNavContent>
            {l0NavItems.map((item) => (
              <BottomNavLink key={item.path} to={item.path}>
                <div className={styles["nav-item"]}>
                  <item.handle.icon />
                  {item.handle.label}
                </div>
              </BottomNavLink>
            ))}
          </BottomNavContent>
        </BottomNav>
      )}
    </footer>
  );
}
