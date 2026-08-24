import { useEffect, useRef } from "react";
import styles from "./side-drawer.module.css";

export function SideDrawer({
  open,
  children,
  onClickOutside,
  trigger,
}: {
  open: boolean;
  children: React.JSX.Element;
  onClickOutside: () => void;
  trigger: HTMLElement;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }
      const target = e.target as HTMLElement;
      const isWithinSideDrawer = ref.current.contains(target);
      const isNotTrigger = trigger?.contains(target);
      console.log(trigger, target);
      if (!isWithinSideDrawer && !isNotTrigger) {
        onClickOutside();
      }
    };

    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [open]);

  return (
    <div
      ref={ref}
      className={`${styles["side-drawer-container"]} ${
        open ? styles["side-drawer-visible"] : ""
      }`}
    >
      {children}
    </div>
  );
}
