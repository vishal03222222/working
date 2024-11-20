import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";

const getData = () => {
  return [
    { asset: "Stocks", amount: 60000 },
    { asset: "Bonds", amount: 40000 },
    { asset: "Cash", amount: 7000 },
    { asset: "Real Estate", amount: 5000 },
    { asset: "Commodities", amount: 3000 },
  ];
};

const Bargraph = () => {
  const [options, setOptions] = useState({
    data: getData(),
    title: {
      text: "Portfolio Composition",
    },
    axes: [
      {
        type: "category",
        position: "bottom",
        label: {
          rotation: 45, // Optional: Rotate labels for better readability
        },
      },
      {
        type: "number",
        position: "left",
      },
    ],
    series: [
      {
        type: "bar",
        xKey: "asset",
        yKey: "amount",
        label: {
          formatter: ({ value }) => `$${value}`, // Optional: Format the labels as currency
        },
      },
    ],
  });

  return <AgCharts options={options} />;
};

const root = createRoot(document.getElementById("root"));
root.render(<Bargraph />);
export default Bargraph;
