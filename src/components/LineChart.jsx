import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto"; // Import ChartJS from chart.js/auto
import "chartjs-plugin-zoom"; // Import the zoom plugin
import zoomPlugin from "chartjs-plugin-zoom";

function LineChart({
  array,
  selectedColumn,
  secondSelectedColumn,
  chartRef,
  xAxisTitle,
}) {
  const [chartData, setChartData] = useState(null);

  // Register the zoom plugin
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
      // Extract the values of the selected column
      const values1 = array
        .map((item) => parseFloat(item[selectedColumn]))
        .filter((value) => !isNaN(value));

      let values2 = [];

      if (array.length > 0 && selectedColumn && secondSelectedColumn) {
        values2 = array
          .map((item) => parseFloat(item[secondSelectedColumn]))
          .filter((value) => !isNaN(value));
      }

      // Create the chart data
      const labels = values1.map((_, index) => `${index + 1}`);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: selectedColumn,
            data: values1,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderWidth: 2,
            fill: false,
            pointStyle: "circle",
          },
          // Conditionally render the secondSelectedColumn block
          secondSelectedColumn && {
            label: secondSelectedColumn,
            data: values2,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            borderDash: [5, 5],
            borderWidth: 2,
            fill: false,
            pointStyle: "rect",
          },
        ].filter(Boolean), // Filter out falsy values (in case secondSelectedColumn is undefined)
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
        ticks: {
          font: {
            weight: "bold", // Set the x-axis label font to bold
          },
        },
        title: {
          display: true,
          text: xAxisTitle,
          font: {
            weight: "bold", // Set the title font to bold
          },
          ticks: {
            font: {
              weight: "bold", // Set the x-axis label font to bold
            },
          },
        },
        grid: {
          display: false,
        },
        border: { display: false },
      },
      y: {
        display: true,
        position: "left",
        // title: {
        //   display: true,
        //   text: "Value",
        // },
        border: { display: false },
        ticks: {
          display: true,
          font: {
            weight: "bold", // Set the title font to bold
          },
        },
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
      {chartData && <Line data={chartData} options={options} />}
    </div>
  );
}

export default LineChart;
