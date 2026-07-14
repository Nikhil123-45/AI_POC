import {
  FiMapPin,
  FiBriefcase,
  FiUsers,
  FiTarget,
  FiClock,
  FiDollarSign,
} from "react-icons/fi";

export default function ScenarioCard({ scenario }) {
  return (
    <div
      className={`scenario-card ${
        scenario.best ? "best-card" : ""
      }`}
    >
      {/* ======================================
          Header
      ====================================== */}

      <div className="scenario-card-header">

        <div>

          <h3
            style={{
              color: scenario.color,
            }}
          >
            {scenario.title}
          </h3>

        </div>

        {scenario.best && (
          <span className="best-badge">
            Best
          </span>
        )}

      </div>

      {/* ======================================
          Information
      ====================================== */}

      <div className="scenario-details">

        <div className="detail-row">

          <FiMapPin />

          <div>

            <span>Region</span>

            <strong>{scenario.region}</strong>

          </div>

        </div>

        <div className="detail-row">

          <FiBriefcase />

          <div>

            <span>Vendor</span>

            <strong>{scenario.vendor}</strong>

          </div>

        </div>

        <div className="detail-row">

          <FiUsers />

          <div>

            <span>Sites</span>

            <strong>{scenario.sites}</strong>

          </div>

        </div>

        <div className="detail-row">

          <FiTarget />

          <div>

            <span>Enrollment</span>

            <strong>{scenario.enrollment}</strong>

          </div>

        </div>

      </div>

      {/* ======================================
          Metrics
      ====================================== */}

      <div className="scenario-metrics">

        {/* Timeline */}

        <div className="metric-box">

          <div className="metric-heading">

            <FiClock />

            Estimated Timeline

          </div>

          <div
            className="metric-value"
            style={{
              color: scenario.color,
            }}
          >
            {scenario.timeline}
            <span> Months</span>
          </div>

          <div className="metric-range">
            {scenario.timelineRange}
          </div>

        </div>

        {/* Cost */}

        <div className="metric-box">

          <div className="metric-heading">

            <FiDollarSign />

            Estimated Cost

          </div>

<div
  className="metric-value"
  style={{
    color: scenario.color,
  }}
>
  {scenario.cost}
</div>

          <div className="metric-range">
            {scenario.costRange}
          </div>

        </div>

      </div>

      {/* ======================================
          Button
      ====================================== */}

      <button className="view-details-btn">

        View Details

      </button>

    </div>
  );
}