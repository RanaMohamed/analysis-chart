import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Card } from "antd";

import { schoolDetailsSelector } from "@redux/schools/schoolsSelectors";

import "./Details.css";

function Details() {
  const schoolDetails = useSelector(schoolDetailsSelector);

  return (
    <div className="details-container">
      <Link to={"/"}>Back</Link>

      <Card title={schoolDetails[0].school} bordered={false}>
        <p>Country: {schoolDetails[0].country}</p>
        <p>Camp: {schoolDetails[0].camp}</p>
        <p>Month: {schoolDetails[0].month}</p>
        <p>
          Lessons:{" "}
          {schoolDetails.reduce((acc, record) => {
            return acc + record.lessons;
          }, 0)}
        </p>
      </Card>
    </div>
  );
}

export default Details;
