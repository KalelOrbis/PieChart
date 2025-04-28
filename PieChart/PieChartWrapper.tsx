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
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        {data.map((item, index) => (
          <div
            key={`${item.title.replace(" ", "").toLowerCase()}=${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                border: `3px solid ${item.color}`,
                marginRight: "0.5rem",
              }}
            ></div>
            <span style={{ color: "#78909C", fontSize: "1.5rem" }}>
              {item.value} {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
