import React from "react";
import {
  BsFileEarmarkTextFill,
  BsCalendarDateFill
} from "react-icons/bs";

function SummaryCards() {
  const cards = [
    {
      icon: <BsFileEarmarkTextFill />,
      title: "Total Studies",
      value: "25,000",
      color: "#2563eb"
    },
    {
      icon: <BsCalendarDateFill />,
      title: "Start Date",
      value: "29-Feb-2020",
      color: "#65a30d"
    },
    {
      icon: <BsCalendarDateFill />,
      title: "End Date",
      value: "23-Sep-2028",
      color: "#d97706"
    }
  ];

  return (
    <div className="summary-grid">
      {cards.map((card) => (
        <div className="summary-card" key={card.title}>
          <div
            className="summary-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div className="summary-content">
            <div className="summary-label">
              {card.title}
            </div>

            <div className="summary-value">
              {card.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;