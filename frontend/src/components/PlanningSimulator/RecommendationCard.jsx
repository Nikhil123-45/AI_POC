import { simulatorData } from "../../data/planningSimulatorData";

export default function RecommendationCard() {
  const recommendation = simulatorData.recommendation;

  return (
    <div className="recommendation-card">
      <div className="recommendation-left">
        <div className="recommendation-label">
          RECOMMENDED
        </div>

        <div className="recommendation-title">
          Budget (P50)
        </div>

        <div className="recommendation-budget">
          {recommendation.budget}
        </div>

        <div className="recommendation-range">
          Range: {recommendation.range}
        </div>
      </div>

      <div className="recommendation-right">
        <div className="confidence-label">
          CONFIDENCE
        </div>

        <div className="confidence-value">
          {recommendation.confidence}
        </div>

        <div className="peer-study-pill">
          ↗ {recommendation.peerStudies} peer studies
        </div>
      </div>
    </div>
  );
}