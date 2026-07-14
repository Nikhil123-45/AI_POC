import "./OverallBenchmarkComparison.css";

const metrics = [
  {
    title: "Cost",
    unit: "USD (Millions)",
    yourValue: "$1.38M",
    p20: "$0.98M",
    p50: "$1.28M",
    p75: "$1.68M",
  },
  {
    title: "Startup Duration",
    unit: "Days",
    yourValue: "107",
    p20: "85",
    p50: "101",
    p75: "123",
  },
  {
    title: "Enrollment Duration",
    unit: "Days",
    yourValue: "300",
    p20: "210",
    p50: "260",
    p75: "315",
  },
  {
    title: "Enrollment Target",
    unit: "Patients",
    yourValue: "315",
    p20: "250",
    p50: "295",
    p75: "350",
  },
];

export default function OverallBenchmarkComparison() {
  return (
    <div className="overall-benchmark-card">

      <div className="overall-header">

        <div>
          <h2>Overall Benchmark Comparison</h2>

          <p>
            Compare your study against the overall benchmark
            distribution across all major study metrics.
          </p>
        </div>

        <div className="overall-legend">

          <div className="legend-item">
            <span className="legend-dot your-study" />
            <span>Your Study</span>
          </div>

          <div className="legend-item">
            <span className="legend-line median" />
            <span>Benchmark Median (P50)</span>
          </div>

          <div className="legend-item">
            <span className="legend-best" />
            <span>Best in Class (P20)</span>
          </div>

        </div>

      </div>

      <div className="overall-grid">

        {metrics.map((metric) => (

          <div
            key={metric.title}
            className="overall-metric"
          >

            <div className="metric-name">
              {metric.title}
            </div>

            <div className="metric-unit">
              {metric.unit}
            </div>

            <div className="metric-value">
              {metric.yourValue}
            </div>

            <div className="metric-divider" />

            <div className="metric-scale">

              <div>
                <strong>P20</strong>
                <span>{metric.p20}</span>
              </div>

              <div>
                <strong>P50</strong>
                <span>{metric.p50}</span>
              </div>

              <div>
                <strong>P75</strong>
                <span>{metric.p75}</span>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}