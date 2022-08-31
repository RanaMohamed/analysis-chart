import { RootState } from "..";

export const countriesLoadedSelector = (state: RootState) =>
  state.countries.loaded;
export const countriesSelector = (state: RootState) =>
  state.countries.countries || [];
export const selectedCountrySelector = (state: RootState) =>
  state.countries.selectedCountry;
