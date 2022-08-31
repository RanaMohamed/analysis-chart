import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Descriptions, PageHeader } from "antd";

import { schoolDetailsSelector } from "@redux/schools/schoolsSelectors";

import "./Details.css";

function Details() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const schoolDetails = useSelector(schoolDetailsSelector);

  const total = schoolDetails.reduce((acc, record) => {
    return acc + record.lessons;
  }, 0);

  return (
    <div className="details-container">
      {!schoolDetails.length ? (
        <>
          <Link to={"/"}>{t("back")}</Link>
          <h1>{t("noSelectedData")}</h1>
        </>
      ) : (
        <PageHeader
          ghost={false}
          onBack={() => navigate("/")}
          title={schoolDetails[0].school}
        >
          <Descriptions size="small" column={2}>
            <Descriptions.Item label={t("country")}>
              {schoolDetails[0].country}
            </Descriptions.Item>
            <Descriptions.Item label={t("camp")}>
              {schoolDetails[0].camp}
            </Descriptions.Item>
            <Descriptions.Item label={t("month")}>
              {schoolDetails[0].month}
            </Descriptions.Item>
            <Descriptions.Item label={t("lessons")}>{total}</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      )}
    </div>
  );
}

export default Details;
