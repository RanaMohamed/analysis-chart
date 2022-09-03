import React from "react";
import { useTranslation } from "react-i18next";

import "./LegendItem.css";

interface IProps {
  withPointStyle?: boolean;
  color: string;
  total: number;
  text: string;
  onClick: () => void;
}

function LegendItem({
  withPointStyle = true,
  color,
  total,
  text,
  onClick,
}: IProps) {
  const { t } = useTranslation();
  return (
    <div className="legend-item" onClick={onClick}>
      {withPointStyle && (
        <span
          className="legend-item-icon"
          style={{ backgroundColor: color, borderColor: color }}
        ></span>
      )}
      <p className="legend-item-text" style={{ color: color }}>
        <span className="legend-item-total">{total}</span>{" "}
        <span className="legend-item-lessons">{t("lessons")}</span>
        {"\n"}
        {t("in")} {text}
      </p>
    </div>
  );
}

export default LegendItem;
