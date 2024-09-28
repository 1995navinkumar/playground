import { useState } from "react";
export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState({
    celcius: 0,
    fahrenheit: 32,
  });

  const onChange = (value, unit) => {
    if (unit === "fahrenheit") {
      const cel = (value - 32) / 1.8;
      setTemperature({
        fahrenheit: value,
        celcius: +cel.toFixed(4),
      });
    } else {
      const fh = value * 1.8 + 32;
      setTemperature({
        celcius: value,
        fahrenheit: +fh.toFixed(4),
      });
    }
  };

  return (
    <div>
      <h2>Temperature Converter</h2>

      <div style={{ display: "flex", width: "100%", gap: "24px" }}>
        <div style={{ width: "132px", height: "102px" }}>
          <input
            type="number"
            name="celsius"
            value={temperature.celcius}
            onChange={(e) => onChange(e.target.value, "celcius")}
          />
          <p
            style={{
              background: "#efefef",
              margin: 0,
              padding: "8px",
              width: "100%",
            }}
          >
            Celsius
          </p>
        </div>
        <span>=</span>
        <div style={{ width: "132px", height: "102px" }}>
          <input
            type="number"
            name="fahrenheit"
            value={temperature.fahrenheit}
            onChange={(e) => onChange(e.target.value, "fahrenheit")}
          />
          <p
            style={{
              background: "#efefef",
              margin: 0,
              padding: "8px",
              width: "100%",
            }}
          >
            Fahrenheit
          </p>
        </div>
      </div>
    </div>
  );
}
