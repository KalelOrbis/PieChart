import * as React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { IColoredData, IData, IPieChartWrapperProps } from "./types";

export const PieChartWrapper = ({
  data: dataTupel,
  colors,
}: IPieChartWrapperProps) => {
  const data: IColoredData[] = dataTupel.map((item, index) => ({
    ...item,
    color: colors[index % colors.length], // Cycle through colors
  }));

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      <PieChart
        style={{ width: "40%" }}
        animate={true}
        animationDuration={500}
        labelPosition={50}
        data={data}
        totalValue={25}
      />
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};
