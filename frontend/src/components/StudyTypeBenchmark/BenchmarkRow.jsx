import React from "react";

function BenchmarkRow({ row, max }) {
  const { studyType, best, low, high, worst } = row;

  const isCost = max > 150;

  const format = (value) =>
    isCost ? `$${value}K` : `${value}`;

  // Convert values to percentage positions
  const bestPos = (best / max) * 100;
  const lowPos = (low / max) * 100;
  const highPos = (high / max) * 100;
  const worstPos = (worst / max) * 100;

  // Width of P25–P75
  const actualWidth = highPos - lowPos;

  // Minimum visible width
  const MIN_WIDTH = 8;

  const boxWidth = Math.max(actualWidth, MIN_WIDTH);

  // Keep box centered
  const center = (lowPos + highPos) / 2;

  let boxLeft = center - boxWidth / 2;

  boxLeft = Math.max(0, Math.min(boxLeft, 100 - boxWidth));

  const boxRight = boxLeft + boxWidth;

  return (
    <div className="benchmark-row">

      <div className="study-info">
        <div className="study-title">
          {studyType}
        </div>
      </div>

      <div className="benchmark-track">

        {/* Grid */}

        {Array.from({ length: 13 }).map((_, index) => (
          <div
            key={index}
            className="grid-line"
            style={{
              left: `${(index / 12) * 100}%`
            }}
          />
        ))}

        {/* Best Value */}

        <div
          className="best-label"
          style={{
            left: `${bestPos}%`
          }}
        >
          {format(best)}
        </div>

        {/* Worst Value */}

        <div
          className="worst-label"
          style={{
            left: `${worstPos}%`
          }}
        >
          {format(worst)}
        </div>

        {/* Left Whisker */}

        <div
          className="left-whisker"
          style={{
            left: `${bestPos}%`,
            width: `${Math.max(0, boxLeft - bestPos)}%`
          }}
        />

        {/* Right Whisker */}

        <div
          className="right-whisker"
          style={{
            left: `${boxRight}%`,
            width: `${Math.max(0, worstPos - boxRight)}%`
          }}
        />

        {/* Best Dot */}

        <div
          className="best-dot"
          style={{
            left: `${bestPos}%`
          }}
        />

        {/* Typical Range Box */}

        <div
          className="range-box"
          style={{
            left: `${boxLeft}%`,
            width: `${boxWidth}%`
          }}
        >
          {format(low)} – {format(high)}
        </div>

        {/* Worst Dot */}

        <div
          className="worst-dot"
          style={{
            left: `${worstPos}%`
          }}
        />

      </div>

    </div>
  );
}

export default BenchmarkRow;