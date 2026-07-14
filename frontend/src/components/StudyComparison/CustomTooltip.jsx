export default function CustomTooltip({
  active,
  payload,
}) {
  if (!active || !payload?.length) return null;

  const study = payload[0].payload;

  return (
    <div className="custom-tooltip">
      <div className="tooltip-title">
        {study.name}
      </div>

      <div
        className="tooltip-type"
        style={{
          background: study.benchmark
            ? "rgba(79,142,247,.18)"
            : "rgba(168,85,247,.18)",
          color: study.benchmark
            ? "#60A5FA"
            : "#C084FC",
        }}
      >
        {study.benchmark
          ? "Internal Benchmark"
          : "Your Study"}
      </div>

      <div className="tooltip-row">
        <span className="tooltip-label">
          Startup
        </span>

        <span className="tooltip-value">
          {study.startup} Days
        </span>
      </div>

      <div className="tooltip-row">
        <span className="tooltip-label">
          Enrollment
        </span>

        <span className="tooltip-value">
          {study.enrollment} Days
        </span>
      </div>

      <div className="tooltip-row">
        <span className="tooltip-label">
          Study Cost
        </span>

        <span className="tooltip-value">
          ${study.cost} M
        </span>
      </div>
    </div>
  );
}