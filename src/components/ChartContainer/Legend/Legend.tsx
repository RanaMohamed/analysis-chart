import React from "react";
import { LegendSummary } from "@appTypes/schoolTypes";

import "./Legend.css";

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
    <div className={`${containerClassName}`} id={containerId}>
      <p className="legend-item-text legend-title">
        {showSummary && (
          <>
            <span className="legend-item-total">{legendDetails.total}</span>
            <span className="legend-item-lessons"> lessons</span>
            <br />
            in {legendDetails.selectedCamp}
          </>
        )}
      </p>
    </div>
  );
}

export default Legend;
