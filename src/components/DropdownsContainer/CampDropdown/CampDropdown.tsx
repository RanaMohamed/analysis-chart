import React from "react";
import Dropdown from "@components/common/Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  campsSelector,
  selectedCampSelector,
} from "@redux/camps/campsSelectors";
import { setSelectedCamp } from "@redux/camps/campsActions";

function CampDropdown() {
  const dispatch = useDispatch();

  const camps = useSelector(campsSelector);

  const selectedCamp = useSelector(selectedCampSelector);

  const onCampSelect = (camp: string) => {
    dispatch(setSelectedCamp(camp));
  };

  return (
    <Dropdown
      title={"Select Camp"}
      data={camps}
      value={selectedCamp}
      onSelect={onCampSelect}
    />
  );
}

export default CampDropdown;
