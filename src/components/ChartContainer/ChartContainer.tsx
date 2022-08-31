import React from "react";
import {
  ChartSelectedElement,
  PointDefaultOptions,
} from "@appTypes/chartTypes";
import Chart from "@components/common/Chart/Chart";
import Legend from "@components/ChartContainer/Legend/Legend";
import { setDetailsOptions } from "@redux/schools/schoolsActions";
import {
  chartDataSelector,
  legendDetailsSelector,
} from "@redux/schools/schoolsSelectors";
import { ChartOptions } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import months from "src/constants/months";

import config from "./chart.config.json";

import "./ChartContainer.css";

function ChartContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schools = useSelector(chartDataSelector);
  const legendDetails = useSelector(legendDetailsSelector);

  const onClick = (data: ChartSelectedElement) => {
    dispatch(
      setDetailsOptions({
        selectedSchool: data.selectedDataset,
        selectedMonth: data.selectedLabel,
      })
    );

    navigate(`details`);
  };

  if (!legendDetails.total) return <h1>Please select country & camp</h1>;

  return (
    <div className="chart-container">
      <div className="chart-canvas">
        <Chart
          chartOptions={config.chartOptions as ChartOptions<"line">}
          pointOptions={config.pointOptions as PointDefaultOptions}
          onClick={onClick}
          datasets={schools}
          labels={months}
        />
      </div>

      <Legend
        legendDetails={legendDetails}
        containerId={config.chartOptions.plugins.htmlLegend.containerID}
        containerClassName={"chart-legend"}
        showSummary={Object.values(schools).length > 1}
      />
    </div>
  );
}

export default ChartContainer;
