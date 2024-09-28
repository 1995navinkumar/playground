import { createRoot } from "react-dom/client";
import App from "./App";

function Root() {
  // TODO: Actually implement a navigation bar
  return <App />;
}

const domNode = document.getElementById("react-root");
const root = createRoot(domNode);
root.render(<Root />);
