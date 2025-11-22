import React, { useEffect, useRef } from "react";

export default function BoxResize() {
  const containerRef = useRef(null);
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const resizeContainer = element.querySelector(".resize-container");
    const resizeController = element.querySelector(".resize-controller");

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
      <div className="resize-container">
        <div className="resize-controller"></div>
      </div>
    </div>
  );
}
