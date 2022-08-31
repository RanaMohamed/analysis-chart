import React from "react";

import "./Main.css";
import DropdownsContainer from "@components/DropdownsContainer/DropdownsContainer";
import ChartContainer from "@components/ChartContainer/ChartContainer";

function Main() {
  return (
    <div>
      <h1 className="title">Analysis Chart</h1>
      <h2 className="title">Number of lessons</h2>

      <DropdownsContainer />
      <ChartContainer />
    </div>
  );
}

export default Main;
