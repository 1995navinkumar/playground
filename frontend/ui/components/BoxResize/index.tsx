import React, { useEffect, useRef } from "react";
import modcss from "./style.module.css";

console.log(modcss);

export default function BoxResize() {
  const containerRef = useRef(null);
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const resizeContainer = element.querySelector(
      `[data-name='resize-container']`
    );
    const resizeController = element.querySelector(
      `[data-name='resize-controller']`
    );

    let startX;

    resizeController.addEventListener("mousedown", (e) => {
      startX = e.screenX;

      function onMouseMove(e2) {
        const currentX = e2.screenX;
        const currentWidth = resizeContainer.clientWidth;
        const finalWidth = currentWidth + (currentX - startX);
        resizeContainer.style.setProperty("width", `${finalWidth}px`);
        startX = currentX;
      }

      document.addEventListener("mousemove", onMouseMove);

      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onMouseMove);
      });
    });
  }, []);
  return (
    <div ref={containerRef}>
      <div className={modcss["resize-container"]} data-name="resize-container">
        <div
          className={modcss["resize-controller"]}
          data-name="resize-controller"
        ></div>
      </div>
    </div>
  );
}
