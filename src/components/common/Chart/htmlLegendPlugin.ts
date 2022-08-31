import { Chart } from "chart.js";

const getOrCreateLegendList = (id: string) => {
  const legendContainer = document.getElementById(id);
  if (legendContainer) {
    let listContainer = legendContainer.querySelector("ul");

    if (!listContainer) {
      listContainer = document.createElement("ul");
      listContainer.classList.add("legend-list");

      legendContainer.appendChild(listContainer);
    }

    return listContainer;
  }
};

interface IArgs {
  mode?: "resize" | "reset" | "none" | "hide" | "show" | "normal" | "active";
}

interface HTMLPluginOptions {
  containerID?: string;
}

const htmlLegendPlugin = {
  id: "htmlLegend",
  afterUpdate(chart: Chart<"line">, args: IArgs, options: HTMLPluginOptions) {
    const ul = getOrCreateLegendList(options?.containerID || "");

    if (!ul) return;

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    if (!chart.options.plugins?.legend?.labels?.generateLabels) return;
    const items = chart.options.plugins.legend.labels.generateLabels(chart);

    items.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("legend-item");

      const datasetIndex = item.datasetIndex || 0;

      li.onclick = () => {
        chart.setDatasetVisibility(
          datasetIndex,
          !chart.isDatasetVisible(datasetIndex)
        );

        chart.update();
      };

      const color = item.hidden
        ? "#c3c3c3"
        : item.strokeStyle?.toString() || "#000000";

      // Color box
      const boxSpan = document.createElement("span");
      boxSpan.classList.add("legend-item-icon");
      boxSpan.style.backgroundColor = color;
      boxSpan.style.borderColor = color;

      // Text
      const textContainer = document.createElement("p");
      textContainer.classList.add("legend-item-text");
      textContainer.style.color = color;

      const data = chart.data.datasets.at(datasetIndex)?.data as number[];
      const total = data?.reduce((acc: number, val: number) => {
        return acc + (val || 0);
      }, 0);

      const totalSpan = document.createElement("span");
      totalSpan.classList.add("legend-item-total");
      totalSpan.innerText = total.toString();

      const lessonSpan = document.createElement("span");
      lessonSpan.classList.add("legend-item-lessons");
      lessonSpan.innerText = " lessons";

      const text = document.createTextNode(`\n in ${item.text}`);

      textContainer.appendChild(totalSpan);
      textContainer.appendChild(lessonSpan);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  },
};

export default htmlLegendPlugin;
