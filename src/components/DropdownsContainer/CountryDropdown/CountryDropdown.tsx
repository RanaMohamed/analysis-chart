import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import Dropdown from "@components/common/Dropdown/Dropdown";

import { setSelectedCountry } from "@redux/countries/countriesActions";
import {
  countriesSelector,
  selectedCountrySelector,
} from "@redux/countries/countriesSelectors";

function CountryDropdown() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const countries = useSelector(countriesSelector);
  const selectedCountry = useSelector(selectedCountrySelector);
  const onCountrySelect = (country: string) => {
    dispatch(setSelectedCountry(country));
  };

  return (
    <Dropdown
      id="country"
      title={t("selectCountry")}
      data={countries}
      value={selectedCountry}
      onSelect={onCountrySelect}
    />
  );
}

export default CountryDropdown;
