import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Dropdown from "@components/common/Dropdown/Dropdown";
import {
  campsSelector,
  selectedCampSelector,
} from "@redux/camps/campsSelectors";
import { setSelectedCamp } from "@redux/camps/campsActions";
function CampDropdown() {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const camps = useSelector(campsSelector);

  const selectedCamp = useSelector(selectedCampSelector);

  const onCampSelect = (camp: string) => {
    dispatch(setSelectedCamp(camp));
  };

  return (
    <Dropdown
      id="camp"
      title={t("selectCamp")}
      data={camps}
      value={selectedCamp}
      onSelect={onCampSelect}
    />
  );
}

export default CampDropdown;
