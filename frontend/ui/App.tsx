import React from "react";
import AutoComplete from "./components/AutoComplete";
import ProgressBar from "./components/ProgressBar";
import TemperatureConverter from "./components/TemperatureConverter";
import Tweet from "./components/Tweet";
import "./components/style.css";
import BoxResize from "./components/BoxResize";

export default function App() {
  return (
    <main>
      {/* <ProgressBar />
      <TemperatureConverter />
      <Tweet /> */}
      {/* <AutoComplete /> */}

      <BoxResize />
    </main>
  );
}
