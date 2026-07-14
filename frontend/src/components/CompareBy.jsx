import React from "react";

const compareOptions = [
  "Overall",
  "Region",
  "Indication",
  "Study Type",
  "Vendor",
];

function CompareBy({ compareBy, setCompareBy }) {
  return (
    <div className="compare-card">
      <h3>Compare By</h3>

      <div className="compare-options">
        {compareOptions.map((option) => (
          <label key={option} className="radio-option">
            <input
              type="radio"
              checked={compareBy === option}
              onChange={() => setCompareBy(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CompareBy;