import { useState } from "react";
import "./BenchmarkSummary.css";

import BenchmarkFilters from "../components/BenchmarkFilters";

import BenchmarkDistributionTable from "../components/BenchmarkTables/BenchmarkDistributionTable";
import ComparisonDistributionTable from "../components/ComparisonDistributionTable";

import BenchmarkBoxPlot from "../components/Charts/BenchmarkBoxPlot";

import overallTimelineTableData from "../data/overallTimelineTableData";
import overallCostData from "../data/overallCostData";

import regionTimelineData from "../data/regionTimelineData";
import regionCostData from "../data/regionCostData";

import indicationTimelineData from "../data/indicationDistributionData";
import indicationCostData from "../data/indicationCostDistributionData";

import studyTypeTimelineData from "../data/studyTypeTimelineData";
import studyTypeCostData from "../data/studyTypeCostData";

import vendorTimelineData from "../data/vendorTimelineData";
import vendorCostData from "../data/vendorCostData";

function BenchmarkSummary() {

  const [compareBy, setCompareBy] = useState("Overall");
  const [chartType, setChartType] = useState("Table");

  const [filters, setFilters] = useState({
    region: "All Regions",
    indication: "All Indications",
    lineOfTheraphy: "All Lines",
    studyType: "All Study Types",
    vendor: "All Vendors",
  });

  const onFilterChange = (key, value) => {

    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

  };

  /* ==========================================
      TIMELINE
  ========================================== */

  const renderTimeline = () => {

    if (compareBy === "Overall") {

      if (chartType === "Table") {

        return (
          <BenchmarkDistributionTable
            title="Timeline Benchmark Distribution"
            unit="Days"
            color="purple"
            data={overallTimelineTableData}
          />
        );

      }

      return (
        <BenchmarkBoxPlot
          title="Timeline Benchmark Distribution"
          unit="Days"
          color="purple"
          data={overallTimelineTableData}
        />
      );

    }

    let columns = [];
    let tableData = [];
        switch (compareBy) {

      case "Region":

        columns = [
          "US",
          "India",
          "Europe",
          "APAC",
          "LATAM",
          "MEA",
        ];

        tableData = regionTimelineData;

        break;

      case "Indication":

        columns = [
          "Multiple Myeloma",
          "DLBCL",
          "B-ALL",
          "Follicular Lymphoma",
        ];

        tableData = indicationTimelineData;

        break;

      case "Study Type":

        columns = [
          "RWE",
          "IIS",
          "Patient Registry",
          "Expanded Access",
        ];

        tableData = studyTypeTimelineData;

        break;

      case "Vendor":

        columns = [
          "IQVIA",
          "Parexel",
          "ICON",
          "Syneos",
          "PPD",
        ];

        tableData = vendorTimelineData;

        break;

      default:

        return null;

    }

    if (chartType === "Table") {

      return (

        <ComparisonDistributionTable
          title={`Timeline Benchmark by ${compareBy}`}
          unit="Days"
          color="purple"
          columns={columns}
          data={tableData}
        />

      );

    }

    return (

      <BenchmarkBoxPlot
        title={`Timeline Benchmark by ${compareBy}`}
        unit="Days"
        color="purple"
        columns={columns}
        data={tableData}
      />

    );

  };

  /* ==========================================
      COST
  ========================================== */

  const renderCost = () => {

    if (compareBy === "Overall") {

      if (chartType === "Table") {

        return (

          <BenchmarkDistributionTable
            title="Cost Benchmark Distribution"
            unit="$"
            color="green"
            data={overallCostData}
          />

        );

      }

      return (

        <BenchmarkBoxPlot
          title="Cost Benchmark Distribution"
          unit="$"
          color="green"
          data={overallCostData}
        />

      );

    }

    let columns = [];
    let tableData = [];
        switch (compareBy) {

      case "Region":

        columns = [
          "US",
          "India",
          "Europe",
          "APAC",
          "LATAM",
          "MEA",
        ];

        tableData = regionCostData;

        break;

      case "Indication":

        columns = [
          "Multiple Myeloma",
          "DLBCL",
          "B-ALL",
          "Follicular Lymphoma",
        ];

        tableData = indicationCostData;

        break;

      case "Study Type":

        columns = [
          "RWE",
          "IIS",
          "Patient Registry",
          "Expanded Access",
        ];

        tableData = studyTypeCostData;

        break;

      case "Vendor":

        columns = [
          "IQVIA",
          "Parexel",
          "ICON",
          "Syneos",
          "PPD",
        ];

        tableData = vendorCostData;

        break;

      default:

        return null;

    }

    if (chartType === "Table") {

      return (

        <ComparisonDistributionTable
          title={`Cost Benchmark by ${compareBy}`}
          unit="$"
          color="green"
          columns={columns}
          data={tableData}
        />

      );

    }

    return (

      <BenchmarkBoxPlot
        title={`Cost Benchmark by ${compareBy}`}
        unit="$"
        color="green"
        columns={columns}
        data={tableData}
      />

    );

  };

  return (

    <div className="benchmark-summary-page">

      <BenchmarkFilters
        compareBy={compareBy}
        setCompareBy={setCompareBy}
        chartType={chartType}
        setChartType={setChartType}
        filters={filters}
        onFilterChange={onFilterChange}
      />

      {/* ==========================================
          KPI CARDS
      ========================================== */}

      <div className="kpi-section">

        <div className="kpi-card timeline">

          <div className="kpi-title">

            END-TO-END STUDY TIMELINE

          </div>

          <div className="kpi-value">

            554 – 625

          </div>

        </div>

        <div className="kpi-card cost">

          <div className="kpi-title">

            TOTAL STUDY COST

          </div>

          <div className="kpi-value">

            $2.7M – $3.1M

          </div>

        </div>

      </div>

      {/* ==========================================
          TIMELINE
      ========================================== */}

      <div className="benchmark-panel full-width">

        <div className="benchmark-panel-body">

          {renderTimeline()}

        </div>

      </div>

      {/* ==========================================
          COST
      ========================================== */}

      <div className="benchmark-panel full-width">

        <div className="benchmark-panel-body">

          {renderCost()}

        </div>

      </div>

    </div>

  );

}

export default BenchmarkSummary;