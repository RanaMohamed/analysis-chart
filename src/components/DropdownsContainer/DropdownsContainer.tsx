import React from "react";
import CampDropdown from "./CampDropdown/CampDropdown";
import CountryDropdown from "./CountryDropdown/CountryDropdown";
import SchoolDropdown from "./SchoolDropdown/SchoolDropdown";

import "./DropdownsContainer.css";

function DropdownsContainer() {
  return (
    <div className="dropdowns-container">
      <CountryDropdown />

      <CampDropdown />

      <SchoolDropdown />
    </div>
  );
}

export default DropdownsContainer;
