import React from "react";
import { Line, Doughnut } from "react-chartjs-2"; // these are chart that will be used
// Some requirements to use Charts are below
// Start...
import {
  Chart as ChartJS,
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Legend,
} from "chart.js";
import { orangeColor, orangeColorLight, purpleColor, purpleColorLight } from "../constants/Color";
import { getLast7Days } from "../../libs/features";

ChartJS.register(
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  Legend
);
// End...

const lineChartOptions = {
  responsive: "true",
  plugins: {
    legend: {
      display: false,
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
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const labels = getLast7Days();

const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: purpleColorLight,
        borderColor: purpleColor,
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
    responsive: "true",
  plugins: {
    legend: {
      display: false,
    },
  },
  cutout: 120,
};

const DoughnutChart = ({ value = [], labels = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Total Chats vs Group Chats",
        backgroundColor: [purpleColorLight, orangeColorLight],
        hoverBackgroundColor: [purpleColor, orangeColor],
        borderColor: [purpleColor, orangeColor],
        offset: 30,
      },
    ],
  };
  return <Doughnut style={{zIndex: '10'}} data={data} options={doughnutChartOptions} />;
};

export { LineChart, DoughnutChart };
