import { useState } from "react"
import { createRoot } from "react-dom/client";
import { AgCharts } from "ag-charts-react";
// import Donut from "./Donut";

const getData = () => {
    return [
        { asset: "Stocks", amount: 60000 },
        { asset: "Bonds", amount: 40000 },
        { asset: "Cash", amount: 7000 },
        { asset: "Real Estate", amount: 5000 },
        { asset: "Commodities", amount: 3000 },

    ];

}

const Donut = () => {
    const [options, setoptions] = useState({
        data: getData(),
        title: {
            text: "Donut chart",

        },
        series: [
            {
                type: "donut",
                calloutLabelKey: "asset",
                angleKey: "amount",
                innerRadiusRatio: 0.7,
            },
        ],
    })
return <AgCharts options={options} />
};
const root = createRoot(document.getElementById("root"));
root.render(<Donut />);
export default Donut