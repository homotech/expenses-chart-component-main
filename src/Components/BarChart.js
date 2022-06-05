import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return (
    <Bar
      data={chartData}
      options={{
        elements: {
          bar: { borderRadius: 7 },
        },

        plugins: {
          legend: {
            display: false,
            labels: { color: "f655ff" },
          },
          title: {
            display: false,
          },
        },

        scales: {
          x: {
            grid: {
              display: false,
            },
            title: {
              display: true,
            },
          },
          y: {
            display: false,
          },
        },
      }}
    />
  );
}

export default BarChart;
