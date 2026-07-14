import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";

import BenchmarkSummary from "./pages/BenchmarkSummary";
import StudyComparison from "./pages/StudyComparison/StudyComparison";
import PlanningSimulator from "./pages/PlanningSimulator/PlanningSimulator";
import MetaData from "./pages/MetaData/MetaData";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("benchmark");

  return (
    <div className="app">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main
        className={`main-content ${
          collapsed ? "expanded" : ""
        }`}
      >
        {/* Benchmark Summary */}
        {activePage === "benchmark" && (
          <BenchmarkSummary />
        )}

        {/* Study Comparison */}
        {activePage === "comparison" && (
          <StudyComparison />
        )}

        {/* Planning Simulator */}
        {activePage === "simulator" && (
          <PlanningSimulator />
        )}

        {/* Meta Data */}
        {activePage === "metadata" && (
          <MetaData />
        )}
      </main>
    </div>
  );
}

export default App;