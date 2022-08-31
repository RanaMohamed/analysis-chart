import React, { useEffect, useRef, useState } from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { getElementAtEvent, Line } from "react-chartjs-2";

import { colors } from "@constants/colors";
import "./Chart.css";
import htmlLegendPlugin from "./htmlLegendPlugin";

import {
  ChartSelectedElement,
  PointDefaultOptions,
} from "@appTypes/chartTypes";
import { useLocalization } from "@handlers/useLocalization";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

interface IProps {
  chartOptions: ChartOptions<"line">;
  pointOptions: PointDefaultOptions;

  datasets: { [key: string]: number[] };
  labels: string[];
  onClick: ({ selectedDataset, selectedLabel }: ChartSelectedElement) => void;
}

function Chart({
  chartOptions,
  pointOptions,
  datasets,
  onClick,
  labels,
}: IProps) {
  const chartRef = useRef<ChartJS<"line">>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: labels,
    datasets: [],
  });

  const { dir, lang, isRTL } = useLocalization();

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      setChartData((prev) => {
        return {
          ...prev,
          datasets: Object.entries(datasets).map(([datasetName, data], i) => {
            return {
              ...pointOptions,
              label: datasetName,
              data: data,
              pointHoverBackgroundColor: colors[i] + "66",
              borderColor: colors[i],
            };
          }),
        };
      });
    }
  }, [datasets]);

  const onChartClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (chartRef.current) {
      const element = getElementAtEvent(chartRef.current, e);

      if (element.length) {
        const selectedElement = chartRef.current.data.datasets.at(
          element[0].datasetIndex
        );

        onClick({
          selectedDataset: selectedElement?.label || "",
          selectedLabel: labels[element[0].index],
        });
      }
    }
  };

  return (
    <Line
      lang={lang}
      dir={dir}
      ref={chartRef}
      data={chartData}
      onClick={onChartClick}
      options={{
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          tooltip: {
            ...chartOptions.plugins?.tooltip,
            rtl: isRTL,
          },
        },
        scales: {
          ...chartOptions.scales,
          x: {
            ...chartOptions.scales?.x,
            reverse: isRTL ? true : false,
          },
          y: {
            ...chartOptions.scales?.y,
            position: isRTL ? "right" : "left",
          },
        },
      }}
      plugins={[htmlLegendPlugin]}
    />
  );
}

export default Chart;
