import { simulatorData } from "../../data/planningSimulatorData";

export default function TimelineBreakdown() {
  return (
    <div className="timeline-card">
      <h3 className="section-title">
        📅 Recommended Timeline
      </h3>

      {simulatorData.timeline.map((item) => (
        <div
          className="timeline-row"
          key={item.label}
        >
          <div className="timeline-header">
            <span className="timeline-label">
              {item.label}
            </span>

            <span className="timeline-value">
              {item.value}
            </span>
          </div>

          <div className="timeline-progress">
            <div
              className="timeline-progress-fill"
              style={{
                width: `${item.percent}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}