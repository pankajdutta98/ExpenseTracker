import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let barFill = "0%";
  if (props.maxVal > 0) {
    barFill = Math.round((props.value / props.maxVal) * 100) + "%";
  }
  return (
    <div className="ChartBar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style = {{ height: barFill }} ></div>
      </div>
      <div className="chart-bar__label">{props.value}</div>
    </div>
  );
};

export default ChartBar;
