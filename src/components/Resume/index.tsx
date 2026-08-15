import { useEffect, useRef } from "react";
import styles from "./resume.module.css";
import PagedHTML from "paged-html";
import { data } from "./data";
import { useReactToPrint } from "react-to-print";
import type { PagedHTMLInstance } from "paged-html/build/types";
import { Resume } from "./Resume";
import { componentToHtmlString } from "./utils";
import { Download } from "lucide-react";

export function ResumeGenerator() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      renderResume(containerRef.current, data);
    }
    return () => console.log("effect");
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: containerRef,
  });

  return (
    <>
      <div className={styles["export-container"]}>
        <button
          className={styles["export-container__button"]}
          onClick={handlePrint}
        >
          <span>Download as PDF</span>
          <Download />
        </button>
      </div>
      <section
        ref={containerRef}
        className={styles["resume-container"]}
      ></section>
    </>
  );
}

function renderResume(root: HTMLElement, data: any) {
  const instance = PagedHTML.create({
    root,
    pageConfig: {
      landscape: false,
      format: "A4",
      margin: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    },
  });

  function resume(pagedInstance: PagedHTMLInstance) {
    function* renderer() {
      const contentArea = pagedInstance.getCurrentPage().contentArea;
      const resumeElement = <Resume data={data} />;
      const resumeHtmlString = componentToHtmlString(resumeElement);

      const element = document.createElement("div");
      element.innerHTML = resumeHtmlString;
      contentArea.appendChild(element);
      yield element;
    }
    function onOverflow() {
      console.log("overflow");
    }
    return {
      renderer,
      onOverflow,
    };
  }

  instance.render([resume]);
}
