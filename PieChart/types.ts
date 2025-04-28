export interface IData {
  title: string;
  value: number;
}

export interface IColoredData extends IData {
  color: string;
}

export interface IPieChartWrapperProps {
  data: IData[];
  colors: string[];
}
