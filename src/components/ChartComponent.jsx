import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import ScatterChart from "./ScatterChart";

function ChartComponent({
  array,
  selectedColumn,
  secondSelectedColumn,
  chartRef,
  xAxisTitle,
  selectedChartType,
}) {
  let chart = null;

  if (selectedChartType === "line") {
    chart = (
      <LineChart
        array={array}
        selectedColumn={selectedColumn}
        secondSelectedColumn={secondSelectedColumn}
        chartRef={chartRef}
        xAxisTitle={xAxisTitle}
      />
    );
  } else if (selectedChartType === "bar") {
    chart = (
      <BarChart
        array={array}
        selectedColumn={selectedColumn}
        secondSelectedColumn={secondSelectedColumn}
        chartRef={chartRef}
        xAxisTitle={xAxisTitle}
      />
    );
  } else if (selectedChartType === "scatter") {
    chart = (
      <ScatterChart
        array={array}
        selectedColumn={selectedColumn}
        secondSelectedColumn={secondSelectedColumn}
        chartRef={chartRef}
        xAxisTitle={xAxisTitle}
      />
    );
  }

  return <div>{chart}</div>;
}

export default ChartComponent;
