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
    <div
      style={{ display: "flex", justifyContent: "center", gap: "20px" }}
    ></div>
  );
};
