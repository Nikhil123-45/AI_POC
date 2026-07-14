import { cards } from "../../data/studyComparisonData";
import {
  FiTrendingUp,
  FiDollarSign,
  FiClock,
  FiUsers,
  FiTarget,
} from "react-icons/fi";

const getIcon = (title) => {
  switch (title) {
    case "Cost":
      return <FiDollarSign />;

    case "Startup Duration":
      return <FiClock />;

    case "Enrollment Duration":
      return <FiUsers />;

    case "Enrollment Target":
      return <FiTarget />;

    default:
      return <FiTrendingUp />;
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case "Primary Driver":
      return "status-high";

    case "Optimization Opportunity":
      return "status-medium";

    case "Slightly Above Benchmark":
      return "status-low";

    case "Healthy":
      return "status-good";

    default:
      return "";
  }
};

export default function MetricCards() {
  return (
    <div className="metric-grid">
      {cards.map((card) => (
        <div
          className="metric-card"
          key={card.title}
        >
          <div className="metric-top">

            <div className="metric-icon">
              {getIcon(card.title)}
            </div>

            <div>

              <div className="metric-title">
                {card.title}
              </div>

              <div
                className={`metric-status ${getStatusClass(card.status)}`}
              >
                {card.status}
              </div>

            </div>

          </div>

          <div className="benchmark-heading">
            Compared with Overall Benchmark
          </div>

          <div className="benchmark-table">

            <div className="benchmark-col">
              <span className="benchmark-title">
                P20
              </span>

              <strong>
                {card.p20}
              </strong>
            </div>

            <div className="benchmark-col">
              <span className="benchmark-title">
                P50
              </span>

              <strong>
                {card.p50}
              </strong>
            </div>

            <div className="benchmark-col">
              <span className="benchmark-title">
                P75
              </span>

              <strong>
                {card.p75}
              </strong>
            </div>

          </div>

          <div className="metric-divider" />

          <div className="metric-label">
            Current Study
          </div>

          <div className="metric-value">
            {card.current}
          </div>

        </div>
      ))}
    </div>
  );
}