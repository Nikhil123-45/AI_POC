import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { filterOptions } from "../data/benchmarkData";

function BenchmarkFilters({
  compareBy,
  setCompareBy,
  chartType,
  setChartType,
  filters,
  onFilterChange,
}) {
  const compareOptions = [
    "Overall",
    "Region",
    "Indication",
    "Study Type",
    "Vendor",
  ];

  const chartTypes = [
    "Table",
    "Box Plot",
  ];

  const renderSelect = (
    label,
    value,
    options,
    onChange,
    className = ""
  ) => (
    <div className={`filter-item ${className}`}>
      <label>{label}</label>

      <div className="filter-select">
        <select
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

        <FiChevronDown className="dropdown-icon" />
      </div>
    </div>
  );

  return (
    <div className="filter-card">

      <div className="filter-toolbar">

        {/* Compare By */}

        {renderSelect(
          "Compare By",
          compareBy,
          compareOptions,
          (e) => setCompareBy(e.target.value),
          "compare-filter"
        )}

        {/* Chart Type */}

        {renderSelect(
          "Chart Type",
          chartType,
          chartTypes,
          (e) => setChartType(e.target.value),
          "chart-filter"
        )}

        {/* Region */}

        {renderSelect(
          "Region",
          filters.region,
          filterOptions.region,
          (e) =>
            onFilterChange(
              "region",
              e.target.value
            )
        )}

        {/* Indication */}

        {renderSelect(
          "Indication",
          filters.indication,
          filterOptions.indication,
          (e) =>
            onFilterChange(
              "indication",
              e.target.value
            )
        )}

        {/* Line of Therapy */}

        {renderSelect(
          "Line of Therapy",
          filters.lineOfTheraphy,
          filterOptions.lineOfTheraphy,
          (e) =>
            onFilterChange(
              "lineOfTheraphy",
              e.target.value
            )
        )}

        {/* Study Type */}

        {renderSelect(
          "Study Type",
          filters.studyType,
          filterOptions.studyType,
          (e) =>
            onFilterChange(
              "studyType",
              e.target.value
            )
        )}

        {/* Vendor */}

        {renderSelect(
          "Vendor",
          filters.vendor,
          filterOptions.vendor,
          (e) =>
            onFilterChange(
              "vendor",
              e.target.value
            )
        )}

      </div>

    </div>
  );
}

export default BenchmarkFilters;