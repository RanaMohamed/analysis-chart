import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedSchool } from "@redux/schools/schoolsActions";
import {
  schoolsSelector,
  selectedSchoolSelector,
} from "@redux/schools/schoolsSelectors";
import Dropdown from "@components/common/Dropdown/Dropdown";

function SchoolDropdown() {
  const dispatch = useDispatch();

  const schools = useSelector(schoolsSelector);

  const selectedSchool = useSelector(selectedSchoolSelector);
  const onSchoolSelect = (school: string) => {
    dispatch(setSelectedSchool(school));
  };
  return (
    <Dropdown
      title={"Select School"}
      data={schools}
      value={selectedSchool}
      onSelect={onSchoolSelect}
      showAll
    />
  );
}

export default SchoolDropdown;
