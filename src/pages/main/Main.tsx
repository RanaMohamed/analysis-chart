import React from "react";

import { useTranslation } from "react-i18next";

import "./Main.css";
import DropdownsContainer from "@components/DropdownsContainer/DropdownsContainer";
import ChartContainer from "@components/ChartContainer/ChartContainer";

function Main() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="title">{t("analysisChart")}</h1>
      <h2 className="title">{t("noOfLessons")}</h2>

      <DropdownsContainer />
      <ChartContainer />
    </div>
  );
}

export default Main;
