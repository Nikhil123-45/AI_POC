import { simulatorData } from "../../data/planningSimulatorData";

export default function BudgetBreakdown() {
  return (
    <div className="budget-card">

      <h3 className="section-title">
        💰 Recommended Budget Breakdown
      </h3>

      {simulatorData.budgetBreakdown.map((item) => (
        <div
          className="budget-row"
          key={item.label}
        >

          <div className="budget-header">

            <span className="budget-label">
              {item.label}
            </span>

            <span className="budget-value">
              {item.value}
            </span>

          </div>

          <div className="budget-progress">

            <div
              className="budget-progress-fill"
              style={{
                width: `${item.percent}%`,
                background: item.color,
              }}
            />

          </div>

        </div>
      ))}

    </div>
  );
}