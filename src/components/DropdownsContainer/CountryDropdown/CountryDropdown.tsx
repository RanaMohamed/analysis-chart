import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "@components/common/Dropdown/Dropdown";

import { setSelectedCountry } from "@redux/countries/countriesActions";
import {
  countriesSelector,
  selectedCountrySelector,
} from "@redux/countries/countriesSelectors";

function CountryDropdown() {
  const dispatch = useDispatch();
  const countries = useSelector(countriesSelector);
  const selectedCountry = useSelector(selectedCountrySelector);
  const onCountrySelect = (country: string) => {
    dispatch(setSelectedCountry(country));
  };

  return (
    <Dropdown
      title={"Select Country"}
      data={countries}
      value={selectedCountry}
      onSelect={onCountrySelect}
    />
  );
}

export default CountryDropdown;
