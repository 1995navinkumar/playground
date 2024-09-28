export default function ProgressBar({ percent = 10 }) {
  const width = `${percent}%`;
  return (
    <div className="progress">
      <h2>Progress Bar</h2>

      <div
        style={{
          width,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d6efd",
        }}
      >
        <span style={{ color: "white", fontSize: "12px" }}>{percent}%</span>
      </div>
    </div>
  );
}
