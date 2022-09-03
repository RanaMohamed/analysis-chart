import React from "react";
import { createRoot, Root } from "react-dom/client";
import { Chart } from "chart.js";

import LegendItem from "@components/common/LegendItem/LegendItem";

interface IArgs {
  mode?: "resize" | "reset" | "none" | "hide" | "show" | "normal" | "active";
}

interface HTMLPluginOptions {
  containerID?: string;
}

const roots: { [key: string]: Root } = {};

const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart: Chart<"line">, args: IArgs, options: HTMLPluginOptions) {
    if (!options.containerID) return;
    // Reuse the built-in legendItems generator
    if (!chart.options.plugins?.legend?.labels?.generateLabels) return;
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    const legendItems = items.map((item) => {
      const datasetIndex = item.datasetIndex || 0;

      const onClick = () => {
        chart.setDatasetVisibility(
          datasetIndex,
          !chart.isDatasetVisible(datasetIndex)
        );

        chart.update();
      };

      const color = item.hidden
        ? "#c3c3c3"
        : item.strokeStyle?.toString() || "#000000";

      const data = chart.data.datasets.at(datasetIndex)?.data as number[];
      const total = data?.reduce((acc: number, val: number) => {
        return acc + (val || 0);
      }, 0);

      return (
        <LegendItem
          key={`${item.datasetIndex}_${item.index}`}
          color={color}
          total={total}
          text={item.text}
          onClick={onClick}
        />
      );
    });

    let root;
    if (!roots[options.containerID]) {
      const container = document.getElementById(options.containerID);
      if (!container) return;

      root = createRoot(container);
      roots[options.containerID] = root;
    } else {
      root = roots[options.containerID];
    }
    root.render(legendItems);
  },
  afterDestroy(chart: Chart<"line">, args: IArgs, options: HTMLPluginOptions) {
    if (!options.containerID) return;
    if (roots[options.containerID]) {
      delete roots[options.containerID];
    }
  },
};

export default htmlLegendPlugin;
