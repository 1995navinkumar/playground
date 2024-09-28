import ProgressBar from "./components/ProgressBar";
import TemperatureConverter from "./components/TemperatureConverter";
import Tweet from "./components/Tweet";
import "./components/style.css";

export default function App() {
  return (
    <main>
      <ProgressBar />
      <TemperatureConverter />
      <Tweet />
    </main>
  );
}
