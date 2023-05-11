import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  return (
    <div className="chart">
      <ChartBar
          value={props.value}
          maxVal={props.maxVal}
        />
    </div>
  );
};

export default Chart;
