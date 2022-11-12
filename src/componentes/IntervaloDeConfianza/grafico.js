import { Chart } from "react-google-charts";

export default function GraficoArea() {
    const data = [
        ["Year", "x", "no x"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
      ];
      const options = {
        title: "Area Normal",
        hAxis: { title: "x", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "85%", height: "70%" },
      };
    return(
        <></>
    )
}