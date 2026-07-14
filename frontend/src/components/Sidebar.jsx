import "./Sidebar.css";

import {
  FiSearch,
  FiRepeat,
  FiMenu,
  FiZap,
  FiDatabase,
} from "react-icons/fi";

import { GiMicroscope } from "react-icons/gi";

function Sidebar({
  collapsed,
  setCollapsed,
  activePage,
  setActivePage,
}) {
  return (
    <div
      className={`sidebar ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <div className="sidebar-top">
        <div className="header-row">
          <div className="logo-box">
            <div className="logo-icon">
              <GiMicroscope />
            </div>

            {!collapsed && (
              <div className="logo-title">
                CT Benchmarking
                <br />
                Intelligence
              </div>
            )}
          </div>

          <div
            className="sidebar-toggle"
            onClick={() => setCollapsed(!collapsed)}
          >
            <FiMenu />
          </div>
        </div>
      </div>

      <div className="menu-section">

        {/* Benchmark Summary */}
        <div
          className={`menu-item ${
            activePage === "benchmark"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActivePage("benchmark")
          }
        >
          <FiSearch className="menu-icon" />
          {!collapsed && "Benchmark Summary"}
        </div>

        {/* Study Comparison */}
        <div
          className={`menu-item ${
            activePage === "comparison"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActivePage("comparison")
          }
        >
          <FiRepeat className="menu-icon" />
          {!collapsed && "Study Comparison"}
        </div>

        {/* Planning Simulator */}
        <div
          className={`menu-item ${
            activePage === "simulator"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActivePage("simulator")
          }
        >
          <FiZap className="menu-icon" />
          {!collapsed && "Planning Simulator"}
        </div>

        {/* Meta Data */}
        <div
          className={`menu-item ${
            activePage === "metadata"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActivePage("metadata")
          }
        >
          <FiDatabase className="menu-icon" />
          {!collapsed && "Meta Data"}
        </div>

      </div>
    </div>
  );
}

export default Sidebar;