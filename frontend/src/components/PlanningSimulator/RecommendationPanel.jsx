import { simulatorData } from "../../data/planningSimulatorData";
import {
  FiDollarSign,
  FiClock,
  FiAward,
} from "react-icons/fi";

export default function RecommendationPanel() {
  const recommendation = simulatorData.recommendation;

  return (
    <div className="recommendation-panel">
      {/* ======================================
          LEFT
      ======================================= */}

      <div className="recommendation-left">
        <div className="recommendation-header">
          <div>
            <h3>AI Insights & Recommendation</h3>

            <p className="recommendation-title insight-blue">
              Scenario A offers the best balance of lower timeline and cost.
            </p>

            <p className="recommendation-subtitle insight-green">
              It is recommended based on your complexity score and benchmark
              data.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================
          MIDDLE
      ======================================= */}

      <div className="recommendation-summary">

        {/* Lowest Cost */}
        <div className="summary-card best-summary-card">
          <div className="summary-title">
            <FiDollarSign />
            <span className="insight-blue">
              Lowest Cost
            </span>
          </div>

          <div className="summary-value insight-green">
            {recommendation.lowestCost.scenario}
          </div>

          <div className="summary-subtitle insight-blue">
            {recommendation.lowestCost.value}
          </div>
        </div>

        {/* Shortest Timeline */}
        <div className="summary-card">
          <div className="summary-title">
            <FiClock />
            <span className="insight-blue">
              Shortest Timeline
            </span>
          </div>

          <div className="summary-value insight-green">
            {recommendation.shortestTimeline.scenario}
          </div>

          <div className="summary-subtitle insight-blue">
            {recommendation.shortestTimeline.value}
          </div>
        </div>

        {/* Best Overall */}
        <div className="summary-card">
          <div className="summary-title">
            <FiAward />
            <span className="insight-blue">
              Best Overall
            </span>
          </div>

          <div className="summary-value insight-green">
            {recommendation.bestOverall}
          </div>

          <div className="summary-subtitle insight-blue">
            AI Recommended
          </div>
        </div>

      </div>
    </div>
  );
}