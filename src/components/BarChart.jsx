import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import "chartjs-plugin-zoom"; // Import the zoom plugin
import zoomPlugin from "chartjs-plugin-zoom";

function BarChart({
  array,
  selectedColumn,
  secondSelectedColumn,
  xAxisTitle,
  chartRef,
}) {
  const [chartData, setChartData] = useState(null);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
  );

  useEffect(() => {
    if (array.length > 0 && selectedColumn) {
      const values1 = array
        .map((item) => parseFloat(item[selectedColumn]))
        .filter((value) => !isNaN(value));

      let values2 = [];

      if (array.length > 0 && selectedColumn && secondSelectedColumn) {
        values2 = array
          .map((item) => parseFloat(item[secondSelectedColumn]))
          .filter((value) => !isNaN(value));
      }

      const labels = values1.map((_, index) => `${index + 1}`);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: selectedColumn,
            data: values1,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          secondSelectedColumn && {
            label: secondSelectedColumn,
            data: values2,
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1,
          },
        ].filter(Boolean),
      });
    }
  }, [array, selectedColumn, secondSelectedColumn]);

  const chartContainerStyle = {
    width: "100%",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
  };

  const options = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: xAxisTitle,
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        position: "left",
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: false,
        text: "Value Chart",
      },
      legend: {
        display: true,
        position: "top",
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          mode: "x",
          speed: 100,
        },
        pan: {
          enabled: true,
          mode: "x",
          speed: 0.5,
        },
      },
    },
  };

  return (
    <div className="mt-5 bg-white" style={chartContainerStyle} ref={chartRef}>
      {chartData && <Bar data={chartData} options={options} />}
    </div>
  );
}

export default BarChart;
