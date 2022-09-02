import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { setSelectedSchool } from "@redux/schools/schoolsActions";
import {
  schoolsSelector,
  selectedSchoolSelector,
} from "@redux/schools/schoolsSelectors";
import Dropdown from "@components/common/Dropdown/Dropdown";

function SchoolDropdown() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const schools = useSelector(schoolsSelector);

  const selectedSchool = useSelector(selectedSchoolSelector);
  const onSchoolSelect = (school: string) => {
    dispatch(setSelectedSchool(school));
  };
  return (
    <Dropdown
      id="school"
      title={t("selectSchool")}
      data={schools}
      value={selectedSchool}
      onSelect={onSchoolSelect}
      showAll
    />
  );
}

export default SchoolDropdown;
