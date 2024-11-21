import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";

const getData = () => {
  return [
    {
      quarter: "Q1'18",
      iphone: 200,
      mac: 16,
      ipad: 14,
      wearables: 12,
      services: 20,
    },
    {
      quarter: "Q2'18",
      iphone: 124,
      mac: 20,
      ipad: 14,
      wearables: 12,
      services: 30,
    },
    {
      quarter: "Q3'18",
      iphone: 112,
      mac: 20,
      ipad: 18,
      wearables: 14,
      services: 36,
    },
    {
      quarter: "Q4'18",
      iphone: 118,
      mac: 24,
      ipad: 14,
      wearables: 14,
      services: 36,
    },
   
  ];
};
const getPieChartData = () => {
  return [
    { asset: "Stocks", amount: 60000 },
    { asset: "Bonds", amount: 40000 },
  ];
};

const Bargraph = () => {
  const [options, setOptions] = useState({
    data: getData(),
    title: {
      text: "BAR GRAPH",
    },
    
    series: [
      {
        type: "bar",
        xKey: "quarter",
        yKey: "iphone",
        yName: "iPhone",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "mac",
        yName: "Mac",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "ipad",
        yName: "iPad",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "wearables",
        yName: "Wearables",
      },
      {
        type: "bar",
        xKey: "quarter",
        yKey: "services",
        yName: "Services",
      },
      
    ],
    
  });
   const [pieoptions] =useState({
    data:getPieChartData(),
    title:{
      text:"pie chart",
    },
    series:[
      {
        type: "pie",
        angleKey: "amount",
        legendItemKey: "asset",
      },

    ]
   })

  return(
  <div>
    <div style={{ height: "400px" }} ><AgCharts options={options} /></div>,
    <div style={{ height: "400px", marginTop: "20px" }}><AgCharts options={pieoptions} /></div>
  </div> )
};

const root = createRoot(document.getElementById("root"));
root.render(<Bargraph />);
export default Bargraph;
