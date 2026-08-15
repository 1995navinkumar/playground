import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";

export function componentToHtmlString(element: React.JSX.Element): string {
  // 1. Create an off-screen container
  const container = document.createElement("div");
  const root = createRoot(container);

  // 2. Synchronously flush the React render cycle
  flushSync(() => {
    root.render(element);
  });

  // 3. Extract HTML and clean up
  const htmlString = container.innerHTML;
  root.unmount();

  return htmlString;
}
