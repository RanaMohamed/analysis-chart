import React from "react";
import { LegendSummary } from "@appTypes/schoolTypes";

import "./Legend.css";
import LegendItem from "@components/common/LegendItem/LegendItem";

interface IProps {
  legendDetails: LegendSummary;
  containerId: string;
  containerClassName: string;
  showSummary: boolean;
}

function Legend({
  legendDetails,
  containerId,
  containerClassName,
  showSummary,
}: IProps) {
  return (
    <div className={`${containerClassName}`}>
      <div className="legend__title">
        {showSummary && (
          <LegendItem
            withPointStyle={false}
            color={"inherit"}
            total={legendDetails.total}
            text={legendDetails.selectedCamp}
            onClick={() => {
              return;
            }}
          ></LegendItem>
        )}
      </div>
      <div id={containerId}></div>
    </div>
  );
}

export default Legend;
