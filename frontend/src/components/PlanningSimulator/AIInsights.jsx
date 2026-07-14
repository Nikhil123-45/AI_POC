import { simulatorData } from "../../data/planningSimulatorData";

export default function AIInsights() {
  return (
    <div className="insights-card">
      <h3 className="section-title">
        ✨ AI Planning Insights
      </h3>

      <div className="insights-content">
        {simulatorData.insights.map((insight, index) => (
          <div
            className="insight-item"
            key={index}
          >
            <div className="insight-icon">
              💡
            </div>

            <div className="insight-text">
              {insight}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}